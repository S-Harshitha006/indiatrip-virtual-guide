import { useEffect, useRef } from "react";
import { Play, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VRViewerProps {
  panoramaUrl: string;
  placeName: string;
}

const VRViewer = ({ panoramaUrl, placeName }: VRViewerProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const isDragging = useRef(false);
  const lastX = useRef(0);
  const yaw = useRef(0);
  const pitch = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    // Load panoramic image
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      imageRef.current = img;
      drawPanorama();
    };
    img.src = panoramaUrl;

    const drawPanorama = () => {
      if (!imageRef.current || !ctx) return;
      
      // Simple panoramic viewer - display image with horizontal offset based on yaw
      const imgWidth = imageRef.current.width;
      const imgHeight = imageRef.current.height;
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      
      // Calculate offset based on yaw rotation
      const offsetX = (yaw.current / (2 * Math.PI)) * imgWidth;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      
      // Draw panoramic image with offset
      ctx.drawImage(
        imageRef.current,
        offsetX, 0, canvasWidth, imgHeight,
        0, 0, canvasWidth, canvasHeight
      );
      
      // Draw wrapped portion if needed
      if (offsetX + canvasWidth > imgWidth) {
        const wrapWidth = offsetX + canvasWidth - imgWidth;
        ctx.drawImage(
          imageRef.current,
          0, 0, wrapWidth, imgHeight,
          canvasWidth - wrapWidth, 0, wrapWidth, canvasHeight
        );
      }
    };

    // Mouse event handlers
    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      lastX.current = e.clientX;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      
      const deltaX = e.clientX - lastX.current;
      yaw.current += deltaX * 0.01;
      lastX.current = e.clientX;
      
      drawPanorama();
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    // Touch event handlers for mobile
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging.current = true;
        lastX.current = e.touches[0].clientX;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging.current || e.touches.length !== 1) return;
      
      const deltaX = e.touches[0].clientX - lastX.current;
      yaw.current += deltaX * 0.01;
      lastX.current = e.touches[0].clientX;
      
      drawPanorama();
      e.preventDefault();
    };

    const handleTouchEnd = () => {
      isDragging.current = false;
    };

    // Add event listeners
    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('touchstart', handleTouchStart);
    canvas.addEventListener('touchmove', handleTouchMove);
    canvas.addEventListener('touchend', handleTouchEnd);

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      drawPanorama();
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [panoramaUrl]);

  const resetView = () => {
    yaw.current = 0;
    pitch.current = 0;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (canvas && ctx && imageRef.current) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(imageRef.current, 0, 0, canvas.width, canvas.height);
    }
  };

  return (
    <div className="w-full h-full relative">
      <canvas
        ref={canvasRef}
        className="w-full h-full rounded-lg cursor-grab active:cursor-grabbing bg-muted"
        style={{ minHeight: '350px' }}
      />
      <div className="absolute top-2 right-2 flex gap-2">
        <Button
          size="sm"
          variant="secondary"
          onClick={resetView}
          className="bg-background/80 backdrop-blur-sm"
        >
          <RotateCcw className="h-3 w-3" />
        </Button>
      </div>
      <div className="absolute bottom-2 left-2 bg-background/80 backdrop-blur-sm rounded px-2 py-1 text-xs text-muted-foreground">
        Drag to explore • VR Mode
      </div>
    </div>
  );
};

export default VRViewer;
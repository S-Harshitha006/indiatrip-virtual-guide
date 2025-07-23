
import { useEffect, useRef, useState } from "react";
import { RotateCcw, AlertCircle } from "lucide-react";
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
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    setIsLoading(true);
    setHasError(false);

    console.log('Loading VR panorama:', panoramaUrl);

    // Load panoramic image
    const img = new Image();
    img.crossOrigin = "anonymous";
    
    img.onload = () => {
      console.log('VR image loaded successfully');
      imageRef.current = img;
      setIsLoading(false);
      drawPanorama();
    };

    img.onerror = (error) => {
      console.error('Failed to load VR image:', error);
      setHasError(true);
      setIsLoading(false);
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
      canvas.style.cursor = 'grabbing';
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
      canvas.style.cursor = 'grab';
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
      if (imageRef.current) {
        drawPanorama();
      }
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
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      ctx.drawImage(imageRef.current, 0, 0, canvasWidth, canvasHeight);
    }
  };

  if (hasError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-muted rounded-lg" style={{ minHeight: '350px' }}>
        <div className="text-center">
          <AlertCircle className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
          <p className="text-sm text-muted-foreground">Failed to load VR view</p>
          <p className="text-xs text-muted-foreground mt-1">Using sample panorama instead</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted rounded-lg z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
            <p className="text-sm text-muted-foreground">Loading VR view...</p>
          </div>
        </div>
      )}
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

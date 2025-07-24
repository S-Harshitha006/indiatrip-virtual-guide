import { useEffect, useRef, useState } from "react";
import { RotateCcw, AlertCircle, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EnhancedVRViewerProps {
  panoramaUrl: string;
  placeName: string;
}

const EnhancedVRViewer = ({ panoramaUrl, placeName }: EnhancedVRViewerProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const isDragging = useRef(false);
  const lastX = useRef(0);
  const yaw = useRef(0);
  const pitch = useRef(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [vrSupported, setVrSupported] = useState(false);
  const [inVR, setInVR] = useState(false);

  // Check WebXR support
  useEffect(() => {
    if ('xr' in navigator) {
      navigator.xr?.isSessionSupported('immersive-vr').then((supported) => {
        setVrSupported(supported);
      }).catch(() => {
        setVrSupported(false);
      });
    }
  }, []);

  // Enter VR mode
  const enterVR = async () => {
    if (!vrSupported || !navigator.xr) return;
    
    try {
      const session = await navigator.xr.requestSession('immersive-vr');
      setInVR(true);
      
      session.addEventListener('end', () => {
        setInVR(false);
      });
      
      // Basic VR session setup would go here
      // For now, we'll just indicate VR mode is active
      
    } catch (error) {
      console.error('Failed to enter VR:', error);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    setIsLoading(true);
    setHasError(false);

    // Load panoramic image
    const img = new Image();
    img.crossOrigin = "anonymous";
    
    img.onload = () => {
      imageRef.current = img;
      setIsLoading(false);
      drawPanorama();
    };

    img.onerror = () => {
      setHasError(true);
      setIsLoading(false);
    };

    img.src = panoramaUrl;

    const drawPanorama = () => {
      if (!imageRef.current || !ctx) return;
      
      const imgWidth = imageRef.current.width;
      const imgHeight = imageRef.current.height;
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      
      // Calculate offset based on yaw rotation with smooth wrapping
      const offsetX = ((yaw.current % (2 * Math.PI)) / (2 * Math.PI)) * imgWidth;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      
      // Draw panoramic image with offset
      const sourceWidth = Math.min(canvasWidth, imgWidth - offsetX);
      const sourceHeight = imgHeight;
      
      ctx.drawImage(
        imageRef.current,
        offsetX, 0, sourceWidth, sourceHeight,
        0, 0, sourceWidth, canvasHeight
      );
      
      // Draw wrapped portion if needed
      if (offsetX + canvasWidth > imgWidth) {
        const wrapWidth = offsetX + canvasWidth - imgWidth;
        ctx.drawImage(
          imageRef.current,
          0, 0, wrapWidth, imgHeight,
          sourceWidth, 0, wrapWidth, canvasHeight
        );
      }
    };

    // Enhanced mouse/touch controls
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
          <p className="text-sm text-muted-foreground">Failed to load VR panorama</p>
          <p className="text-xs text-muted-foreground mt-1">Please try again</p>
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
            <p className="text-sm text-muted-foreground">Loading VR panorama...</p>
          </div>
        </div>
      )}
      
      <canvas
        ref={canvasRef}
        className="w-full h-full rounded-lg cursor-grab active:cursor-grabbing bg-muted"
        style={{ minHeight: '350px' }}
      />
      
      <div className="absolute top-2 right-2 flex gap-2">
        {vrSupported && (
          <Button
            size="sm"
            variant={inVR ? "default" : "secondary"}
            onClick={enterVR}
            className="bg-background/80 backdrop-blur-sm"
          >
            <Eye className="h-3 w-3 mr-1" />
            {inVR ? "Exit VR" : "Enter VR"}
          </Button>
        )}
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
        {inVR ? "VR Mode Active" : "Drag to explore"} • {vrSupported ? "VR Ready" : "VR Not Available"}
      </div>
    </div>
  );
};

export default EnhancedVRViewer;
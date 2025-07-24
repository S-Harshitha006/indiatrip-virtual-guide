import { Canvas } from '@react-three/fiber';
import { VRButton, XR, createXRStore } from '@react-three/xr';
import { Sphere, OrbitControls } from '@react-three/drei';
import { Suspense, useState, useMemo } from 'react';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import { AlertCircle } from 'lucide-react';

interface WebXRViewerProps {
  panoramaUrl: string;
  placeName: string;
}

const PanoramaScene = ({ panoramaUrl }: { panoramaUrl: string }) => {
  const texture = useLoader(TextureLoader, panoramaUrl);
  
  return (
    <>
      {/* Panoramic sphere - user is inside looking out */}
      <Sphere args={[500, 60, 40]} scale={[-1, 1, 1]}>
        <meshBasicMaterial map={texture} />
      </Sphere>
      
      {/* Ambient light for better visibility */}
      <ambientLight intensity={1} />
    </>
  );
};

const WebXRViewer = ({ panoramaUrl, placeName }: WebXRViewerProps) => {
  const [hasError, setHasError] = useState(false);
  
  // Create XR store for VR session management
  const store = useMemo(() => createXRStore(), []);

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
      {/* VR Button - This will appear when user has VR headset */}
      <div className="absolute top-2 left-2 z-10">
        <VRButton store={store} />
      </div>
      
      <div className="absolute bottom-2 left-2 bg-background/80 backdrop-blur-sm rounded px-2 py-1 text-xs text-muted-foreground z-10">
        {placeName} • VR Ready • Click VR button with headset connected
      </div>
      
      <Canvas
        style={{ width: '100%', height: '350px' }}
        camera={{ position: [0, 0, 0.1], fov: 75 }}
      >
        <XR store={store}>
          <Suspense fallback={null}>
            <PanoramaScene panoramaUrl={panoramaUrl} />
          </Suspense>
          
          {/* Non-VR controls for regular viewing */}
          <OrbitControls 
            enablePan={false}
            enableZoom={false}
            rotateSpeed={-0.5}
          />
        </XR>
      </Canvas>
    </div>
  );
};

export default WebXRViewer;
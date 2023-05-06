import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';



const Computers = ({ isMobile }) => {
  const { scene: computerScene } = useGLTF('../desktop_pc/scene.gltf');


  return (
    <mesh>
      <hemisphereLight intensity={0.15}
      groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
      position={[-20, 50, 10]} 
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}
      />
      <primitive
      object={computerScene}
      scale={isMobile ? 0.7 : 0.75}
      position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
      rotation={[-0.01, -0.2, -0.1]}
     />
    </mesh>
  )
}
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Create a media query for max-width: 500
    const mediaQuery = window.matchMedia('(max-width: 500px)');
  
    // Set the initial value of isMobile based on the media query match
    setIsMobile(mediaQuery.matches);
  
    // Define a callback function to handle changes in the media query
    const handleMediaQueryChange = (event) => {
      // Update the value of isMobile based on the new match status
      setIsMobile(event.matches);
    }
  
    // Add an event listener to the media query change event
    mediaQuery.addEventListener('change', handleMediaQueryChange);
  
    // Clean up the event listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    // position of camera 
    <Canvas
    frameloop="demand"
    shadows
    camera={{ position: [20, 3, 5], fov: 25 }}
    gl={{ preserveDrawingBuffer: true }}
    >
      {/* allows for 3D to only rotate */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default Computers

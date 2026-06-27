import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Float } from "@react-three/drei";
import CanvasLoader from "../Loader";

const ComputerModel = ({ isMobile }) => {
  const { scene } = useGLTF("./desktop_pc/scene.gltf");
  const modelRef = useRef();

  // Gentle continuous auto-rotation like the Earth
  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <group ref={modelRef}>
      {/* Base ambient light */}
      <hemisphereLight intensity={0.6} groundColor="#050816" skyColor="#915EFF" />

      {/* Key light (front-right) */}
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />

      {/* Purple rim light */}
      <pointLight position={[-4, 3, 2]} intensity={1.2} color="#915EFF" />

      {/* Cyan fill light */}
      <pointLight position={[0, 2, -4]} intensity={0.6} color="#00cea8" />

      {/* Animated floating model */}
      <Float
        speed={1.5}
        rotationIntensity={0.1}
        floatIntensity={0.4}
      >
        <primitive
          object={scene}
          scale={isMobile ? 0.45 : 0.65}
          position={isMobile ? [0, -1.0, -1.0] : [0, -2.4, -1.6]}
          rotation={[-0.01, -0.2, -0.1]}
        />
      </Float>
    </group>
  );
};

const MemoizedComputerModel = React.memo(ComputerModel);

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    const handleChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    setIsMobile(mediaQuery.matches);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [15, 3, 6], fov: 25 }}
      gl={{ preserveDrawingBuffer: true, alpha: true }}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        inset: 0,
        background: "transparent",
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate={false}
        />
        <MemoizedComputerModel isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;

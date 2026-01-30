import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader";
import CanvasLoader from "../Loader";

const ComputerModel = ({ isMobile }) => {
  const { scene } = useGLTF(
    "/Portfolio/desktop_pc/scene.gltf",
    undefined,
    (loader) => {
      const dracoLoader = new DRACOLoader();
      loader.setDRACOLoader(dracoLoader);
    }
  );

  return (
    <mesh>
      {/* Base ambient light */}
      <hemisphereLight
        intensity={0.6}
        groundColor="#050816"
        skyColor="#915EFF"
      />

      {/* Key light (front-right) */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.2}
        color="#ffffff"
      />

      {/* Purple rim light */}
      <pointLight
        position={[-4, 3, 2]}
        intensity={1.2}
        color="#915EFF"
      />

      {/* Soft fill light */}
      <pointLight
        position={[0, 2, -4]}
        intensity={0.6}
        color="#00cea8"
      />

      <primitive
        object={scene}
        scale={isMobile ? 0.55 : 0.65}
        position={isMobile ? [0, -1.2, -1.2] : [0, -2.4, -1.6]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
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
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [15, 3, 6], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        inset: 0,
      }}
      onCreated={(state) => {
        state.gl.setClearColor("#050816");
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <MemoizedComputerModel isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const FloatingShape = ({ position, color, speed, scale, shape }) => {
  const mesh = useRef();
  const initialPos = useRef({
    x: position[0],
    y: position[1],
    z: position[2],
  });

  useFrame((state) => {
    const t = state.clock.elapsedTime * speed;
    mesh.current.rotation.x = t * 0.4;
    mesh.current.rotation.y = t * 0.6;
    mesh.current.position.y =
      initialPos.current.y + Math.sin(t) * 0.3;
    mesh.current.position.x =
      initialPos.current.x + Math.cos(t * 0.5) * 0.15;
  });

  const geometry = useMemo(() => {
    switch (shape) {
      case "icosahedron":
        return <icosahedronGeometry args={[1, 0]} />;
      case "torus":
        return <torusGeometry args={[0.7, 0.3, 8, 16]} />;
      case "octahedron":
        return <octahedronGeometry args={[1, 0]} />;
      default:
        return <boxGeometry args={[1, 1, 1]} />;
    }
  }, [shape]);

  return (
    <mesh ref={mesh} position={position} scale={scale}>
      {geometry}
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.25}
        emissive={color}
        emissiveIntensity={0.4}
      />
    </mesh>
  );
};

const FloatingCubesCanvas = () => {
  const shapes = [
    { position: [-3.5, 1.5, -2], color: "#915EFF", speed: 0.5, scale: 0.9, shape: "icosahedron" },
    { position: [3.5, -1, -3], color: "#00cea8", speed: 0.35, scale: 1.1, shape: "torus" },
    { position: [-2, -2, -1], color: "#ff6b6b", speed: 0.6, scale: 0.7, shape: "octahedron" },
    { position: [2.5, 2.5, -2], color: "#4FC3F7", speed: 0.4, scale: 0.8, shape: "icosahedron" },
    { position: [0, -3, -4], color: "#915EFF", speed: 0.3, scale: 1.3, shape: "torus" },
    { position: [-4, -0.5, -3], color: "#00cea8", speed: 0.55, scale: 0.6, shape: "octahedron" },
  ];

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#915EFF" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00cea8" />
        {shapes.map((props, i) => (
          <FloatingShape key={i} {...props} />
        ))}
      </Canvas>
    </div>
  );
};

export default FloatingCubesCanvas;

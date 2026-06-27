import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const StarLayer = ({ count, radius, color, speed, size }) => {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(count * 3), { radius });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta * speed * 0.7;
    ref.current.rotation.y -= delta * speed;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color={color}
          size={size}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div
    style={{
      width: "100%",
      height: "100vh",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 0,
      pointerEvents: "none",
    }}
  >
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        {/* Far layer — small white stars, slow */}
        <StarLayer count={800} radius={1.4} color="#ffffff" speed={0.04} size={0.0015} />
        {/* Mid layer — pink stars */}
        <StarLayer count={500} radius={1.1} color="#f272c8" speed={0.07} size={0.002} />
        {/* Near layer — purple/cyan, fast */}
        <StarLayer count={300} radius={0.8} color="#915EFF" speed={0.12} size={0.003} />
        {/* Accent — cyan sparkles */}
        <StarLayer count={200} radius={0.9} color="#00cea8" speed={0.09} size={0.0025} />
      </Suspense>
      <Preload all />
    </Canvas>
  </div>
);

export default StarsCanvas;

"use client";
import { PointMaterial, Points, Preload } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import classNames from "classnames";
import { Suspense, useRef } from "react";

function CanvasStars({ className }: { className?: string }) {
  const Stars = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const starsRef = useRef<any>(null);

    const generateStarPositions = () => {
      const positions = new Float32Array(5000 * 3); // Three components (x, y, z) per star

      for (let i = 0; i < positions.length; i++) {
        positions[i] = (Math.random() - 0.5) * 2.4; // Adjust the range as needed
      }

      return positions;
    };

    const sphere = generateStarPositions();

    useFrame((_, delta) => {
      if (starsRef.current) {
        starsRef.current.rotation.x -= delta / 10;
        starsRef.current.rotation.y -= delta / 15;
      }
    });

    return (
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points frustumCulled positions={sphere} ref={starsRef} stride={3}>
          <PointMaterial
            transparent
            color={"#fbff00"}
            depthWrite={false}
            size={0.004}
            sizeAttenuation={true}
          />
        </Points>
      </group>
    );
  };

  return (
    <div className={classNames(className)}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={"null"}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}

export default CanvasStars;

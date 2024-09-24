"use client";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import classNames from "classnames";
import { useRef, Suspense } from "react";
import { Points as ThreePoints } from "three";

function CanvasStars() {
  const Stars = () => {
    const starsRef = useRef<ThreePoints>(null);

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
            color={"#fbff00"}
            depthWrite={false}
            size={0.004}
            sizeAttenuation={true}
            transparent
          />
        </Points>
      </group>
    );
  };

  return (
    <div
      className={classNames(
        "w-screen absolute z-[-1]",
        "h-mobile md:h-[105vh] lg:h-screen"
      )}
    >
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

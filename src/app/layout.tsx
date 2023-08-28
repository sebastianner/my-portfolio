"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const inter = Inter({ subsets: ["latin"] });

const Stars = () => {
  const ref: any = useRef();
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

  useFrame((_, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color={"#fbff00"}
          size={0.004}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full h-auto absolute inset-0">
          <Canvas camera={{ position: [0, 0, 1] }}>
            <Suspense fallback={"null"}>
              <Stars />
            </Suspense>
            <Preload all />
          </Canvas>
        </div>
      </body>
    </html>
  );
}

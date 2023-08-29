"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const Poppins_Font = Poppins({
  weight: ["100", "300", "600", "500", "700", "900"],
  style: "normal",
  subsets: ["latin"],
});

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
      <body className={`${inter.className} ${Poppins_Font.className}`}>
        <div className="relative z-0">
          <div className="absolute z-1">{children}</div>
          <div className="w-screen h-screen absolute z-[-1]">
            <Canvas camera={{ position: [0, 0, 1] }}>
              <Suspense fallback={"null"}>
                <Stars />
              </Suspense>
              <Preload all />
            </Canvas>
          </div>
        </div>
      </body>
    </html>
  );
}

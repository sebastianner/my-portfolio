"use client";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// import CanvasLoader from '../loader'

type Props = {};

function TimeTurner({}: Props) {
  const timeTurner = useGLTF("./timeTurner/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={11} groundColor="#6b5138" />
      <pointLight intensity={1} />
      <primitive object={timeTurner.scene} />
    </mesh>
  );
}

const TimeTurnerCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [600, 600, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<>LOADING</>}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <TimeTurner />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default TimeTurnerCanvas;

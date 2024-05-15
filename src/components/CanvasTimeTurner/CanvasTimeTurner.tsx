"use client";
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Mesh } from "three";
import CanvasLoader from "@/components/CanvasLoader/CanvasLoader";

function TimeTurner() {
  const myMesh = useRef<Mesh>(null);
  const timeTurner = useGLTF("./timeTurner/scene.gltf");

  useFrame((_, delta) => {
    if (myMesh.current) {
      myMesh.current.rotation.y += delta;
    }
  });

  return (
    <mesh position={[0, 0, 0]} ref={myMesh}>
      <ambientLight intensity={3.3} />
      <directionalLight intensity={5.5} />
      <primitive
        object={timeTurner.scene}
        position={[0, -90, -1.5]}
        rotation={[0, 0, 0]}
        scale={1.5}
      />
    </mesh>
  );
}

const TimeTurnerCanvas = () => {
  return (
    <Canvas
      camera={{ position: [600, 600, 0], fov: 25 }}
      frameloop="always"
      gl={{ preserveDrawingBuffer: true }}
      style={{
        width: "150px",
        height: "fit-content",
        alignSelf: "flex-end",
        position: "absolute",
        top: "-125px",
        right: "25px",
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Preload all />
        <TimeTurner />
      </Suspense>
    </Canvas>
  );
};

export default TimeTurnerCanvas;

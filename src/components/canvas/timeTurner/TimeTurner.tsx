"use client";
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Mesh } from "three";
import CanvasLoader from "@/components/canvasLoader";

type Props = {};

function TimeTurner({}: Props) {
  const myMesh = useRef<Mesh>(null);
  const timeTurner = useGLTF("./timeTurner/scene.gltf");

  useFrame(({ clock }) => {
    if (myMesh.current) {
      myMesh.current.rotation.y = clock.getElapsedTime();
    }
  });

  return (
    <mesh position={[0, 0, 0]} ref={myMesh}>
      <ambientLight intensity={3.3} />
      <directionalLight intensity={5.5} />
      <primitive
        object={timeTurner.scene}
        scale={1.5}
        position={[0, -90, -1.5]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
}

const TimeTurnerCanvas = () => {
  return (
    <Canvas
      style={{
        width: "150px",
        height: "fit-content",
        alignSelf: "flex-end",
        position: "absolute",
        top: "-125px",
        right: "25px",
      }}
      frameloop="always"
      camera={{ position: [600, 600, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
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

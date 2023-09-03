"use client";
import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useTexture,
  Decal,
  Float,
  Html,
} from "@react-three/drei";
import { Mesh } from "three";
import CanvasLoader from "@/components/canvasLoader";
import { ErrorBoundary } from "react-error-boundary";

type Props = {};

function SphereMesh() {
  const [decal] = useTexture([
    "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  ]);
  // This reference gives us direct access to the THREE.Mesh object
  const sphereRef = useRef<Mesh>(null);

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <Float
      speed={1.75}
      rotationIntensity={1}
      floatIntensity={2}
      rotation={[0, 0, 0.65]}
    >
      <ambientLight intensity={0.8} />
      <directionalLight intensity={3} position={[0, 0, 0.05]} />
      <mesh
        ref={sphereRef}
        position={[-1.2, 0, 0]}
        scale={35}
        castShadow
        receiveShadow
        rotation={[0, 1.5, 0]}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={"#fff8eb"}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          map={decal}
          rotation={[2 * Math.PI, 0, 6.25]}
        />
      </mesh>
    </Float>
  );
}

function SphereCanvas({}: Props) {
  return (
    <Canvas
      style={{ width: "150px" }}
      camera={{ position: [600, 600, 0], fov: 5 }}
      gl={{ preserveDrawingBuffer: true }}
      frameloop="always"
    >
      <ErrorBoundary
        fallback={
          <Html>
            <div>Something went wrong TODO ERROR BOUNDARY</div>
          </Html>
        }
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} rotateSpeed={0.15} />
          <Preload all />
          <SphereMesh />
        </Suspense>
      </ErrorBoundary>
    </Canvas>
  );
}

export default SphereCanvas;

"use client";
import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, useTexture, Decal, Float, Html } from "@react-three/drei";
import { Mesh } from "three";
import CanvasLoader from "@/components/canvas/canvasLoader";
import { ErrorBoundary } from "react-error-boundary";

type Props = {
  position: [number, number, number];
  rotation: [number, number, number];
};
function SphereMesh(props: Props) {
  const [decal] = useTexture([
    "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  ]);
  // This reference gives us direct access to the THREE.Mesh object
  const sphereRef = useRef<Mesh>(null);

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <Float
      speed={5}
      rotationIntensity={0.1}
      floatIntensity={0.05}
      rotation={[0, 0, 0.065]}
    >
      <mesh {...props} ref={sphereRef} scale={25} castShadow receiveShadow>
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

function SphereCanvas({}: {}) {
  return (
    <Canvas
      style={{
        maxWidth: "100%",
        height: "300px",
      }}
      camera={{ position: [600, 50, 0], fov: 15 }}
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
          <ambientLight intensity={0.8} />
          <directionalLight intensity={10} position={[0, 0, 0.05]} />
          <Preload all />
          <SphereMesh position={[0, 50, 210]} rotation={[0, 1.8, 0]} />
          <SphereMesh position={[0, 50, 140]} rotation={[0, 1.7, 0]} />
          <SphereMesh position={[0, 50, 70]} rotation={[0, 1.65, 0]} />
          <SphereMesh position={[0, 50, -0]} rotation={[0, 1.55, 0]} />
          <SphereMesh position={[0, 50, -70]} rotation={[0, 1.45, 0]} />
          <SphereMesh position={[0, 50, -140]} rotation={[0, 1.4, 0]} />
          <SphereMesh position={[0, 50, -210]} rotation={[0, 1.25, 0]} />
          <SphereMesh position={[0, -20, 140]} rotation={[0, 1.7, 0]} />
          <SphereMesh position={[0, -20, 70]} rotation={[0, 1.65, 0]} />
          <SphereMesh position={[0, -20, -0]} rotation={[0, 1.55, 0]} />
          <SphereMesh position={[0, -20, -70]} rotation={[0, 1.45, 0]} />
          <SphereMesh position={[0, -20, -140]} rotation={[0, 1.4, 0]} />
        </Suspense>
      </ErrorBoundary>
    </Canvas>
  );
}

export default SphereCanvas;

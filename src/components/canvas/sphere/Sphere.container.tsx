import {
  SPHERE_COORDINATES,
  CANVAS_HEIGHT,
  CANVAS_HEIGHT_FOV,
} from "@/constants";
import { Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Html } from "next/document";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import CanvasLoader from "../canvasLoader";
import { SphereMesh } from ".";

type Props = { medium: boolean; small: boolean; extraSmall: boolean };

function SphereContainer({ medium, small, extraSmall }: Props) {
  const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let position = SPHERE_COORDINATES.position.initial;
  let rotation = SPHERE_COORDINATES.rotation.initial;
  let height = CANVAS_HEIGHT.initial;
  let fov = CANVAS_HEIGHT_FOV.initial;

  if (medium) {
    position = SPHERE_COORDINATES.position.medium;
    rotation = SPHERE_COORDINATES.rotation.medium;
  }

  if (small) {
    position = SPHERE_COORDINATES.position.small;
    rotation = SPHERE_COORDINATES.rotation.small;
    height = CANVAS_HEIGHT.small;
  }

  if (extraSmall) {
    position = SPHERE_COORDINATES.position.extraSmall;
    rotation = SPHERE_COORDINATES.rotation.small;
    height = CANVAS_HEIGHT.extraSmall;
  }

  return (
    <Canvas
      style={{
        height: height,
      }}
      camera={{ position: [600, 50, 0], fov: fov }}
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
          <ambientLight intensity={0.3} />
          <directionalLight intensity={8} position={[15, 10, 0]} />
          {test.map((_, i) => (
            <SphereMesh
              key={i}
              position={position[i]}
              rotation={rotation[i]}
              small={small}
              medium={medium}
              extraSmall={extraSmall}
            />
          ))}
          <Preload all />
        </Suspense>
      </ErrorBoundary>
    </Canvas>
  );
}

export default SphereContainer;

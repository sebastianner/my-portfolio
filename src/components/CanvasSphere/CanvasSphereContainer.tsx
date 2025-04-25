"use client";
import { Preload } from "@react-three/drei";
import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import CanvasLoader from "../CanvasLoader/CanvasLoader";
import { SphereMesh } from "./CanvasSphere";
import {
  CANVAS_HEIGHT,
  CANVAS_HEIGHT_FOV,
  SPHERE_COORDINATES,
} from "./constants";
import getCmsData from "@/utils/getCmsData";
import { allTechstacks } from "contentlayer/generated";
import type { Techstack as TechStackType } from "contentlayer/generated";

type Props = { extraSmall: boolean; medium: boolean; small: boolean };

const cmsData = getCmsData<TechStackType>(allTechstacks);

function SphereContainer({ medium, small, extraSmall }: Props) {
  let position = SPHERE_COORDINATES.position.initial;
  let rotation = SPHERE_COORDINATES.rotation.initial;
  let height = CANVAS_HEIGHT.initial;
  const fov = CANVAS_HEIGHT_FOV.initial;

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
      camera={{ fov: fov, position: [600, 50, 0] }}
      frameloop="always"
      gl={{ preserveDrawingBuffer: true }}
      style={{
        height: height,
      }}
    >
      <ErrorBoundary
        fallback={
          <Html>
            <div>Something went wrong to do: ERROR BOUNDARY</div>
          </Html>
        }
      >
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={0.3} />
          <directionalLight intensity={8} position={[15, 10, 0]} />
          {cmsData.technology.map((tech, i) => {
            const key = "sphere" + i;
            return (
              <Suspense key={key} fallback={null}>
                <SphereMesh
                  extraSmall={extraSmall}
                  medium={medium}
                  position={position[i]}
                  rotation={rotation[i]}
                  small={small}
                  textureUrl={tech}
                />
              </Suspense>
            );
          })}
          <Preload all />
        </Suspense>
      </ErrorBoundary>
    </Canvas>
  );
}

export default SphereContainer;

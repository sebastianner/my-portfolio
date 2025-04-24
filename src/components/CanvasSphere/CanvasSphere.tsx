"use client";
import { Decal, Float, useTexture } from "@react-three/drei";
import classNames from "classnames";
import { memo, useRef } from "react";
import SphereContainer from "./CanvasSphereContainer";
import { SPHERE_SCALE } from "./constants";
import useRezise from "@/hooks/useResize";

const SphereContainerMemo = memo(SphereContainer);

type Props = {
  extraSmall: boolean;
  medium: boolean;
  position: [number, number, number];
  rotation: [number, number, number];
  small: boolean;
  textureUrl: string;
};
export function SphereMesh(props: Props) {
  let scale = SPHERE_SCALE.initial;
  if (props.small) {
    scale = SPHERE_SCALE.small;
  }
  if (props.extraSmall) {
    scale = SPHERE_SCALE.extraSmall;
  }

  const [decal] = useTexture([props.textureUrl]);
  // This reference gives us direct access to the THREE.Mesh object
  const sphereRef = useRef<never>(null);

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <Float
      floatIntensity={0.05}
      rotation={[0, 0, 0.065]}
      rotationIntensity={0.1}
      speed={5}
    >
      <mesh {...props} castShadow receiveShadow ref={sphereRef} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          flatShading
          polygonOffset
          color={"#D3D0CB"}
          polygonOffsetFactor={-5}
        />
        <Decal
          map={decal}
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
        />
      </mesh>
    </Float>
  );
}

function CanvasSphere({ className }: { className?: string }) {
  const { isMedium, isSmall, isExtraSmall } = useRezise();

  return (
    <div className={classNames("w-full h-full", className)}>
      <SphereContainerMemo
        extraSmall={isExtraSmall}
        medium={isMedium}
        small={isSmall}
      />
    </div>
  );
}

export default CanvasSphere;

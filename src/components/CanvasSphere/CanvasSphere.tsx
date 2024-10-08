"use client";
import { useRef, memo } from "react";
import { useTexture, Decal, Float } from "@react-three/drei";
import { Mesh } from "three";
import SphereContainer from "./CanvasSphereContainer";
import useRezise from "@/hooks/useResize";
import { SPHERE_SCALE } from "./constants";

const SphereContainerMemo = memo(SphereContainer);

type Props = {
  position: [number, number, number];
  rotation: [number, number, number];
  medium: boolean;
  small: boolean;
  extraSmall: boolean;
};
export function SphereMesh(props: Props) {
  let scale = SPHERE_SCALE.initial;
  if (props.small) {
    scale = SPHERE_SCALE.small;
  }
  if (props.extraSmall) {
    scale = SPHERE_SCALE.extraSmall;
  }

  const [decal] = useTexture([
    "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  ]);
  // This reference gives us direct access to the THREE.Mesh object
  const sphereRef = useRef<Mesh>(null);

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
          color={"#D3D0CB"}
          flatShading
          polygonOffset
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

function CanvasSphere() {
  const { isMedium, isSmall, isExtraSmall } = useRezise();

  return (
    <SphereContainerMemo
      extraSmall={isExtraSmall}
      medium={isMedium}
      small={isSmall}
    />
  );
}

export default CanvasSphere;

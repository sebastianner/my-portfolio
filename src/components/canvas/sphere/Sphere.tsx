"use client";
import { useEffect, useRef, useState, memo } from "react";
import { useTexture, Decal, Float } from "@react-three/drei";
import { Mesh } from "three";
import SphereContainer from "./Sphere.container";
import { CANVAS_MEDIA_QUERIES, SPHERE_SCALE } from "@/constants";

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
      speed={5}
      rotationIntensity={0.1}
      floatIntensity={0.05}
      rotation={[0, 0, 0.065]}
    >
      <mesh {...props} ref={sphereRef} scale={scale} castShadow receiveShadow>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={"#D3D0CB"}
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
  const [isMedium, setMedium] = useState<boolean>(false);
  const [isSmall, setSmall] = useState<boolean>(false);
  const [isExtraSmall, setExtraSmall] = useState<boolean>(false);

  useEffect(() => {
    const w = window;

    const mediumScreen = window.matchMedia(
      `(max-width:${CANVAS_MEDIA_QUERIES.medium}px)`
    );

    const smallScreen = window.matchMedia(
      `(max-width:${CANVAS_MEDIA_QUERIES.small}px)`
    );

    const extraSmallScreen = window.matchMedia(
      `(max-width:${CANVAS_MEDIA_QUERIES.extraSmall}px)`
    );

    setMedium(mediumScreen.matches);
    setSmall(smallScreen.matches);
    setExtraSmall(extraSmallScreen.matches);

    const handleMediaQueryChange = (event: any) => {
      if (event.target.outerWidth > CANVAS_MEDIA_QUERIES.medium) {
        setMedium(false);
        setSmall(false);
        setExtraSmall(false);
      }
      if (event.target.outerWidth <= CANVAS_MEDIA_QUERIES.medium) {
        setSmall(false);
        setExtraSmall(false);
        setMedium(true);
      }
      if (event.target.outerWidth <= CANVAS_MEDIA_QUERIES.small) {
        setMedium(false);
        setExtraSmall(false);
        setSmall(true);
      }
      if (event.target.outerWidth <= CANVAS_MEDIA_QUERIES.extraSmall) {
        setMedium(false);
        setSmall(false);
        setExtraSmall(true);
      }
    };

    w.addEventListener("resize", handleMediaQueryChange);

    return () => {
      w.removeEventListener("resize", handleMediaQueryChange);
    };
  }, []);

  return (
    <SphereContainerMemo
      medium={isMedium}
      small={isSmall}
      extraSmall={isExtraSmall}
    />
  );
}

export default SphereCanvas;

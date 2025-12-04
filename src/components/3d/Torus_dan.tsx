"use client";

import React, { JSX, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, useThree, ThreeEvent } from "@react-three/fiber";
import {
  MeshTransmissionMaterial,
  MeshRefractionMaterial,
  useEnvironment,
  useGLTF,
} from "@react-three/drei";

type TorusDanProps = JSX.IntrinsicElements["group"] & {
  variant?: "transmission" | "refraction";
};

type GLTFResult = {
  nodes: {
    Sphere002?: THREE.Mesh;
    Torus002?: THREE.Mesh;
    Torus001?: THREE.Mesh;
    Torus?: THREE.Mesh;
  };
};

const GLB_PATH = "/media/Torus_dan.glb";

const TorusDan: React.FC<TorusDanProps> = ({
  variant = "transmission",
  ...props
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  const [hovered, setHovered] = useState(false);

  const { nodes } = useGLTF(GLB_PATH) as unknown as GLTFResult;

  const torusNode: THREE.Mesh | undefined =
    (nodes.Sphere002 as THREE.Mesh) ||
    (nodes.Torus002 as THREE.Mesh) ||
    (nodes.Torus001 as THREE.Mesh) ||
    (nodes.Torus as THREE.Mesh);

  const baseScale = viewport.width / 3.5;

  const envMap = useEnvironment({ preset: "city" });
  // const envMap = useCubeTexture(
  //   ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"],
  //   { path: "/media/cubemap/" }
  // );

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useFrame((state, delta) => {
    const g = groupRef.current;
    if (!g || prefersReducedMotion) return;

    const t = state.clock.getElapsedTime();

    g.rotation.y += delta * 0.35;

    const targetX = state.pointer.y * 0.3;
    const targetZ = -state.pointer.x * 0.4;

    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, targetX, 0.12);
    g.rotation.z = THREE.MathUtils.lerp(g.rotation.z, targetZ, 0.12);

    g.position.y = Math.sin(t * 0.6) * 0.08;
  });

  const handlePointerOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setHovered(true);
  };

  const handlePointerOut = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setHovered(false);
  };

  return (
    <group
      ref={groupRef}
      scale={baseScale}
      {...props}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      {torusNode && (
        <mesh ref={meshRef} geometry={torusNode.geometry}>
          {variant === "refraction" ? (
            <MeshRefractionMaterial
              envMap={envMap}
              toneMapped={false}
              ior={1.25}
              fresnel={1}
              aberrationStrength={hovered ? 0.03 : 0.01}
              color="#ffffff"
              fastChroma
            />
          ) : (
            <MeshTransmissionMaterial
              transmission={1}
              thickness={hovered ? 0.6 : 0.4}
              roughness={0}
              ior={1.25}
              chromaticAberration={hovered ? 0.09 : 0.04}
              distortion={0.5}
              distortionScale={0.35}
              temporalDistortion={0.22}
              backside
              samples={12}
              resolution={512}
            />
          )}
        </mesh>
      )}
    </group>
  );
};

useGLTF.preload(GLB_PATH);

export default TorusDan;

"use client";

import React, { useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, useThree, ThreeEvent } from "@react-three/fiber";
import {
    MeshTransmissionMaterial,
    MeshRefractionMaterial,
    useCubeTexture,
    useGLTF,
} from "@react-three/drei";

type TorusDanProps = React.ComponentProps<"group"> & {
    /** "transmission" (vidro líquido) ou "refraction" (cristal) */
    variant?: "transmission" | "refraction";
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

    const { nodes } = useGLTF(GLB_PATH) as any;

    // Tenta vários nomes de nó comuns
    const torusNode: THREE.Mesh | undefined =
        (nodes.Sphere002 as THREE.Mesh) ||
        (nodes.Torus002 as THREE.Mesh) ||
        (nodes.Torus001 as THREE.Mesh) ||
        (nodes.Torus as THREE.Mesh) ||
        (nodes.Retopo_Cube001 as THREE.Mesh);

    const baseScale = viewport.width / 3.5;

    // Cubemap para o MeshRefractionMaterial
    // Note: Ensure these files exist in public/media/cubemap/
    const envMap = useCubeTexture(
        ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"],
        { path: "/media/cubemap/" }
    );

    const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    useFrame((state, delta) => {
        const g = groupRef.current;
        if (!g || prefersReducedMotion) return;

        const t = state.clock.getElapsedTime();

        // Rotação base contínua
        g.rotation.y += delta * 0.35;

        // Parallax suave com o cursor
        const targetX = state.pointer.y * 0.3;
        const targetZ = -state.pointer.x * 0.4;

        g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, targetX, 0.12);
        g.rotation.z = THREE.MathUtils.lerp(g.rotation.z, targetZ, 0.12);

        // Float no eixo Y
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

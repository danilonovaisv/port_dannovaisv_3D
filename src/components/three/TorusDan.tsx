'use client';

import React from 'react';
import { MeshTransmissionMaterial, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// 使用来自 @react-three/fiber 的类型定义，更符合 R3F 生态
type GroupProps = React.JSX.IntrinsicElements['group'];

type GLTFResult = {
    nodes: Record<string, THREE.Mesh>;
};

const MODEL_PATH = '/media/Torus_dan.glb';

export default function TorusDan(props: GroupProps) {
    const { nodes } = useGLTF(MODEL_PATH) as unknown as GLTFResult;

    const meshNode = Object.values(nodes).find(
        (node: any) => node && node.isMesh && node.geometry
    ) as THREE.Mesh | undefined;

    return (
        <group {...props} dispose={null}>
            {meshNode && (
                <mesh
                    geometry={meshNode.geometry}
                    castShadow
                    receiveShadow
                >
                    <MeshTransmissionMaterial
                        backside
                        samples={24}
                        resolution={256}
                        thickness={0.5}
                        roughness={0.05}
                        transmission={1}
                        ior={1.2}
                        chromaticAberration={0.2}
                        anisotropy={0.15}
                        distortion={0.35}
                        distortionScale={0.7}
                        temporalDistortion={0.35}
                        attenuationColor="#ffffff"
                        attenuationDistance={1}
                        envMapIntensity={1}
                    />
                </mesh>
            )}
        </group>
    );
}

useGLTF.preload(MODEL_PATH);

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
                        samples={40}
                        resolution={1024}
                        thickness={1}
                        roughness={0.03}
                        transmission={1}
                        ior={2.3}
                        chromaticAberration={0.3}
                        anisotropy={0.3}
                        distortion={0.4}
                        distortionScale={0.9}
                        temporalDistortion={0.4}
                        attenuationColor="#ffffff"
                        attenuationDistance={0.45}
                        envMapIntensity={1}
                        clearcoat={1}
                        clearcoatRoughness={0.2}
                        toneMapped={false}
                    />
                </mesh>
            )}
        </group>
    );
}

useGLTF.preload(MODEL_PATH);

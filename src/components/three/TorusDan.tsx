
'use client';

import React from 'react';
import { MeshTransmissionMaterial, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

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
                <mesh geometry={meshNode.geometry} castShadow receiveShadow>
                    <MeshTransmissionMaterial
                        backside
                        samples={30}
                        resolution={1024}
                        thickness={1}
                        roughness={0.05}
                        transmission={1}
                        ior={2.3}
                        chromaticAberration={0.3}
                        anisotropy={0.3}
                        distortion={0.4}
                        distortionScale={0.8}
                        temporalDistortion={0.4}
                        attenuationColor="#ffffff"
                        attenuationDistance={0.5}
                        envMapIntensity={1.0}
                    />
                </mesh>
            )}
        </group>
    );
}

useGLTF.preload(MODEL_PATH);

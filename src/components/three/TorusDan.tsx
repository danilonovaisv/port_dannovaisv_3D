
'use client'

import React from 'react'
import { useGLTF, CubeCamera, useCubeTexture } from '@react-three/drei'
import { MeshRefractionMaterial } from './materials/MeshRefractionMaterial'

const MODEL_PATH = '/media/Torus_dan.glb'

export default function TorusDan(props) {
  const { nodes } = useGLTF(MODEL_PATH)
  const meshNode = Object.values(nodes).find((n) => n.isMesh)

  return (
    <CubeCamera resolution={256} frames={1}>
      {(texture) => (
        <group {...props} dispose={null}>
          {meshNode && (
            <mesh geometry={meshNode.geometry} castShadow receiveShadow>
              <MeshRefractionMaterial
                envMap={texture}
                ior={2.4}
                fresnel={0.1}
                aberrationStrength={0.1}
                fastChroma
                color="#ffffff"
              />
            </mesh>
          )}
        </group>
      )}
    </CubeCamera>
  )
}

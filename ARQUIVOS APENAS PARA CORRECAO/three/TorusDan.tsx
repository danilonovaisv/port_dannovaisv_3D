"use client";

import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF, MeshTransmissionMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

const TorusDan = () => {
  const { nodes } = useGLTF('/media/torus_dan.glb');
  const { viewport } = useThree();
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Memoize geometry extraction to avoid recalculating on every render
  const geometry = useMemo(() => {
    const meshNode = nodes.Retopo_Cube001 as THREE.Mesh;
    return meshNode?.geometry;
  }, [nodes]);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Continuous slow rotation
      meshRef.current.rotation.z += delta * 0.05;

      // Mouse interaction (Parallax/Tilt)
      // Smoothly interpolate current rotation towards mouse position
      const { x, y } = state.pointer;
      
      // We add the mouse influence to the base rotation
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        y * 0.2, // Sensitivity
        0.05 // Smoothness
      );
      
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        x * 0.2, // Sensitivity
        0.05 // Smoothness
      );
    }
  });

  if (!geometry) return null;

  // Responsive scale: bigger on small screens to fill space, smaller on desktop for balance
  const responsiveScale = viewport.width < 5 ? 3 : 4;

  return (
    <group scale={responsiveScale}>
      <Float 
        speed={1.5} 
        rotationIntensity={0.2} 
        floatIntensity={0.5} 
        floatingRange={[-0.1, 0.1]}
      >
        <mesh 
          ref={meshRef}
          geometry={geometry}
          position={[0, 0, 0]}
        >
          {/* 
            Performance Optimization:
            - resolution: Reduced to 512 (from 1024) to save GPU memory/cycles
            - samples: Reduced to 6 (from 16) for faster rendering on mobile
            - anisotropy: Disabled (0) as it's expensive and subtle on round objects
          */}
          <MeshTransmissionMaterial 
            backside={true}
            samples={6} 
            resolution={512}
            transmission={0.98}
            roughness={0.0}
            clearcoat={1}
            clearcoatRoughness={0}
            thickness={2.5}
            ior={1.4}
            chromaticAberration={0.04}
            anisotropy={0} 
            distortion={0.6}
            distortionScale={0.4}
            temporalDistortion={0.1}
            attenuationDistance={0.5}
            attenuationColor="#ffffff"
            color="#ffffff"
            background={new THREE.Color('#F4F5F7')}
          />
        </mesh>
      </Float>
    </group>
  );
};

// Preload the model to prevent waterfalls/pop-ins
useGLTF.preload('/media/torus_dan.glb');

export default TorusDan;
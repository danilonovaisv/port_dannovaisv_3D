"use client";

import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float, useGLTF } from '@react-three/drei';
import { useScroll } from 'framer-motion';
import * as THREE from 'three';

const TorusDan = () => {
  const { viewport } = useThree();
  const meshRef = useRef<THREE.Mesh>(null);

  // Load the GLB model
  // @ts-ignore
  const { nodes } = useGLTF('/media/Torus_dan.glb');

  // Scroll integration
  const { scrollYProgress } = useScroll();

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Continuous slow rotation (base)
      meshRef.current.rotation.z += delta * 0.02;

      // Scroll interaction: Rotate Y based on page scroll
      // We map the 0-1 scroll progress to a rotation range (e.g., 2 full turns)
      const scrollRotation = scrollYProgress.get() * Math.PI * 4;

      // Mouse interaction (Parallax/Tilt)
      const { x, y } = state.pointer;
      
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        y * 0.1,
        0.05
      );
      
      // Combine mouse parallax + scroll rotation
      const targetRotationY = (x * 0.1) + scrollRotation;

      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        targetRotationY,
        0.1 // Slower lerp for weightier feel
      );
    }
  });

  // Responsive scale
  const responsiveScale = viewport.width < 5 ? 2.5 : 3.0;

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
          position={[0, 0, 0]}
          rotation={[0, 0, 0]} 
          geometry={nodes.Torus.geometry}
        >
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

export default TorusDan;
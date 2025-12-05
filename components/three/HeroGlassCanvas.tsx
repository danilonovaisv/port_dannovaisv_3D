"use client";

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, PerspectiveCamera, Lightformer } from '@react-three/drei';
import TorusDan from './TorusDan';

const HeroGlassCanvas: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas dpr={[1, 2]} gl={{ alpha: true, antialias: true, toneMappingExposure: 1.2 }}>
        <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={30} />
        
        {/* Lights designed to enhance glass reflection/refraction */}
        {/* @ts-expect-error - intrinsic light components are provided by react-three-fiber */}
        <ambientLight intensity={0.5} />
        {/* @ts-expect-error - intrinsic light components are provided by react-three-fiber */}
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        {/* @ts-expect-error - intrinsic light components are provided by react-three-fiber */}
        <pointLight position={[-10, -10, -10]} intensity={1} color="#0057FF" />
        
        <Suspense fallback={null}>
          <TorusDan />
          
          {/* Environment for realistic reflections */}
          <Environment preset="city">
            {/* Custom lightformers to add "studio" reflections to the glass */}
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
              <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[20, 0.1, 1]} />
              <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[20, 0.5, 1]} />
              <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 1, 1]} />
            </group>
          </Environment>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroGlassCanvas;

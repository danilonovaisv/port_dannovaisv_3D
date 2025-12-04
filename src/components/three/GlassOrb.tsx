'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import TorusDan from './TorusDan';

type PointerState = {
  x: number;      // -1 .. 1
  y: number;      // -1 .. 1
  active: boolean;
};

type GlassOrbProps = {
  pointer: PointerState;
  scroll: number; // 0 .. 1
};

export default function GlassOrb({ pointer, scroll }: GlassOrbProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const group = groupRef.current;
    if (!group) return;

    const t = state.clock.getElapsedTime();

    // Rotação base (idle)
    const idleRotationY = t * 0.25;
    const floatOffset = Math.sin(t * 0.9) * 0.08;
    const scrollOffset = -scroll * 0.6;

    // Tilt pelo cursor
    const targetTiltX = pointer.active ? pointer.y * 0.35 : 0;
    const targetTiltY = pointer.active ? pointer.x * 0.5 : 0;

    group.rotation.x = THREE.MathUtils.lerp(
      group.rotation.x,
      targetTiltX - 0.4,
      0.08
    );

    group.rotation.y = THREE.MathUtils.lerp(
      group.rotation.y,
      idleRotationY + targetTiltY,
      0.08
    );

    // Parallax de posição (x,y)
    const targetX = pointer.active ? pointer.x * 0.35 : 0;
    const pointerYInfluence = pointer.active ? pointer.y * 0.12 : 0;
    const targetY = floatOffset + scrollOffset + pointerYInfluence;

    group.position.x = THREE.MathUtils.lerp(
      group.position.x,
      targetX,
      0.08
    );

    group.position.y = THREE.MathUtils.lerp(
      group.position.y,
      targetY,
      0.12
    );

    // Scale reage ao scroll (some aos poucos)
    const baseScale = 1;
    const pulse = 1 + Math.sin(t * 1.5) * 0.025;
    const targetScale = baseScale * (1 - scroll * 0.3) * pulse;
    const s = THREE.MathUtils.lerp(group.scale.x || 1, targetScale, 0.08);
    group.scale.set(s, s, s);
  });

  return (
    <>
      <group ref={groupRef}>
        <TorusDan />
      </group>

      {/* Luzes da cena */}
      <hemisphereLight intensity={0.5} skyColor="#c9d8ff" groundColor="#0f172a" />
      <ambientLight intensity={0.8} />
      <directionalLight
        intensity={1.8}
        position={[6, 8, 5]}
        color="#ffffff"
      />
      <pointLight intensity={1.2} position={[-2, 2, 4]} color="#a8c8ff" />
      <pointLight intensity={0.6} position={[2, -1, -2]} color="#ff9dd4" />
    </>
  );
}

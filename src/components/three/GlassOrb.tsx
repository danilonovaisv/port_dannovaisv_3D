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
    const targetX = pointer.active ? pointer.x * 0.3 : 0;
    const targetY = floatOffset + scrollOffset;

    group.position.x = THREE.MathUtils.lerp(
      group.position.x,
      targetX,
      0.08
    );

    group.position.y = THREE.MathUtils.lerp(
      group.position.y,
      targetY,
      0.1
    );

    // Scale reage ao scroll (some aos poucos)
    const baseScale = 1;
    const targetScale = baseScale * (1 - scroll * 0.3);
    const s = THREE.MathUtils.lerp(group.scale.x || 1, targetScale, 0.1);
    group.scale.set(s, s, s);
  });

  return (
    <>
      <group ref={groupRef}>
        <TorusDan />
      </group>

      {/* Luzes da cena */}
      <ambientLight intensity={0.4} />
      <directionalLight
        intensity={1.4}
        position={[4, 6, 5]}
      />
      <spotLight
        intensity={1.6}
        position={[-3, -2, 3]}
        angle={0.6}
        penumbra={0.5}
      />
    </>
  );
}
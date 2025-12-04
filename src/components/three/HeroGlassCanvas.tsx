'use client';

import { Suspense, useState } from 'react';
import type { PointerEvent } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import {
  type MotionValue,
  useMotionValueEvent,
} from 'framer-motion';
import GlassOrb from './GlassOrb';

type PointerState = {
  x: number;
  y: number;
  active: boolean;
};

type HeroGlassCanvasProps = {
  scrollYProgress: MotionValue<number>;
};

export default function HeroGlassCanvas({
  scrollYProgress,
}: HeroGlassCanvasProps) {
  const [scroll, setScroll] = useState(0);
  const [pointer, setPointer] = useState<PointerState>({
    x: 0,
    y: 0,
    active: false,
  });

  // Sincroniza scroll do Framer Motion com a cena 3D
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setScroll(latest);
  });

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1; // -1..1
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1; // -1..1

    setPointer({
      x,
      y,
      active: true,
    });
  }

  function handlePointerLeave() {
    setPointer((prev) => ({ ...prev, active: false }));
  }

  return (
    <div
      className="h-full w-full"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 5], fov: 30 }}
      >
        <Suspense fallback={null}>
          <GlassOrb pointer={pointer} scroll={scroll} />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}
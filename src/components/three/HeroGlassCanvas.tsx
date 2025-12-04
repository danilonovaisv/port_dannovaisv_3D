
'use client'

import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { type MotionValue } from 'framer-motion'
import { Suspense, useEffect, useState } from 'react'
import GlassOrb from './GlassOrb'

type HeroGlassCanvasProps = {
  scrollYProgress?: MotionValue<number>
}

export default function HeroGlassCanvas({ scrollYProgress }: HeroGlassCanvasProps) {
  const [scroll, setScroll] = useState(0)
  const [pointer, setPointer] = useState({ x: 0, y: 0, active: false })

  useEffect(() => {
    if (!scrollYProgress) return
    const unsubscribe = scrollYProgress.onChange(setScroll)
    return unsubscribe
  }, [scrollYProgress])

  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      onPointerMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
        const y = ((e.clientY - rect.top) / rect.height) * 2 - 1
        setPointer({ x, y, active: true })
      }}
      onPointerLeave={() => setPointer((p) => ({ ...p, active: false }))}
    >
      <Canvas gl={{ antialias: true, alpha: true }} camera={{ position: [0, 0, 5], fov: 30 }}>
        <Suspense fallback={null}>
          <GlassOrb pointer={pointer} scroll={scroll} />
          <Environment preset="studio" background={false} />
        </Suspense>
      </Canvas>
    </div>
  )
}

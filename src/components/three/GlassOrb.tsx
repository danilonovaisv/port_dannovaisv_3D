
'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import TorusDan from './TorusDan'

type PointerState = {
  x: number
  y: number
  active: boolean
}

type GlassOrbProps = {
  pointer: PointerState
  scroll: number
}

export default function GlassOrb({ pointer, scroll }: GlassOrbProps) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    const group = groupRef.current
    if (!group) return
    const t = state.clock.getElapsedTime()
    const floatOffset = Math.sin(t * 0.9) * 0.08
    const scrollOffset = -scroll * 0.6
    const idleRotationY = t * 0.25
    const targetX = pointer.active ? pointer.x * 0.3 : 0
    const targetY = floatOffset + scrollOffset
    const tiltX = pointer.active ? pointer.y * 0.35 : 0
    const tiltY = pointer.active ? pointer.x * 0.5 : 0

    group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, tiltX - 0.4, 0.08)
    group.rotation.y = THREE.MathUtils.lerp(group.rotation.y, idleRotationY + tiltY, 0.08)
    group.position.x = THREE.MathUtils.lerp(group.position.x, targetX, 0.08)
    group.position.y = THREE.MathUtils.lerp(group.position.y, targetY + 0.5, 0.1)

    const s = THREE.MathUtils.lerp(group.scale.x || 1, 1 * (1 - scroll * 0.3), 0.1)
    group.scale.set(s, s, s)
  })

  return (
    <>
      <group ref={groupRef}>
        <TorusDan />
      </group>
      <ambientLight intensity={0.4} />
      <directionalLight intensity={1.4} position={[4, 6, 5]} />
      <spotLight intensity={2.6} position={[-3, -2, 3]} angle={0.6} penumbra={0.5} />
    </>
  )
}

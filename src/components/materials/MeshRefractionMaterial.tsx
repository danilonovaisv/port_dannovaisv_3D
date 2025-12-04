
import * as THREE from 'three'
import { useLayoutEffect, useMemo, useRef } from 'react'
import { extend, useThree, useFrame } from '@react-three/fiber'
import { MeshBVHUniformStruct, MeshBVH, SAH } from 'three-mesh-bvh'
import { MeshRefractionMaterial as MeshRefractionMaterialImpl } from '@react-three/drei'

extend({ MeshRefractionMaterial: MeshRefractionMaterialImpl })

export function MeshRefractionMaterial({
  aberrationStrength = 0,
  fastChroma = true,
  envMap,
  ...props
}) {
  const material = useRef()
  const { size } = useThree()

  const defines = useMemo(() => {
    const temp = {}
    const isCubeMap = envMap.isCubeTexture
    const w = (isCubeMap ? envMap.image[0]?.width : envMap.image.width) ?? 1024
    const cubeSize = w / 4
    const _lodMax = Math.floor(Math.log2(cubeSize))
    const _cubeSize = Math.pow(2, _lodMax)
    const width = 3 * Math.max(_cubeSize, 16 * 7)
    const height = 4 * _cubeSize
    if (isCubeMap) temp.ENVMAP_TYPE_CUBEM = ''
    temp.CUBEUV_TEXEL_WIDTH = `${1.0 / width}`
    temp.CUBEUV_TEXEL_HEIGHT = `${1.0 / height}`
    temp.CUBEUV_MAX_MIP = `${_lodMax}.0`
    if (aberrationStrength > 0) temp.CHROMATIC_ABERRATIONS = ''
    if (fastChroma) temp.FAST_CHROMA = ''
    return temp
  }, [aberrationStrength, fastChroma])

  useLayoutEffect(() => {
    const geometry = material.current?.__r3f?.parent?.object?.geometry
    if (geometry) {
      material.current.bvh = new MeshBVHUniformStruct()
      material.current.bvh.updateFrom(new MeshBVH(geometry.clone().toNonIndexed(), { strategy: SAH }))
    }
  }, [])

  useFrame(({ camera }) => {
    material.current.viewMatrixInverse = camera.matrixWorld
    material.current.projectionMatrixInverse = camera.projectionMatrixInverse
  })

  return (
    <meshRefractionMaterial
      key={JSON.stringify(defines)}
      defines={defines}
      ref={material}
      resolution={[size.width, size.height]}
      envMap={envMap}
      {...props}
    />
  )
}

import React, { useEffect, useState } from "react"
import { useGLTF, useTexture, useAnimations } from "@react-three/drei"
import { a, useSpring } from "@react-spring/three"

export default function Model(props) {
  const { nodes, animations } = useGLTF("/stacy.glb")
  const texture = useTexture("/stacy.jpg")
  const { ref, actions, names } = useAnimations(animations)
  const [hovered, setHovered] = useState(false)
  const [index, setIndex] = useState(4)

  useEffect(() => {
    actions[names[index]].reset().fadeIn(0.5).play()
    return () => actions[names[index]].fadeOut(0.5)
  }, [index, actions, names])
  return (
    <group ref={ref} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <primitive object={nodes.mixamorigHips} />
        <skinnedMesh
          castShadow
          receiveShadow
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={() => setIndex((index + 1) % names.length)}
          geometry={nodes.stacy.geometry}
          skeleton={nodes.stacy.skeleton}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}>
          <meshStandardMaterial map={texture} map-flipY={false} skinning />
        </skinnedMesh>
      </group>
    </group>
  )
}

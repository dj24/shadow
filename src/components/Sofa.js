import React, { useEffect, useState } from "react"
import { useGLTF, useTexture, useAnimations } from "@react-three/drei"
import { a, useSpring } from "@react-spring/three"

// TODO: animation poses

export default function Sofa(props) {
  const { nodes, animations } = useGLTF(`${process.env.PUBLIC_URL}/models/sofa.glb`)

  return (
      <group rotation={[0, 0, 0]} scale={0.03} {...props}>
        <primitive object={nodes.RootNode} />
      </group>
  )
}

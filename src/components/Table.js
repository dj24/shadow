import React, { useEffect, useState } from "react"
import { useGLTF, useTexture, useAnimations } from "@react-three/drei"
import { a, useSpring } from "@react-spring/three"

// TODO: animation poses

export default function Table(props) {
  const { nodes, animations } = useGLTF(`${process.env.PUBLIC_URL}/models/table.glb`)
  // const texture = useTexture(`${process.env.PUBLIC_URL}/images/stacy.jpg`)

    console.log({nodes})

  return (
      <group rotation={[0, 0, 0]} scale={1} {...props}>
        <primitive object={nodes.Sketchfab_model} />
      </group>
  )
}

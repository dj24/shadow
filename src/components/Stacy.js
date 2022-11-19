import React, { useEffect, useState } from "react"
import { useGLTF, useTexture, useAnimations } from "@react-three/drei"
import { a, useSpring } from "@react-spring/three"

// TODO: animation poses

export default function Stacy(props) {
  const { nodes, animations } = useGLTF(`${process.env.PUBLIC_URL}/models/stacy.glb`)
  const texture = useTexture(`${process.env.PUBLIC_URL}/images/stacy.jpg`)
  const { ref  } = useAnimations(animations)

  return (
    <group ref={ref} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <primitive object={nodes.mixamorigHips} />
        <skinnedMesh
          castShadow
          receiveShadow
          onClick={props.onClick}
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

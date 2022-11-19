import {useFrame} from "@react-three/fiber";
import {useRef, useState} from "react";

export function Box(props) {
    const mesh = useRef()
    return (
        <mesh
            castShadow
            {...props}
            ref={mesh}>
            <boxGeometry  args={[1, 1, 1]} />
            <meshStandardMaterial  color={'orange'} />
        </mesh>
    )
}
import {useFrame} from "@react-three/fiber";
import {useRef, useState} from "react";

export function Wall(props) {
    const mesh = useRef()
    return (
        <group scale={[10,5,0.5]}>
            <mesh
                castShadow
                {...props}
                ref={mesh}>
                <boxGeometry  args={[1, 1, 1]} />
                <meshStandardMaterial  color={'#a3c585'} />
            </mesh>
        </group>
    )
}
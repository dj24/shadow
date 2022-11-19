import {useFrame} from "@react-three/fiber";
import {useRef, useState} from "react";

export function BlueLight(props) {
    return (
        <mesh
            {...props}>
            <pointLight distance={3} castShadow intensity={200} color={"blue"} position={[0,0,0]} />
            <sphereGeometry  args={[0.2, 32, 16]} />
            <meshBasicMaterial  color={'blue'} />
        </mesh>
    )
}
import * as THREE from "three"
import React, {Suspense, useEffect, useState} from "react"
import {Canvas, useFrame, useThree} from "@react-three/fiber"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {Backdrop, Environment, PivotControls} from "@react-three/drei";
import Model from "./Model"

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(
      () => {
        const controls = new OrbitControls(camera, gl.domElement);

        controls.minDistance = 3;
        controls.maxDistance = 20;
        return () => {
          controls.dispose();
        };
      },
      [camera, gl]
  );
  return null;
};

export default function SceneView() {
    const [isDragging, setDragging] = useState(false);
    console.log({isDragging})
    return (
        <Canvas shadows>
            {!isDragging && <CameraController />}
          <ambientLight />
          <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
          <group position={[0, -1, 0]}>
            <Suspense fallback={null}>
                <PivotControls
                    onDragStart={() => setDragging(true)}
                    onDrag={(matrix) => console.log('drag', {matrix})}
                    onDragEnd={() => setDragging(false)}
                    depthTest={false} anchor={[0, -1, 0]} scale={0.75}>
                  <Model />
                </PivotControls>
            </Suspense>
          </group>
          <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1, 0]} receiveShadow>
            <planeBufferGeometry args={[10, 10, 1, 1]} />
            <shadowMaterial transparent opacity={0.2} />
          </mesh>
            <Environment preset="dawn" background blur={0.5} />
        </Canvas>
      )
}

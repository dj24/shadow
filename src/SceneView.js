import React, {Suspense, useContext, useEffect, useState} from "react"
import {Canvas, useThree} from "@react-three/fiber"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Environment, PivotControls} from "@react-three/drei";
import {SceneContext} from "./App";
import * as THREE from 'three';

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

    const {sceneObjects, setActiveObjectIndex, activeObjectIndex, setActiveObjectMatrix, activeObjectMatrix, setActiveObjectPosition} = useContext(SceneContext);

    return (
        <Canvas shadow onPointerMissed={() => setActiveObjectIndex(undefined)}>
        {!isDragging && <CameraController />}
          <ambientLight />
          <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
            <Suspense fallback={null}>
            {sceneObjects.map((Model, i) => {
                const isActive = activeObjectIndex === i;
                const activeObjectPosition = new THREE.Vector3();
                activeObjectPosition.setFromMatrixPosition(activeObjectMatrix);

                const props =  {
                    onDragStart: () => setDragging(true),
                    onDrag: (l, dl, w, dw) => {
                        const vec = new THREE.Vector3();
                        vec.setFromMatrixPosition(w);
                        setActiveObjectPosition(vec);
                    },
                    onDragEnd: () => setDragging(false),
                    depthTest: false,
                    anchor:[0, -1, 0],
                    scale: 0.75,
                    visible: isActive,
                    // offset: isActive ? [activeObjectPosition.x, activeObjectPosition.y, activeObjectPosition.z] : undefined
                };
                return (
                    <PivotControls
                        key={i}
                        {...props}
                    >
                        <Model onClick={() => setActiveObjectIndex(i)} />
                    </PivotControls>
                );
            })}
            </Suspense>
          <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1, 0]} receiveShadow>
            <planeBufferGeometry args={[10, 10, 1, 1]} />
          <meshStandardMaterial receiveShadow color={'grey'} />
            {/*<shadowMaterial transparent opacity={0.2} />*/}
          </mesh>
            <Environment preset="dawn" background blur={0.5} />
        </Canvas>
      )
}

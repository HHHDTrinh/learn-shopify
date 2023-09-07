'use client';
import { useRef, useMemo } from 'react';
// import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ModelViewer = ({ modelPath, positionArray, scaleNumb }) => {
  const reft = useRef();
  const gltf = useLoader(GLTFLoader, modelPath);
  const scene = useMemo(() => {
    return gltf.scene.clone();
  }, [gltf]);
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    reft.current.rotation.y = 0.5 * time;
  });
  return (
    <group dispose={null}>
      <primitive
        ref={reft}
        object={scene}
        position={positionArray}
        scale={scaleNumb}
        children-0-castShadow
      />
    </group>
  );
};

const ModelContainer = ({ modelPath, positionArray, scaleNumb }) => {
  return (
    <Canvas
      camera={{ position: [0, 2, -5], fov: 75, near: 0.1, far: 1000 }}
      shadows
    >
      <directionalLight position={[-1, 0, -5]} castShadow intensity={10} />
      <ModelViewer
        modelPath={modelPath}
        positionArray={positionArray}
        scaleNumb={scaleNumb}
      />
      {/* <OrbitControls target={[0, 0, 0]} /> */}
    </Canvas>
  );
};

export default ModelContainer;

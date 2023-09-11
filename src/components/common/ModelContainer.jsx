'use client';
import { useRef, useMemo } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ModelViewer = ({
  modelPath,
  positionArray,
  scaleNumb,
  reft,
  haveOrbit,
}) => {
  const gltf = useLoader(GLTFLoader, modelPath);
  //Reuse the model in many components
  const scene = useMemo(() => {
    return gltf.scene.clone();
  }, [gltf]);
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    // reft.current.rotation.y = 0.5 * time;
    reft.current.rotation.y = haveOrbit ? 0 : time;
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
      {haveOrbit && <ambientLight intensity={10} />}
    </group>
  );
};

const ModelContainer = ({ modelPath, positionArray, scaleNumb, haveOrbit }) => {
  const reft = useRef();

  return (
    <Canvas
      camera={{ position: [0, 2, -5], fov: 75, near: 0.1, far: 1000 }}
      shadows
    >
      <directionalLight position={[-1, 0, -5]} castShadow intensity={10} />
      <ModelViewer
        reft={reft}
        modelPath={modelPath}
        positionArray={positionArray}
        scaleNumb={scaleNumb}
        haveOrbit={haveOrbit}
      />
      {haveOrbit && (
        <OrbitControls target={reft.current?.position} enableZoom={false} />
      )}
    </Canvas>
  );
};

export default ModelContainer;

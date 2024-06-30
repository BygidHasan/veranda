import { Center, Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { Suspense } from 'react';
import { Model } from './Model';

export default function Canvas3D() {
  return (
    <div className="fixed top-0 bg-accent2 h-[44svh] sm:h-svh w-full sm:w-[60%] md:w-[64%] lg:w-[68%] xl:w-[72%] 2xl:w-[76%] flex justify-center items-center">
      <Suspense
        fallback={<h1 className="font-extrabold text-7xl">LOADING...</h1>}
      >
        <Canvas
          flat
          camera={{ fov: 65, near: 0.1, far: 100, position: [0, -1, 7] }}
          className="touch-none"
        >
          <color attach="background" args={['#191920']} />
          <OrbitControls
            makeDefault
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2}
            minAzimuthAngle={-Math.PI / 3}
            maxAzimuthAngle={Math.PI / 3}
            minDistance={0.1}
            maxDistance={10}
          />
          <ambientLight intensity={5} />
          <Center>
            <Model />
          </Center>
          <Environment environmentIntensity={0.3} preset="lobby" blur={4} />
        </Canvas>
      </Suspense>
    </div>
  );
}

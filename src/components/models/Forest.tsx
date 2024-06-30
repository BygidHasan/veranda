import React, { useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Instance, Instances, useTexture } from '@react-three/drei';
import {
  DoubleSide,
  InstancedMesh,
  Mesh,
  MeshBasicMaterial,
  Texture,
} from 'three';

interface Tree {
  x: number;
  y: number;
  z: number;
  scale: number;
}

export default function Forest() {
  const numTrees = 500; // Example value
  const innerRadius = 10; // Example value
  const outerRadius = 50; // Example value
  const position: [number, number, number] = [0, 0, 0]; // Example value

  const { camera } = useThree();
  const ref = useRef<InstancedMesh>(null); // Adjusted useRef type assertion

  const particles: Tree[] = useMemo(() => {
    return Array.from({ length: numTrees }, (_, index) => {
      const angle = (index / numTrees) * Math.PI * 2;
      const radius = innerRadius + Math.random() * (outerRadius - innerRadius);
      const x = radius * Math.cos(angle);
      const z = radius * Math.sin(angle);
      const y = 0;
      const scale =
        2 + Math.random() * 3.5 * Math.random() * Math.random() * 2.5;
      return { x, y, z, scale };
    });
  }, [numTrees, innerRadius, outerRadius]);

  const texture: Texture = useTexture('/fake_forest.webp');
  texture.flipY = false;

  useFrame(() => {
    if (ref.current) {
      ref.current.children.forEach((child) => {
        const childMesh = child as Mesh;
        if (childMesh) {
          childMesh.lookAt(camera.position);
          if (childMesh.material) {
            (childMesh.material as MeshBasicMaterial).needsUpdate = true;
          }
        }
      });
    }
  });

  return (
    <group position={position}>
      <Instances
        castShadow
        receiveShadow
        ref={ref as React.MutableRefObject<InstancedMesh>} // Adjust ref assertion
        limit={2000}
        frustumCulled={false}
        renderOrder={2}
      >
        <planeGeometry args={[4, 4]} />
        <meshBasicMaterial
          map={texture}
          color={0xffff00}
          transparent
          side={DoubleSide}
          depthWrite={true}
          alphaTest={0.2}
        />
        {particles.map((data, i) => (
          <Instance
            key={i}
            position={[data.x, data.y, data.z]}
            scale={[data.scale, data.scale, 1]}
          />
        ))}
      </Instances>
    </group>
  );
}

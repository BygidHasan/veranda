import { useGLTF } from '@react-three/drei';
import { GroupProps, MeshProps } from '@react-three/fiber';
import { Material, Mesh } from 'three';
import { GLTF } from 'three/examples/jsm/Addons.js';

type GLTFResult = GLTF & {
  nodes: {
    [key: string]: Mesh;
  };
  materials: {
    [key: string]: Material;
  };
};

export function BaseBuilding(props: MeshProps) {
  const { nodes, materials } = useGLTF(
    './models/vereanda_express.glb'
  ) as unknown as GLTFResult;

  return (
    <group {...(props as GroupProps)} dispose={null as unknown as () => void}>
      <group position={[0, 0.081, 0.1]}>
        <mesh
          geometry={nodes.Cube.geometry}
          material={materials.bricks_texture}
        />
        <mesh geometry={nodes.Cube_1.geometry} material={materials.Black} />
      </group>
      <group position={[0, 0.166, 0]}>
        <mesh
          geometry={nodes.Cube001.geometry}
          material={materials.White_frame}
        />
        <mesh geometry={nodes.Cube001_1.geometry} material={materials.Glass} />
      </group>
      <group position={[0, 0.081, 0.1]}>
        <mesh
          geometry={nodes.Cube011.geometry}
          material={materials.bricks_texture}
        />
        <mesh geometry={nodes.Cube011_1.geometry} material={materials.Black} />
        <mesh
          geometry={nodes.Cube011_2.geometry}
          material={materials.Concrite}
        />
      </group>
      <mesh
        geometry={nodes.floor.geometry}
        material={materials.Concrite}
        position={[0, 0, 0.1]}
      />
      <mesh
        geometry={nodes.ground.geometry}
        material={materials.Grass}
        position={[-1.011, 0, 7.619]}
        scale={30}
      />
      <group
        position={[0, 7.557, 0.017]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[2.209, 2.209, 2.808]}
      >
        <mesh geometry={nodes.widows_1.geometry} material={materials.widows} />
        <mesh
          geometry={nodes.widows_2.geometry}
          material={materials.White_frame}
        />
      </group>
    </group>
  );
}

useGLTF.preload('./models/vereanda_express.glb');

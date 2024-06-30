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

export function Model(props: MeshProps) {
  const { nodes, materials } = useGLTF(
    './models/vereanda_express.glb'
  ) as unknown as GLTFResult;

  console.log(materials);

  return (
    <group {...(props as GroupProps)} dispose={null as unknown as () => void}>
      <group position={[0.326, 1.159, 0.494]} rotation={[0, 1.571, 0]}>
        <mesh
          geometry={nodes.Cube053.geometry}
          material={materials.glass_clear}
        />
        <mesh geometry={nodes.Cube053_1.geometry} material={materials.black} />
        <mesh
          geometry={nodes.Cube053_2.geometry}
          material={materials['awning Cover']}
        />
        <mesh
          geometry={nodes.Cube053_3.geometry}
          material={materials.building}
        />
        <mesh geometry={nodes.Cube053_4.geometry} material={materials.Border} />
        <mesh geometry={nodes.Cube053_5.geometry} material={materials.Grass} />
        <mesh
          geometry={nodes.Cube053_6.geometry}
          material={materials.Grouind}
        />
      </group>
      <mesh
        geometry={nodes.Column_Back_Left.geometry}
        material={materials.Black_matel}
        position={[-0.604, 0.6, 0.991]}
      />
      <mesh
        geometry={nodes.Top_alu_1.geometry}
        material={materials.Black_matel}
        position={[-0.036, 1.182, 2.559]}
      />
      <mesh
        geometry={nodes.Top_alu_2_a.geometry}
        material={materials.Black_matel}
        position={[-0.036, 1.095, 4.138]}
      />
      <mesh
        geometry={nodes.Top_alu_3_a.geometry}
        material={materials.Black_matel}
        position={[-0.036, 1.095, 4.154]}
      />
      <mesh
        geometry={nodes.Top_alu_2_b.geometry}
        material={materials.Black_matel}
        position={[-0.036, 1.097, 4.135]}
      />
      <mesh
        geometry={nodes.Top_alu_3_b.geometry}
        material={materials.Black_matel}
        position={[-0.036, 1.098, 4.139]}
      />
      <mesh
        geometry={nodes.Back_alu.geometry}
        material={materials.Black_matel}
        position={[-0.036, 1.269, 0.942]}
      />
      <mesh
        geometry={nodes.Roof_top_alu.geometry}
        material={materials.Black_matel}
        position={[-0.035, 1.182, 2.559]}
      />
      <mesh
        geometry={nodes.Glass_opal.geometry}
        material={materials.glass_poly_clear}
        position={[-0.036, 1.235, 2.491]}
        scale={[0.945, 1, 1]}
      />
      <mesh
        geometry={nodes.Column_Front_right.geometry}
        material={materials.Black_matel}
        position={[0.532, 0.5, 4.127]}
      />
      <mesh
        geometry={nodes.Column_Front_Left.geometry}
        material={materials.Black_matel}
        position={[-0.604, 0.5, 4.127]}
      />
      <mesh
        geometry={nodes.Column_Back_Right.geometry}
        material={materials.Black_matel}
        position={[0.532, 0.6, 0.991]}
      />
    </group>
  );
}

useGLTF.preload('./models/vereanda_express.glb');

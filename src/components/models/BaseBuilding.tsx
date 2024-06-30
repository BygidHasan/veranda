import { Material, Mesh } from 'three';

interface Props {
  nodes: {
    [key: string]: Mesh;
  };
  materials: {
    [key: string]: Material;
  };
}

export default function BaseBuilding({ nodes, materials }: Props) {
  return (
    <group
      name="baseBuilding"
      position={[0.326, 1.159, 0.494]}
      rotation={[0, 1.571, 0]}
    >
      <mesh
        geometry={nodes.Cube053.geometry}
        material={materials.glass_clear}
      />
      <mesh geometry={nodes.Cube053_1.geometry} material={materials.black} />
      <mesh
        geometry={nodes.Cube053_2.geometry}
        material={materials['awning Cover']}
      />
      <mesh geometry={nodes.Cube053_3.geometry} material={materials.building} />
      <mesh geometry={nodes.Cube053_4.geometry} material={materials.Border} />
      <mesh geometry={nodes.Cube053_5.geometry} material={materials.Grass} />
      <mesh geometry={nodes.Cube053_6.geometry} material={materials.Grouind} />
    </group>
  );
}

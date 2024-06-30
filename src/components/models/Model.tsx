import { useGLTF } from '@react-three/drei';
import { GroupProps, MeshProps } from '@react-three/fiber';
import { Material, Mesh, MeshStandardMaterial } from 'three';
import { GLTF } from 'three/examples/jsm/Addons.js';
import BaseBuilding from './BaseBuilding';
import { useVeranda } from '@/context/VerandaCustomization';

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

  const { freeStandingV, flatGutterV, verandaColor } = useVeranda();

  const modifiedBlackMaterial = (
    materials.Black_matel as MeshStandardMaterial
  ).clone();
  modifiedBlackMaterial.color.set(
    verandaColor === 'anthracite'
      ? '#363C40'
      : verandaColor === 'black'
      ? '#000000'
      : verandaColor === 'silverGrey'
      ? '#858E95'
      : '#82807C'
  );

  return (
    <group {...(props as GroupProps)} dispose={null as unknown as () => void}>
      <BaseBuilding nodes={nodes} materials={materials} />

      <group name="veranda" position={[0, 0, freeStandingV ? 0.5 : 0]}>
        <group name="columns" scale-y={1}>
          {freeStandingV && (
            <group name="backColumns">
              <mesh
                geometry={nodes.Column_Back_Left.geometry}
                material={modifiedBlackMaterial}
                position={[-0.604, 0.6, 0.991]}
              />
              <mesh
                geometry={nodes.Column_Back_Right.geometry}
                material={modifiedBlackMaterial}
                position={[0.532, 0.6, 0.991]}
              />
            </group>
          )}

          <group name="frontColumn">
            <mesh
              geometry={nodes.Column_Front_right.geometry}
              material={modifiedBlackMaterial}
              position={[0.532, 0.5, 4.127]}
            />
            <mesh
              geometry={nodes.Column_Front_Left.geometry}
              material={modifiedBlackMaterial}
              position={[-0.604, 0.5, 4.127]}
            />
          </group>
        </group>

        <group name="verendaTop" position={[0, 0, 0]}>
          {flatGutterV ? (
            <group name="flatGutter">
              <mesh
                geometry={nodes.Top_alu_2_a.geometry}
                material={modifiedBlackMaterial}
                position={[-0.036, 1.095, 4.138]}
              />
              <mesh
                geometry={nodes.Top_alu_2_b.geometry}
                material={modifiedBlackMaterial}
                position={[-0.036, 1.097, 4.135]}
              />
            </group>
          ) : (
            <group name="RoundGutter">
              <mesh
                geometry={nodes.Top_alu_3_a.geometry}
                material={modifiedBlackMaterial}
                position={[-0.036, 1.095, 4.154]}
              />
              <mesh
                geometry={nodes.Top_alu_3_b.geometry}
                material={modifiedBlackMaterial}
                position={[-0.036, 1.098, 4.139]}
              />
            </group>
          )}

          <mesh
            geometry={nodes.Top_alu_1.geometry}
            material={modifiedBlackMaterial}
            position={[-0.036, 1.182, 2.559]}
          />

          <mesh
            geometry={nodes.Back_alu.geometry}
            material={modifiedBlackMaterial}
            position={[-0.036, 1.269, 0.942]}
          />
          <mesh
            geometry={nodes.Roof_top_alu.geometry}
            material={modifiedBlackMaterial}
            position={[-0.035, 1.182, 2.559]}
          />
          <mesh
            geometry={nodes.Glass_opal.geometry}
            material={materials.glass_poly_clear}
            position={[-0.036, 1.235, 2.491]}
            scale={[0.945, 1, 1]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('./models/vereanda_express.glb');

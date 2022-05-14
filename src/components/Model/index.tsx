import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { angleToRadians } from "../../utils/angles";

export default function Model() {
  const group = useRef();

  const { nodes, materials } = useGLTF("/models/tron/tron.glb") as any;
  useGLTF.preload("/models/tron/tron.glb");

  return (
    <>
      <group ref={group} dispose={null} position={[0, 0, -2]} rotation={[0, angleToRadians(90), 0]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[0, 1.27091384, 0.96563911]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_0.geometry}
                material={nodes.Object_0.material}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_0_1.geometry}
                material={nodes.Object_0_1.material}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_0_2.geometry}
                material={nodes.Object_0_2.material}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_7.geometry}
                material={nodes.Object_7.material}
              />
            </group>
            <group
              position={[-0.02486131, 1.21748757, -4.42670107]}
              scale={[0.5295974, 0.13337795, 0.20574993]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_28.geometry}
                material={materials.material_0}
              />
            </group>
            <group position={[0, 1.27091384, 0.96563911]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_11.geometry}
                material={nodes.Object_11.material}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_11_1.geometry}
                material={nodes.Object_11_1.material}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_11_2.geometry}
                material={nodes.Object_11_2.material}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_11_3.geometry}
                material={nodes.Object_11_3.material}
              />
            </group>
            <group
              position={[0, 1.27188563, 0.96563911]}
              rotation={[-0.31397942, 0, 0]}
              scale={[0.15437996, 0.10838594, 0.10838594]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_12.geometry}
                material={nodes.Object_12.material}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_12_1.geometry}
                material={nodes.Object_12_1.material}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_12_2.geometry}
                material={nodes.Object_12_2.material}
              />
            </group>
          </group>
        </group>
      </group>
    </>
  );
}


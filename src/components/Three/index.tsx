import { Environment, MeshReflectorMaterial, OrbitControls, PerspectiveCamera, useTexture } from "@react-three/drei";
import { SelectiveBloom, EffectComposer, Selection, Select } from "@react-three/postprocessing";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { angleToRadians } from "../../utils/angles";
import { BackSide } from "three";
import Model from "../Model";

export function Three() {
  const orbitControlsRef = useRef(null);

  const floorTexture = useTexture({
    map: '/models/floor/textures/asphalt_02_diff_4k.jpg',
    displacementMap: '/models/floor/textures/asphalt_02_disp_4k.png',
    normalMap: '/models/floor/textures/asphalt_02_nor_gl_4k.jpg',
    roughnessMap: '/models/floor/textures/asphalt_02_rough_4k.jpg',
    aoMap: '/models/floor/textures/asphalt_02_ao_4k.jpg',
  });

  useFrame((state) => {
    if(!!orbitControlsRef.current) {
      const { x, y } = state.mouse;

      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(180));
      orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30));
      orbitControlsRef.current.update();
    }
  });

  return (
    <Selection>
      <PerspectiveCamera makeDefault position={[0, 10, 15]} />
      <OrbitControls 
        enablePan={false}
        enableZoom={false}
        ref={orbitControlsRef} 
        minPolarAngle={angleToRadians(20)} 
        maxPolarAngle={angleToRadians(85)} 
      />

      <Select enabled>
        <Model />
      </Select>

      <mesh rotation={[-(angleToRadians(90)), 0, 0]} receiveShadow>
          <planeGeometry args={[64, 64]} />
          <MeshReflectorMaterial
            blur={[500, 100]}
            mixBlur={6}
            mixStrength={3}
            resolution={1024}
            mirror={1}
            minDepthThreshold={0.25}
            maxDepthThreshold={1}
            depthScale={50}
            metalness={0}
            color={'#f0f0f0'}
            {...floorTexture}
          />
        </mesh>

      <ambientLight args={['#fffff', 0.8]} />

      <Environment background>
        <mesh scale={100}>
          <sphereGeometry args={[1, 128, 128]} />
          <meshBasicMaterial color={'#080812'} side={BackSide} />
        </mesh>
      </Environment>

      <EffectComposer autoClear={false}>
        <SelectiveBloom kernelSize={2} luminanceThreshold={0} luminanceSmoothing={0.4} intensity={1} />
      </EffectComposer>
    </Selection>
  );
}
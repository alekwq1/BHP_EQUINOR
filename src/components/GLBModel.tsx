import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

function degToRad(deg: number) {
  return (deg * Math.PI) / 180;
}

type GLBModelProps = {
  url: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
  visible: boolean;
};

export default function GLBModel({
  url,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
  visible,
}: GLBModelProps) {
  const radianRotation = rotation.map(degToRad) as [number, number, number];
  const gltf = useLoader(GLTFLoader, url);
  if (!visible) return null;
  return (
    <primitive
      object={gltf.scene}
      dispose={null}
      position={position}
      rotation={radianRotation}
      scale={scale}
    />
  );
}

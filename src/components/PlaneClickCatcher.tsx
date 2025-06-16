import { useThree } from "@react-three/fiber";
import * as THREE from "three";

type PlaneClickCatcherProps = {
  onPick: (pos: [number, number, number]) => void;
  enabled: boolean;
};

export default function PlaneClickCatcher({
  onPick,
  enabled,
}: PlaneClickCatcherProps) {
  const { camera, size } = useThree();

  const handlePointerDown = (e: any) => {
    if (!enabled) return;

    // Nowe wersje R3F – e.unprojectedPoint
    if (e.unprojectedPoint) {
      onPick([e.unprojectedPoint.x, 0, e.unprojectedPoint.z]);
    } else {
      // Fallback – ręczny raycast na płaszczyznę Y=0 (XZ)
      const mouse = new THREE.Vector2();
      mouse.x = (e.clientX / size.width) * 2 - 1;
      mouse.y = -(e.clientY / size.height) * 2 + 1;

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);

      const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0); // Y=0
      const intersection = new THREE.Vector3();
      raycaster.ray.intersectPlane(plane, intersection);

      onPick([intersection.x, 0, intersection.z]);
    }
    e.stopPropagation();
  };

  return (
    <mesh
      onPointerDown={handlePointerDown}
      position={[0, 0, 0]}
      visible={false}
    >
      <planeGeometry args={[10000, 10000]} />
      <meshBasicMaterial visible={false} />
    </mesh>
  );
}

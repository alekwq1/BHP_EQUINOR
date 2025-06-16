import { useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function PlaneClickCatcher({ onPick, enabled }) {
  const { camera, size } = useThree();

  const handlePointerDown = (e) => {
    if (!enabled) return;

    // Nowe wersje R3F – e.unprojectedPoint
    if (e.unprojectedPoint) {
      // Przekazujemy X, Y ignorujemy (wysokość), Z jako przód/tył
      onPick([e.unprojectedPoint.x, 0, e.unprojectedPoint.z]);
    } else {
      // Stary fallback – ręczny raycast na płaszczyznę Y=0
      // (bo płaszczyzna XZ w Three, Y=0 to poziom „podłogi”)
      const mouse = new THREE.Vector2();
      mouse.x = (e.clientX / size.width) * 2 - 1;
      mouse.y = -(e.clientY / size.height) * 2 + 1;

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);

      // UWAGA! Płaszczyzna Y=0 (XZ), normalka: (0,1,0)
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

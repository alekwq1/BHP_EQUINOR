// PlaneClickCatcher.tsx
import { useEffect, useMemo } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

type Props = {
  enabled: boolean;
  onPick: (pos: [number, number, number]) => void;
  /** wysokość płaszczyzny w świecie (np. 0 albo -1 jeśli Twój "ground" jest na -1) */
  groundY?: number;
};

export default function PlaneClickCatcher({
  enabled,
  onPick,
  groundY = 0,
}: Props) {
  const { camera, gl } = useThree();

  const plane = useMemo(
    () => new THREE.Plane(new THREE.Vector3(0, 1, 0), -groundY),
    [groundY]
  );
  const raycaster = useMemo(() => new THREE.Raycaster(), []);
  const tmp = useMemo(() => new THREE.Vector3(), []);
  const tmpV2 = useMemo(() => new THREE.Vector2(), []);

  useEffect(() => {
    const handler = (e: PointerEvent) => {
      if (!enabled) return;

      const rect = gl.domElement.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      // setFromCamera wymaga Vector2
      raycaster.setFromCamera(tmpV2.set(x, y), camera);
      const hit = raycaster.ray.intersectPlane(plane, tmp);
      if (hit) onPick([hit.x, hit.y, hit.z]);
    };

    gl.domElement.addEventListener("pointerdown", handler, { passive: true });
    return () => gl.domElement.removeEventListener("pointerdown", handler);
  }, [enabled, onPick, gl, camera, plane, raycaster, tmp, tmpV2]);

  return null;
}

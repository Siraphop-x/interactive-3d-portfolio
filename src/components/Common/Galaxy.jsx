import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Galaxy() {
  const count = 6000; // Number of stars
  const points = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const colorInside = new THREE.Color("#ec4899"); // Pinkish inside
    const colorOutside = new THREE.Color("#06b6d4"); // Cyanish outside

    for (let i = 0; i < count; i++) {
      // Calculate random polar coordinates
      const radius = Math.random() * 10;
      const spinAngle = radius * 0.5; // Controls the spiral curvature
      const branchAngle = ((i % 3) / 3) * Math.PI * 2; // 3 galaxy branches

      // Add Randomness
      const randomX =
        Math.pow(Math.random(), 3) *
        (Math.random() < 0.5 ? 1 : -1) *
        0.5 *
        (10 - radius) *
        0.2;
      const randomY =
        Math.pow(Math.random(), 3) *
        (Math.random() < 0.5 ? 1 : -1) *
        0.5 *
        (10 - radius) *
        0.2;
      const randomZ =
        Math.pow(Math.random(), 3) *
        (Math.random() < 0.5 ? 1 : -1) *
        0.5 *
        (10 - radius) *
        0.2;

      // Final coordinates
      pos[i * 3 + 0] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      pos[i * 3 + 1] = randomY; // Keep it somewhat flat on the Y axis
      pos[i * 3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

      // Color interpolation
      const mixedColor = colorInside.clone().lerp(colorOutside, radius / 10);
      col[i * 3 + 0] = mixedColor.r;
      col[i * 3 + 1] = mixedColor.g;
      col[i * 3 + 2] = mixedColor.b;
    }
    return [pos, col];
  }, []);

  useFrame((state, delta) => {
    if (points.current) {
      // Base rotation
      points.current.rotation.y += delta * 0.05;

      // Mouse interactive tilt
      points.current.rotation.x = THREE.MathUtils.lerp(
        points.current.rotation.x,
        (Math.PI / 180) * 15 + (state.mouse.y * Math.PI) / 10,
        0.05,
      );
      points.current.rotation.z = THREE.MathUtils.lerp(
        points.current.rotation.z,
        (-state.mouse.x * Math.PI) / 15,
        0.05,
      );
    }
  });

  return (
    <points ref={points} rotation={[(Math.PI / 180) * 15, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexColors={true}
        transparent={true}
        opacity={0.8}
      />
    </points>
  );
}

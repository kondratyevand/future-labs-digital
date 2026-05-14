import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Icosahedron, TorusKnot } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function Core() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, dt) => {
    ref.current.rotation.y += dt * 0.15;
    ref.current.rotation.x += dt * 0.05;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1.6, 1]} />
        <MeshDistortMaterial
          color={"#6f7bff"}
          emissive={"#3a2bbf"}
          emissiveIntensity={0.4}
          roughness={0.15}
          metalness={0.9}
          distort={0.35}
          speed={1.2}
        />
      </mesh>
    </Float>
  );
}

function Ring() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, dt) => {
    ref.current.rotation.x += dt * 0.1;
    ref.current.rotation.z -= dt * 0.06;
  });
  return (
    <mesh ref={ref} scale={2.6}>
      <torusGeometry args={[1, 0.005, 8, 200]} />
      <meshStandardMaterial color={"#7dd3fc"} emissive={"#38bdf8"} emissiveIntensity={1.2} />
    </mesh>
  );
}

function Particles() {
  const ref = useRef<THREE.Points>(null!);
  const count = 220;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 3 + Math.random() * 2.5;
    const a = Math.random() * Math.PI * 2;
    const b = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(b) * Math.cos(a);
    positions[i * 3 + 1] = r * Math.sin(b) * Math.sin(a);
    positions[i * 3 + 2] = r * Math.cos(b);
  }
  useFrame((_, dt) => {
    ref.current.rotation.y += dt * 0.03;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.018} color={"#a5b4fc"} transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color={"#a5b4fc"} />
      <pointLight position={[-5, -3, -2]} intensity={2} color={"#7c3aed"} />
      <pointLight position={[3, -4, 2]} intensity={1.5} color={"#06b6d4"} />
      <Suspense fallback={null}>
        <Core />
        <Ring />
        <Particles />
      </Suspense>
    </Canvas>
  );
}

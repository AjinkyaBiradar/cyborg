"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function AnatomicalRobotHead({ scrollProgress = 0 }: { scrollProgress?: number }) {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    // Rotation animation
    groupRef.current.rotation.y += delta * 0.45 + scrollProgress * 0.05;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.08;
  });

  return (
    <group ref={groupRef} scale={1.15}>
      
      {/* 1. Humanoid Skull / Cranium Base */}
      <mesh position={[0, 0.2, 0]}>
        <sphereGeometry args={[1.1, 32, 32]} />
        <meshStandardMaterial
          color="#0b0f19"
          metalness={0.85}
          roughness={0.25}
        />
      </mesh>

      {/* Cyber Wireframe Contour Overlay */}
      <mesh position={[0, 0.2, 0]} scale={1.03}>
        <sphereGeometry args={[1.1, 24, 24]} />
        <meshBasicMaterial color="#8b5cf6" wireframe transparent opacity={0.3} />
      </mesh>

      {/* 2. Sculpted Humanoid Face Plate (Cheeks & Brow Ridge) */}
      <mesh position={[0, 0.1, 0.45]}>
        <boxGeometry args={[1.35, 1.3, 0.95]} />
        <meshStandardMaterial color="#111827" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Brow Ridge */}
      <mesh position={[0, 0.45, 0.92]}>
        <boxGeometry args={[1.25, 0.18, 0.25]} />
        <meshStandardMaterial color="#1e293b" metalness={0.95} roughness={0.15} />
      </mesh>

      {/* 3. Human Eyes & Ocular Reticles */}
      <group position={[0, 0.32, 0.95]}>
        {/* Left Eye Sphere */}
        <mesh position={[-0.38, 0, 0]}>
          <sphereGeometry args={[0.16, 32, 32]} />
          <meshBasicMaterial color="#06b6d4" />
        </mesh>
        <mesh position={[-0.38, 0, 0.12]}>
          <ringGeometry args={[0.04, 0.09, 32]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>

        {/* Right Eye Sphere */}
        <mesh position={[0.38, 0, 0]}>
          <sphereGeometry args={[0.16, 32, 32]} />
          <meshBasicMaterial color="#06b6d4" />
        </mesh>
        <mesh position={[0.38, 0, 0.12]}>
          <ringGeometry args={[0.04, 0.09, 32]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      </group>

      {/* 4. Human Nasal Bridge */}
      <mesh position={[0, 0.05, 1.02]} rotation={[0.2, 0, 0]}>
        <boxGeometry args={[0.16, 0.45, 0.22]} />
        <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* 5. Sculpted Upper & Lower Lips */}
      <group position={[0, -0.32, 0.96]}>
        {/* Upper Lip Plate */}
        <mesh position={[0, 0.03, 0]}>
          <boxGeometry args={[0.55, 0.08, 0.14]} />
          <meshBasicMaterial color="#f59e0b" />
        </mesh>
        {/* Lower Lip Plate */}
        <mesh position={[0, -0.06, 0]}>
          <boxGeometry args={[0.48, 0.08, 0.14]} />
          <meshStandardMaterial color="#8b5cf6" />
        </mesh>
      </group>

      {/* 6. Humanoid Jawline & Chin */}
      <mesh position={[0, -0.62, 0.55]} rotation={[-0.15, 0, 0]}>
        <boxGeometry args={[1.15, 0.48, 0.9]} />
        <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.2} />
      </mesh>
      {/* Chin Prominence */}
      <mesh position={[0, -0.82, 0.9]}>
        <boxGeometry args={[0.4, 0.2, 0.2]} />
        <meshStandardMaterial color="#1e293b" metalness={0.95} roughness={0.15} />
      </mesh>

      {/* 7. Temporal Crown Ring */}
      <mesh position={[0, 0.95, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.95, 0.03, 16, 64]} />
        <meshBasicMaterial color="#f59e0b" />
      </mesh>

      {/* Floating Orbiting Halo Ring */}
      <mesh rotation={[0.3, 0, 0.15]}>
        <torusGeometry args={[2.0, 0.015, 16, 100]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.65} />
      </mesh>

    </group>
  );
}

export function RevolvingFace({ scrollProgress = 0 }: { scrollProgress?: number }) {
  return (
    <div className="w-full h-full min-h-[420px] lg:min-h-[520px] relative">
      <Canvas camera={{ position: [0, 0, 5.2], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.8} color="#8b5cf6" />
        <directionalLight position={[-5, -5, -5]} intensity={1.2} color="#06b6d4" />
        <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.4}>
          <AnatomicalRobotHead scrollProgress={scrollProgress} />
        </Float>
      </Canvas>
    </div>
  );
}

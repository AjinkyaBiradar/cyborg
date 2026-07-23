"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function AnatomicalParticleFace({ scrollProgress = 0 }: { scrollProgress?: number }) {
  const pointsRef = useRef<THREE.Points>(null!);

  // Generate 12,000 high-density particles shaping a human facial anatomy
  const { positions, colors } = useMemo(() => {
    const count = 12000;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    let idx = 0;

    const addParticle = (x: number, y: number, z: number, r: number, g: number, b: number) => {
      if (idx >= count * 3) return;
      pos[idx] = x;
      pos[idx + 1] = y;
      pos[idx + 2] = z;

      col[idx] = r;
      col[idx + 1] = g;
      col[idx + 2] = b;
      idx += 3;
    };

    // Helper: Add parametric curve/ring
    const addRing = (
      centerX: number,
      centerY: number,
      centerZ: number,
      radiusX: number,
      radiusY: number,
      particleCount: number,
      r: number,
      g: number,
      b: number,
      noise = 0.02
    ) => {
      for (let i = 0; i < particleCount; i++) {
        const angle = (i / particleCount) * Math.PI * 2;
        const x = centerX + Math.cos(angle) * radiusX + (Math.random() - 0.5) * noise;
        const y = centerY + Math.sin(angle) * radiusY + (Math.random() - 0.5) * noise;
        const z = centerZ + (Math.random() - 0.5) * noise;
        addParticle(x, y, z, r, g, b);
      }
    };

    // 1. Human Eyes & Eyebrows (High Density)
    for (let side = -1; side <= 1; side += 2) {
      const eyeX = side * 0.65;
      const eyeY = 0.35;
      const eyeZ = 1.1;

      // Iris & Pupil (Bright Cyan)
      for (let ring = 1; ring <= 4; ring++) {
        addRing(eyeX, eyeY, eyeZ + 0.05, 0.06 * ring, 0.06 * ring, 60 * ring, 0.0, 0.94, 1.0, 0.01);
      }

      // Eyelids (Upper and Lower curves)
      for (let i = 0; i < 180; i++) {
        const t = (i / 180) * Math.PI; // 0 to PI
        const x = eyeX + (t / Math.PI - 0.5) * 0.5;
        // Upper lid
        const yUpper = eyeY + Math.sin(t) * 0.18;
        addParticle(x, yUpper, eyeZ + 0.02, 0.65, 0.35, 0.96);

        // Lower lid
        const yLower = eyeY - Math.sin(t) * 0.12;
        addParticle(x, yLower, eyeZ, 0.5, 0.3, 0.8);
      }

      // Eyebrows (Arched human brow line)
      for (let i = 0; i < 220; i++) {
        const t = i / 220;
        const x = side * (0.35 + t * 0.55);
        const y = eyeY + 0.28 + Math.sin(t * Math.PI) * 0.1 - t * 0.05;
        const z = eyeZ + 0.08 - t * 0.04;
        addParticle(x, y, z, 0.96, 0.65, 0.15); // Amber Cyber Accent
      }
    }

    // 2. Human Nose Structure (Bridge, Nasal Tip & Nostrils)
    for (let i = 0; i < 600; i++) {
      const t = i / 600; // 0 (between eyes) to 1 (nasal tip)
      const y = 0.45 - t * 0.55;
      const z = 1.05 + Math.sin(t * Math.PI * 0.8) * 0.35; // Protruding nasal bridge
      const width = 0.04 + Math.pow(t, 2) * 0.15; // Flares near tip

      for (let w = -1; w <= 1; w += 0.4) {
        const x = w * width;
        addParticle(x, y, z, 0.06, 0.82, 0.96);
      }
    }

    // Nostrils
    addRing(-0.12, -0.12, 1.35, 0.06, 0.04, 80, 0.8, 0.2, 0.5);
    addRing(0.12, -0.12, 1.35, 0.06, 0.04, 80, 0.8, 0.2, 0.5);

    // 3. Human Lips & Mouth (Cupid's Bow & Lower Lip Contour)
    const mouthY = -0.42;
    // Upper Lip (Cupid's Bow)
    for (let i = 0; i < 400; i++) {
      const t = (i / 400) * 2 - 1; // -1 to 1
      const x = t * 0.48;
      const bow = Math.sin(Math.abs(t) * Math.PI) * 0.05 - (1 - Math.abs(t)) * 0.04;
      const y = mouthY + bow;
      const z = 1.28 + Math.cos(t * Math.PI * 0.5) * 0.12;

      addParticle(x, y, z, 0.96, 0.25, 0.45); // Bio-Crimson Lip Line
    }

    // Lower Lip Curve
    for (let i = 0; i < 350; i++) {
      const t = (i / 350) * 2 - 1;
      const x = t * 0.44;
      const y = mouthY - 0.1 - Math.cos(t * Math.PI * 0.5) * 0.08;
      const z = 1.25 + Math.cos(t * Math.PI * 0.5) * 0.14;

      addParticle(x, y, z, 0.96, 0.25, 0.45);
    }

    // 4. Human Cheekbones & Zygomatic Arches
    for (let side = -1; side <= 1; side += 2) {
      for (let i = 0; i < 500; i++) {
        const u = i / 500;
        const x = side * (0.4 + u * 0.75);
        const y = 0.15 - Math.pow(u, 2) * 0.35;
        const z = 1.0 + Math.sin(u * Math.PI) * 0.28;

        addParticle(x, y, z, 0.54, 0.36, 0.96);
      }
    }

    // 5. Human Jawline & Chin Prominence
    for (let i = 0; i < 1500; i++) {
      const t = (i / 1500) * Math.PI - Math.PI / 2; // -PI/2 to PI/2
      const x = Math.sin(t) * 1.05;
      const y = -0.2 - Math.cos(t) * 1.05;
      const z = Math.cos(t) * 0.85;

      addParticle(x, y, z, 0.25, 0.65, 0.96);
    }

    // Chin rounded highlight
    addRing(0, -1.15, 0.95, 0.18, 0.12, 180, 0.96, 0.65, 0.15);

    // 6. Skull Cranium & Temple Indents (3,500 particles filling volume)
    for (let i = 0; i < 3500; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * Math.PI * 2;
      const phi = Math.acos(2 * v - 1);

      const radius = 1.75 + (Math.random() - 0.5) * 0.1;
      let x = radius * Math.sin(phi) * Math.cos(theta) * 0.78;
      let y = radius * Math.cos(phi) * 1.05 + 0.1;
      let z = radius * Math.sin(phi) * Math.sin(theta) * 0.75;

      // Flatten temples slightly for human anatomy
      if (Math.abs(x) > 0.9) x *= 0.92;

      const isCyan = Math.random() > 0.5;
      addParticle(
        x,
        y,
        z,
        isCyan ? 0.04 : 0.54,
        isCyan ? 0.71 : 0.36,
        isCyan ? 0.83 : 0.96
      );
    }

    return { positions: pos, colors: col };
  }, []);

  // Frame animation: Speech mouth wave + natural breathing tilt
  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();

    // Smooth head movement
    pointsRef.current.rotation.y = Math.sin(time * 0.4) * 0.12 + scrollProgress * Math.PI * 0.4;
    pointsRef.current.rotation.x = Math.cos(time * 0.3) * 0.06 + scrollProgress * 0.15;

    // Speech wave movement on lip particle vertices
    const posAttr = pointsRef.current.geometry.attributes.position;
    const array = posAttr.array as Float32Array;

    for (let i = 0; i < array.length; i += 3) {
      const y = array[i + 1];
      const z = array[i + 2];
      // Lips region (y ~ -0.45 to -0.38, z > 1.1)
      if (y > -0.55 && y < -0.35 && z > 1.1) {
        array[i + 1] += Math.sin(time * 6 + array[i] * 8) * 0.003;
      }
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.028}
        vertexColors
        transparent
        opacity={0.92}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export function ParticleFace({ scrollProgress = 0 }: { scrollProgress?: number }) {
  return (
    <div className="w-full h-full min-h-[450px] lg:min-h-[600px] relative">
      <Canvas camera={{ position: [0, 0, 4.2], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <AnatomicalParticleFace scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
}

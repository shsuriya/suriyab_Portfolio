"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, Sphere } from "@react-three/drei";
import * as THREE from "three";

const GlowingOrb = ({ position, color, size, speed, floatIntensity }: any) => {
  return (
    <Float speed={speed} rotationIntensity={1} floatIntensity={floatIntensity}>
      <Sphere args={[size, 64, 64]} position={position}>
        <meshBasicMaterial 
          color={color} 
          transparent
          opacity={0.15}
        />
      </Sphere>
      <Sphere args={[size * 0.6, 32, 32]} position={position}>
        <meshBasicMaterial 
          color={color} 
          transparent
          opacity={0.4}
        />
      </Sphere>
      <pointLight position={position} color={color} intensity={50} distance={50} />
    </Float>
  );
}

const Starfield = () => {
  const ref = useRef<THREE.Group>(null!);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y -= 0.0003;
      ref.current.rotation.x -= 0.0001;
    }
  });
  return (
    <group ref={ref}>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={1} fade speed={1} />
    </group>
  );
};

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#050505]">
      <Canvas camera={{ position: [0, 0, 20], fov: 60 }}>
        <color attach="background" args={["#050505"]} />
        <ambientLight intensity={0.5} />
        
        <Starfield />
        
        {/* Floating Glowing Orbs in Theme Colors */}
        <GlowingOrb position={[-12, 6, -10]} color="#00f0ff" size={4} speed={1.5} floatIntensity={2} />
        <GlowingOrb position={[12, -8, -15]} color="#a855f7" size={6} speed={1} floatIntensity={3} />
        <GlowingOrb position={[-8, -10, -8]} color="#ec4899" size={3} speed={2} floatIntensity={1.5} />
        <GlowingOrb position={[10, 8, -20]} color="#60a5fa" size={5} speed={1.2} floatIntensity={2.5} />
        
        <fog attach="fog" args={['#050505', 15, 40]} />
      </Canvas>
    </div>
  );
}

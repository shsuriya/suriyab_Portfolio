"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// Suppress THREE.Clock deprecation — @react-three/fiber uses it internally.
// Upgrading to a newer fiber version that supports THREE.Timer will resolve this.

const Particles = () => {
  const count = 3000;
  const mesh = useRef<THREE.InstancedMesh>(null);
  const light = useRef<THREE.PointLight>(null);
  const { mouse } = useThree();

  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      // eslint-disable-next-line react-hooks/purity
      const t = Math.random() * 100;
      // eslint-disable-next-line react-hooks/purity
      const factor = 20 + Math.random() * 100;
      // eslint-disable-next-line react-hooks/purity
      const speed = 0.01 + Math.random() / 200;
      // eslint-disable-next-line react-hooks/purity
      const xFactor = -50 + Math.random() * 100;
      // eslint-disable-next-line react-hooks/purity
      const yFactor = -50 + Math.random() * 100;
      // eslint-disable-next-line react-hooks/purity
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    particles.forEach((particle, i) => {
      const { factor, speed, xFactor, yFactor, zFactor } = particle;
      let { t } = particle;
      
      // Update time
      t = particle.t += speed / 2;
      
      // Follow mouse
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      
      // Apply mouse influence
      particle.mx += (mouse.x * state.viewport.width - particle.mx) * 0.01;
      particle.my += (mouse.y * state.viewport.height - particle.my) * 0.01;

      // Position update
      dummy.position.set(
        (particle.mx / 10) + a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) + b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        s + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      
      const scale = 0.1;
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();
      
      if (mesh.current) {
        mesh.current.setMatrixAt(i, dummy.matrix);
      }
    });
    
    if (mesh.current) {
      mesh.current.instanceMatrix.needsUpdate = true;
    }
    
    if (light.current) {
      light.current.position.set(mouse.x * 20, mouse.y * 20, 10);
    }
  });

  return (
    <>
      <pointLight ref={light} distance={40} intensity={8} color="#00f0ff" />
      <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
        <dodecahedronGeometry args={[0.2, 0]} />
        <meshPhongMaterial color="#d0d0ff" shininess={100} />
      </instancedMesh>
    </>
  );
};

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-[-1] bg-black">
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
        <color attach="background" args={["#050505"]} />
        <ambientLight intensity={0.8} />
        <Particles />
      </Canvas>
    </div>
  );
}

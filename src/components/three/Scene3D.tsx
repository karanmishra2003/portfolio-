"use client";
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function FloatingCrystal() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(t / 2) / 4;
      meshRef.current.rotation.y = Math.sin(t / 3) / 3;
      meshRef.current.position.y = Math.sin(t) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
      <mesh ref={meshRef} position={[-4, 2, -8]}>
        <octahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial 
          color="#8b5cf6" 
          emissive="#8b5cf6"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
}

function FloatingTorus() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={meshRef} position={[4, -1, -6]}>
        <torusGeometry args={[0.6, 0.2, 16, 32]} />
        <meshStandardMaterial 
          color="#06b6d4" 
          emissive="#06b6d4"
          emissiveIntensity={0.3}
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>
    </Float>
  );
}

function FloatingIcosahedron() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.25;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.35;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.7}>
      <mesh ref={meshRef} position={[3, 3, -7]}>
        <icosahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial 
          color="#ec4899" 
          emissive="#ec4899"
          emissiveIntensity={0.4}
          metalness={0.6}
          roughness={0.4}
        />
      </mesh>
    </Float>
  );
}

function FloatingDodecahedron() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = -state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2.2} rotationIntensity={0.4} floatIntensity={1}>
      <mesh ref={meshRef} position={[-3, -2, -7]}>
        <dodecahedronGeometry args={[0.4, 0]} />
        <meshStandardMaterial 
          color="#22c55e" 
          emissive="#22c55e"
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

function FloatingSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = -2.5 + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.3;
    }
  });

  return (
    <Float speed={1.6} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[0, -2.5, -5]}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial 
          color="#f59e0b" 
          emissive="#f59e0b"
          emissiveIntensity={0.5}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
    </Float>
  );
}

function NebulaParticles() {
  const points = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const count = 300;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particlesPosition, 3]}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.04} 
        color="#a855f7" 
        transparent 
        opacity={0.4} 
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function AmbientRings() {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = state.clock.getElapsedTime() * 0.1;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <>
      <mesh ref={ring1Ref} position={[0, 0, -10]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[8, 0.05, 16, 100]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.2} />
      </mesh>
      <mesh ref={ring2Ref} position={[0, 0, -12]} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[10, 0.03, 16, 100]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.15} />
      </mesh>
    </>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <color attach="background" args={["#020617"]} />
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />
        <Sparkles count={150} scale={15} size={3} speed={0.3} opacity={0.4} color="#8b5cf6" />
        <Sparkles count={100} scale={12} size={2} speed={0.4} opacity={0.3} color="#06b6d4" />
        <FloatingCrystal />
        <FloatingTorus />
        <FloatingIcosahedron />
        <FloatingDodecahedron />
        <FloatingSphere />
        <NebulaParticles />
        <AmbientRings />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />
        <pointLight position={[-10, -10, 5]} intensity={0.4} color="#8b5cf6" />
        <pointLight position={[10, -5, 5]} intensity={0.3} color="#06b6d4" />
        <pointLight position={[-10, 5, 5]} intensity={0.3} color="#ec4899" />
      </Canvas>
    </div>
  );
}

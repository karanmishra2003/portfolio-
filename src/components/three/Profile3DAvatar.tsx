"use client";
import { useEffect, useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";

interface Profile3DAvatarProps {
  imagePath: string;
}

function ProfileParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const count = 200;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 2 + Math.random() * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      particlesRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particlesPosition, 3]}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.05} 
        color="#f59e0b" 
        transparent 
        opacity={0.8} 
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function GlowingOrb() {
  const orbRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (orbRef.current) {
      orbRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <group>
      <mesh ref={orbRef} position={[0, -2.5, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial 
          color="#f59e0b" 
          emissive="#f59e0b"
          emissiveIntensity={2}
          transparent
          opacity={0.9}
        />
      </mesh>
      <pointLight position={[0, -2.5, 0]} intensity={1} color="#f59e0b" distance={5} />
    </group>
  );
}

function FloatingRing() {
  const ringRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      ringRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <mesh ref={ringRef} position={[0, 0, 0]} rotation={[Math.PI / 3, 0, 0]}>
      <torusGeometry args={[2.5, 0.02, 16, 100]} />
      <meshStandardMaterial 
        color="#8b5cf6" 
        emissive="#8b5cf6"
        emissiveIntensity={1}
        transparent
        opacity={0.5}
      />
    </mesh>
  );
}

function RotatingRing() {
  const ringRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = -state.clock.getElapsedTime() * 0.4;
    }
  });

  return (
    <mesh ref={ringRef} position={[0, 0, -0.5]}>
      <torusGeometry args={[2.2, 0.015, 16, 100]} />
      <meshStandardMaterial 
        color="#06b6d4" 
        emissive="#06b6d4"
        emissiveIntensity={1.5}
        transparent
        opacity={0.4}
      />
    </mesh>
  );
}

function CrystalShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[2.5, 1, 0]}>
        <octahedronGeometry args={[0.3, 0]} />
        <meshStandardMaterial 
          color="#ec4899" 
          emissive="#ec4899"
          emissiveIntensity={1}
          transparent
          opacity={0.8}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

function CrystalShape2() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = -state.clock.getElapsedTime() * 0.4;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={meshRef} position={[-2.5, -1, 0]}>
        <icosahedronGeometry args={[0.25, 0]} />
        <meshStandardMaterial 
          color="#22c55e" 
          emissive="#22c55e"
          emissiveIntensity={1}
          transparent
          opacity={0.8}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

function NebulaCloud() {
  const cloudRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (cloudRef.current) {
      cloudRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={cloudRef}>
      {Array.from({ length: 20 }).map((_, i) => {
        const theta = (i / 20) * Math.PI * 2;
        const radius = 3 + Math.random() * 1;
        const x = Math.cos(theta) * radius;
        const y = (Math.random() - 0.5) * 2;
        const z = Math.sin(theta) * radius;
        
        return (
          <mesh key={i} position={[x, y, z]}>
            <sphereGeometry args={[0.08 + Math.random() * 0.05, 8, 8]} />
            <meshStandardMaterial 
              color={["#8b5cf6", "#ec4899", "#06b6d4", "#f59e0b"][i % 4]}
              transparent
              opacity={0.4}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function ProfileMesh({ imagePath }: Profile3DAvatarProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  const texture = useMemo(() => {
    if (hasError) return null;
    const loader = new THREE.TextureLoader();
    try {
      const tex = loader.load(imagePath);
      tex.colorSpace = THREE.SRGBColorSpace;
      return tex;
    } catch {
      setHasError(true);
      return null;
    }
  }, [imagePath, hasError]);

  useEffect(() => {
    const img = new Image();
    img.src = imagePath;
    img.onerror = () => setHasError(true);
  }, [imagePath]);

  useFrame((state) => {
    if (groupRef.current) {
      const targetRotation = hovered ? 0.5 : 0;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotation + Math.sin(state.clock.getElapsedTime() * 0.4) * 0.08,
        0.05
      );
      const scale = hovered ? 1.05 : 1;
      groupRef.current.scale.setScalar(THREE.MathUtils.lerp(groupRef.current.scale.x, scale, 0.1));
    }
  });

  return (
    <group ref={groupRef} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
      {/* Floating rings */}
      <FloatingRing />
      <RotatingRing />
      
      {/* Nebula cloud */}
      <NebulaCloud />
      
      {/* Floating crystals */}
      <CrystalShape />
      <CrystalShape2 />
      
      {/* Glowing orb at bottom */}
      <GlowingOrb />
      
      {/* Particles around the avatar */}
      <ProfileParticles />
      
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        {/* Main platform */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[1.5, 1.5, 0.15, 64]} />
          <meshStandardMaterial 
            color="#1a1a2e" 
            metalness={0.9} 
            roughness={0.1}
          />
        </mesh>
        
        {/* Inner circle */}
        <mesh position={[0, 0, 0.08]}>
          <circleGeometry args={[1.4, 64]} />
          <meshStandardMaterial color="#16213e" />
        </mesh>

        {/* Dark background for photo */}
        <mesh position={[0, 0, 0.1]}>
          <circleGeometry args={[1.3, 64]} />
          <meshStandardMaterial color="#0f0f23" />
        </mesh>

        {/* Profile photo */}
        {texture ? (
          <mesh position={[0, 0, 0.12]}>
            <circleGeometry args={[1.2, 64]} />
            <meshStandardMaterial>
              <primitive object={texture} attach="map" />
            </meshStandardMaterial>
          </mesh>
        ) : (
          <mesh position={[0, 0, 0.12]}>
            <circleGeometry args={[1.2, 64]} />
            <meshStandardMaterial color="#e5e7eb" metalness={0.3} roughness={0.7} />
          </mesh>
        )}

        {/* Glowing ring overlay */}
        <mesh position={[0, 0, 0.14]}>
          <circleGeometry args={[1.45, 64]} />
          <meshStandardMaterial 
            color="#8b5cf6" 
            transparent 
            opacity={0.15}
            side={THREE.DoubleSide}
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function Profile3DAvatar({ imagePath }: Profile3DAvatarProps) {
  return (
    <div className="w-full h-[400px] md:h-[550px] flex items-center justify-center">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["transparent"]} />
        <ambientLight intensity={0.4} />
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.3} 
          penumbra={1} 
          intensity={1.5} 
          color="#ffffff"
        />
        <spotLight 
          position={[-10, -10, 5]} 
          angle={0.5} 
          penumbra={1} 
          intensity={1} 
          color="#8b5cf6"
        />
        <pointLight position={[0, 5, 5]} intensity={0.5} color="#06b6d4" />
        <pointLight position={[0, -5, 5]} intensity={0.3} color="#ec4899" />
        <ProfileMesh imagePath={imagePath} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}

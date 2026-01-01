import React, { useRef, useLayoutEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  useGLTF, 
  Environment, 
  ContactShadows, 
  ScrollControls, 
  useScroll
} from '@react-three/drei';
import * as THREE from 'three';

// 1. The Statue Component
function Statue(props: any) {
  const { scene } = useGLTF('/models/statue.glb');
  const scroll = useScroll();
  const ref = useRef<THREE.Group>(null);

  // Apply the "Aged Bronze" material to the loaded model
  useLayoutEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        
        // Custom Bronze Material
        mesh.material = new THREE.MeshStandardMaterial({
          color: '#4a3c31',       // Dark brownish-gold
          metalness: 0.9,         // High metalness
          roughness: 0.3,         // Slight roughness for age
          envMapIntensity: 1.5,   // Enhance reflections
        });
      }
    });
  }, [scene]);

  // Animation Loop for Scroll Interaction
  useFrame((state, delta) => {
    // Auto-rotate slowly
    if (ref.current) {
      ref.current.rotation.y += delta * 0.1; 
    }

    // Scroll interaction: Move camera based on scroll offset
    // r1 is the scroll range [0, 1]
    const r1 = scroll.range(0, 1);
    
    // Smoothly interpolate camera position
    // Start: [0, 2, 6], Zoom in: [2, 1.5, 3]
    state.camera.position.lerp(
      new THREE.Vector3(
        Math.sin(r1 * Math.PI) * 4, // Orbit horizontally
        2 - r1 * 0.5,               // Lower slightly
        6 - r1 * 3                  // Zoom in
      ), 
      0.05
    );
    
    state.camera.lookAt(0, 1.5, 0); // Always look at the statue center
  });

  return <primitive object={scene} ref={ref} {...props} />;
}

// 2. Background Roman Columns
function RomanColumns() {
  const columns = useMemo(() => {
    const items = [];
    const count = 12;
    const radius = 10;
    
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      items.push({ position: [x, 3, z] as [number, number, number], rotation: [0, -angle, 0] as [number, number, number] });
    }
    return items;
  }, []);

  return (
    <group>
      {columns.map((col, i) => (
        <mesh key={i} position={col.position} rotation={col.rotation} castShadow receiveShadow>
          <cylinderGeometry args={[0.4, 0.5, 6, 32]} />
          <meshStandardMaterial color="#e3dac9" roughness={0.8} />
        </mesh>
      ))}
      {/* Floor for context */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <circleGeometry args={[15, 64]} />
        <meshStandardMaterial color="#1a1a1a" roughness={1} />
      </mesh>
    </group>
  );
}

// 3. Main Experience Component
function Experience() {
  return (
    <>
      {/* Lighting: Warm Sunlight */}
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={2} 
        color="#ffecd1" 
        castShadow 
        shadow-bias={-0.0001}
      />
      <ambientLight intensity={0.5} color="#b9d5ff" />

      {/* Environment: City preset for realistic metal reflections */}
      <Environment preset="city" />

      {/* Soft Shadows on the floor */}
      <ContactShadows 
        resolution={1024} 
        scale={20} 
        blur={2} 
        opacity={0.5} 
        far={10} 
        color="#000000" 
      />

      {/* Background Scenery */}
      <RomanColumns />

      {/* The Hero Model */}
      <Statue position={[0, 0, 0]} scale={1.5} />
    </>
  );
}

// 4. App Entry Point
export default function Model() {
  return (
    <div className="w-full h-screen bg-stone-900">
      <Canvas shadows camera={{ position: [0, 2, 6], fov: 45 }}>
        {/* ScrollControls handles the scroll damping and pages */}
        <ScrollControls pages={3} damping={0.2}>
          <Experience />
        </ScrollControls>
      </Canvas>
      
      {/* Placeholder for UI overlay (to be added later) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* UI content will go here */}
      </div>
    </div>
  );
}

// Preload the model to avoid pop-in
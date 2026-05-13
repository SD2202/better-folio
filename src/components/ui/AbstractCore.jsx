import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function AbstractCore() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- SETUP ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    
    const width = 600;
    const height = 600;
    renderer.setSize(width, height);
    containerRef.current.appendChild(renderer.domElement);

    // --- OBJECTS ---
    
    // 1. Outer Wireframe Sphere
    const outerGeo = new THREE.IcosahedronGeometry(2, 2);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6, // Purple
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });
    const outerSphere = new THREE.Mesh(outerGeo, outerMat);
    scene.add(outerSphere);

    // 2. Inner Wireframe Core
    const innerGeo = new THREE.IcosahedronGeometry(1.2, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6, // Blue
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerCore);

    // 3. Central Glow Point
    const pointGeo = new THREE.SphereGeometry(0.1, 16, 16);
    const pointMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const centralPoint = new THREE.Mesh(pointGeo, pointMat);
    scene.add(centralPoint);

    // 4. Floating Particles
    const particlesCount = 40;
    const posArray = new Float32Array(particlesCount * 3);
    for(let i=0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 5;
    }
    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
        size: 0.03,
        color: 0x8b5cf6,
        transparent: true,
        opacity: 0.8
    });
    const particleMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particleMesh);

    camera.position.z = 5;

    // --- MOUSE INTERACTION ---
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 0.5;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 0.5;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // --- ANIMATION LOOP ---
    let frame = 0;
    const animate = () => {
      frame += 0.01;
      
      // Rotations
      outerSphere.rotation.y += 0.003;
      outerSphere.rotation.x += 0.002;
      
      innerCore.rotation.y -= 0.005;
      innerCore.rotation.z += 0.003;
      
      // Pulse effect
      const scale = 1 + Math.sin(frame) * 0.05;
      innerCore.scale.set(scale, scale, scale);
      
      // Mouse sway
      scene.rotation.y += (mouseX - scene.rotation.y) * 0.05;
      scene.rotation.x += (-mouseY - scene.rotation.x) * 0.05;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // --- CLEANUP ---
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      renderer.dispose();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-60 mix-blend-screen"
      style={{ width: '600px', height: '600px' }}
    />
  );
}

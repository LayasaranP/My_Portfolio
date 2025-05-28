
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const OrbitingIcons = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  const skills = [
    { name: 'React', color: '#61DAFB', position: [3, 0, 0] },
    { name: 'Three.js', color: '#000000', position: [0, 3, 0] },
    { name: 'TypeScript', color: '#3178C6', position: [-3, 0, 0] },
    { name: 'Node.js', color: '#339933', position: [0, -3, 0] },
    { name: 'Python', color: '#3776AB', position: [2, 2, 0] },
    { name: 'WebGL', color: '#990000', position: [-2, -2, 0] },
  ];

  return (
    <group ref={groupRef}>
      {skills.map((skill, index) => (
        <Float key={skill.name} speed={2} rotationIntensity={1} floatIntensity={2}>
          <mesh position={skill.position as [number, number, number]}>
            <sphereGeometry args={[0.2, 32, 32]} />
            <meshStandardMaterial color={skill.color} emissive={skill.color} emissiveIntensity={0.2} />
          </mesh>
          <Text
            position={[skill.position[0], skill.position[1] - 0.5, skill.position[2]]}
            fontSize={0.3}
            color={skill.color}
            anchorX="center"
            anchorY="middle"
          >
            {skill.name}
          </Text>
        </Float>
      ))}
    </group>
  );
};

const HeroSection = () => {
  const handleDownloadResume = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add your resume.pdf to the public folder
    link.download = 'John_Doe_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <OrbitingIcons />
        </Canvas>
      </div>
      
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-6xl md:text-8xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-yellow-400 bg-clip-text text-transparent">
            Layasaran Prabhu
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          Full Stack Developer & 3D Web Enthusiast
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 245, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-400 hover:to-purple-500 transition-all duration-300"
          >
            View Projects
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadResume}
            className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300"
          >
            Download Resume
          </motion.button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

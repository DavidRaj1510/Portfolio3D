import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Code } from 'lucide-react';
import * as THREE from 'three';

interface ITypewriter {
  texts: string[];
  delay: number;
}

const Typewriter: React.FC<ITypewriter> = ({ texts, delay }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentText = texts[currentTextIndex];
      
      if (isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      }
      
      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
      }
    }, isDeleting ? delay / 2 : delay);
    
    return () => clearTimeout(timer);
  }, [currentTextIndex, displayText, isDeleting, texts, delay]);

  return (
    <span className="text-theme-purple">
      {displayText}<span className="border-r-2 border-theme-purple animate-blink"></span>
    </span>
  );
};

const Hero: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);
    
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 500;
    
    const posArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.01,
      color: 0x9b87f5,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    camera.position.z = 3;
    
    let mouseX = 0;
    let mouseY = 0;
    
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX / window.innerWidth - 0.5;
      mouseY = event.clientY / window.innerHeight - 0.5;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    const animate = () => {
      requestAnimationFrame(animate);
      
      particlesMesh.rotation.x += 0.0002;
      particlesMesh.rotation.y += 0.0002;
      
      particlesMesh.rotation.x += mouseY * 0.001;
      particlesMesh.rotation.y += mouseX * 0.001;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-6">
      <div ref={mountRef} className="canvas-container" />
      
      <div className="container mx-auto text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hello, I am <span className="text-theme-purple">Emme Emmanuel David Raj</span>
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">
          I am a <Typewriter texts={["Data Analyst", "Full Stack Developer", "Problem Solver"]} delay={100} />
        </h2>
        
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-gray-700">
          I am an enthusiastic learner with a passion for exploring new courses and technologies. By actively engaging in continuous learning, I aim to enhance my skills and stay updated with industry trends.
        </p>
        
        <div className="flex items-center justify-center space-x-6 mb-12">
          <a href="https://www.linkedin.com/in/emmeemmanueldavidraj/" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-theme-purple transition-colors">
            <Linkedin size={28} />
          </a>
          <a href="https://github.com/DavidRaj1510" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-theme-purple transition-colors">
            <Github size={28} />
          </a>
          <a href="https://leetcode.com/u/eedraj2003/" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-theme-purple transition-colors">
            <Code size={28} />
          </a>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <a href="#about" className="px-8 py-3 bg-theme-purple text-white rounded-lg hover:bg-theme-dark-purple transition-colors duration-300 font-medium text-lg">
            Explore More
          </a>
          <a href="#contact" className="px-8 py-3 border border-theme-purple text-theme-purple rounded-lg hover:bg-theme-purple hover:text-white transition-colors duration-300 font-medium text-lg">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

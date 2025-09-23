import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useMousePosition, useScrollProgress } from '../../hooks/useScrollAnimation';

interface FloatingElementsProps {
  count?: number;
  className?: string;
}

// Floating geometric shapes
export const FloatingShapes: React.FC<FloatingElementsProps> = ({ 
  count = 8,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePosition();
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const shapes = container.querySelectorAll('.floating-shape');
    
    shapes.forEach((shape, index) => {
      const element = shape as HTMLElement;
      
      // Random initial positions
      gsap.set(element, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        rotation: Math.random() * 360,
        scale: 0.5 + Math.random() * 0.5
      });

      // Continuous floating animation
      gsap.to(element, {
        x: `+=${100 + Math.random() * 200}`,
        y: `+=${50 + Math.random() * 100}`,
        rotation: `+=${180 + Math.random() * 180}`,
        duration: 10 + Math.random() * 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.5
      });
    });
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const shapes = container.querySelectorAll('.floating-shape');
    
    shapes.forEach((shape, index) => {
      const element = shape as HTMLElement;
      const speed = 0.02 + index * 0.01;
      
      // Mouse interaction
      const mouseInfluence = {
        x: (mousePosition.x - window.innerWidth / 2) * speed,
        y: (mousePosition.y - window.innerHeight / 2) * speed
      };

      // Scroll influence
      const scrollInfluence = scrollProgress * 100 * (index % 2 === 0 ? 1 : -1);

      gsap.to(element, {
        x: `+=${mouseInfluence.x}`,
        y: `+=${mouseInfluence.y + scrollInfluence}`,
        duration: 2,
        ease: "power2.out"
      });
    });
  }, [mousePosition, scrollProgress]);

  const shapes = Array.from({ length: count }, (_, i) => {
    const shapeType = ['circle', 'square', 'triangle', 'diamond'][i % 4];
    const size = 20 + Math.random() * 40;
    
    return (
      <div
        key={i}
        className={`floating-shape absolute opacity-20 ${getShapeClasses(shapeType)}`}
        style={{
          width: size,
          height: size,
          background: `linear-gradient(45deg, ${getRandomColor()}, ${getRandomColor()})`
        }}
      />
    );
  });

  return (
    <div ref={containerRef} className={`fixed inset-0 pointer-events-none z-0 ${className}`}>
      {shapes}
    </div>
  );
};

// Particle system
export const ParticleSystem: React.FC<{ count?: number }> = ({ count = 50 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particles = container.querySelectorAll('.particle');
    
    particles.forEach((particle, index) => {
      const element = particle as HTMLElement;
      
      // Random initial setup
      const size = 1 + Math.random() * 3;
      const speed = 0.5 + Math.random() * 2;
      
      gsap.set(element, {
        width: size,
        height: size,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: 0.3 + Math.random() * 0.7
      });

      // Floating animation
      gsap.to(element, {
        y: "-=200",
        x: `+=${Math.random() * 100 - 50}`,
        opacity: 0,
        duration: 5 + Math.random() * 5,
        repeat: -1,
        delay: index * 0.1,
        ease: "none",
        onRepeat: () => {
          gsap.set(element, {
            y: window.innerHeight + 20,
            x: Math.random() * window.innerWidth,
            opacity: 0.3 + Math.random() * 0.7
          });
        }
      });
    });
  }, []);

  const particles = Array.from({ length: count }, (_, i) => (
    <div
      key={i}
      className="particle absolute rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
      style={{ filter: 'blur(0.5px)' }}
    />
  ));

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0">
      {particles}
    </div>
  );
};

// Magnetic cursor effect
export const MagneticCursor: React.FC<{ children: React.ReactNode; strength?: number }> = ({
  children,
  strength = 0.3
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePosition();

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = mousePosition.x - centerX;
    const distanceY = mousePosition.y - centerY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
    
    // Only apply effect when mouse is within reasonable distance
    if (distance < 200) {
      const force = Math.max(0, 1 - distance / 200);
      const moveX = distanceX * force * strength;
      const moveY = distanceY * force * strength;

      gsap.to(element, {
        x: moveX,
        y: moveY,
        duration: 0.8,
        ease: "power2.out"
      });
    } else {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      });
    }
  }, [mousePosition, strength]);

  return (
    <div ref={elementRef} className="transform-gpu">
      {children}
    </div>
  );
};

// Morphing blob background
export const MorphingBlob: React.FC<{ className?: string }> = ({ className = '' }) => {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const blob = blobRef.current;
    if (!blob) return;

    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    
    tl.to(blob, {
      borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
      duration: 4,
      ease: "sine.inOut"
    })
    .to(blob, {
      borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
      duration: 4,
      ease: "sine.inOut"
    })
    .to(blob, {
      borderRadius: "50% 50% 50% 50% / 50% 50% 50% 50%",
      duration: 4,
      ease: "sine.inOut"
    });

    // Rotation animation
    gsap.to(blob, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none"
    });

  }, []);

  return (
    <div
      ref={blobRef}
      className={`absolute bg-gradient-to-r from-purple-400/20 via-pink-500/20 to-blue-500/20 blur-xl ${className}`}
      style={{
        borderRadius: "50% 50% 50% 50% / 50% 50% 50% 50%"
      }}
    />
  );
};

// Helper functions
const getShapeClasses = (type: string): string => {
  const baseClasses = 'transform-gpu';
  switch (type) {
    case 'circle':
      return `${baseClasses} rounded-full`;
    case 'square':
      return `${baseClasses} rounded-md`;
    case 'triangle':
      return `${baseClasses} rounded-sm`;
    case 'diamond':
      return `${baseClasses} rounded-lg rotate-45`;
    default:
      return baseClasses;
  }
};

const getRandomColor = (): string => {
  const colors = [
    '#3B82F6', '#8B5CF6', '#EF4444', '#10B981', 
    '#F59E0B', '#EC4899', '#06B6D4', '#84CC16'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export default {
  FloatingShapes,
  ParticleSystem,
  MagneticCursor,
  MorphingBlob
};
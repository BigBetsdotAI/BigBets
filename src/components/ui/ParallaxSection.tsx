import React, { useEffect, useState } from 'react';
import { useParallax } from '../../hooks/useParallax';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  direction?: 'up' | 'down';
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ 
  children, 
  speed = 0.5, 
  className = '',
  direction = 'up'
}) => {
  const parallaxOffset = useParallax(direction === 'up' ? -speed : speed);

  return (
    <div 
      className={`relative ${className}`}
      style={{
        transform: `translateY(${parallaxOffset}px)`,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;
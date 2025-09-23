import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'typewriter' | 'reveal' | 'slide' | 'morphing' | 'glitch';
  delay?: number;
  duration?: number;
  staggerDelay?: number;
}

// Typewriter effect component
export const TypewriterText: React.FC<{ text: string; className?: string; delay?: number }> = ({
  text,
  className = '',
  delay = 0
}) => {
  const [displayText, setDisplayText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !isVisible) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }
      }, delay + currentIndex * 50);

      return () => clearTimeout(timer);
    }
  }, [isInView, currentIndex, text, delay, isVisible]);

  return (
    <div ref={ref} className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-0.5 h-6 bg-current ml-1"
      />
    </div>
  );
};

// Text reveal with mask effect
export const RevealText: React.FC<AnimatedTextProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.8
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ 
          duration, 
          delay,
          ease: [0.645, 0.045, 0.355, 1]
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

// Morphing text effect
export const MorphingText: React.FC<AnimatedTextProps> = ({
  children,
  className = '',
  delay = 0
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ 
        filter: 'blur(10px)',
        scale: 0.8,
        rotateX: 90
      }}
      animate={isInView ? {
        filter: 'blur(0px)',
        scale: 1,
        rotateX: 0
      } : {}}
      transition={{
        duration: 1.2,
        delay,
        ease: "easeOut"
      }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </motion.div>
  );
};

// Glitch text effect
export const GlitchText: React.FC<{ text: string; className?: string }> = ({
  text,
  className = ''
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const glitchTl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
    
    glitchTl
      .to(element, {
        duration: 0.1,
        skewX: 70,
        ease: "power4.inOut"
      })
      .to(element, {
        duration: 0.04,
        skewX: 0,
        ease: "power4.inOut"
      })
      .to(element, {
        duration: 0.04,
        opacity: 0
      })
      .to(element, {
        duration: 0.04,
        opacity: 1,
        x: -20
      })
      .to(element, {
        duration: 0.04,
        x: 0
      })
      .set(element, {
        filter: "hue-rotate(90deg)"
      })
      .to(element, {
        duration: 0.04,
        filter: "hue-rotate(0deg)"
      });

  }, []);

  return (
    <div ref={ref} className={`relative ${className}`}>
      {text}
    </div>
  );
};

// Split text animation
export const SplitText: React.FC<{
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}> = ({
  text,
  className = '',
  delay = 0,
  staggerDelay = 0.1
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(' ');

  return (
    <div ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: 100, rotateX: 90 }}
            animate={isInView ? { y: 0, rotateX: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: delay + i * staggerDelay,
              ease: [0.645, 0.045, 0.355, 1]
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && ' '}
        </span>
      ))}
    </div>
  );
};

// Character-by-character animation
export const AnimatedChars: React.FC<{
  text: string;
  className?: string;
  delay?: number;
}> = ({
  text,
  className = '',
  delay = 0
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const chars = text.split('');

  return (
    <div ref={ref} className={className}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ 
            y: 50,
            opacity: 0,
            rotateY: 90,
            filter: 'blur(10px)'
          }}
          animate={isInView ? { 
            y: 0,
            opacity: 1,
            rotateY: 0,
            filter: 'blur(0px)'
          } : {}}
          transition={{
            duration: 0.6,
            delay: delay + i * 0.03,
            ease: "easeOut"
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
};

export default {
  TypewriterText,
  RevealText,
  MorphingText,
  GlitchText,
  SplitText,
  AnimatedChars
};
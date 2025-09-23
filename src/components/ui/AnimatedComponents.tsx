import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { gsap } from 'gsap';
import { useScrollTrigger } from '../../hooks/useScrollAnimation';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  index?: number;
}

interface CounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

// Staggered card entrance animation
export const StaggeredCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
  delay = 0,
  index = 0
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        filter: "blur(0px)"
      });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className={`transform-gpu ${className}`}
      initial={{
        opacity: 0,
        y: 100,
        rotateX: 45,
        scale: 0.8,
        filter: "blur(5px)"
      }}
      animate={controls}
      transition={{
        duration: 0.8,
        delay: delay + index * 0.2,
        ease: [0.645, 0.045, 0.355, 1],
        type: "spring",
        stiffness: 100
      }}
      whileHover={{
        y: -10,
        rotateY: 5,
        scale: 1.05,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </motion.div>
  );
};

// Morphing hover card
export const MorphingCard: React.FC<AnimatedCardProps> = ({
  children,
  className = ''
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden transform-gpu ${className}`}
      whileHover="hover"
      initial="initial"
      variants={{
        initial: {
          borderRadius: "12px",
        },
        hover: {
          borderRadius: "24px",
          scale: 1.03,
          rotateY: 5,
          rotateX: 5,
        }
      }}
      transition={{
        duration: 0.4,
        ease: "easeOut"
      }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Gradient overlay that appears on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-pink-500/20"
        variants={{
          initial: { opacity: 0, scale: 0.8 },
          hover: { opacity: 1, scale: 1 }
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Animated border */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl"
        variants={{
          initial: { opacity: 0, rotate: 0 },
          hover: { opacity: 0.3, rotate: 180 }
        }}
        transition={{ duration: 0.6 }}
        style={{ padding: '2px', margin: '-1px' }}
      />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

// 3D tilt card
export const TiltCard: React.FC<AnimatedCardProps> = ({
  children,
  className = ''
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateX = (mouseY / (rect.height / 2)) * -15;
    const rotateY = (mouseX / (rect.width / 2)) * 15;

    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.3,
      ease: "power2.out",
      transformPerspective: 1000
    });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power2.out"
    });
  };

  return (
    <div
      ref={cardRef}
      className={`transform-gpu cursor-pointer ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
};

// Animated counter with easing
export const AnimatedCounter: React.FC<CounterProps> = ({
  target,
  duration = 2,
  suffix = '',
  prefix = '',
  className = ''
}) => {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useScrollTrigger(-100);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
      
      let startTime: number;
      const startValue = 0;
      const endValue = target;
      
      const animateCounter = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        
        const progress = (timestamp - startTime) / (duration * 1000);
        const easedProgress = easeOutCubic(Math.min(progress, 1));
        
        const currentValue = startValue + (endValue - startValue) * easedProgress;
        setCount(Math.floor(currentValue));
        
        if (progress < 1) {
          requestAnimationFrame(animateCounter);
        } else {
          setCount(endValue);
        }
      };
      
      requestAnimationFrame(animateCounter);
    }
  }, [isVisible, target, duration, hasAnimated]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={isVisible ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {prefix}{count.toLocaleString()}{suffix}
    </motion.span>
  );
};

// Carousel with momentum scrolling
export const MomentumCarousel: React.FC<{ children: React.ReactNode[] }> = ({
  children
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % children.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + children.length) % children.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isDragging, children.length]);

  return (
    <div 
      ref={carouselRef}
      className="relative overflow-hidden"
      onMouseEnter={() => setIsDragging(true)}
      onMouseLeave={() => setIsDragging(false)}
    >
      <motion.div
        className="flex"
        animate={{ x: -currentIndex * 100 + '%' }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30
        }}
        drag="x"
        dragConstraints={{ left: -(children.length - 1) * 100, right: 0 }}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = Math.abs(offset.x) > 50 || Math.abs(velocity.x) > 500;
          if (swipe) {
            if (offset.x > 0) {
              prevSlide();
            } else {
              nextSlide();
            }
          }
        }}
      >
        {children.map((child, index) => (
          <motion.div
            key={index}
            className="w-full flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: index === currentIndex ? 1 : 0.6,
              scale: index === currentIndex ? 1 : 0.9,
              rotateY: index === currentIndex ? 0 : 15
            }}
            transition={{ duration: 0.5 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {child}
          </motion.div>
        ))}
      </motion.div>
      
      {/* Dots indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {children.map((_, index) => (
          <motion.button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
};

// Helper function for easing
const easeOutCubic = (t: number): number => {
  return 1 - Math.pow(1 - t, 3);
};

export default {
  StaggeredCard,
  MorphingCard,
  TiltCard,
  AnimatedCounter,
  MomentumCarousel
};
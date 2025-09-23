import { useEffect, useState, useRef, useCallback } from 'react';

// Hook for tracking scroll progress
export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScroll = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? currentScroll / totalHeight : 0;
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return scrollProgress;
};

// Hook for intersection observer with threshold options
export const useIntersectionObserver = (
  threshold: number = 0.1,
  rootMargin: string = '0px'
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [intersectionRatio, setIntersectionRatio] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        setIntersectionRatio(entry.intersectionRatio);
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin]);

  return { ref, isIntersecting, intersectionRatio };
};

// Hook for smooth scroll-based animations
export const useScrollTrigger = (
  offset: number = 0,
  threshold: number = 0.1
) => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          // Calculate progress based on how much of element is visible
          const rect = entry.boundingClientRect;
          const windowHeight = window.innerHeight;
          const elementProgress = Math.max(0, Math.min(1, 
            (windowHeight - rect.top) / (windowHeight + rect.height)
          ));
          setProgress(elementProgress);
        }
      },
      { 
        threshold,
        rootMargin: `${offset}px 0px ${offset}px 0px`
      }
    );

    observer.observe(element);

    const handleScroll = () => {
      if (!element || !isVisible) return;
      
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementProgress = Math.max(0, Math.min(1, 
        (windowHeight - rect.top) / (windowHeight + rect.height)
      ));
      setProgress(elementProgress);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.unobserve(element);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offset, threshold, isVisible]);

  return { ref, isVisible, progress };
};

// Hook for mouse position tracking
export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
};

// Hook for smooth value interpolation
export const useSmoothValue = (targetValue: number, speed: number = 0.1) => {
  const [currentValue, setCurrentValue] = useState(targetValue);
  const animationRef = useRef<number>();

  useEffect(() => {
    const animate = () => {
      setCurrentValue(prev => {
        const diff = targetValue - prev;
        if (Math.abs(diff) < 0.001) {
          return targetValue;
        }
        return prev + diff * speed;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [targetValue, speed]);

  return currentValue;
};

// Hook for debounced scroll events
export const useDebounceScroll = (delay: number = 16) => {
  const [scrollY, setScrollY] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleScroll = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      timeoutRef.current = setTimeout(() => {
        setScrollY(window.scrollY);
      }, delay);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [delay]);

  return scrollY;
};
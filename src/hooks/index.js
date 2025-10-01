import { useState, useEffect } from 'react';

/**
 * Custom hook for managing component mounting state
 * @returns {boolean} - True if component is mounted
 */
export const useIsMounted = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return isMounted;
};

/**
 * Custom hook for handling window resize events
 * @returns {Object} - Object with width and height properties
 */
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

/**
 * Custom hook for handling scroll position
 * @returns {Object} - Object with x and y scroll positions
 */
export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition({
        x: window.pageXOffset,
        y: window.pageYOffset
      });
    };

    window.addEventListener('scroll', updatePosition);
    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
};

/**
 * Custom hook for debouncing values
 * @param {any} value - Value to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {any} - Debounced value
 */
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

/**
 * Custom hook for local storage state management
 * @param {string} key - Local storage key
 * @param {any} initialValue - Initial value
 * @returns {Array} - [value, setValue] array
 */
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
};

/**
 * Custom hook for handling intersection observer
 * @param {Object} options - Intersection observer options
 * @returns {Array} - [ref, isIntersecting, entry] array
 */
export const useIntersectionObserver = (options = {}) => {
  const [ref, setRef] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      setEntry(entry);
    }, options);

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return [setRef, isIntersecting, entry];
};

/**
 * Custom hook for handling click outside element
 * @param {Function} handler - Function to call when clicking outside
 * @returns {Object} - Ref object to attach to element
 */
export const useClickOutside = (handler) => {
  const ref = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handler]);

  return ref;
};

/**
 * Custom hook for handling async operations
 * @param {Function} asyncFunction - Async function to execute
 * @param {Array} dependencies - Dependencies array for useEffect
 * @returns {Object} - Object with data, loading, error, execute properties
 */
export const useAsync = (asyncFunction, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = async (...args) => {
    setLoading(true);
    setError(null);
    try {
      const result = await asyncFunction(...args);
      setData(result);
      return result;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    execute();
  }, dependencies);

  return { data, loading, error, execute };
};

/**
 * Custom hook for handling form state
 * @param {Object} initialValues - Initial form values
 * @param {Function} validate - Validation function
 * @returns {Object} - Form state and handlers
 */
export const useForm = (initialValues = {}, validate = () => ({})) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (name, value) => {
    setValues(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const newErrors = validate({ ...values, [name]: value });
      setErrors(prev => ({ ...prev, [name]: newErrors[name] }));
    }
  };

  const handleBlur = (name) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    const newErrors = validate(values);
    setErrors(prev => ({ ...prev, [name]: newErrors[name] }));
  };

  const handleSubmit = (onSubmit) => (e) => {
    e.preventDefault();
    const newErrors = validate(values);
    setErrors(newErrors);
    setTouched(Object.keys(values).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
    
    if (Object.keys(newErrors).length === 0) {
      onSubmit(values);
    }
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    reset
  };
};

/**
 * Custom hook for handling media queries
 * @param {string} query - Media query string
 * @returns {boolean} - True if media query matches
 */
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(query);
    const handler = (event) => setMatches(event.matches);

    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
  }, [query]);

  return matches;
};

/**
 * Custom hook for handling previous value
 * @param {any} value - Current value
 * @returns {any} - Previous value
 */
export const usePrevious = (value) => {
  const ref = useState();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
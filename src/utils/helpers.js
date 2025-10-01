/**
 * Format number with commas as thousand separators
 * @param {number} num - The number to format
 * @returns {string} - Formatted number string
 */
export const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * Format currency with dollar sign and commas
 * @param {number} amount - The amount to format
 * @param {string} currency - Currency symbol (default: '$')
 * @returns {string} - Formatted currency string
 */
export const formatCurrency = (amount, currency = '$') => {
  return `${currency}${formatNumber(amount)}`;
};

/**
 * Format percentage with specified decimal places
 * @param {number} value - The value to format as percentage
 * @param {number} decimals - Number of decimal places (default: 1)
 * @returns {string} - Formatted percentage string
 */
export const formatPercentage = (value, decimals = 1) => {
  return `${value.toFixed(decimals)}%`;
};

/**
 * Format date to readable string
 * @param {Date|string} date - The date to format
 * @param {Object} options - Intl.DateTimeFormat options
 * @returns {string} - Formatted date string
 */
export const formatDate = (date, options = {}) => {
  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-US', { ...defaultOptions, ...options }).format(dateObj);
};

/**
 * Truncate text to specified length with ellipsis
 * @param {string} text - The text to truncate
 * @param {number} maxLength - Maximum length before truncation
 * @returns {string} - Truncated text with ellipsis if needed
 */
export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + '...';
};

/**
 * Generate a random ID string
 * @param {number} length - Length of the ID (default: 8)
 * @returns {string} - Random ID string
 */
export const generateId = (length = 8) => {
  return Math.random().toString(36).substr(2, length);
};

/**
 * Debounce function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle function calls
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} - Throttled function
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Check if element is in viewport
 * @param {Element} element - DOM element to check
 * @returns {boolean} - True if element is in viewport
 */
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Smooth scroll to element
 * @param {string|Element} target - CSS selector or DOM element
 * @param {number} offset - Offset from top in pixels (default: 0)
 */
export const scrollToElement = (target, offset = 0) => {
  const element = typeof target === 'string' ? document.querySelector(target) : target;
  if (element) {
    const top = element.offsetTop - offset;
    window.scrollTo({
      top,
      behavior: 'smooth'
    });
  }
};

/**
 * Get scroll position
 * @returns {Object} - Object with x and y scroll positions
 */
export const getScrollPosition = () => {
  return {
    x: window.pageXOffset || document.documentElement.scrollLeft,
    y: window.pageYOffset || document.documentElement.scrollTop
  };
};

/**
 * Check if device is mobile
 * @returns {boolean} - True if mobile device
 */
export const isMobile = () => {
  return window.innerWidth <= 768;
};

/**
 * Check if device is tablet
 * @returns {boolean} - True if tablet device
 */
export const isTablet = () => {
  return window.innerWidth > 768 && window.innerWidth <= 1024;
};

/**
 * Check if device is desktop
 * @returns {boolean} - True if desktop device
 */
export const isDesktop = () => {
  return window.innerWidth > 1024;
};

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} - True if successful
 */
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      return true;
    } catch (err) {
      return false;
    } finally {
      document.body.removeChild(textArea);
    }
  }
};

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid email format
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number format
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - True if valid phone format
 */
export const isValidPhone = (phone) => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[^\d\+]/g, ''));
};

/**
 * Get contrast color (black or white) for a given background color
 * @param {string} hexColor - Hex color code
 * @returns {string} - 'black' or 'white'
 */
export const getContrastColor = (hexColor) => {
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? 'black' : 'white';
};

/**
 * Convert hex color to RGB
 * @param {string} hex - Hex color code
 * @returns {Object} - RGB object with r, g, b properties
 */
export const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

/**
 * Create a delay/sleep function
 * @param {number} ms - Milliseconds to delay
 * @returns {Promise} - Promise that resolves after delay
 */
export const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
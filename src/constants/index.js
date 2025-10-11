/* Layout Constants */
export const LAYOUT_CONSTANTS = {
  HEADER_HEIGHT: '80px',
  FOOTER_HEIGHT: '200px',
  SIDEBAR_WIDTH: '280px',
  CONTAINER_MAX_WIDTH: '1200px',
  BREAKPOINTS: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  }
};

/* Animation Durations */
export const ANIMATION_DURATIONS = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
  slower: '1000ms'
};

/* Z-Index Scale */
export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modal: 1040,
  popover: 1050,
  tooltip: 1060,
  toast: 1070
};

/* Color Palette */
export const COLORS = {
  primary: '#8B5CF6',
  secondary: '#3B82F6',
  accent: '#EC4899',
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  background: {
    primary: '#0f0f1a',
    secondary: '#1a1a2e',
    card: 'rgba(255, 255, 255, 0.05)',
    overlay: 'rgba(0, 0, 0, 0.5)'
  },
  text: {
    primary: '#ffffff',
    secondary: '#94a3b8',
    muted: '#64748b'
  },
  border: {
    primary: 'rgba(255, 255, 255, 0.1)',
    secondary: 'rgba(255, 255, 255, 0.05)'
  }
};

/* Spacing Scale */
export const SPACING = {
  xs: '0.25rem',   // 4px
  sm: '0.5rem',    // 8px
  md: '0.75rem',   // 12px
  lg: '1rem',      // 16px
  xl: '1.25rem',   // 20px
  '2xl': '1.5rem', // 24px
  '3xl': '2rem',   // 32px
  '4xl': '2rem', // 40px
  '5xl': '3rem',   // 48px
  '6xl': '4rem',   // 64px
  '7xl': '5rem',   // 80px
  '8xl': '6rem'    // 96px
};

/* Typography Scale */
export const TYPOGRAPHY = {
  fontSizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
    '7xl': '4.5rem',  // 72px
    '8xl': '6rem'     // 96px
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800
  },
  lineHeights: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75
  }
};

/* Border Radius Scale */
export const BORDER_RADIUS = {
  none: '0',
  sm: '0.125rem',  // 2px
  md: '0.375rem',  // 6px
  lg: '0.5rem',    // 8px
  xl: '0.75rem',   // 12px
  '2xl': '1rem',   // 16px
  '3xl': '1.5rem', // 24px
  full: '9999px'
};

/* Shadow Scale */
export const SHADOWS = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  purple: '0 20px 40px -12px rgba(139, 92, 246, 0.4)',
  blue: '0 20px 40px -12px rgba(59, 130, 246, 0.4)',
  pink: '0 20px 40px -12px rgba(236, 72, 153, 0.4)'
};

/* Gradients */
export const GRADIENTS = {
  primary: 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)',
  secondary: 'linear-gradient(135deg, #3B82F6 0%, #EC4899 100%)',
  accent: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
  rainbow: 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 25%, #10B981 50%, #F59E0B 75%, #EC4899 100%)'
};

/* Component States */
export const COMPONENT_STATES = {
  idle: 'idle',
  loading: 'loading',
  success: 'success',
  error: 'error',
  disabled: 'disabled'
};

/* Navigation Items */
export const NAV_ITEMS = [
  { label: 'Home', href: '/', id: 'home' },
  { label: 'About', href: '/about', id: 'about' },
  { label: 'Services', href: '/services', id: 'services' },
  { label: 'Products', href: '/products', id: 'products' },
  { label: 'Resources', href: '/resources', id: 'resources' },
  { label: 'Testimonials', href: '/testimonials', id: 'testimonials' }
];

/* Company Information */
export const COMPANY_INFO = {
  name: 'ConPro.AI',
  tagline: 'AI-Powered Construction Intelligence',
  description: 'Transforming the construction industry with cutting-edge artificial intelligence solutions.',
  email: 'contact@conpro.ai',
  phone: '+1 (555) 123-4567',
  address: '123 Innovation Drive, Tech City, TC 12345',
  social: {
    linkedin: 'https://linkedin.com/company/conpro-ai',
    twitter: 'https://twitter.com/conpro_ai',
    github: 'https://github.com/conpro-ai'
  }
};

/* Feature Lists */
export const FEATURES = {
  main: [
    {
      id: 'ai-analytics',
      title: 'AI-Powered Analytics',
      description: 'Advanced machine learning algorithms analyze your construction data to provide actionable insights.',
      icon: '🧠'
    },
    {
      id: 'real-time-monitoring',
      title: 'Real-time Monitoring',
      description: 'Monitor your construction projects in real-time with IoT sensors and smart devices.',
      icon: '📊'
    },
    {
      id: 'predictive-maintenance',
      title: 'Predictive Maintenance',
      description: 'Predict equipment failures before they happen with our AI-driven maintenance system.',
      icon: '🔧'
    },
    {
      id: 'automated-reporting',
      title: 'Automated Reporting',
      description: 'Generate comprehensive reports automatically with our intelligent reporting system.',
      icon: '📋'
    }
  ]
};

/* Statistics */
export const STATS = [
  { label: 'Projects Completed', value: '500+', suffix: '' },
  { label: 'Cost Savings', value: '30', suffix: '%' },
  { label: 'Time Reduction', value: '45', suffix: '%' },
  { label: 'Client Satisfaction', value: '98', suffix: '%' }
];

/* Testimonials */
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'John Smith',
    title: 'Project Manager',
    company: 'BuildCorp Inc.',
    content: 'ConPro.AI has revolutionized how we manage our construction projects. The AI insights are incredibly accurate.',
    rating: 5
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    title: 'Construction Director',
    company: 'MegaBuild Ltd.',
    content: 'The predictive maintenance feature saved us thousands in equipment costs. Highly recommended!',
    rating: 5
  },
  {
    id: 3,
    name: 'Mike Chen',
    title: 'Site Supervisor',
    company: 'Urban Developments',
    content: 'Real-time monitoring has improved our site safety and efficiency significantly.',
    rating: 5
  }
];

/* API Endpoints */
export const API_ENDPOINTS = {
  base: process.env.REACT_APP_API_URL || 'https://api.conpro.ai',
  auth: '/auth',
  projects: '/projects',
  analytics: '/analytics',
  reports: '/reports',
  notifications: '/notifications'
};
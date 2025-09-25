import React, { useState, useEffect } from 'react';
import Loader from '../../components/common/Loader';
import Header from '../../components/common/Header';
import { useRef } from 'react';
import ParallaxSection from '../../components/ui/ParallaxSection';
import Button from '../../components/ui/Button';
import ChipView from '../../components/ui/ChipView';

// Import our crazy animation components
import { TypewriterText, RevealText, MorphingText, GlitchText, SplitText, AnimatedChars } from '../../components/ui/AnimatedText';
import { FloatingShapes, ParticleSystem, MagneticCursor, MorphingBlob } from '../../components/ui/FloatingElements';
import { StaggeredCard, MorphingCard, TiltCard, AnimatedCounter, MomentumCarousel } from '../../components/ui/AnimatedComponents';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useScrollProgress, useScrollTrigger, useMousePosition } from '../../hooks/useScrollAnimation';
const conferenceImage = 'https://ggggg.s3.eu-north-1.amazonaws.com/Untitled+design.png';
const logo = "https://bitbet33.s3.ap-northeast-1.amazonaws.com/assets/logos/companylogo.png";
const Blog1 = "https://bitbet33.s3.ap-northeast-1.amazonaws.com/assets/images/blog1.webp";
const Blog2 = "https://bitbet33.s3.ap-northeast-1.amazonaws.com/assets/images/blog2.jpeg";
const Blog3 = "https://bitbet33.s3.ap-northeast-1.amazonaws.com/assets/images/blog3.webp";
const team1 = "https://bitbet33.s3.ap-northeast-1.amazonaws.com/assets/images/Team1.jpeg";
const team2 = "https://bitbet33.s3.ap-northeast-1.amazonaws.com/assets/images/Team2.jpeg";
const youtube = "https://bitbet33.s3.ap-northeast-1.amazonaws.com/assets/images/YouTube.png";
const team4 = "https://bitbet33.s3.ap-northeast-1.amazonaws.com/assets/images/Team4.jpeg";
const team6 = "https://bitbet33.s3.ap-northeast-1.amazonaws.com/assets/images/Team6.jpeg";
const team7 = "https://bitbet33.s3.ap-northeast-1.amazonaws.com/assets/images/Team7.jpeg";
const expertise = "https://bitbet33.s3.ap-northeast-1.amazonaws.com/assets/images/expertise.png";
const bigbets = "https://bitbet33.s3.ap-northeast-1.amazonaws.com/assets/logos/logo.png";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  index?: number;
}

interface StatItemProps {
  value: string;
  label: string;
  color: string;
}

interface TestimonialProps {
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

interface BlogCardProps {
  image: string;
  title: string;
  excerpt: string;
  readTime?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  // Card animates up on hover and returns to original position on mouse leave
  return (
    <motion.div
      className="bg-white-transparent rounded-[34px] p-6 sm:p-8 shadow-[0px_5px_16px_#51a9e11e] group"
      whileHover={{ y: -18, boxShadow: "0px 12px 32px #51a9e133" }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      style={{ borderRadius: '34px' }}
    >
      <div style={{ borderRadius: '34px' }}>
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-4">
          <motion.img
            src={icon}
            alt=""
            className="w-9 h-9 sm:w-12 sm:h-12 flex-shrink-0"
            whileHover={{ rotate: 360 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, duration: 1.5 }}
            style={{ willChange: 'transform' }}
          />
          <div className="text-base sm:text-lg font-inter font-medium text-dark-custom text-center sm:text-left">
            {title}
          </div>
        </div>
        <div
          className="text-sm font-inter text-secondary-custom leading-6 text-center sm:text-left"
        >
          {description}
        </div>
      </div>
    </motion.div>
  );
};

const StatItem: React.FC<StatItemProps> = ({ value, label, color }) => (
  <div className="flex flex-col items-center gap-2">
    <MorphingText className={`text-3xl sm:text-4xl md:text-5xl font-inter font-bold ${color}`}>
      {value}
    </MorphingText>
    <RevealText 
      className="text-base sm:text-xxl font-inter text-secondary-custom text-center"
      delay={0.3}
    >
      {label}
    </RevealText>
  </div>
);

const TestimonialCard: React.FC<TestimonialProps> = ({ name, role, avatar, content, rating }) => (
  <div className="max-w-4xl mx-auto text-center">
    {/* Star Rating */}
    <div className="flex items-center justify-center mb-6">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-6 h-6 ${i < rating ? 'text-yellow-400' : 'text-gray-300'} mx-1`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
        </svg>
      ))}
    </div>

    {/* Testimonial Content */}
    <blockquote className="text-xl md:text-2xl font-inter text-gray-700 leading-relaxed italic mb-8">
      "{content}"
    </blockquote>

    {/* User Info Below Paragraph */}
    <div className="flex items-center justify-center gap-4">
      <img 
        src={avatar} 
        alt={name} 
        className="w-16 h-16 rounded-full object-cover" 
      />
      <div className="text-left">
        <div className="font-inter font-semibold text-gray-900 text-lg">
          {name}
        </div>
        <div className="text-sm text-gray-600">
          {role}
        </div>
      </div>
    </div>
  </div>
);

// Custom Testimonial Slider Component
const TestimonialSlider: React.FC<{ testimonials: TestimonialProps[] }> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-swipe every 2 seconds (pause on hover)
  useEffect(() => {
    if (!isPaused) {
      const autoSlide = setInterval(() => {
        goToNext();
      }, 2000); // 2 seconds

      return () => clearInterval(autoSlide);
    }
  }, [currentIndex, isPaused]);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200"
        aria-label="Previous testimonial"
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200"
        aria-label="Next testimonial"
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Testimonial Container */}
      <div className="overflow-hidden mx-16">
        <motion.div
          className="flex"
          animate={{ x: -currentIndex * 100 + "%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentIndex ? 'bg-red-500' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const BlogCard1: React.FC<BlogCardProps> = ({ image, title, excerpt }) => (
  <motion.div 
    className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 ease-out"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    whileHover={{ y: -8, scale: 1.02 }}
  >
    <div>
      <motion.img 
        src={Blog1} 
        alt={title} 
        className="w-full h-48 sm:h-56 object-cover rounded-xl mb-4" 
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
      <h3 className="text-lg font-inter font-semibold text-dark-custom mb-3 leading-tight">
        {title}
      </h3>
      <p className="text-sm font-inter font-medium text-secondary-custom leading-7 mb-6">
        {excerpt}
      </p>
      <div className="flex items-center gap-2">
        <a className="text-sm font-inter font-medium text-dark-custom hover:text-red-custom transition-colors duration-200 cursor-pointer">Click Me</a>
      </div>
    </div>
  </motion.div>
);
const BlogCard2: React.FC<BlogCardProps> = ({ image, title, excerpt }) => (
  <motion.div 
    className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 ease-out"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
    whileHover={{ y: -8, scale: 1.02 }}
  >
    <div>
      <motion.img 
        src={Blog2} 
        alt={title} 
        className="w-full h-48 sm:h-56 object-cover rounded-xl mb-4" 
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
      <h3 className="text-lg font-inter font-semibold text-dark-custom mb-3 leading-tight">
        {title}
      </h3>
      <p className="text-sm font-inter font-medium text-secondary-custom leading-7 mb-6">
        {excerpt}
      </p>
      <div className="flex items-center gap-2">
        <a className="text-sm font-inter font-medium text-dark-custom hover:text-red-custom transition-colors duration-200 cursor-pointer">Click Me</a>
      </div>
    </div>
  </motion.div>
);
const BlogCard3: React.FC<BlogCardProps> = ({ image, title, excerpt }) => (
  <motion.div 
    className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 ease-out"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
    whileHover={{ y: -8, scale: 1.02 }}
  >
    <div>
      <motion.img 
        src={Blog3} 
        alt={title} 
        className="w-full h-48 sm:h-56 object-cover rounded-xl mb-4" 
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
      <h3 className="text-lg font-inter font-semibold text-dark-custom mb-3 leading-tight">
        {title}
      </h3>
      <p className="text-sm font-inter font-medium text-secondary-custom leading-7 mb-6">
        {excerpt}
      </p>
      <div className="flex items-center gap-2">
        <a className="text-sm font-inter font-medium text-dark-custom hover:text-red-custom transition-colors duration-200 cursor-pointer">Click Me</a>
      </div>
    </div>
  </motion.div>
);
const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const headerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scroll animation hooks
  const scrollProgress = useScrollProgress();
  const { scrollY } = useScroll();
  const mousePosition = useMousePosition();
  
  // Parallax transforms
  const heroY = useTransform(scrollY, [0, 1000], [0, -200]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const parallaxY1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const parallaxY2 = useTransform(scrollY, [0, 1000], [0, -150]);
  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Loader />
      </div>
    );
  }
  const chipItems = [
    { id: 'bi-big-data', label: 'BI and Big Data' },
    { id: 'data-science-ai', label: 'Data Science and AI solutions' },
    { id: 'ml-consulting', label: 'ML Consulting & Data Strategy' },
    { id: 'all-case-studies', label: 'All Case Studies' },
  ];

  const services = [
    {
  icon: 'https://bitbet33.s3.ap-northeast-1.amazonaws.com/assets/images/img_icon.svg',
      title: 'AI Strategy & Consulting',
      description:
        'Got a project in mind? We help you shape and execute it, offering expert guidance to sidestep common pitfalls and drive success.',
    },
    {
  icon: 'https://bitbet33.s3.ap-northeast-1.amazonaws.com/assets/images/img_icon_cyan_700.svg',
      title: 'MLOps/LLMOps',
      description:
        'From deployment to scaling, we bring the expertise needed to streamline your model operations and avoid costly mistakes.',
    },
    {
  icon: 'https://bitbet33.s3.ap-northeast-1.amazonaws.com/assets/images/img_icon_cyan_700_36x34.svg',
      title: 'Agentic AI Platforms',
      description:
        'Need help building or integrating Agentic AI platforms? We guide you through every step to ensure smooth and efficient implementation.',
    },
    {
  icon: 'https://bitbet33.s3.ap-northeast-1.amazonaws.com/assets/images/img_tabler_icon_message_2_code.svg',
      title: 'Intelligence Document Processing',
      description:
        'Turn unstructured documents into actionable data. We help you design smart workflows and avoid inefficiencies from the start.',
    },
    {
  icon: 'https://bitbet33.s3.ap-northeast-1.amazonaws.com/assets/images/img_tabler_icon_message_2_share.svg',
      title: 'Advanced RAG',
      description:
        'Build high-performance RAG systems with our support—from planning to production—while avoiding common technical roadblocks.',
    },
    {
  icon: 'https://bitbet33.s3.ap-northeast-1.amazonaws.com/assets/images/img_tabler_icon_dev.svg',
      title: 'Readymade Agents',
      description:
        'Accelerate your project with pre-built AI agents. We help you choose, customize, and integrate them with minimal risk.',
    },
  ];
  const products = [
    {
  icon: 'https://bitbet33.s3.ap-northeast-1.amazonaws.com/assets/images/img_icon.svg',
      title: 'RAG Platform',
      description:
        'Have a project idea and need help implementing it? We are here to consult you and share our knowledge to help you avoid all unnecessary pitfalls.',
    },
    {
  icon: 'https://bitbet33.s3.ap-northeast-1.amazonaws.com/assets/images/img_icon_cyan_700.svg',
      title: 'Intelligence Document Processing',
      description:
        'Have a project idea and need help implementing it? We are here to consult you and share our knowledge to help you avoid all unnecessary pitfalls.',
    },
    {
  icon: 'https://bitbet33.s3.ap-northeast-1.amazonaws.com/assets/images/img_icon_cyan_700_36x34.svg',
      title: 'Agentic AI Platforms',
      description:
        'Have a project idea and need help implementing it? We are here to consult you and share our knowledge to help you avoid all unnecessary pitfalls.',
    },
  ];
  const testimonials = [
    {
      name: 'Cameron Williamson',
      role: 'Head of Innovation, Healthcare Tech Company',
  avatar: 'https://bitbet33.s3.ap-northeast-1.amazonaws.com/assets/images/img_avatar.png',
      content:
        'GenAI Consulting helped us turn AI ideas into action. Their team quickly identified high-impact use cases, guided tool selection, and delivered working prototypes within weeks. Clear, practical, and highly collaborative—they made AI adoption feel simple and strategic.',
      rating: 5,
    },
    {
      name: 'Esther Howard',
      role: 'Operations Lead, Financial Services Firm',
  avatar: 'https://bitbet33.s3.ap-northeast-1.amazonaws.com/assets/images/img_avatar_40x40.png',
      content:
        'The IDP solution transformed how we handle documents—cut processing time by 70% and boosted accuracy. Seamless integration, smart automation, and real results.',
      rating: 5,
    },
    {
      name: 'Jenny Wilson',
      role: 'UI/UX Designer',
  avatar: 'https://bitbet33.s3.ap-northeast-1.amazonaws.com/assets/images/img_avatar_1.png',
      content:
        'We were impressed by their deep understanding of U.S. healthcare systems and how seamlessly they applied agentic AI to streamline clinical and operational tasks. The solution wasn’t just smart—it was compliant, scalable, and tailored to our needs.',
      rating: 4,
    },
  ];

  const blogPosts = [
    {
      image: 'images/blog1.webp',
      title: '👉 BLOG 1',
      excerpt:
        'The rapid advance of artificial intelligence has generated a lot of buzz, with some predicting it...',
    },
  ];
  const blogPosts1 = [
    {
  image: 'https://bitbet33.s3.ap-northeast-1.amazonaws.com/assets/images/blog2.jpeg',
      title: '👉 BLOG 2',
      excerpt: 'A look at the latest trends and research in AI and data science.',
    },
  ];
  const blogPosts2 = [
    {
  image: 'https://bitbet33.s3.ap-northeast-1.amazonaws.com/assets/images/blog3.webp',
      title: '👉 BLOG 3',
      excerpt: 'Exploring the impact of agentic AI platforms in healthcare.',
    },
  ];

  const handleFooterContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Find the header contact button and trigger click
    const header = headerRef.current;
    if (header) {
      const btn = header.querySelector('button');
      if (btn) btn.click();
    }
  };
  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      
      {/* Hero Section with Enhanced Animations */}
      <motion.div 
        className="relative min-h-screen bg-gradient-to-br from-dark via-secondary to-tertiary overflow-hidden"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        {/* Background Elements with Parallax */}
        <motion.div className="relative min-h-screen bg-gradient-to-br from-dark via-secondary to-tertiary overflow-hidden">
          {/* Background Elements */}
          <motion.div 
            className="absolute inset-0"
            style={{ y: parallaxY1 }}
          >
            <img
              src={conferenceImage}
              alt="Conference Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </motion.div>


  {/* Header */}
      <div ref={headerRef}>
  <Header className="sticky top-0 z-50 bg-white bg-opacity-60 backdrop-blur-md shadow-sm" />
      </div>

  {/* Hero Content */}
  <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-8 text-center">
    <div className="max-w-4xl mx-auto">
      {/* Title */}
      <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-raleway font-bold text-white mb-3 sm:mb-4 leading-tight">
        GenAI, Agentic AI Implementation At Enterprise Level
      </h3>

      {/* Sub Title */}
      <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-raleway font-bold bg-gradient-to-r from-primary to-orange bg-clip-text text-transparent mb-6 sm:mb-8 leading-tight">
        Bespoke AI Solutions For Your Needs
      </h2>

      {/* Paragraph */}
      <p className="text-base sm:text-lg md:text-xl font-raleway text-white mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
        At BigBets.AI we harness GenAI and Agentic AI to solve real healthcare challenges.
        Precision, impact and measurable outcomes — That’s our promise.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center">
        <Button variant="primary" size="medium" className="w-full sm:w-auto">
          GenAI Demo
        </Button>
        <Button variant="primary" size="medium" className="w-full sm:w-auto">
          Agentic AI Demo
        </Button>
      </div>
    </div>
  </div>
        </motion.div>
      </motion.div>

      <br></br>
        {/* Trusted Companies */}
        <div className="relative z-10 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xl font-inter text-white uppercase tracking-wider mb-8">
              Trusted by 20+ companies around the globe.
            </p>
            
            {/* Individual Company Logos */}
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80 hover:opacity-100 transition-opacity duration-300">
              <img src="https://bitbet33.s3.ap-northeast-1.amazonaws.com/assets/images/TCS.png" alt="TCS" className="h-10 md:he-12 w-auto object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 cursor-pointer" />
              <img src="https://bitbet33.s3.ap-northeast-1.amazonaws.com/assets/images/wipro.png" alt="Wipro" className="h-10 md:he-12 w-auto object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 cursor-pointer" />
              <img src="https://bitbet33.s3.ap-northeast-1.amazonaws.com/assets/images/Infosys.png" alt="Infosys" className="h-10 md:he-12 w-auto object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 cursor-pointer" />
              <img src="https://ggggg.s3.eu-north-1.amazonaws.com/hcl-removebg-preview.png" alt="HCL" className="h-12 md:h-14 max-w-[120px] md:max-w-[140px] object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 cursor-pointer" />
              
              {/* Additional Company Logos with larger sizes */}
              <img src="https://ggggg.s3.eu-north-1.amazonaws.com/Cognizant.png" alt="Cognizant" className="h-12 md:h-14 max-w-[120px] md:max-w-[140px] object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 cursor-pointer" />
              <img src="https://ggggg.s3.eu-north-1.amazonaws.com/Genpact-Logo.wine-removebg-preview.png" alt="Genpact" className="h-12 md:h-14 max-w-[120px] md:max-w-[140px] object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 cursor-pointer" />
              <img src="https://ggggg.s3.eu-north-1.amazonaws.com/Accenture-Symbol-removebg-preview.png" alt="Accenture" className="h-12 md:h-14 max-w-[120px] md:max-w-[140px] object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 cursor-pointer" />
              <img src="https://ggggg.s3.eu-north-1.amazonaws.com/Tech_Mahindra-Logo.wine-removebg-preview.png" alt="Tech Mahindra" className="h-12 md:h-14 max-w-[120px] md:max-w-[140px] object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 cursor-pointer" />
            </div>
          </div>
        </div>

      {/* Services Section */}
      <div id="services" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <RevealText className="text-lg font-raleway font-bold text-red-custom uppercase tracking-[4px] mb-4">
              Our SERVICES
            </RevealText>
            <GlitchText 
              text="How We Can Help You"
              className="text-3xl sm:text-4xl md:text-5xl font-raleway font-semibold text-dark-custom mb-6"
            />
            <RevealText 
              className="text-xl font-manrope text-secondary-custom max-w-3xl mx-auto"
              delay={0.5}
            >
              20+ years of experience in US healthcare. One bold mission: Outcome first innovation.
              BigBets.AI deliveres GenAI and Agentic AI solution where they matter most.
            </RevealText>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 items-start">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-10">
            <Button variant="primary" size="medium">
              I Need Free Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="lg:w-1/3">
              <div className="text-3xl sm:text-4xl font-inter font-semibold text-black leading-tight">
                Why Work With Us?
              </div>
            </div>
            <div className="lg:w-2/3 flex flex-col sm:flex-row justify-around items-center gap-8 sm:gap-4">
              <div className="flex flex-col items-center gap-2">
                <MorphingText className="text-3xl sm:text-4xl md:text-5xl font-inter font-bold text-orange-custom">
                  100%
                </MorphingText>
                <RevealText className="text-base sm:text-xxl font-inter text-secondary-custom text-center" delay={0.3}>
                  AI-Focused
                </RevealText>
              </div>
              <div className="hidden sm:block w-px h-20 bg-gray-300"></div>
              <div className="flex flex-col items-center gap-2">
                <AnimatedCounter 
                  target={6} 
                  className="text-3xl sm:text-4xl md:text-5xl font-inter font-bold text-green-custom"
                  duration={1.5}
                />
                <RevealText className="text-base sm:text-xxl font-inter text-secondary-custom text-center" delay={0.5}>
                  Six-Day Sprint Cycle
                </RevealText>
              </div>
              <div className="hidden sm:block w-px h-20 bg-gray-300"></div>
              <div className="flex flex-col items-center gap-2">
                <AnimatedCounter 
                  target={15} 
                  suffix="+"
                  className="text-3xl sm:text-4xl md:text-5xl font-inter font-bold text-primary-custom"
                  duration={2}
                />
                <RevealText className="text-base sm:text-xxl font-inter text-secondary-custom text-center" delay={0.7}>
                  Projects Shipped
                </RevealText>
              </div>
            </div>
          </div>
        </div>
      </div>

  {/* Product Section */}
  <div id="products" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <RevealText className="text-lg font-raleway font-bold text-red-custom uppercase tracking-[4px] mb-4">
              Our PRODUCTS
            </RevealText>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {products.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>

  {/* Blog Section */}
  <div id="research" className="py-16 sm:py-20 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <GlitchText 
              text="Our Research"
              className="text-lg font-raleway font-bold text-red-custom uppercase tracking-[4px] mb-4"
            />
          </div>

          {/* Blog Grid with extra margin above */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard1 key={index} {...post} />
            ))}
            {blogPosts1.map((post, index) => (
              <BlogCard2 key={index} {...post} />
            ))}
            {blogPosts2.map((post, index) => (
              <BlogCard3 key={index} {...post} />
            ))}
          </div>
        </div>
      </div>

  {/* Team Section */}
  <div id="about" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SplitText 
              text={"Meet\u00A0our\u00A0team"}
              className="text-3xl sm:text-4xl md:text-5xl font-raleway font-semibold text-dark-custom mb-6"
              staggerDelay={0.1}
            />
            <RevealText 
              className="text-base font-raleway text-secondary-custom max-w-3xl mx-auto"
              delay={0.8}
            >
              Meet our passionate and talented team, committed to delivering exceptional results,
              driving innovation, and transforming your vision into reality.
            </RevealText>
          </div>

          {/* Team Member Showcase */}
          <div className="relative mb-20">
            <div className="bg-white rounded-2xl shadow-[1px_-2px_9px_#00000026] p-8 max-w-4xl mx-auto">
              <p className="text-base font-raleway text-secondary-custom text-center mb-8 leading-relaxed">
                During a train ride, a moment of inspiration struck Vasily. He wished for a
                convenient study tool on his phone to help him prepare for the LSAT. However, such
                an app did not exist at the time. Determined to overcome this hurdle, Vasily took
                matters into his own hands and developed one of the earliest and most comprehensive
                LSAT apps on the market. The app quickly gained popularity, becoming the #1 paid
                LSAT app for over a year.
              </p>
              <div className="text-center">
                <h3 className="text-base font-inter font-semibold text-primary-custom mb-2">
                  BigBets.AI
                </h3>
                <p className="text-base font-inter text-muted-custom mb-4">CEO BigBets.AI</p>
                <div className="flex justify-center gap-5">
                  <img
                    src="https://bitbet33.s3.ap-northeast-1.amazonaws.com/assets/images/img_facebook.svg"
                    alt="Facebook"
                    className="w-4 h-4"
                  />
                  <img
                    src="https://bitbet33.s3.ap-northeast-1.amazonaws.com/assets/images/img_linkedin.svg"
                    alt="LinkedIn"
                    className="w-4 h-4"
                  />
                </div>
              </div>
            </div>
            {/* <img src="/images/img_shape.svg" alt="Profile" className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40" /> */}
          </div>

          {/* Team Photos */}
          <div className="flex flex-wrap justify-center items-center gap-0 mb-8">
                  <img
                    src={team1}
                    alt="Team member"
                    className="w-32 h-32 sm:w-44 sm:h-44 rounded-full object-cover flex-shrink-0"
                  />
                  <img
                    src={team2}
                    alt="Team member"
                    className="w-32 h-32 sm:w-44 sm:h-44 rounded-full object-cover flex-shrink-0"
                  />
                  <img
                    src={team4}
                    alt="Team member"
                    className="w-32 h-32 sm:w-44 sm:h-44 rounded-full object-cover flex-shrink-0"
                  />
                  <img
                    src={team6}
                    alt="Team member"
                    className="w-32 h-32 sm:w-44 sm:h-44 rounded-full object-cover flex-shrink-0"
                  />
                  <img
                    src={team7}
                    alt="Team member"
                    className="w-32 h-32 sm:w-44 sm:h-44 rounded-full object-cover flex-shrink-0"
                  />
          </div>

          {/* Navigation */}
          {/* <div className="flex justify-center gap-4">
            <img src="/bigbets/src/assets/images/img_left_arrow_yellow_800.svg" alt="Previous" className="w-10 h-10 rounded-lg cursor-pointer hover:bg-gray-100" />
            <img src="/bigbets/src/assets/images/img_right_arrow.svg" alt="Next" className="w-10 h-10 rounded-lg cursor-pointer hover:bg-gray-100" />
          </div> */}
        </div>
      </div>

      {/* AI Expertise Section */}
      <div className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="lg:w-1/2 relative">
              {/* AI Visualization */}
              <div className="relative bg-secondary rounded-3xl p-8 sm:p-12">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan via-primary to-orange opacity-20 rounded-3xl"></div>
                <div className="relative z-10 flex items-center justify-center">
                  {/* <div className="bg-very-light-blue rounded-full p-8 sm:p-12"> */}
                  {/* <div className="w-32 h-32 sm:w-40 sm:h-40 bg-very-light-blue rounded-full flex items-center justify-center"> */}
                  <img
                    src={expertise}
                    alt="AI Visualization"
                    className="w-full h-full object-contain"
                  />
                  {/* </div> */}
                  {/* </div> */}
                </div>
                {/* Decorative Elements */}
                {/* <div className="absolute top-8 left-8 w-8 h-8 bg-very-light-blue rounded-full"></div>
                <div className="absolute top-8 right-8 w-8 h-8 bg-very-light-blue rounded-full"></div>
                <div className="absolute bottom-8 left-8 w-8 h-8 bg-very-light-blue rounded-full"></div>
                <div className="absolute bottom-8 right-8 w-8 h-8 bg-very-light-blue rounded-full"></div> */}
              </div>
            </div>
            <div className="lg:w-1/2">
              <p className="text-sm font-raleway font-bold text-red-custom uppercase tracking-[4px] mb-6">
                Our AI Expertise
              </p>
              <h2 className="text-3xl sm:text-4xl font-raleway font-bold text-dark-custom mb-6 leading-tight">
                AI you can trust. Outcomes you can measure.
              </h2>
              <div className="space-y-4 mb-8">
                <p className="text-lg font-raleway font-light text-secondary-custom">
                  From LLM-driven automation to autonomous agents, our AI solutions are built for
                  real-world healthccare impact.
                </p>
                {/* <p className="text-lg font-raleway font-light text-secondary-custom">
                  companies claim AI as a strategic business priority
                </p>
                <p className="text-lg font-raleway font-light text-secondary-custom">
                  Our Mission is to Bring the Power of AI to Every Business
                </p> */}
              </div>
              {/* <Button variant="primary" size="medium">
                Learn More
              </Button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 sm:py-20 lg:py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-raleway font-semibold text-dark-custom mb-6">
              What our clients say
            </h2>
          </div>

          {/* Testimonials Slider with Navigation */}
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </div>

      {/* CTA Section */}
      {/* <div className="py-16 sm:py-20 lg:py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/img_bg_shape.svg" alt="Background" className="w-full h-full object-cover opacity-50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img src="/images/img_logo.svg" alt="ThinkAI Logo" className="w-16 h-20 mx-auto mb-8" />
          <h2 className="text-3xl sm:text-4xl font-inter font-semibold text-light-custom mb-6">
            Start Your First Conversation with BigBets.AI
          </h2>
          <p className="text-base font-inter text-custom-gray mb-12 max-w-2xl mx-auto">
            Join our 400,000+ person community and contribute to a more private and decentralized internet. Start for free.
          </p>
          <div className="bg-primary border-3 border-primary rounded-[28px] p-1 max-w-lg mx-auto">
            <div className="flex items-center justify-between">
              <textPath className="text-base font-raleway font-semibold text-white pl-6">
                <text  className="input-field"></text>
              </textPath>
              <Button variant="primary" size="small" className="rounded-[22px]">
                Get Started
              </Button>
            </div>
          </div>
        </div> */}
      {/* Decorative Elements */}
      {/* <div className="absolute top-16 left-16 w-24 h-30 bg-cyan rounded-[60px] shadow-[0px_4px_250px_#888888ff]"></div>
        <div className="absolute bottom-16 right-16 w-24 h-24 bg-primary rounded-[60px] shadow-[0px_4px_200px_#888888ff]"></div>
        <div className="absolute top-16 right-16 w-24 h-30 bg-orange rounded-[60px] shadow-[0px_4px_250px_#888888ff]"></div> */}
      {/* </div> */}

      {/* Footer */}
      <footer className="bg-tertiary py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-rubik font-bold text-white mb-6">
                {/* <span className="text-white">BigBets.</span> */}
                <img src={bigbets} alt="logo" className="w-20 h-20" />
                {/* <span className="bg-gradient-to-r from-primary to-orange bg-clip-text text-transparent">AI</span> */}
              </h3>
              <p className="text-sm font-inter text-white-transparent mb-8 leading-relaxed">
                With lots of unique blocks, you can easily build AI driven projects without coding.
              </p>
              <div className="flex gap-5">
                <a href="https://www.youtube.com/@BigBets.AI_Official" target="_blank" rel="noopener noreferrer" className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.117C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.391.569A2.994 2.994 0 0 0 .502 6.186C0 8.36 0 12 0 12s0 3.64.502 5.814a2.994 2.994 0 0 0 2.107 2.117C4.772 20.5 12 20.5 12 20.5s7.228 0 9.391-.569a2.994 2.994 0 0 0 2.107-2.117C24 15.64 24 12 24 12s0-3.64-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="https://www.instagram.com/bigbets.ai_official/" target="_blank" rel="noopener noreferrer" className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 2.75a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/bigbets-ai/" target="_blank" rel="noopener noreferrer" className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-sm font-inter text-white-transparent mbb-4">Company</h4>
              <div className="space-y-3">
                    <a
                      href="#about"
                      className="block text-base font-inter text-white hover:text-primary transition-colors"
                    >
                      About us
                    </a>
                    <a
                      href="#contact"
                      className="block text-base font-inter text-white hover:text-primary transition-colors"
                      onClick={handleFooterContactClick}
                    >
                      Contact us
                    </a>
                    <a
                      href="/"
                      className="block text-base font-inter text-white hover:text-primary transition-colors"
                    >
                      Careers
                    </a>
                    <a
                      href="#research"
                      className="block text-base font-inter text-white hover:text-primary transition-colors"
                    >
                      Research
                    </a>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-sm font-inter text-white-transparent mbb-4">Product</h4>
              <div className="space-y-3">
                {['RAG Platform', 'Intelligence Document Processing', 'Agentic AI Platforms'].map(
                  (link) => (
                    <a
                      key={link}
                      href="#"
                      className="block text-base font-inter text-white hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="text-sm font-inter text-white-transparent mbb-4">Services</h4>
              <div className="space-y-3">
                {[
                  'AI Consulting',
                  'Advanced RAG',
                  'Readymade Agents',
                  'MLOps/LLMOps',
                  'Intelligence Document Processing',
                  'Agentic AI Platforms',
                ].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block text-base font-inter text-white hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top */}
        {/* <div className="fixed bottom-8 right-8">
          <div className="bg-orange rounded-full p-3 cursor-pointer hover:bg-orange/90 transition-colors shadow-lg">
            <img src="/bigbets/src/assets/images/img_vector_white_a700.svg" alt="Scroll to top" className="w-6 h-6" />
          </div>
        </div> */}
      </footer>
    </div>
  );
};

export default Home;

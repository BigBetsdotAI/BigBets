import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ContactModal } from '../ui';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Always hide header when scrolling (except at very top)
      if (currentScrollY > 10) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    const handleOpenContactModal = () => setIsContactModalOpen(true);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('openContactModal', handleOpenContactModal);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('openContactModal', handleOpenContactModal);
    };
  }, [lastScrollY]);

  return (
    <header className={`header ${isVisible ? 'header-visible' : 'header-hidden'}`}>
      <div className="container">
        <div className="nav-brand">
          <Link to="/" className="logo">ConPro<span className="logo-accent">.AI</span></Link>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#services" className="nav-link">Services</a></li>
            <li><a href="#products" className="nav-link">Products</a></li>
            <li><a href="#testimonials" className="nav-link">Testimonials</a></li>
          </ul>
          <div className="nav-contact-btn-wrapper">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="btn btn-primary contact-btn header-contact-btn contact-btn-white"
            >
              Contact US
            </button>
          </div>
        </nav>

        <ContactModal 
          isOpen={isContactModalOpen} 
          onClose={() => setIsContactModalOpen(false)} 
        />
        
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;

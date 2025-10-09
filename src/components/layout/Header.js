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

  // Lock scroll on mobile when nav is open
  useEffect(() => {
    if (isMenuOpen && window.innerWidth <= 768) {
      document.body.classList.add('nav-locked');
    } else {
      document.body.classList.remove('nav-locked');
    }
    return () => {
      document.body.classList.remove('nav-locked');
    };
  }, [isMenuOpen]);

  return (
    <header className={`header ${isVisible ? 'header-visible' : 'header-hidden'}`}>
      <div className="container">
        {/* Hide logo when mobile nav is open */}
        {!isMenuOpen && (
          <div className="nav-brand">
            <Link to="/" className="logo">ConPro<span className="logo-accent">.AI</span></Link>
          </div>
        )}
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          {/* Cross (close) button, only visible when nav is open */}
          {isMenuOpen && (
            <button
              className="menu-close"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close navigation menu"
              style={{
                position: 'absolute',
                top: 8,
                right: 10,
                zIndex: 10001,
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 32,
                height: 32,
              }}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="5" y1="5" x2="17" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <line x1="17" y1="5" x2="5" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          )}
          <ul className="nav-links">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#services" className="nav-link">Services</a></li>
            <li><a href="#products" className="nav-link">Products</a></li>
            <li><a href="#testimonials" className="nav-link">Testimonials</a></li>
          </ul>
          <div className="nav-contact-btn-wrapper">
            <button
              onClick={() => {
                setIsMenuOpen(false);
                // Use requestAnimationFrame for smoother transition
                requestAnimationFrame(() => {
                  setTimeout(() => setIsContactModalOpen(true), 80);
                });
              }}
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
        
        {/* Hamburger menu button (hidden when open) */}
        {!isMenuOpen && (
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="container">
        <div className="nav-brand">
          <Link to="/" className="logo">ConPro<span className="logo-accent">.AI</span></Link>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link></li>
            <li><Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link></li>
            <li><Link to="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`}>Services</Link></li>
            <li><Link to="/products" className={`nav-link ${isActive('/products') ? 'active' : ''}`}>Products</Link></li>
            <li><Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link></li>
          </ul>
          <Link to="/contact" className="btn btn-primary contact-btn">Contact US</Link>
        </nav>
        
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
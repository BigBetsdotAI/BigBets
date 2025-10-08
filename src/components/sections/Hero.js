import React from 'react';
import heroAbstractFlow from '../../assets/images/hero-abstract-flow.png';
import '../../styles/hero-new.css';

const Hero = () => {
  // Custom event to open contact modal in Header
  const openContactModal = () => {
    const event = new CustomEvent('openContactModal');
    window.dispatchEvent(event);
  };
  return (
    <section 
      id="home" 
      className="hero-tailwind"
      style={{
        backgroundImage: `url(${heroAbstractFlow})`,
      }}
    >
      {/* Content container */}
      <div className="hero-container">
        <div className="hero-grid">
          {/* Text content */}
          <div className="hero-text-section">
            {/* Heading */}
            <h1 className="hero-heading">
              <span className="hero-heading-white">
                Unlock AI-Powered Insights to Drive<br />
              </span>
              {' '}
              <span className="hero-heading-gradient">
                Business Decisions Today
              </span>
            </h1>
            
            {/* Paragraph */}
            <p className="hero-paragraph">
              I've created comprehensive marketing-ready website copy that positions your healthcare AI solutions as 
              essential business transformations rather than just technology implementations. The content leverages 
              compelling statistics and ROI metrics to create urgency while addressing the real pain points healthcare 
              organizations face daily.
            </p>
            
            {/* Buttons */}
            <div className="hero-buttons">
              <button className="hero-btn" onClick={openContactModal}>
                Book a Demo
              </button>
              <button className="hero-btn" onClick={openContactModal}>
                GenAI Demo
              </button>
            </div>
          </div>
        </div>
        
        {/* Trust statement */}
        <div className="hero-trust">
          <p className="hero-trust-text">
            TRUSTED BY COMPANIES IN 100+ COUNTRIES AROUND THE GLOBE.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
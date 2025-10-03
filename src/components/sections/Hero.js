import React from 'react';
import purpleAbstractBg from '../../assets/images/purple-abstract-hero-bg.png';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <img 
          src={purpleAbstractBg} 
          alt="Hero Background" 
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Unlock AI-Powered Insights to Drive
              <br />
              <span className="gradient-text">Business Decisions</span> <span className="highlight-text">Today</span>
            </h1>
            <p className="hero-subtitle">
              I've created comprehensive marketing-ready website copy that positions your healthcare AI solutions as 
              essential business transformations rather than just technology implementations. The content leverages 
              compelling statistics and ROI metrics to create urgency while addressing the real pain points healthcare 
              organizations face daily.
            </p>
            <div className="hero-cta">
              <button className="btn btn-outline btn-large">
                Book a Demo
              </button>
              <button className="btn btn-outline btn-large">
                GenAI Demo
              </button>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="ai-brain-container">
              <div className="ai-brain">
                <div className="brain-core">
                  <div className="pulse-ring"></div>
                  <div className="pulse-ring-2"></div>
                </div>
                <div className="neural-connections">
                  <div className="connection line-1"></div>
                  <div className="connection line-2"></div>
                  <div className="connection line-3"></div>
                  <div className="connection line-4"></div>
                  <div className="connection line-5"></div>
                  <div className="connection line-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-trust-statement">
          <p className="trust-text">TRUSTED BY COMPANIES IN 100+ COUNTRIES AROUND THE GLOBE.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
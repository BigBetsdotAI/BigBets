import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="wave-pattern">
          <svg className="wave-svg" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <path d="M0,400 C300,200 900,600 1200,400 L1200,800 L0,800 Z" fill="url(#waveGradient)" opacity="0.3"/>
            <path d="M0,500 C400,300 800,700 1200,500 L1200,800 L0,800 Z" fill="url(#waveGradient2)" opacity="0.2"/>
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
              <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#EC4899" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
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
      </div>
    </section>
  );
};

export default Hero;
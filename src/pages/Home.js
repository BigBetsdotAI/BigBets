import React from 'react';
import {
  Hero,
  CompanyLogos,
  Stats,
  Products,
  Features,
  Testimonials,
  AIExpertise,
  Resources
} from '../components';

const Home = () => {
  return (
    <main>
      <Hero />
      <CompanyLogos />
      <Features />
      <Stats />
      <Products />
      <Resources />
      <AIExpertise />
      <Testimonials />

      {/* Start Your Journey Section */}
      <section className="journey-section">
        <div className="container">
          <div className="journey-content">
            <div className="journey-background">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                alt="Space background"
                className="journey-bg-image"
              />
              <div className="journey-overlay"></div>
            </div>
            <div className="journey-text">
              <h2 className="journey-title">Start Your Journey with ConPro.AI</h2>
              <div className="journey-form">
                <div className="input-group">
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="journey-input"
                  />
                  <button className="journey-button">Get Started</button>
                </div>
              </div>
            </div>
            <div className="journey-decorations">
              <div className="star star-1">✦</div>
              <div className="star star-2">✧</div>
              <div className="star star-3">✦</div>
              <div className="star star-4">✧</div>
              <div className="discord-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M33.85 8.3C31.26 7.12 28.49 6.25 25.61 5.75C25.56 5.74 25.51 5.77 25.49 5.82C25.15 6.45 24.77 7.24 24.5 7.88C21.42 7.42 18.36 7.42 15.34 7.88C15.07 7.23 14.68 6.45 14.34 5.82C14.32 5.77 14.27 5.75 14.22 5.75C11.34 6.25 8.57 7.12 5.98 8.3C5.96 8.31 5.95 8.32 5.94 8.34C0.86 16.73 -0.52 24.91 0.16 33C0.16 33.02 0.17 33.04 0.19 33.05C3.7 35.7 7.11 37.3 10.45 38.4C10.5 38.42 10.55 38.4 10.57 38.36C11.34 37.31 12.03 36.2 12.63 35.03C12.65 34.98 12.63 34.92 12.58 34.9C11.54 34.49 10.54 33.98 9.59 33.4C9.53 33.37 9.53 33.28 9.58 33.24C9.78 33.09 9.98 32.93 10.17 32.77C10.19 32.75 10.22 32.75 10.24 32.76C16.94 35.85 24.18 35.85 30.8 32.76C30.82 32.75 30.85 32.75 30.87 32.77C31.06 32.93 31.26 33.09 31.46 33.24C31.51 33.28 31.51 33.37 31.45 33.4C30.5 33.99 29.5 34.49 28.46 34.9C28.41 34.92 28.39 34.98 28.41 35.03C29.02 36.2 29.71 37.31 30.47 38.36C30.49 38.4 30.54 38.42 30.59 38.4C33.94 37.3 37.35 35.7 40.86 33.05C40.88 33.04 40.89 33.02 40.89 33C41.71 23.42 39.38 15.33 33.9 8.34C33.89 8.32 33.87 8.31 33.85 8.3ZM13.69 27.87C11.67 27.87 10.01 25.95 10.01 23.62C10.01 21.29 11.64 19.37 13.69 19.37C15.76 19.37 17.4 21.31 17.37 23.62C17.37 25.95 15.74 27.87 13.69 27.87ZM27.35 27.87C25.33 27.87 23.67 25.95 23.67 23.62C23.67 21.29 25.3 19.37 27.35 19.37C29.42 19.37 31.06 21.31 31.03 23.62C31.03 25.95 29.42 27.87 27.35 27.87Z" fill="#5865F2"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
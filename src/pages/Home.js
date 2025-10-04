import React from 'react';
import {
  Hero,
  CompanyLogos,
  WhyWorkWithUs,
  Products,
  Features,
  Testimonials,
  AIExpertise,
  Resources,
  
} from '../components';

const Home = () => {
  return (
    <main>
      <Hero />
      <CompanyLogos />
      <Features />
      <WhyWorkWithUs />
      <Products />
      <Resources />
      <AIExpertise />
      <Testimonials />

      {/* Why Work With Us Section */}

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
              <div className="journey-logo">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M33.85 8.3C31.26 7.12 28.49 6.25 25.61 5.75C25.56 5.74 25.51 5.77 25.49 5.82C25.15 6.45 24.77 7.24 24.5 7.88C21.42 7.42 18.36 7.42 15.34 7.88C15.07 7.23 14.68 6.45 14.34 5.82C14.32 5.77 14.27 5.75 14.22 5.75C11.34 6.25 8.57 7.12 5.98 8.3C5.96 8.31 5.95 8.32 5.94 8.34C0.86 16.73 -0.52 24.91 0.16 33C0.16 33.02 0.17 33.04 0.19 33.05C3.7 35.7 7.11 37.3 10.45 38.4C10.5 38.42 10.55 38.4 10.57 38.36C11.34 37.31 12.03 36.2 12.63 35.03C12.65 34.98 12.63 34.92 12.58 34.9C11.54 34.49 10.54 33.98 9.59 33.4C9.53 33.37 9.53 33.28 9.58 33.24C9.78 33.09 9.98 32.93 10.17 32.77C10.19 32.75 10.22 32.75 10.24 32.76C16.94 35.85 24.18 35.85 30.8 32.76C30.82 32.75 30.85 32.75 30.87 32.77C31.06 32.93 31.26 33.09 31.46 33.24C31.51 33.28 31.51 33.37 31.45 33.4C30.5 33.99 29.5 34.49 28.46 34.9C28.41 34.92 28.39 34.98 28.41 35.03C29.02 36.2 29.71 37.31 30.47 38.36C30.49 38.4 30.54 38.42 30.59 38.4C33.94 37.3 37.35 35.7 40.86 33.05C40.88 33.04 40.89 33.02 40.89 33C41.71 23.42 39.38 15.33 33.9 8.34C33.89 8.32 33.87 8.31 33.85 8.3ZM13.69 27.87C11.67 27.87 10.01 25.95 10.01 23.62C10.01 21.29 11.64 19.37 13.69 19.37C15.76 19.37 17.4 21.31 17.37 23.62C17.37 25.95 15.74 27.87 13.69 27.87ZM27.35 27.87C25.33 27.87 23.67 25.95 23.67 23.62C23.67 21.29 25.3 19.37 27.35 19.37C29.42 19.37 31.06 21.31 31.03 23.62C31.03 25.95 29.42 27.87 27.35 27.87Z" fill="#5865F2"/>
                </svg>
              </div>
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
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo-container">
                <span className="footer-logo">ConPro</span><span className="footer-logo-accent">.AI</span>
              </div>
              <div className="footer-social">
                <a href="#" className="social-link" aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor"/>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-links">
              <div className="footer-section">
                <h4 className="footer-title">Company</h4>
                <ul className="footer-list">
                  <li><a href="/about" className="footer-link">About us</a></li>
                  <li><a href="/contact" className="footer-link">Contact us</a></li>
                  <li><a href="/careers" className="footer-link">Careers</a></li>
                  <li><a href="/blogs" className="footer-link">Blogs</a></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4 className="footer-title">Product</h4>
                <ul className="footer-list">
                </ul>
              </div>

              <div className="footer-section">
                <h4 className="footer-title">Legal</h4>
                <ul className="footer-list">
                  <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
                  <li><a href="/terms" className="footer-link">Terms & Conditions</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;
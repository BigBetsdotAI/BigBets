import React from 'react';
import { About as AboutSection, Stats, AIExpertise, Testimonials } from '../components';

const About = () => {
  return (
    <main className="about-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="section-title">About ConPro.AI</h1>
          <p className="section-subtitle">
            Leading the future of construction with innovative AI solutions
          </p>
        </div>
      </section>
      <AboutSection />
      <Stats />
      <AIExpertise />
      <Testimonials />
    </main>
  );
};

export default About;
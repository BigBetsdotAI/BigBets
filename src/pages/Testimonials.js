import React from 'react';
import { Testimonials as TestimonialsSection } from '../components/sections';

const Testimonials = () => {
  return (
    <div className="page">
      <div className="page-hero">
        <h1 className="section-title">Client Testimonials</h1>
        <p className="section-subtitle">
          Hear what our clients say about their experience with ConPro.AI
        </p>
      </div>
      <TestimonialsSection />
    </div>
  );
};

export default Testimonials;
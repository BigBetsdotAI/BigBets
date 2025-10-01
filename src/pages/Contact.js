import React from 'react';
import { Contact as ContactSection, CompanyLogos, Stats } from '../components';

const Contact = () => {
  return (
    <main className="contact-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="section-title">Contact Us</h1>
          <p className="section-subtitle">
            Get in touch with our team to learn more about ConPro.AI
          </p>
        </div>
      </section>
      <ContactSection />
      <CompanyLogos />
      <Stats />
    </main>
  );
};

export default Contact;
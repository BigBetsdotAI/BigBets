import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get Started with ConPro.AI</h2>
          <p className="section-subtitle">
            Ready to transform your business with AI? Contact us for a personalized consultation
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3>Email Us</h3>
              <p>hello@conpro.ai</p>
              <p>support@conpro.ai</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>Call Us</h3>
              <p>+1 (555) 123-4567</p>
              <p>Mon-Fri, 9AM-6PM PST</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3>Visit Us</h3>
              <p>123 AI Innovation Drive</p>
              <p>San Francisco, CA 94105</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">💬</div>
              <h3>Live Chat</h3>
              <p>Available 24/7</p>
              <button className="btn btn-outline">Start Chat</button>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send us a Message</h3>
              
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about your AI needs and how we can help"
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary btn-large">
                Send Message
              </button>
              
              <p className="form-note">
                By submitting this form, you agree to our Privacy Policy and Terms of Service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
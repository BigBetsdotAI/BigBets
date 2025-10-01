import React from 'react';

const About = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CEO & Co-Founder',
      image: '👩‍💼',
      description: 'PhD in AI from MIT, former Google AI researcher'
    },
    {
      name: 'Alex Rodriguez',
      role: 'CTO & Co-Founder',
      image: '👨‍💻',
      description: 'Expert in ML systems, ex-Tesla Autopilot team'
    },
    {
      name: 'Maya Patel',
      role: 'Head of AI Research',
      image: '👩‍🔬',
      description: 'Published researcher in neural networks and deep learning'
    }
  ];

  const stats = [
    { number: '50M+', label: 'Data Points Processed' },
    { number: '99.8%', label: 'Accuracy Rate' },
    { number: '500+', label: 'Enterprise Clients' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About ConPro.AI</h2>
            <p className="about-description">
              Founded in 2020, ConPro.AI emerged from a vision to democratize artificial intelligence 
              for businesses of all sizes. Our team of world-class AI researchers and engineers 
              has created a platform that makes advanced AI accessible, reliable, and scalable.
            </p>
            <p className="about-description">
              We believe that AI should augment human intelligence, not replace it. Our solutions 
              are designed to empower your team to make better decisions, work more efficiently, 
              and unlock new possibilities for innovation.
            </p>
            
            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-visual">
            <div className="ai-network">
              <div className="network-node main-node">
                <div className="node-pulse"></div>
                AI
              </div>
              <div className="network-node node-1">ML</div>
              <div className="network-node node-2">Data</div>
              <div className="network-node node-3">Auto</div>
              <div className="network-node node-4">Pred</div>
              <div className="connection con-1"></div>
              <div className="connection con-2"></div>
              <div className="connection con-3"></div>
              <div className="connection con-4"></div>
            </div>
          </div>
        </div>
        
        <div className="team-section">
          <h3 className="team-title">Meet Our Leadership Team</h3>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-avatar">{member.image}</div>
                <h4 className="member-name">{member.name}</h4>
                <p className="member-role">{member.role}</p>
                <p className="member-description">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mission-section">
          <div className="mission-content">
            <h3>Our Mission</h3>
            <p>
              To accelerate human progress by making artificial intelligence accessible, 
              ethical, and beneficial for everyone. We're building the future where AI 
              enhances human potential across all industries and applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
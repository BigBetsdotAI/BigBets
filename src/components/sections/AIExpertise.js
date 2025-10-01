import React from 'react';

const AIExpertise = () => {
  const aiTechnologies = [
    { id: 'analytics', name: 'Analytics', icon: 'analytics-icon.png', position: 'top-left' },
    { id: 'ai-chip', name: 'AI Processing', icon: 'ai-chip-icon.png', position: 'top-center' },
    { id: 'database', name: 'Data Management', icon: 'database-icon.png', position: 'top-right' },
    { id: 'neural', name: 'Neural Networks', icon: 'neural-icon.png', position: 'bottom-left' },
    { id: 'automation', name: 'Automation', icon: 'automation-icon.png', position: 'bottom-center' },
    { id: 'cognitive', name: 'Cognitive AI', icon: 'cognitive-icon.png', position: 'bottom-right' }
  ];

  return (
    <section className="ai-expertise">
      <div className="container">
        <div className="expertise-content">
          <div className="ai-diagram">
            <div className="ai-network">
              {/* Central Chatbot */}
              <div className="central-bot">
                <div className="bot-icon">
                  <img src="/assets/images/chatbot-icon.png" alt="AI Chatbot" />
                </div>
              </div>
              
              {/* Connected AI Technologies */}
              {aiTechnologies.map((tech) => (
                <div key={tech.id} className={`ai-node ${tech.position}`}>
                  <div className="node-circle">
                    <img src={`/assets/images/${tech.icon}`} alt={tech.name} />
                  </div>
                  <div className="connection-line"></div>
                </div>
              ))}
              
              {/* Connecting Lines */}
              <svg className="connection-svg" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#A855F7" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                
                {/* Top connections */}
                <line x1="120" y1="80" x2="200" y2="160" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="200" y1="60" x2="200" y2="160" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="280" y1="80" x2="200" y2="160" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" />
                
                {/* Bottom connections */}
                <line x1="120" y1="320" x2="200" y2="240" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="200" y1="340" x2="200" y2="240" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="280" y1="320" x2="200" y2="240" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" />
              </svg>
            </div>
          </div>
          
          <div className="expertise-text">
            <div className="section-header">
              <p className="section-category">OUR AI EXPERTISE</p>
              <h2 className="section-title">
                customer service interactions<br />
                were responded to by chatbots
              </h2>
              <p className="section-description">
                Rorem ipsum dolor sit amet consectetur. Ac quam sem mi nibh volutpat enim pellentesque. Proin iaculis nisl et neque sed fermentum sollicitudin lectus. Rorem ipsum dolor sit amet consectetur. Ac quam sem mi nibh volutpat enim pellentesque. Proin iaculis nisl et neque sed fermentum sollicitudin lectus.
              </p>
              
              <button className="btn btn-outline btn-large">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIExpertise;
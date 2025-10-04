import React from 'react';
import aiNetworkDiagram from '../../assets/images/ai-chatbot-diagram.png';

const AIExpertise = () => {
  return (
    <section className="ai-expertise">
      <div className="container">
        <div className="expertise-content">
          <div className="ai-diagram">
            {/* Replace with your AI network diagram image */}
            <div className="ai-network-image">
              <img 
                src={aiNetworkDiagram} 
                alt="AI Network Diagram" 
                className="network-diagram"
              />
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
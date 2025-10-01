import React from "react";
import productImage from "../../assets/images/Screen-Shot-2022-12-06-at-13.14.38.png";

const Products = () => {
  return (
    <section id="products" className="products">
      <div className="container">
        <div className="products-content">
          <div className="products-visual">
            <div className="product-image-container">
              <img 
                src={productImage} 
                alt="ConPro.AI Product Screenshot" 
                className="product-screenshot"
              />
            </div>
          </div>
          
          <div className="products-text">
            <div className="section-header">
              <p className="section-category">OUR PRODUCTS</p>
              <h2 className="section-title">
                ChatApplication | Prior Authorization Insight Hub
              </h2>
              <p className="section-description">
                From intelligent conversations to streamlined healthcare workflows and data-driven insights — our AI-powered solutions transform the way businesses connect, operate, and decide.
              </p>
            </div>
            
            <div className="features-list">
              <div className="feature-item">
                <div className="feature-check">✓</div>
                <span>Real-time, context-aware communication with ChatApplication</span>
              </div>
              <div className="feature-item">
                <div className="feature-check">✓</div>
                <span>Faster, smarter healthcare approvals through Prior Authorization</span>
              </div>
              <div className="feature-item">
                <div className="feature-check">✓</div>
                <span>Actionable intelligence and predictive analytics with Insight Hub</span>
              </div>
              <div className="feature-item">
                <div className="feature-check">✓</div>
                <span>AI redefining efficiency, accuracy, and personalization</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

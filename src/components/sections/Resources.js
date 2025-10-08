import React, { useState, useRef } from 'react';

const Resources = () => {
  const categories = [
    'BI and Big Data',
    'Data Science and AI Solutions',
    'ML Consulting & Data Strategy',
    'All Case Studies'
  ];

  const articles = [
    {
      image: require('../../assets/images/healthcare-expensive.png'),
      title: 'The Hidden Price of Paperwork: U.S. Health Care\'s Administrative Burden',
      description: 'In the United States, the amount spent on billing, insurance paperwork, and regulatory compliance far exceeds that of other countries — adding hundreds of billions of dollars to overall health care costs each year.'
    },
    {
      image: require('../../assets/images/ai-trends-2025.png'),
      title: 'Top 10 AI Trends in Healthcare',
      description: 'Artificial Intelligence is reshaping healthcare across every layer of the system. Conversational and agentic AI are redefining patient interactions, while personalized healthcare is making treatments more tailored than ever.'
    },
    {
      image: require('../../assets/images/automation-healthcare.png'),
      title: 'Automation Eases the Prior Authorization Burden While Driving ROI',
      description: 'Prior authorization remains one of the most time-consuming and costly processes in healthcare, often leading to delays in care and frustration for both providers and patients. By leveraging automation'
    }
  ];

  // Mobile swipe state
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 50 && activeIndex < articles.length - 1) {
        setActiveIndex(activeIndex + 1);
      } else if (diff < -50 && activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Responsive: show carousel on mobile, grid on desktop
  return (
    <section className="resources">
      <div className="container">
        <div className="section-header">
          <p className="section-category">OUR BLOGS</p>
          <h2 className="section-title resources-title">Our Useful Resources</h2>
        </div>
        <div className="resource-categories">
          {categories.map((category, index) => (
            <button key={index} className={`category-btn ${index === 0 ? 'active' : ''}`}>
              {category}
            </button>
          ))}
        </div>
        {/* Desktop grid */}
        <div className="articles-grid">
          {articles.map((article, index) => (
            <div key={index} className="article-card">
              <div className="article-image">
                <img src={article.image} alt={article.title} />
              </div>
              <div className="article-content">
                <h3 className="article-title">{article.title}</h3>
                <p className="article-description">{article.description}</p>
                <button className="read-more-btn">
                  READ MORE →
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Mobile carousel */}
        <div className="articles-carousel-grid">
          <div className="articles-carousel">
            <div
              className="article-card"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{
                transition: 'transform 0.3s',
                width: '100%',
                maxWidth: 400,
                margin: '0 auto',
                display: 'block',
              }}
            >
              <div className="article-image">
                <img src={articles[activeIndex].image} alt={articles[activeIndex].title} />
              </div>
              <div className="article-content">
                <h3 className="article-title">{articles[activeIndex].title}</h3>
                <p className="article-description">{articles[activeIndex].description}</p>
                <button className="read-more-btn">
                  READ MORE →
                </button>
              </div>
            </div>
            {/* Dots */}
            <div className="carousel-dots">
              {articles.map((_, idx) => (
                <span
                  key={idx}
                  className={`carousel-dot${activeIndex === idx ? ' active' : ''}`}
                  onClick={() => setActiveIndex(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
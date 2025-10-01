import React from 'react';

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

  return (
    <section className="resources">
      <div className="container">
        <div className="section-header">
          <p className="section-category">OUR BLOGS</p>
          <h2 className="section-title">Our Useful Resources</h2>
        </div>
        
        <div className="resource-categories">
          {categories.map((category, index) => (
            <button key={index} className={`category-btn ${index === 0 ? 'active' : ''}`}>
              {category}
            </button>
          ))}
        </div>
        
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
      </div>
    </section>
  );
};

export default Resources;
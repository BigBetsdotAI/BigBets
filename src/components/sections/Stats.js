import React from 'react';

const Stats = () => {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-content">
          <div className="stats-text">
            <h2 className="stats-title">Why Work With Us?</h2>
          </div>
          
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years of applied experience</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Implemented projects worldwide</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">80+</div>
              <div className="stat-label">Qualified AI Engineer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
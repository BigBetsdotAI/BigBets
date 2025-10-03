import React, { useState, useEffect, useRef } from 'react';

const WhyWorkWithUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ experience: 0, projects: 0, engineers: 0 });
  const sectionRef = useRef(null);

  // Target values
  const targets = {
    experience: 5,
    projects: 100,
    engineers: 80
  };

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  // Animation effect
  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 fps
      const stepTime = duration / steps;

      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounts({
          experience: Math.floor(targets.experience * progress),
          projects: Math.floor(targets.projects * progress),
          engineers: Math.floor(targets.engineers * progress)
        });

        if (currentStep >= steps) {
          setCounts({
            experience: targets.experience,
            projects: targets.projects,
            engineers: targets.engineers
          });
          clearInterval(timer);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section className="why-work-section" ref={sectionRef}>
      <div className="container">
        <h2 className="why-work-title">Why Work With Us?</h2>
        <div className="why-work-stats">
          <div className="stat-item">
            <div className="stat-number">{counts.experience}+</div>
            <div className="stat-text">Years of applied experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{counts.projects}+</div>
            <div className="stat-text">Implemented projects worldwide</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{counts.engineers}+</div>
            <div className="stat-text">Qualified AI Engineer</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
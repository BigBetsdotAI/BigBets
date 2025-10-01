import React from 'react';

const CompanyLogos = () => {
  const companies = [
    { name: 'Walmart', logo: 'W' },
    { name: 'Amazon', logo: 'amazon' },
    { name: 'AliExpress', logo: 'AliExpress' },
    { name: 'eBay', logo: 'ebay' },
    { name: 'Apple', logo: '🍎' },
    { name: 'Samsung', logo: 'SAMSUNG' },
    { name: 'Nike', logo: '✓' },
    { name: 'Facebook', logo: 'f' }
  ];

  return (
    <section className="company-logos">
      <div className="container">
        <div className="trusted-by">
          <p className="trusted-text">TRUSTED BY COMPANIES IN 100+ COUNTRIES AROUND THE GLOBE.</p>
        </div>
        <div className="logos-grid">
          {companies.map((company, index) => (
            <div key={index} className="logo-item">
              <span className="company-logo">{company.logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
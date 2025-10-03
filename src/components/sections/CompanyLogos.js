import React from 'react';
import AmazonLogo from '../../assets/icons/amazon-logo.svg';
import AliExpressLogo from '../../assets/icons/aliexpress-logo.svg';
import EbayLogo from '../../assets/images/ebay.png';
import AppleLogo from '../../assets/icons/apple-logo.svg';
import SamsungLogo from '../../assets/icons/samsung-logo.svg';
import NikeLogo from '../../assets/icons/nike-logo.png';

const CompanyLogos = () => {
  const companies = [
    { name: 'Amazon', logo: AmazonLogo },
    { name: 'AliExpress', logo: AliExpressLogo },
    { name: 'eBay', logo: EbayLogo },
    { name: 'Apple', logo: AppleLogo },
    { name: 'Samsung', logo: SamsungLogo },
    { name: 'Nike', logo: NikeLogo }
  ];

  return (
    <section className="company-logos">
      <div className="container">
        
        <div className="logos-grid">
          {companies.map((company, index) => (
            <div key={index} className="logo-item">
              <img 
                src={company.logo} 
                alt={`${company.name} Logo`} 
                className="company-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
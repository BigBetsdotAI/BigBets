import React from 'react';
import Header from '../../components/common/Header';

const Services: React.FC = () => (
  <>
    <Header className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-sm" />
    <section id="services" className="py-20 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Our Services</h1>
      <p className="text-lg text-gray-700">This is the Services section. Add your content here.</p>
    </section>
  </>
);

export default Services;

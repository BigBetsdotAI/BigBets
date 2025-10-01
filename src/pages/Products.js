import React from 'react';
import { Products as ProductsSection, Features, AIExpertise, Stats } from '../components';

const Products = () => {
  return (
    <main className="products-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="section-title">Our Products</h1>
          <p className="section-subtitle">
            Advanced AI solutions for modern construction challenges
          </p>
        </div>
      </section>
      <ProductsSection />
      <Features />
      <AIExpertise />
      <Stats />
    </main>
  );
};

export default Products;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components';
import { Home, About, Services, Products, Contact } from './pages';
import './styles/index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
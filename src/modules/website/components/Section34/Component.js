import React from 'react';
import { Link } from 'react-router-dom';
import ParticlesBackground from '../Particles/ParticlesBackground';
import './component.css';

const Social = () => {
  return (
    <div className="page-hero-section">
      <ParticlesBackground color="#d4d4d4" />
      <div className="page-hero-inner">
        {/* Breadcrumb */}
        <div className="page-breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-arrow">⟶</span>
          <span className="breadcrumb-current">Social Media Marketing</span>
        </div>

        {/* Main Title */}
        <h1 className="page-hero-title">
          Targeted Social <br />Media Marketing
        </h1>

        {/* Blockquote style subtitle */}
        <div className="page-hero-quote">
          <p>
            Data-driven ad campaigns designed to maximize ROI, generate leads, and boost overall brand visibility.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Social;

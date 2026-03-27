import React from 'react';
import { Link } from 'react-router-dom';
import ParticlesBackground from '../Particles/ParticlesBackground';
import './component.css';

const SoftwareDevelopment = () => {
  return (
    <div className="page-hero-section">
      <ParticlesBackground color="#d4d4d4" />
      <div className="page-hero-inner">
        {/* Breadcrumb */}
        <div className="page-breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-arrow">⟶</span>
          <span className="breadcrumb-current">Software Development</span>
        </div>

        {/* Main Title */}
        <h1 className="page-hero-title">
          Custom Software <br />Development
        </h1>

        {/* Blockquote style subtitle */}
        <div className="page-hero-quote">
          <p>
            Scalable, secure, and robust software solutions tailored to streamline your business operations and fuel growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDevelopment;

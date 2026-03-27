import React from 'react';
import { Link } from 'react-router-dom';
import ParticlesBackground from '../Particles/ParticlesBackground';
import './component.css';

const Socilamedia = () => {
  return (
    <div className="page-hero-section">
      <ParticlesBackground color="#d4d4d4" />
      <div className="page-hero-inner">
        {/* Breadcrumb */}
        <div className="page-breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-arrow">⟶</span>
          <span className="breadcrumb-current">Social Media Management</span>
        </div>

        {/* Main Title */}
        <h1 className="page-hero-title">
          Effective Social <br />Media Management
        </h1>

        {/* Blockquote style subtitle */}
        <div className="page-hero-quote">
          <p>
            Engage your audience with consistent, high-quality content that builds brand loyalty and community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Socilamedia;

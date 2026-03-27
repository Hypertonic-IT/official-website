import React from 'react';
import { Link } from 'react-router-dom';
import ParticlesBackground from '../Particles/ParticlesBackground';
import './component.css';

const AppDevelopment = () => {
  return (
    <div className="page-hero-section">
      <ParticlesBackground color="#d4d4d4" />
      <div className="page-hero-inner">
        {/* Breadcrumb */}
        <div className="page-breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-arrow">⟶</span>
          <span className="breadcrumb-current">App Development</span>
        </div>

        {/* Main Title */}
        <h1 className="page-hero-title">
          Innovative App <br />Development
        </h1>

        {/* Blockquote style subtitle */}
        <div className="page-hero-quote">
          <p>
            Building high-performance mobile applications that deliver seamless and engaging user experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppDevelopment;

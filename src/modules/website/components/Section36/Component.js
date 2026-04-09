import React from 'react';
import { Link } from 'react-router-dom';
import ParticlesBackground from '../Particles/ParticlesBackground';
import './component.css';

const Add = () => {
  return (
    <div className="page-hero-section">
      <div className="page-hero-inner">
        {/* Breadcrumb */}
        <div className="page-breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-arrow">⟶</span>
          <span className="breadcrumb-current">Advertising & Promotions</span>
        </div>

        {/* Main Title */}
        <h1 className="page-hero-title">
          Impactful Advertising <br />& Promotions
        </h1>

        {/* Blockquote style subtitle */}
        <div className="page-hero-quote">
          <p>
            Strategic promotional planning that puts your brand in front of the right audience at the perfect time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Add;

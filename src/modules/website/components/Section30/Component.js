import React from 'react';
import { Link } from 'react-router-dom';
import ParticlesBackground from '../Particles/ParticlesBackground';
import './component.css';

const UIUXDesign = () => {
  return (
    <div className="page-hero-section">
      <div className="page-hero-inner">
        {/* Breadcrumb */}
        <div className="page-breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-arrow">⟶</span>
          <span className="breadcrumb-current">UI/UX Design</span>
        </div>

        {/* Main Title */}
        <h1 className="page-hero-title">
          Creative UI/UX <br />Design
        </h1>

        {/* Blockquote style subtitle */}
        <div className="page-hero-quote">
          <p>
            Stunning visual interfaces combined with deep user research to craft designs that captivate and convert.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UIUXDesign;

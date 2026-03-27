import React from 'react';
import { Link } from 'react-router-dom';
import './component.css';

const AboutHero = () => {
  return (
    <div className="page-hero-section">
      <div className="page-hero-inner">
        {/* Breadcrumb */}
        <div className="page-breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-arrow">⟶</span>
          <span className="breadcrumb-current">About Us</span>
        </div>

        {/* Main Title */}
        <h1 className="page-hero-title">
          Our Story & <br />The Team Behind It
        </h1>

        {/* Blockquote style subtitle */}
        <div className="page-hero-quote">
          <p>
            From humble beginnings to a full-scale IT powerhouse, we've been driven by one goal — to deliver technology that makes a real difference for our clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;

import { Link } from 'react-router-dom';
import ParticlesBackground from '../Particles/ParticlesBackground';
import './component.css';

const SAASDevelopment = () => {
  return (
    <div className="page-hero-section">
      <div className="page-hero-inner">
        {/* Breadcrumb */}
        <div className="page-breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-arrow">⟶</span>
          <span className="breadcrumb-current">SaaS Platform Development</span>
        </div>

        {/* Main Title */}
        <h1 className="page-hero-title">
          Scalable SaaS <br />Platform Development
        </h1>

        {/* Blockquote style subtitle */}
        <div className="page-hero-quote">
          <p>
            End-to-end SaaS solutions that empower cloud-first businesses with speed, reliability, and security.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SAASDevelopment;

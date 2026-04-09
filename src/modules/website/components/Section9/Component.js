import { Link } from 'react-router-dom';
import ParticlesBackground from '../Particles/ParticlesBackground';
import './component.css';

const WebsiteDevelopment = () => {
  return (
    <div className="page-hero-section">
      <div className="page-hero-inner">
        {/* Breadcrumb */}
        <div className="page-breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-arrow">⟶</span>
          <span className="breadcrumb-current">Website Development</span>
        </div>

        {/* Main Title */}
        <h1 className="page-hero-title">
          Professional Website <br />Development
        </h1>

        {/* Blockquote style subtitle */}
        <div className="page-hero-quote">
          <p>
            From design and development to marketing and branding, we ensure every service is crafted to meet your unique goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebsiteDevelopment;

import { Link } from 'react-router-dom';
import ParticlesBackground from '../Particles/ParticlesBackground';
import './component.css';

const WebAppDevelopment = () => {
  return (
    <div className="page-hero-section">
      <div className="page-hero-inner">
        {/* Breadcrumb */}
        <div className="page-breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-arrow">⟶</span>
          <span className="breadcrumb-current">Webapp Development</span>
        </div>

        {/* Main Title */}
        <h1 className="page-hero-title">
          Powerful Webapp <br />Development
        </h1>

        {/* Blockquote style subtitle */}
        <div className="page-hero-quote">
          <p>
            Feature-rich web applications that bring complex business logic to a responsive and intuitive user interface.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebAppDevelopment;

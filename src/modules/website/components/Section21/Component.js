import { Link } from 'react-router-dom';
import ParticlesBackground from '../Particles/ParticlesBackground';
import './component.css';

const ContactHero = () => {
  return (
    <div className="page-hero-section">
      <div className="page-hero-inner">
        {/* Breadcrumb */}
        <div className="page-breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-arrow">⟶</span>
          <span className="breadcrumb-current">Contact Us</span>
        </div>

        {/* Main Title */}
        <h1 className="page-hero-title">
          Let's Build Something <br />Great Together
        </h1>

        {/* Blockquote style subtitle */}
        <div className="page-hero-quote">
          <p>
            Have a project in mind or just want to say hello? We're always open to discussing new ideas, creative projects, and opportunities to be part of your vision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;

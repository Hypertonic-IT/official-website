import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

// Tech icons — using Remixicon + Font Awesome classes
const TECH_ICONS = [
  { icon: 'ri-reactjs-line',       label: 'React',      color: '#61DAFB' },
  { icon: 'ri-nodejs-line',        label: 'Node.js',    color: '#8CC84B' },
  { icon: 'ri-database-2-line',    label: 'MongoDB',    color: '#47A248' },
  { icon: 'ri-code-s-slash-line',  label: 'Python',     color: '#3776AB' },
  { icon: 'ri-layout-line',        label: 'Next.js',    color: '#ffffff' },
  { icon: 'ri-server-line',        label: 'Server',     color: '#f97316' },
  { icon: 'fab fa-php',            label: 'PHP',        color: '#8892BF' },
  { icon: 'ri-smartphone-line',    label: 'Mobile',     color: '#A78BFA' },
];

const SplashScreen = ({ onDone }) => {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Minimum display time: 2.6s (matches bar animation + small delay)
    const exitTimer = setTimeout(() => {
      setExiting(true);
    }, 2600);

    const doneTimer = setTimeout(() => {
      if (onDone) onDone();
    }, 3350); // exit anim is 0.7s

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div className={`splash-screen ${exiting ? 'splash-exit' : ''}`}>
      {/* Ambient glow */}
      <div className="splash-glow" />

      <div className="splash-center">
        {/* Logo */}
        <img
          src="/img/hyperlogo.png"
          alt="Hypertonic"
          className="splash-logo"
        />

        {/* Orbital ring with rotating tech icons */}
        <div className="splash-orbit-wrap">
          {/* Decorative static rings */}
          <div className="splash-ring" />
          <div className="splash-ring splash-ring-2" />

          {/* All icons inside ONE rotating wrapper — they orbit together */}
          <div className="splash-orbit-ring">
            {TECH_ICONS.map((tech) => (
              <div
                className="splash-icon"
                key={tech.label}
                title={tech.label}
              >
                <i className={tech.icon} style={{ color: tech.color }} />
              </div>
            ))}
          </div>
        </div>

        {/* Tag line */}
        <p className="splash-tagline">Building Digital Excellence</p>

        {/* Progress bar */}
        <div className="splash-bar-wrap">
          <div className="splash-bar-fill" />
        </div>

        {/* Bouncing dots */}
        <div className="splash-dots">
          <span className="splash-dot" />
          <span className="splash-dot" />
          <span className="splash-dot" />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;

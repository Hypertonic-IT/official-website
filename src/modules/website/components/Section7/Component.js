import React from 'react';
import './component.css';
import '../Section1/component.css'; // Using the polished classes from Section1

const TopAbout = () => {
  return (
    <div className="about-section dark-theme-section ">
      <div className="about-container">

        <div className="about-main" style={{ paddingTop: '20px' }}>
          {/* LEFT: Content */}
          <div className="about-left">
            <p className="section-label" style={{ color: '#888', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '11px', marginBottom: '15px' }}>Our Mission</p>
            <h2 className="we-comme" style={{ marginBottom: '20px' }}>Your Partner for Software Innovation</h2>
            <div className="divider-line"></div>
            {/* Mobile Fallback Image */}
            <img
              src="img/aboutus.png"
              alt="About Hypertonic"
              className="mobile-only-element img-fluid rounded mb-4"
              style={{ width: '100%', marginTop: '0px', boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }}
            />
            <p className="about-text">Hypertonic It Solutions is the partner of choice for many of the world’s leading enterprises, SMEs, and technology challengers. We help businesses elevate their value through custom software development, product design, QA, and consultancy services.</p>

            <p className="about-text">What sets us apart is our unwavering commitment to excellence. We adhere to strict timelines and maintain meticulous project management to ensure timely delivery without compromising on quality.</p>

            <div className="about-stats-row" style={{ marginTop: '30px' }}>
              <div className="about-stat">
                <p className="about-stat-number">100%</p>
                <p className="about-stat-label">Quality</p>
              </div>
              <div className="about-stat">
                <p className="about-stat-number">24/7</p>
                <p className="about-stat-label">Support</p>
              </div>
              <div className="about-stat">
                <p className="about-stat-number">50+</p>
                <p className="about-stat-label">Projects</p>
              </div>
            </div>
          </div>

          {/* RIGHT: High-end UI Composition */}
          <div className="about-right">



            <div className="about-ui-composition desktop-only-element" data-cursor-text="Hypertonic">
              {/* Abstract Glass Frames */}
              <div className="about-frame about-frame-1"></div>
              <div className="about-frame about-frame-2"></div>

              {/* Code Snippet Card */}
              <div className="about-card about-code-card">
                <div className="about-card-header">
                  <div className="about-dots">
                    <span></span><span></span><span></span>
                  </div>
                  <div className="hq-title">&lt;/Code&gt;</div>
                </div>
                <div className="about-code-lines">
                  <p className="about-code-line"><span className="about-keyword">class</span> Hypertonic <span className="about-keyword">extends</span> Agency {"{"}</p>
                  <p className="about-code-line pl-3">deliver() {"{"}</p>
                  <p className="about-code-line pl-4"><span className="about-keyword">return</span> "High-Quality Solutions";</p>
                  <p className="about-code-line pl-3">{"}"}</p>
                  <p className="about-code-line">{"}"};</p>
                  <span className="hq-cursor">_</span>
                </div>
              </div>

              {/* Data Graph Card */}
              <div className="about-card about-graph-card">
                <div className="about-graph-header">
                  <div className="about-graph-title" style={{ fontSize: '11px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Growth Model</div>
                  <i className="ri-line-chart-line" style={{ color: '#fff' }}></i>
                </div>

                {/* Curved SVG Line (Same as Hero) */}
                <svg className="about-graph-line" viewBox="0 0 100 50" style={{ marginTop: '20px', height: '80px' }}>
                  <path d="M0 40 Q 15 35, 25 30 T 45 20 T 65 25 T 85 15 T 100 5" fill="none" stroke="url(#about-sync-gradient)" strokeWidth="1.5" />
                  <circle cx="25" cy="30" r="1.5" fill="#fff" />
                  <circle cx="45" cy="20" r="1.5" fill="#fff" />
                  <circle cx="65" cy="25" r="1.5" fill="#fff" />
                  <circle cx="85" cy="15" r="1.5" fill="#fff" />
                  <defs>
                    <linearGradient id="about-sync-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
                      <stop offset="100%" stopColor="#fff" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="about-graph-labels" style={{ marginTop: '15px' }}>
                  <span style={{ fontSize: '9px', color: '#444' }}>JAN</span>
                  <span style={{ fontSize: '9px', color: '#444' }}>APR</span>
                  <span style={{ fontSize: '9px', color: '#444' }}>JUL</span>
                  <span style={{ fontSize: '9px', color: '#444' }}>OCT</span>
                </div>
              </div>

              {/* Floating Element */}
              <div className="about-float about-float-1">
                <i className="ri-flashlight-line"></i>
                <div className="about-bar-group">
                  <div className="about-bar about-bar-1"></div>
                  <div className="about-bar about-bar-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TopAbout;

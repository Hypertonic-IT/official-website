import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './component.css';
import '../Section1/component.css'; // Using the polished classes from Section1

const CarouselSection = () => {
  const [displayText, setDisplayText] = React.useState('');
  const [serviceIndex, setServiceIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  const services = [
    "Web Development",
    "App Development",
    "Software Solutions",
    "Social Media Mgmt",
    "Digital Marketing",
    "Cloud Services"
  ];

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const currentService = services[serviceIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentService.substring(0, displayText.length + 1));
        if (displayText.length === currentService.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(currentService.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setServiceIndex((prev) => (prev + 1) % services.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, serviceIndex, services]);

  return (
    <div className="about-section dark-theme-section mb-5">
      <div className="about-container">

        <div className="about-header text-center" style={{ paddingTop: '20px' }}>
          <p className="section-label" style={{ color: '#888', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '11px', marginBottom: '10px' }}>Capabilities</p>
          <h2 className="about-section-title">What We Actually Do</h2>
          <div className="about-line" style={{ margin: '15px auto 0' }}></div>

          {/* Mobile Fallback Image */}
          <img
            src="img/aboutus2.png"
            alt="What We Do"
            className="mobile-only-element img-fluid rounded"
            style={{ width: '100%', marginBottom: '-50px', marginTop: '50px', boxShadow: '0 10px 30px rgba(0,0,0,0.4)' }}
          />
        </div>

        <div className="about-main siderrr-row mt-5">
          {/* LEFT: Composition with Typing Animation */}
          <div className="about-left">

            <div className="about-ui-composition desktop-only-element" style={{ transform: 'scale(0.9)', transformOrigin: 'left center' }} data-cursor-text="Building">
              <div className="about-frame about-frame-1"></div>
              <div className="about-frame about-frame-2"></div>

              {/* Main Card with Animated Typing */}
              <div className="about-card about-code-card">
                <div className="about-card-header">
                  <div className="about-dots"><span></span><span></span><span></span></div>
                  <div className="hq-title">&lt;/Code&gt;</div>
                </div>
                <div className="about-code-lines">
                  <p className="about-code-line"><span className="about-keyword">function</span> buildExperience() {"{"}</p>
                  <p className="about-code-line pl-3">
                    <span className="about-keyword">return</span> "{displayText}"
                    <span className="hq-cursor">|</span>
                  </p>
                  <p className="about-code-line">{"}"};</p>
                </div>
              </div>

              {/* Graph Card */}
              <div className="about-card about-graph-card">
                <div className="about-graph-header">
                  <div className="about-graph-title" style={{ fontSize: '11px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Engagement</div>
                  <i className="ri-bar-chart-2-line" style={{ color: '#fff' }}></i>
                </div>
                <div className="about-graph-line" style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '80px', marginTop: '15px' }}>
                  <div style={{ height: '30%', width: '15%', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}></div>
                  <div style={{ height: '50%', width: '15%', background: 'rgba(255,255,255,0.2)', borderRadius: '2px' }}></div>
                  <div style={{ height: '80%', width: '15%', background: 'rgba(255,255,255,0.3)', borderRadius: '2px' }}></div>
                  <div style={{ height: '100%', width: '15%', background: '#fff', borderRadius: '2px' }}></div>
                  <div style={{ height: '60%', width: '15%', background: 'rgba(255,255,255,0.2)', borderRadius: '2px' }}></div>
                </div>
              </div>

              <div className="about-float about-float-1">
                <i className="ri-code-box-line"></i>
                <div className="about-bar-group">
                  <div className="about-bar about-bar-1"></div>
                  <div className="about-bar about-bar-2"></div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Carousel Content */}
          <div className="about-right" style={{ justifyContent: 'flex-start' }}>
            <div className="siderrr" style={{ paddingLeft: '0', maxWidth: '500px' }}>
              <div id="demo" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <h3 className="about_Website">Website Development</h3>
                    <p className="about_Website_sub">A well-designed, functional website is essential for establishing a strong online presence. We craft professional websites tailored to your business needs.</p>
                    <Link to="/website" className="btn_aboutRead_more magnetic">Explore More →</Link>
                  </div>
                  <div className="carousel-item">
                    <h3 className="about_Website">App Development</h3>
                    <p className="about_Website_sub">We craft high-quality, innovative mobile apps for Android and iOS, bringing your product ideas to life with user-friendly interfaces.</p>
                    <Link to="/app" className="btn_aboutRead_more magnetic">Explore More →</Link>
                  </div>
                  <div className="carousel-item">
                    <h3 className="about_Website">Software Solutions</h3>
                    <p className="about_Website_sub">Tailored software development solutions to streamline operations, enhance productivity, and achieve specific business milestones.</p>
                    <Link to="/software" className="btn_aboutRead_more magnetic">Explore More →</Link>
                  </div>
                  <div className="carousel-item">
                    <h3 className="about_Website">Social Media Management</h3>
                    <p className="about_Website_sub">Effective management ensures consistent engagement with your audience, helps build a loyal community, and keeps your brand relevant.</p>
                    <Link to="/smm" className="btn_aboutRead_more magnetic">Explore More →</Link>
                  </div>
                </div>

                <div className="carousel-controls mt-5" style={{ display: 'flex', gap: '15px' }}>
                  <button className="carousel-control-btn" data-bs-target="#demo" data-bs-slide="prev">
                    <i className="ri-arrow-left-line"></i>
                  </button>
                  <button className="carousel-control-btn" data-bs-target="#demo" data-bs-slide="next">
                    <i className="ri-arrow-right-line"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CarouselSection;

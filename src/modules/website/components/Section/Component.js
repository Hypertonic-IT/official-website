import React from "react";
import "./component.css";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

import ParticlesBackground from '../Particles/ParticlesBackground';

const HeroSection = () => {
  return (
    <>
      {/* ── Fixed H-shape contact sidebar ── */}
      <div className="h-sidebar">
        {/* Left arm: Email */}
        <a href="mailto:hypertonicitsolutions@gmail.com" className="h-sidebar__arm h-sidebar__arm--left">
          <span className="h-sidebar__line" />
          <span className="h-sidebar__label">
            <i className="fas fa-envelope h-sidebar__icon" />
            hypertonicitsolutions@gmail.com
          </span>
          <span className="h-sidebar__line" />
        </a>

        {/* Right arm: Phone */}
        <a href="tel:+918130501014" className="h-sidebar__arm h-sidebar__arm--right">
          <span className="h-sidebar__line" />
          <span className="h-sidebar__label">
            <i className="fas fa-phone-alt h-sidebar__icon" />
            +91 81305 01014
          </span>
          <span className="h-sidebar__line" />
        </a>
      </div>

      <div className="hero-section">
        {/* Glowing horizon arc */}
        <div className="hero-arc" />

        {/* Main two-column row */}
        <div className="hero-main">

          {/* LEFT: text */}
          <motion.div
            className="hero-left"
            initial={{ opacity: 0, x: -60, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="hero-title">
              Building Modern<br />
              Web &amp; Software<br />
              Experiences
            </h1>
            <p className="hero-subtitle">
              We design powerful digital products with clean design,
              smooth interactions, and scalable technology.
            </p>

            <div className="hero-ctas">
              <Link to="/contact" className="hero-btn-primary magnetic" data-cursor-text="Launch">
                🚀 Start a Project
              </Link>
              <Link to="/portfolio" className="hero-btn-outline magnetic" data-cursor-text="View">
                💼 View Our Work
              </Link>
            </div>
          </motion.div>

          {/* RIGHT: floating tech mockup */}
          <motion.div
            className="hero-right"
            initial={{ opacity: 0, x: 60, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="hq-ui-composition">
              {/* Abstract Glass Frames */}
              <div className="hq-frame hq-frame-1"></div>
              <div className="hq-frame hq-frame-2"></div>

              {/* Code Snippet Card */}
              <div className="hq-card hq-code-card">
                <div className="hq-card-header">
                  <div className="hq-dots"><span></span><span></span><span></span></div>
                  <div className="hq-title">&lt;/Code&gt;</div>
                </div>
                <div className="hq-code-lines">
                  <p className="hq-code-line"><span className="hq-keyword">export const</span> Experience = () =&gt; {"{"}</p>
                  <p className="hq-code-line pl-3"><span className="hq-keyword">return</span> (</p>
                  <p className="hq-code-line pl-4">&lt;DigitalProduct</p>
                  <p className="hq-code-line pl-5">performance=&#123;100&#125;</p>
                  <p className="hq-code-line pl-5">design="clean"</p>
                  <p className="hq-code-line pl-4">&gt;</p>
                  <p className="hq-code-line pl-5">&lt;Technology scales=&#123;true&#125; /&gt;</p>
                  <p className="hq-code-line pl-4">&lt;/DigitalProduct&gt;</p>
                  <p className="hq-code-line pl-3">);</p>
                  <p className="hq-code-line">{"}"};</p>
                  <span className="hq-cursor">_</span>
                </div>
              </div>

              {/* Data Graph Card */}
              <div className="hq-card hq-graph-card">
                <div className="hq-graph-header">
                  <div className="hq-graph-title">Metrics</div>
                  <i className="ri-add-line"></i>
                </div>
                <svg className="hq-graph-line" viewBox="0 0 100 50">
                  <path d="M0 40 Q 15 35, 25 30 T 45 20 T 65 25 T 85 15 T 100 5" fill="none" stroke="url(#hero-gradient)" strokeWidth="1.5" strokeDasharray="1000" strokeDashoffset="0" />
                  <circle cx="25" cy="30" r="1.5" fill="#fff" />
                  <circle cx="45" cy="20" r="1.5" fill="#fff" />
                  <circle cx="65" cy="25" r="1.5" fill="#fff" />
                  <circle cx="85" cy="15" r="1.5" fill="#fff" />
                  <defs>
                    <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
                      <stop offset="100%" stopColor="#fff" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="hq-graph-labels">
                  <span>30</span><span>60</span><span>90</span><span>120</span>
                </div>
              </div>

              {/* Floating Element 1 */}
              <div className="hq-float hq-float-1">
                <i className="ri-settings-4-fill"></i>
                <div className="hq-bar-group">
                  <div className="hq-bar hq-bar-1"></div>
                  <div className="hq-bar hq-bar-2"></div>
                </div>
              </div>

              {/* Floating Element 2 */}
              <div className="hq-float hq-float-2">
                <i className="ri-list-check-2"></i>
                <div className="hq-bar-group">
                  <div className="hq-bar hq-bar-3"></div>
                  <div className="hq-bar hq-bar-4"></div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom: trust bar + scroll */}
        <motion.div
          className="hero-bottom"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <p className="hero-trust-label">Trusted by startups and growing businesses</p>
          <div className="hero-trust-logos">
            <span><i className="ri-reactjs-line"></i> React</span>
            <span><i className="ri-server-line"></i> Node.js</span>
            <span><i className="ri-layout-line"></i> Next.js</span>
            <span><i className="ri-code-s-slash-line"></i> Python</span>
          </div>

          <div
            className="hero-scroll"
            style={{ cursor: 'pointer' }}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <p>Scroll to Explore</p>
            <div className="hero-scroll-arrow">↓</div>
          </div>
        </motion.div>

      </div>
    </>
  );
};

export default HeroSection;

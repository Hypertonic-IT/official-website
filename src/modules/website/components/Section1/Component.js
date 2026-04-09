import React from 'react';
import './component.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const revealFromLeft = {
  hidden: { opacity: 0, x: -50, filter: "blur(8px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
};
const revealFromRight = {
  hidden: { opacity: 0, x: 50, filter: "blur(8px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 } }
};
const revealUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)", scale: 0.98 },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const AppDevelopment = () => {
  return (
    <div className="about-section">
      <div className="about-container">

        {/* Section header */}
        <motion.div
          className="about-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={revealUp}
        >
          <h2 className="about-section-title">About Us</h2>
          <p className="section-label"><span className="sv2-highlight">Who</span> we are</p>

          {/* <div className="about-line" /> */}
        </motion.div>

        {/* Main content area */}
        <div className="about-main">

          {/* Mobile only sub-heading (to keep order Title -> Content) */}
          <motion.h3
            className="we-comme mobile-only-element"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={revealUp}
          >
            Your Partner for Software Innovation
          </motion.h3>

          {/* LEFT: text side */}
          <motion.div
            className="about-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={revealFromLeft}
          >
            <h3 className="we-comme desktop-only-element">Your Partner for Software Innovation</h3>
            <p className="about-text">
              At Hypertonic, we are dedicated to transforming your ideas into innovative digital solutions.
              With a keen focus on software development, app development, and website development, we leverage
              our diverse expertise to deliver high-quality services tailored to your specific needs.
            </p>
            <p className="about-text">
              Our team comprises skilled professionals proficient in the latest technologies and best practices.
              We believe in the power of collaboration and work closely with our clients to ensure their visions
              are realized with precision and creativity.
            </p>

            {/* Stats row */}
            <div className="about-stats-row">
              <div className="about-stat">
                <p className="about-stat-number">50+</p>
                <p className="about-stat-label">Projects Done</p>
              </div>
              <div className="about-stat">
                <p className="about-stat-number">40+</p>
                <p className="about-stat-label">Happy Clients</p>
              </div>
              <div className="about-stat">
                <p className="about-stat-number">4+</p>
                <p className="about-stat-label">Years Exp.</p>
              </div>
            </div>

            <Link to="/about">
              <button className="readaboutbtn magnetic" data-cursor-text="Read">Learn More →</button>
            </Link>
          </motion.div>

          {/* RIGHT: Visual side */}
          <motion.div
            className="about-right"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={revealFromRight}
          >
            {/* Desktop Dashboard Animation (Hidden on mobile via CSS) */}
            <div className="about-ui-composition desktop-only-element" data-cursor-text="Hypertonic">
              <div className="about-frame about-frame-1"></div>
              <div className="about-frame about-frame-2"></div>

              <div className="about-card about-code-card">
                <div className="about-card-header">
                  <div className="about-dots"><span></span><span></span><span></span></div>
                  <div className="about-card-title">&lt;/Code&gt;</div>
                </div>
                <div className="about-code-lines">
                  <p className="about-code-line"><span className="about-keyword">export const</span> OurMission = () =&gt; {"{"}</p>
                  <p className="about-code-line pl-3"><span className="about-keyword">return</span> (</p>
                  <p className="about-code-line pl-4">&lt;Innovation</p>
                  <p className="about-code-line pl-5">quality=&#123;100&#125;</p>
                  <p className="about-code-line pl-5">passion="true"</p>
                  <p className="about-code-line pl-4">&gt;</p>
                  <p className="about-code-line pl-5">&lt;Solutions scales=&#123;true&#125; /&gt;</p>
                  <p className="about-code-line pl-4">&lt;/Innovation&gt;</p>
                  <p className="about-code-line pl-3">);</p>
                  <p className="about-code-line">{"}"}</p>
                </div>
              </div>

              <div className="about-card about-graph-card">
                <div className="about-graph-header">
                  <div className="about-graph-title">Client Growth</div>
                  <i className="ri-add-line"></i>
                </div>
                <svg className="about-graph-line" viewBox="0 0 100 50">
                  <path d="M0 45 Q 15 38, 25 30 T 45 20 T 65 22 T 85 12 T 100 4" fill="none" stroke="url(#about-gradient)" strokeWidth="1.5" strokeDasharray="1000" strokeDashoffset="0" />
                  <circle cx="25" cy="30" r="1.5" fill="#fff" />
                  <circle cx="45" cy="20" r="1.5" fill="#fff" />
                  <circle cx="65" cy="22" r="1.5" fill="#fff" />
                  <circle cx="85" cy="12" r="1.5" fill="#fff" />
                  <defs>
                    <linearGradient id="about-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
                      <stop offset="100%" stopColor="#fff" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="about-graph-labels">
                  <span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span>
                </div>
              </div>

              <div className="about-float about-float-1">
                <i className="ri-team-line"></i>
                <div className="about-bar-group">
                  <div className="about-bar about-bar-1"></div>
                  <div className="about-bar about-bar-2"></div>
                </div>
              </div>

              <div className="about-float about-float-2">
                <i className="ri-award-line"></i>
                <div className="about-bar-group">
                  <div className="about-bar about-bar-3"></div>
                  <div className="about-bar about-bar-4"></div>
                </div>
              </div>
            </div>

            {/* Mobile Fallback Image */}
            <div className="mobile-only-element custom-about-img-wrap">
              <img src="/img/about.webp" alt="About Us" className="about-img shadow-lg" />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default AppDevelopment;
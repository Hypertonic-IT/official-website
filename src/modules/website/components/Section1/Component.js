import React from 'react';
import './component.css';
import '../Section/component.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const revealFromLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};
const revealFromRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut", delay: 0.15 } }
};
const revealUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const AppDevelopment = () => {
  return (
    <div className="container-fluid about_top">
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">

          {/* Section label */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={revealUp}
          >
            <p className="section-label">Who we are</p>
            <h2 className="about_heading">About Us</h2>
            <hr className="heading_line" />
          </motion.div>

          {/* Main content row */}
          <div className="row padd__inng" style={{ marginTop: 48, gap: '0', rowGap: '40px' }}>

            {/* Left: text */}
            <motion.div
              className="col-md-5 pe-md-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={revealFromLeft}
            >
              <h3 className="we_comme">Your Partner for Software Innovation</h3>
              <p className="main_abouttitle">
                At Hypertonic, we are dedicated to transforming your ideas into innovative digital solutions.
                With a keen focus on software development, app development, and website development, we leverage
                our diverse expertise to deliver high-quality services tailored to your specific needs.
              </p>
              <p className="main_abouttitle">
                Our team comprises skilled professionals proficient in the latest technologies and best practices.
                We believe in the power of collaboration and work closely with our clients to ensure their visions
                are realized with precision and creativity.
              </p>

              {/* Stats row */}
              <div className="about_stats_row">
                <div className="about_stat">
                  <p className="about_stat_number">50+</p>
                  <p className="about_stat_label">Projects Done</p>
                </div>
                <div className="about_stat">
                  <p className="about_stat_number">40+</p>
                  <p className="about_stat_label">Happy Clients</p>
                </div>
                <div className="about_stat">
                  <p className="about_stat_number">4+</p>
                  <p className="about_stat_label">Years Exp.</p>
                </div>
              </div>

              <Link to="/about">
                <button className="readaboutbtn magnetic" data-cursor-text="Read">Learn More →</button>
              </Link>
            </motion.div>

            {/* Right: floating tech mockup */}
            <motion.div
              className="col-md-6 ps-md-4 tslap"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={revealFromRight}
            >
              <div className="hq-ui-composition" data-cursor-text="Hypertonic">
                {/* Abstract Glass Frames */}
                <div className="hq-frame hq-frame-1"></div>
                <div className="hq-frame hq-frame-2"></div>

                {/* Code Snippet Card */}
                <div className="hq-card hq-code-card">
                  <div className="hq-card-header">
                    <div className="hq-dots"><span></span><span></span><span></span></div>
                    <div className="hq-title">About.js</div>
                  </div>
                  <div className="hq-code-lines">
                    <p className="hq-code-line"><span className="hq-keyword">export const</span> OurMission = () =&gt; {"{"}</p>
                    <p className="hq-code-line pl-3"><span className="hq-keyword">return</span> (</p>
                    <p className="hq-code-line pl-4">&lt;Innovation</p>
                    <p className="hq-code-line pl-5">quality=&#123;100&#125;</p>
                    <p className="hq-code-line pl-5">passion="true"</p>
                    <p className="hq-code-line pl-4">&gt;</p>
                    <p className="hq-code-line pl-5">&lt;Solutions scales=&#123;true&#125; /&gt;</p>
                    <p className="hq-code-line pl-4">&lt;/Innovation&gt;</p>
                    <p className="hq-code-line pl-3">);</p>
                    <p className="hq-code-line">{"}"}</p>
                    <span className="hq-cursor">_</span>
                  </div>
                </div>

                {/* Data Graph Card */}
                <div className="hq-card hq-graph-card">
                  <div className="hq-graph-header">
                    <div className="hq-graph-title">Client Growth</div>
                    <i className="ri-add-line"></i>
                  </div>
                  <svg className="hq-graph-line" viewBox="0 0 100 50">
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
                  <div className="hq-graph-labels">
                    <span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span>
                  </div>
                </div>

                {/* Floating Element 1 */}
                <div className="hq-float hq-float-1">
                  <i className="ri-team-line"></i>
                  <div className="hq-bar-group">
                    <div className="hq-bar hq-bar-1"></div>
                    <div className="hq-bar hq-bar-2"></div>
                  </div>
                </div>

                {/* Floating Element 2 */}
                <div className="hq-float hq-float-2">
                  <i className="ri-award-line"></i>
                  <div className="hq-bar-group">
                    <div className="hq-bar hq-bar-3"></div>
                    <div className="hq-bar hq-bar-4"></div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};

export default AppDevelopment;
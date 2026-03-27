import React from 'react';
import './component.css'; // Import CSS file for styling
import '../Section1/component.css'; // Import Section1 CSS to style the about-ui-composition

const TopAbout = () => {
  return (
    <div className="container-fluid top_about dark-theme-section">
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
          <div className="row my_reveers align-items-center" style={{ gap: '20px 0' }}>
            <div className="col-lg-5 pe-lg-5">
              <h2 className="about_title_heading">Your Partner for Software Innovation</h2>
              <div className="divider-line"></div>
              <p className="about_titel">Hypertonic It Solutions is the partner of choice for many of the world’s leading enterprises, SMEs, and technology challengers. We help businesses elevate their value through custom software development, product design, QA, and consultancy services.</p>
              <p className="about_titel">What sets us apart is our unwavering commitment to excellence. We adhere to strict timelines and maintain meticulous project management to ensure timely delivery without compromising on quality. Our success is reflected in the satisfaction of our clients, who consistently commend us for our reliability, professionalism, and outstanding results.</p>
              <p className="about_titel fw-bold highlight-text">Thank you for choosing Hypertonic IT Solution Pvt Ltd, where your success is our mission.</p>
            </div>
            <div className="col-lg-6 ps-lg-4">
              <div className="about-ui-composition" data-cursor-text="Hypertonic">
                {/* Abstract Glass Frames */}
                <div className="about-frame about-frame-1"></div>
                <div className="about-frame about-frame-2"></div>

                {/* Main Card: Innovation */}
                <div className="about-card abt-main-card" data-cursor-text="Innovate">
                  <div className="abt-card-header">
                    <div className="abt-dots bw-dots">
                      <style>
                        {`
                          .bw-dots span { background-color: #555 !important; }
                        `}
                      </style>
                      <span></span><span></span><span></span>
                    </div>
                    <div className="abt-title">Innovation.js</div>
                  </div>
                  <div className="abt-code-lines">
                    <p className="abt-code-line"><span className="abt-keyword" style={{ color: '#cccccc' }}>class</span> Hypertonic <span className="abt-keyword" style={{ color: '#cccccc' }}>extends</span> Agency {"{"}</p>
                    <p className="abt-code-line pl-3">deliver() {"{"}</p>
                    <p className="abt-code-line pl-4"><span className="abt-keyword" style={{ color: '#888888' }}>return</span> <span className="abt-string" style={{ color: '#ffffff' }}>"High-Quality Solutions"</span>;</p>
                    <p className="abt-code-line pl-3">{"}"}</p>
                    <p className="abt-code-line">{"}"}</p>
                    <span className="abt-cursor">_</span>
                  </div>
                </div>

                {/* Floating Graph Card */}
                <div className="about-card abt-graph-card" data-cursor-text="Scaling">
                  <div className="abt-graph-header">
                    <div className="abt-graph-title">Growth Model</div>
                    <i className="ri-line-chart-line" style={{ color: '#ffffff' }}></i>
                  </div>
                  <div className="abt-graph-bars">
                    <div className="abt-bar-col"><div className="abt-bar-fill" style={{ height: '30%' }}></div></div>
                    <div className="abt-bar-col"><div className="abt-bar-fill" style={{ height: '50%' }}></div></div>
                    <div className="abt-bar-col"><div className="abt-bar-fill" style={{ height: '75%' }}></div></div>
                    <div className="abt-bar-col"><div className="abt-bar-fill active" style={{ height: '100%' }}></div></div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="abt-float abt-float-1">
                  <i className="ri-lightbulb-flash-line"></i>
                  <div className="abt-bar-group">
                    <div className="abt-line abt-line-1"></div>
                    <div className="abt-line abt-line-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-1"></div>
      </div>
    </div>
  );
};

export default TopAbout;

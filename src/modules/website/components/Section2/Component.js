import React from 'react';
import './component.css';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const services = [
  {
    icon: "ri-window-fill",
    title: "Web Development",
    desc: "Responsive design, SEO optimization, and custom applications to elevate your online presence.",
    logos: [
      { i: "ri-reactjs-line", text: "React" },
      { i: "ri-server-line", text: "Node" },
      { i: "ri-javascript-line", text: "JS" },
    ]
  },
  {
    icon: "ri-smartphone-line",
    title: "Mobile App Development",
    desc: "Innovative, user-friendly apps for iOS and Android enhancing your digital presence.",
    logos: [
      { i: "ri-apple-fill", text: "iOS" },
      { i: "ri-android-fill", text: "Android" },
    ]
  },
  {
    icon: "ri-pen-nib-line",
    title: "UI/UX Design",
    desc: "Create engaging, user-friendly interfaces that enhance user experience and drive satisfaction.",
    logos: [
      { i: "ri-brush-line", text: "Figma" },
      { i: "ri-quill-pen-line", text: "Design" },
    ]
  },
  {
    icon: "ri-window-line",
    title: "Web App Development",
    desc: "Robust, scalable web applications to streamline operations and drive business growth.",
    logos: [
      { i: "ri-layout-masonry-line", text: "Next.js" },
      { i: "ri-database-2-line", text: "MongoDB" },
    ]
  },
  {
    icon: "ri-terminal-box-line",
    title: "Software Development",
    desc: "Scalable, customized applications to meet your unique business needs efficiently.",
    logos: [
      { i: "ri-code-s-slash-line", text: "Python" },
      { i: "ri-cloud-line", text: "AWS" },
    ]
  },
  {
    icon: "ri-cloud-windy-line",
    title: "SaaS Platform",
    desc: "Scalable, secure SaaS platform solutions for unparalleled efficiency and growth.",
    logos: [
      { i: "ri-shield-check-line", text: "Secure" },
      { i: "ri-global-line", text: "Scale" },
    ]
  },
  {
    icon: "ri-group-line",
    title: "Social Media Management",
    desc: "Strategically curating and managing content to boost brand visibility across platforms.",
    logos: [
      { i: "ri-instagram-line", text: "Insta" },
      { i: "ri-facebook-circle-line", text: "FB" },
    ]
  },
  {
    icon: "ri-line-chart-line",
    title: "Social Media Marketing",
    desc: "Drive engagement and increase sales through targeted content and audience interaction.",
    logos: [
      { i: "ri-bar-chart-box-line", text: "SEO" },
      { i: "ri-pie-chart-line", text: "Growth" },
    ]
  },
  {
    icon: "ri-megaphone-line",
    title: "Advertising & Promotions",
    desc: "Targeted campaigns to increase brand awareness and drive sales across all channels.",
    logos: [
      { i: "ri-google-fill", text: "Google" },
      { i: "ri-advertisement-line", text: "Ads" },
    ]
  }
];

const AppDevelopment = () => {
  return (
    <div className="services-v2-section">
      {/* Background glow effects */}
      <div className="sv2-glow-bg"></div>

      <div className="container">
        {/* Header */}
        <motion.div
          className="sv2-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="sv2-title">Our Services</h2>
          <p className="sv2-subtitle">
            <span className="sv2-highlight">All Solutions</span> Empowering your business with cutting-edge technology.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="row justify-content-center g-4 sv2-cards-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Reduced amount so it triggers earlier on scroll
        >
          {services.map((service, index) => (
            <motion.div key={index} className="col-lg-4 col-md-6" variants={cardVariants}>
              <div className="sv2-card">
                <div className="sv2-card-inner">

                  {/* Icon & Title */}
                  <div className="sv2-card-head">
                    <i className={`${service.icon} sv2-card-icon`}></i>
                    <h3 className="sv2-card-title">{service.title}</h3>
                  </div>

                  {/* Desc */}
                  <p className="sv2-card-desc">{service.desc}</p>

                  {/* Footer area (logos or overlay btn) */}
                  <div className="sv2-card-footer">
                    {service.logos && (
                      <div className="sv2-logos">
                        {service.logos.map((logo, lIdx) => (
                          <div className="sv2-logo-item" key={lIdx}>
                            <i className={logo.i}></i> {logo.text}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Active Card Overlay & Button Effect */}
                  <div className="sv2-hover-overlay">
                    <div className="sv2-active-flare"></div>
                    <a href="/portfolio" className="sv2-overlay-btn">
                      <i className="ri-video-chat-fill"></i> View Our Work
                    </a>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="sv2-bottom-action"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a href="/contact" className="sv2-view-all-btn">
            Start Your Project <i className="ri-arrow-right-line"></i>
          </a>
        </motion.div>

      </div>
    </div>
  );
};

export default AppDevelopment;
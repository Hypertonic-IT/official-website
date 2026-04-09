import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const location = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location]);

  const date = new Date();

  return (
    <footer className="footer-new">
      {/* ── CTA Section ── */}
      <div className="footer-cta-new">
        <div className="container">
          <div className="cta-flex">
            <div className="cta-text-box">
              <span className="cta-tag">STAY CONNECTED</span>
              <h2 className="cta-heading">Ready to build something <br /><span>extraordinary?</span></h2>
            </div>
            <Link to="/contact" className="cta-btn-modern">
              Let's Talk <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main Footer ── */}
      <div className="footer-main-new">
        <div className="container">
          <div className="footer-grid-new">
            {/* Brand */}
            <div className="footer-col brand">
              <img src="img/logo.webp" className="footer-logo-new" alt="Hypertonic IT Solutions" />
              <p className="footer-desc">
                Elevating businesses through high-end digital solutions and next-gen technology. We build experience, not just software.
              </p>
              <div className="footer-socials-new">
                <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="ri-facebook-fill"></i></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="ri-instagram-line"></i></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="ri-linkedin-fill"></i></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="ri-twitter-x-line"></i></a>
              </div>
            </div>

            {/* Links */}
            <div className="footer-col links">
              <h4 className="col-title">Navigation</h4>
              <ul className="footer-links-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-col links">
              <h4 className="col-title">Expertise</h4>
              <ul className="footer-links-list">
                <li><Link to="/uiux">Product Design</Link></li>
                <li><Link to="/website">Web Dev</Link></li>
                <li><Link to="/app">App Dev</Link></li>
                <li><Link to="/software">Cloud Solutions</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-col contact">
              <h4 className="col-title">Get in Touch</h4>
              <div className="contact-info">
                <div className="info-item">
                  <span className="label">LOCATION</span>
                  <p>Sector 15A, Faridabad, Haryana</p>
                </div>
                <div className="info-item">
                  <span className="label">EMAIL</span>
                  <p><a href="mailto:info@hypertonic.co.in">info@hypertonic.co.in</a></p>
                </div>
                <div className="info-item">
                  <span className="label">PHONE</span>
                  <p><a href="tel:+919650301229">+91 9650301229</a></p>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-divider-new"></div>

          <div className="footer-bottom-new">
            <div className="copyright">
              © {date.getFullYear()} Hypertonic IT Solutions. All rights reserved.
            </div>
            <div className="legal">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/term">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a href="https://wa.me/9650301229" className="wa-btn-floating" target="_blank" rel="noreferrer">
        <i className="ri-whatsapp-line"></i>
        <span>Chat with us</span>
      </a>
    </footer>
  );
};

export default Footer;

import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const location = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location]);

  const containerStyle = {
    position: "fixed",
    bottom: "20px",
    right: "10px",
    zIndex: 6,
    left: "initial",
  };

  const date = new Date();

  return (
    <>
      <div className="container-fluid bck-clr">
        <div className="row">

          {/* Logo + desc + social */}
          <div className="col-lg-4 col-md-12 mb-4">
            <img src="img/logo.webp" className="img-fluid logo_img" alt="Hypertonic Logo" />
            <p className="footer_desc">
              We build powerful digital products with clean design, smooth interactions, and scalable technology.
            </p>
            <div className="footer_social">
              <a href="https://www.facebook.com/profile.php?id=61557174693878" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/hypertonicitsolutions/" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/90642582/" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="col-lg-2 col-md-6 col-6 myf_top">
            <h4 className="head-ingtop">Quick Links</h4>
            <Link to="/"><p className="footer_tabs">Home</p></Link>
            <Link to="/about"><p className="footer_tabs">About</p></Link>
            <Link to="/contact"><p className="footer_tabs">Contact</p></Link>
            <Link to="/portfolio"><p className="footer_tabs">Portfolio</p></Link>
            <Link to="/privacy"><p className="footer_tabs">Privacy Policy</p></Link>
            <Link to="/term"><p className="footer_tabs">Terms & Conditions</p></Link>
          </div>

          {/* Services */}
          <div className="col-lg-2 col-md-6 col-6 myf_top">
            <h4 className="head-ingtop">Services</h4>
            <Link to="/uiux"><p className="footer_tabs">UI/UX Design</p></Link>
            <Link to="/website"><p className="footer_tabs">Website Development</p></Link>
            <Link to="/app"><p className="footer_tabs">App Development</p></Link>
            <Link to="/software"><p className="footer_tabs">Software Dev</p></Link>
            <Link to="/webapp"><p className="footer_tabs">Web App</p></Link>
            <Link to="/saas"><p className="footer_tabs">SaaS Platform</p></Link>
            <Link to="/smm"><p className="footer_tabs">Social Media</p></Link>
            <Link to="/addvertise"><p className="footer_tabs">Advertising</p></Link>
          </div>

          {/* Contact info */}
          <div className="col-lg-4 col-md-12 myf_top">
            <h4 className="head-ingtop">Contact</h4>
            <div className="footer-flx">
              <i className="ri-map-pin-2-fill"></i>
              <p className="address">Plot No. 5B, Sector 15A, First Floor, Faridabad, Haryana 121007</p>
            </div>
            <div className="footer-flx">
              <i className="ri-mail-fill"></i>
              <div>
                <p className="address">info@hypertonic.co.in</p>
                <p className="address">hypertonicitsolutions@gmail.com</p>
              </div>
            </div>
            <div className="footer-flx">
              <i className="ri-phone-fill"></i>
              <div>
                <p className="address">+91-9650301229</p>
                <p className="address">+91-8130501014</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="container-fluid bck-copy-right">
        <div className="row">
          <div className="col-sm-12">
            <p className="copy_right">
              © {date.getFullYear()} Hypertonic IT Solutions. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      {/* WhatsApp button */}
      <div className="fixed-bottom" style={containerStyle}>
        <a href="https://wa.me/9650301229" target="_blank" rel="noopener noreferrer">
          <img src="img/whats-app.webp" className="img-fluid" width="60" height="auto" alt="WhatsApp" />
        </a>
      </div>

      {/* Side floating call/mail buttons (Removed due to overlap with h-sidebar) */}
    </>
  );
};

export default Footer;

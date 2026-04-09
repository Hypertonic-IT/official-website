import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './nav.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      // Hide navbar when scrolling down past 100px, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setNavHidden(true);
      } else {
        setNavHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleServices = (e) => {
    e.preventDefault();
    setIsServicesOpen(!isServicesOpen);
  };

  // Close menu on navigation
  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : ''} ${navHidden ? 'nav-hidden' : ''}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="img/hyperlogo.png" className="logo_navbar" alt="Hypertonic Logo" />
        </Link>

        {/* Custom Hamburger */}
        <button
          className={`navbar-toggler ${isOpen ? 'open' : ''}`}
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <div className="navbar-toggler-icon"></div>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav me-auto">
            <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
              <Link className="nav-link" to="/about">About Us</Link>
            </li>

            <li className={`nav-item dropdown ${isServicesOpen ? 'show' : ''}`}>
              <a className="nav-link dropdown-toggle" href="#" role="button" onClick={toggleServices}>
                Services <i className="ri-arrow-down-s-line drpp"></i>
              </a>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/uiux">UI/UX Design</Link>
                <Link className="dropdown-item" to="/website">Website Development</Link>
                <Link className="dropdown-item" to="/app">App Development</Link>
                <Link className="dropdown-item" to="/software">Software Development</Link>
                <Link className="dropdown-item" to="/webapp">WebApp Development</Link>
                <Link className="dropdown-item" to="/saas">SaaS Development</Link>
                <Link className="dropdown-item" to="/smm">Social Media Management</Link>
                <Link className="dropdown-item" to="/social">Digital Marketing</Link>
              </div>
            </li>

            <li className={`nav-item ${location.pathname === '/portfolio' ? 'active' : ''}`}>
              <Link className="nav-link" to="/portfolio">Portfolio</Link>
            </li>
            <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto align-items-center">
            {/* Social Icons - Desktop only row style, mobile stacked in list */}
            <li className="nav-item d-flex gap-2 px-lg-3 custom-social-row">
              <a className="nav-link p-0" href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="nav-link p-0" href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="nav-link p-0" href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="Linkedin">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link navbar-cta" to="/contact" data-cursor-text="Quote">
                Get Quote
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

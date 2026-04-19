import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Home from "./modules/website/pages/Home/Home";
import About from "./modules/website/pages/About/About";
import Website from "./modules/website/pages/Website/Web";
import Appdevelopment from "./modules/website/pages/Appdevelopment/Appdevelopment";
import Webapp from "./modules/website/pages/Webapp/Webapp";
import Saas from "./modules/website/pages/Saas/Saas";
import Uiux from "./modules/website/pages/Uiux/Uiux";
import Smm from "./modules/website/pages/Smm/Smm";
import Social from "./modules/website/pages/Social/Social";
import Addvertise from "./modules/website/pages/Addvertise/Addvertise";
import Software from "./modules/website/pages/Software/Software";
import Portfolio from "./modules/website/pages/Portfolio/Portfolio";
import Contact from "./modules/website/pages/Contact/Contact";
import Term from "./modules/website/pages/Term/Term";
import Privacy from "./modules/website/pages/Privacy/Privacy";
import NotFound from "./modules/website/pages/NotFound/NotFound";
import CustomCursor from "./modules/website/components/CustomCursor/CustomCursor";
import ParticlesBackground from "./modules/website/components/Particles/ParticlesBackground";
import FloatingFrames from "./modules/website/components/FloatingFrames/FloatingFrames";
import SplashScreen from "./modules/website/components/SplashScreen/SplashScreen";

import "./App.css";
import "./fonts/taile.ttf";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <HelmetProvider>
      {/* Splash screen — only on first load */}
      {showSplash && <SplashScreen onDone={() => setShowSplash(false)} />}
      <Router>
        <FloatingFrames />
        <ParticlesBackground />
        <CustomCursor />

        {/* ── Fixed H-shape contact sidebar — visible on all pages ── */}
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/website" element={<Website />} />
          <Route path="/app" element={<Appdevelopment />} />
          <Route path="/software" element={<Software />} />
          <Route path="/webapp" element={<Webapp />} />
          <Route path="/saas" element={<Saas />} />
          <Route path="/uiux" element={<Uiux />} />
          <Route path="/smm" element={<Smm />} />
          <Route path="/social" element={<Social />} />
          <Route path="/addvertise" element={<Addvertise />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/term" element={<Term />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;

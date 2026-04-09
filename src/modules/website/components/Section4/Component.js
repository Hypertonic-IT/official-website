import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './component.css';
import '../Section6/component.css';
import ProjectModal from '../Common/ProjectModal';

const allProjects = [
  { img: "img/pezos.png", name: "Pezos", filter: "E-commerce" },
  { img: "img/yugo.png", name: "TheYugo", filter: "E-commerce" },
  { img: "img/furnestry.png", name: "The Furnestry", filter: "E-commerce" },
  { img: "img/stamp.png", name: "StampPro", filter: "E-commerce" },
  { img: "img/toys.png", name: "Agrawal Toys", filter: "E-commerce" },
  { img: "img/astaria.png", name: "Astria", filter: "E-commerce" },
  { img: "img/bejoho.png", name: "Bejoho", filter: "static" },
  { img: "img/law-firm.png", name: "Jotwani & Kumar", filter: "static" },
  { img: "img/scm.png", name: "SCM Connexions", filter: "static" },
  { img: "img/linkerdesk.png", name: "LinkerDesk", filter: "static" },
  { img: "img/scalecpa.png", name: "ScaleCPA", filter: "static" },
  { img: "img/legalladder.png", name: "Legal Ladder", filter: "static" },
  { img: "img/volga.png", name: "Volga Cuprum", filter: "static" },
  { img: "img/stop-hiv.png", name: "StopHIV2024", filter: "static" },
  { img: "img/Fleeco-tech.png", name: "Fleeco Tech", filter: "static" },
  { img: "img/airfilco.png", name: "Airfilco", filter: "static" },
  { img: "img/party.png", name: "Party Helpdesk", filter: "dynamic" },
  { img: "img/pharma.png", name: "GetMed", filter: "dynamic" },
  { img: "img/yoga.png", name: "Healin Sutras", filter: "dynamic" },
  { img: "img/kdp.png", name: "KDP Architects", filter: "dynamic" },
  { img: "img/wav-studio.png", name: "WAV Studio", filter: "dynamic" },
  { img: "img/property.png", name: "Heartland Realty", filter: "dynamic" },
];

const PortfolioSection = () => {
  const [filter, setFilter] = useState('*');
  const [modal, setModal] = useState(null);

  const filtered = filter === '*' ? allProjects : allProjects.filter(p => p.filter === filter);

  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [modal]);



  return (
    <>
      {/* ── Page Header ── */}
      <div className="page-hero-section">
        <div className="page-hero-inner">
          {/* Breadcrumb */}
          <div className="page-breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-arrow">⟶</span>
            <span className="breadcrumb-current">Portfolio</span>
          </div>

          {/* Main Title */}
          <h1 className="page-hero-title">
            Work We're <br />Proud Of
          </h1>

          {/* Blockquote style subtitle */}
          <div className="page-hero-quote">
            <p>
              From startups to enterprises — explore a curated selection of websites, apps, and digital products we've crafted with precision and passion.
            </p>
          </div>
        </div>
      </div>

      {/* ── Portfolio Grid Section ── */}
      <section className="pf-section">
        <div className="container">

          {/* Filter Tabs — Premium Segmented Control */}
          <div className="pf-cats-wrap">
            <div className="pf-seg-track">
              {[{ key: '*', label: 'All Projects' }, { key: 'E-commerce', label: 'E-Commerce' }, { key: 'static', label: 'Static' }, { key: 'dynamic', label: 'Dynamic' }].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={`pf-seg-btn${filter === key ? ' pf-seg-active' : ''}`}
                >
                  {filter === key && (
                    <motion.span
                      layoutId="pf-seg-bubble"
                      className="pf-seg-bubble"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="pf-seg-label">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <motion.div layout className="pf-grid">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  layout
                  key={project.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="pf-card-wrap"
                  onClick={() => setModal(project)}
                >
                  <div className="pf-card">
                    <img src={project.img} alt={project.name} className="pf-card-img" />
                    <div className="pf-card-overlay">
                      <button className="pf-card-btn">View Project</button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* ── Inquiry Modal ── */}
      {/* Shared Premium Modal */}
      <ProjectModal modal={modal} onClose={() => setModal(null)} />
    </>
  );
};

export default PortfolioSection;

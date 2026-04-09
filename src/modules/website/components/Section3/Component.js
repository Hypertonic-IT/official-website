import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './component.css';
import ProjectModal from '../Common/ProjectModal';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
};

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
  // Second Batch
  { img: "img/pezos.png", name: "Pezos (V2)", filter: "E-commerce" },
  { img: "img/yugo.png", name: "TheYugo (V2)", filter: "E-commerce" },
  { img: "img/stamp.png", name: "StampPro (V2)", filter: "E-commerce" },
  { img: "img/astaria.png", name: "Astria (V2)", filter: "E-commerce" },
  { img: "img/bejoho.png", name: "Bejoho (V2)", filter: "static" },
  { img: "img/scm.png", name: "SCM Connexions (V2)", filter: "static" },
  { img: "img/linkerdesk.png", name: "LinkerDesk (V2)", filter: "static" },
  { img: "img/party.png", name: "Party Helpdesk (V2)", filter: "dynamic" },
  { img: "img/pharma.png", name: "GetMed (V2)", filter: "dynamic" },
  { img: "img/yoga.png", name: "Healin Sutras (V2)", filter: "dynamic" },
  // Third Batch
  { img: "img/pezos.png", name: "Pezos (V3)", filter: "E-commerce" },
  { img: "img/yugo.png", name: "TheYugo (V3)", filter: "E-commerce" },
  { img: "img/stamp.png", name: "StampPro (V3)", filter: "E-commerce" },
  { img: "img/astaria.png", name: "Astria (V3)", filter: "E-commerce" },
  { img: "img/bejoho.png", name: "Bejoho (V3)", filter: "static" },
  { img: "img/scm.png", name: "SCM Connexions (V3)", filter: "static" },
  { img: "img/linkerdesk.png", name: "LinkerDesk (V3)", filter: "static" },
  { img: "img/party.png", name: "Party Helpdesk (V3)", filter: "dynamic" },
  { img: "img/pharma.png", name: "GetMed (V3)", filter: "dynamic" },
  { img: "img/yoga.png", name: "Healin Sutras (V3)", filter: "dynamic" },
];

const PortfolioV2 = () => {
  const [modal, setModal] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);

  // Modal overflow lock
  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [modal]);

  // Auto Slider Effect
  useEffect(() => {
    let intervalId;
    if (sliderRef.current && !isHovered) {
      intervalId = setInterval(() => {
        if (sliderRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
          const isEnd = scrollLeft + clientWidth >= scrollWidth - 10;
          if (isEnd) {
            sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            sliderRef.current.scrollBy({ left: 340, behavior: 'smooth' });
          }
        }
      }, 3000);
    }
    return () => { if (intervalId) clearInterval(intervalId); };
  }, [isHovered]);

  return (
    <>
      <div className="portfolio-v2-section">
        <div className="container">

          <div className="pv2-top-bar">
            <motion.div
              className="pv2-header"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="pv2-title">Our Work</h2>
              <p className="pv2-subtitle">Recent Projects</p>
            </motion.div>

            <div className="pv2-controls">
              <button className="pv2-slider-control" onClick={() => sliderRef.current && sliderRef.current.scrollBy({ left: -340, behavior: 'smooth' })}>
                ❮
              </button>
              <button className="pv2-slider-control" onClick={() => sliderRef.current && sliderRef.current.scrollBy({ left: 340, behavior: 'smooth' })}>
                ❯
              </button>
            </div>
          </div>

          <div
            className="pv2-slider-wrap"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              ref={sliderRef}
              className="pv2-cards-container"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {allProjects.map((project, idx) => (
                <motion.div key={idx} className="pv2-slider-item" variants={itemVariants}>
                  <div
                    className="pv2-card"
                    style={{ cursor: 'pointer' }}
                    onClick={() => setModal(project)}
                  >
                    <div className="pv2-card-inner">
                      <img src={project.img} alt={project.name} className="pv2-card-img" />
                      <div className="pv2-overlay-shade"></div>
                      <div className="pv2-flare"></div>
                      <button className="pv2-overlay-btn" onClick={e => { e.stopPropagation(); setModal(project); }}>
                        View Project
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="pv2-bottom-action"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <a href="/portfolio" className="pv2-view-all-btn">
              View All <i className="ri-arrow-right-line"></i>
            </a>
          </motion.div>

        </div>
      </div>

      {/* Shared Premium Modal */}
      <ProjectModal modal={modal} onClose={() => setModal(null)} />
    </>
  );
};

export default PortfolioV2;

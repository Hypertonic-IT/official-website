import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './component.css';
import '../Section4/component.css'; // reuse modal + form styles

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
};

const allProjects = [
  { img: "img/pezos.png",        name: "Pezos" },
  { img: "img/yugo.png",         name: "TheYugo" },
  { img: "img/furnestry.png",    name: "The Furnestry" },
  { img: "img/stamp.png",        name: "StampPro" },
  { img: "img/toys.png",         name: "Agrawal Toys" },
  { img: "img/astaria.png",      name: "Astria" },
  { img: "img/bejoho.png",       name: "Bejoho" },
  { img: "img/law-firm.png",     name: "Jotwani & Kumar" },
  { img: "img/scm.png",          name: "SCM Connexions" },
  { img: "img/linkerdesk.png",   name: "LinkerDesk" },
  { img: "img/scalecpa.png",     name: "ScaleCPA" },
  { img: "img/legalladder.png",  name: "Legal Ladder" },
  { img: "img/volga.png",        name: "Volga Cuprum" },
  { img: "img/stop-hiv.png",     name: "StopHIV2024" },
  { img: "img/Fleeco-tech.png",  name: "Fleeco Tech" },
  { img: "img/airfilco.png",     name: "Airfilco" },
  { img: "img/party.png",        name: "Party Helpdesk" },
  { img: "img/pharma.png",       name: "GetMed" },
  { img: "img/yoga.png",         name: "Healin Sutras" },
  { img: "img/kdp.png",          name: "KDP Architects" },
  { img: "img/wav-studio.png",   name: "WAV Studio" },
  { img: "img/property.png",     name: "Heartland Realty" },
];

const PortfolioV2 = () => {
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
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
            sliderRef.current.scrollBy({ left: 340, behavior: 'smooth' }); // Scroll by approximately one card width
          }
        }
      }, 3000); // changes every 3 seconds
    }
    
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isHovered]);

  const openModal = (project) => {
    setModal(project);
    setSubmitted(false);
    setForm({ name: '', email: '', phone: '', message: '' });
    setErrors({});
  };
  const closeModal = () => setModal(null);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.phone.trim() || !/^[0-9+\s\-()]{7,15}$/.test(form.phone)) e.phone = 'Valid phone required';
    if (!form.message.trim()) e.message = 'Please enter your query';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

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
                    onClick={() => openModal(project)}
                  >
                    <div className="pv2-card-inner">
                      <img src={project.img} alt={project.name} className="pv2-card-img" />
                      <div className="pv2-overlay-shade"></div>
                      <div className="pv2-flare"></div>
                      <button className="pv2-overlay-btn" onClick={e => { e.stopPropagation(); openModal(project); }}>
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

      {modal && (
        <div className="pf-modal-backdrop" onClick={closeModal}>
          <div className="pf-modal" onClick={e => e.stopPropagation()}>
            <button className="pf-modal-close" onClick={closeModal}>✕</button>

            <div className="pf-modal-thumb">
              <img src="img/whatwedo.png" alt="Hypertonic IT Solutions" />
              <div className="pf-modal-thumb-overlay"><span>Hypertonic IT Solutions</span></div>
            </div>

            <div className="pf-modal-body">
              {submitted ? (
                <div className="pf-success">
                  <div className="pf-success-icon">✓</div>
                  <h3>Thank You!</h3>
                  <p>We've received your inquiry about <strong>{modal.name}</strong>. Our team will get back to you shortly.</p>
                  <button className="pf-btn" onClick={closeModal}>Close</button>
                </div>
              ) : (
                <>
                  <h2 className="pf-modal-title">Interested in this project?</h2>
                  <p className="pf-modal-sub">Fill in your details and we'll get back to you with more information.</p>
                  <form className="pf-form" onSubmit={handleSubmit} noValidate>
                    <div className="pf-field">
                      <label>Full Name</label>
                      <input type="text" placeholder="John Doe" value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className={errors.name ? 'pf-input error' : 'pf-input'} />
                      {errors.name && <span className="pf-error">{errors.name}</span>}
                    </div>
                    <div className="pf-field">
                      <label>Email Address</label>
                      <input type="email" placeholder="you@example.com" value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className={errors.email ? 'pf-input error' : 'pf-input'} />
                      {errors.email && <span className="pf-error">{errors.email}</span>}
                    </div>
                    <div className="pf-field">
                      <label>Phone Number</label>
                      <input type="tel" placeholder="+91 98765 43210" value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        className={errors.phone ? 'pf-input error' : 'pf-input'} />
                      {errors.phone && <span className="pf-error">{errors.phone}</span>}
                    </div>
                    <div className="pf-field">
                      <label>Your Query / Message</label>
                      <textarea rows={4} placeholder="Tell us what you'd like to know about this project..."
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        className={errors.message ? 'pf-input error' : 'pf-input'} />
                      {errors.message && <span className="pf-error">{errors.message}</span>}
                    </div>
                    <button type="submit" className="pf-btn">Send Inquiry →</button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioV2;

import React, { useEffect, useState } from 'react';
import './component.css';

const allProjects = [
  { img: "img/pezos.png",        name: "Pezos",             filter: "E-commerce" },
  { img: "img/yugo.png",         name: "TheYugo",           filter: "E-commerce" },
  { img: "img/furnestry.png",    name: "The Furnestry",     filter: "E-commerce" },
  { img: "img/stamp.png",        name: "StampPro",          filter: "E-commerce" },
  { img: "img/toys.png",         name: "Agrawal Toys",      filter: "E-commerce" },
  { img: "img/astaria.png",      name: "Astria",            filter: "E-commerce" },
  { img: "img/bejoho.png",       name: "Bejoho",            filter: "static" },
  { img: "img/law-firm.png",     name: "Jotwani & Kumar",   filter: "static" },
  { img: "img/scm.png",          name: "SCM Connexions",    filter: "static" },
  { img: "img/linkerdesk.png",   name: "LinkerDesk",        filter: "static" },
  { img: "img/scalecpa.png",     name: "ScaleCPA",          filter: "static" },
  { img: "img/legalladder.png",  name: "Legal Ladder",      filter: "static" },
  { img: "img/volga.png",        name: "Volga Cuprum",      filter: "static" },
  { img: "img/stop-hiv.png",     name: "StopHIV2024",       filter: "static" },
  { img: "img/Fleeco-tech.png",  name: "Fleeco Tech",       filter: "static" },
  { img: "img/airfilco.png",     name: "Airfilco",          filter: "static" },
  { img: "img/party.png",        name: "Party Helpdesk",    filter: "dynamic" },
  { img: "img/pharma.png",       name: "GetMed",            filter: "dynamic" },
  { img: "img/yoga.png",         name: "Healin Sutras",     filter: "dynamic" },
  { img: "img/kdp.png",          name: "KDP Architects",    filter: "dynamic" },
  { img: "img/wav-studio.png",   name: "WAV Studio",        filter: "dynamic" },
  { img: "img/property.png",     name: "Heartland Realty",  filter: "dynamic" },
];

const PortfolioSection = () => {
  const [filter, setFilter] = useState('*');
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const filtered = filter === '*' ? allProjects : allProjects.filter(p => p.filter === filter);

  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [modal]);

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
      <section className="portfolio section-portfolio">
        <ul className="portfolio-cats">
          <li onClick={() => setFilter('*')} className={filter === '*' ? 'active-cat' : ''}>All</li>
          <li onClick={() => setFilter('E-commerce')} className={filter === 'E-commerce' ? 'active-cat' : ''}>E-commerce</li>
          <li onClick={() => setFilter('static')} className={filter === 'static' ? 'active-cat' : ''}>Static (Informational)</li>
          <li onClick={() => setFilter('dynamic')} className={filter === 'dynamic' ? 'active-cat' : ''}>Dynamic</li>
        </ul>

        <div className="portfolio-grid">
          {filtered.map((project, idx) => (
            <div key={idx} className="portfolio-item-new" onClick={() => openModal(project)}>
              <div className="portfolio_card">
                <img src={project.img} className="img-fluid" alt={project.name} />
                <div className="overlay">
                  <div className="text">{project.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Inquiry Modal ── */}
      {modal && (
        <div className="pf-modal-backdrop" onClick={closeModal}>
          <div className="pf-modal" onClick={e => e.stopPropagation()}>
            <button className="pf-modal-close" onClick={closeModal}>✕</button>

            <div className="pf-modal-thumb">
              <img src="img/whatwedo.png" alt="Hypertonic IT Solutions" />
              <div className="pf-modal-thumb-overlay">
                <span>Hypertonic IT Solutions</span>
              </div>
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

export default PortfolioSection;

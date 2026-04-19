import React, { useState } from "react";
import "./component.css";
import { url } from "../../../../lib/lib";
import { motion } from 'framer-motion';

const revealUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const revealLeft = {
  hidden: { opacity: 0, x: -40, filter: "blur(8px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 } }
};

const revealRight = {
  hidden: { opacity: 0, x: 40, filter: "blur(8px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 } }
};

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "ct-name") setName(value);
    if (id === "ct-email") setEmail(value);
    if (id === "ct-number") setPhone(value);
    if (id === "ct-message") setMessage(value);
  };

  const validateForm = () => {
    if (!name.trim()) { alert("Name is required."); return false; }
    if (!email.trim()) { alert("Email is required."); return false; }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) { alert("Invalid email address."); return false; }
    if (!phone.trim()) { alert("Phone number is required."); return false; }
    else if (!/^(\+?\d{1,4}[\s-]?)?(\d{10})$/.test(phone)) { alert("Phone number must be 10 digits."); return false; }
    if (!message.trim()) { alert("Message is required."); return false; }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    const formData = { name, email, phone, message };

    try {
      const response = await fetch(url + "/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setName(""); setEmail(""); setPhone(""); setMessage("");
        setTimeout(() => setSuccess(false), 5000);
      } else {
        alert("Error sending message.");
      }
    } catch (error) {
      alert("There was an error submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="ct-section" aria-labelledby="contact-heading">
      {/* Decorative background elements */}
      <div className="ct-bg-orb ct-bg-orb-1" />
      <div className="ct-bg-orb ct-bg-orb-2" />
      <div className="ct-grid-overlay" />

      <div className="ct-container">

        {/* ── Section Header ── */}
        <motion.div
          className="ct-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={revealUp}
        >
          <h2 id="contact-heading" className="ct-main-title">Get In Touch</h2>
          <p className="section-label">
            <span className="sv2-highlight">Connect</span> with us
          </p>
        </motion.div>

        {/* ── Main Layout ── */}
        <div className="ct-body">

          {/* LEFT — Info panel */}
          <motion.div
            className="ct-info-panel"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={revealLeft}
          >
            <div className="ct-info-headline">
              <p className="ct-eyebrow">Ready to start?</p>
              <h3 className="ct-info-title">Let's build something <span className="ct-title-accent">extraordinary</span> together.</h3>
              <p className="ct-info-desc">
                Whether you have a question about our services, pricing, or anything else — our team is ready to answer all your questions and bring your vision to life.
              </p>
            </div>

            {/* Info cards */}
            <div className="ct-cards-list">
              <div className="ct-info-card">
                <div className="ct-card-icon-wrap">
                  <i className="ri-map-pin-2-fill" />
                </div>
                <div className="ct-card-content">
                  <p className="ct-card-label">Corporate Office</p>
                  <p className="ct-card-value">Plot No. 5B, Sector – 15A, First Floor,<br />Faridabad, Haryana 121007</p>
                </div>
              </div>

              <div className="ct-info-card">
                <div className="ct-card-icon-wrap">
                  <i className="ri-mail-send-fill" />
                </div>
                <div className="ct-card-content">
                  <p className="ct-card-label">Email Support</p>
                  <p className="ct-card-value">info@hypertonic.co.in</p>
                  <p className="ct-card-value">hypertonicitsolutions@gmail.com</p>
                </div>
              </div>

              <div className="ct-info-card">
                <div className="ct-card-icon-wrap">
                  <i className="ri-customer-service-2-fill" />
                </div>
                <div className="ct-card-content">
                  <p className="ct-card-label">Phone &amp; WhatsApp</p>
                  <p className="ct-card-value">+91 81305 01014</p>
                  <p className="ct-card-value">+91 84485 32785</p>
                </div>
              </div>
            </div>

            {/* Availability badge */}
            <div className="ct-availability">
              <span className="ct-pulse-dot" />
              <span>Available Mon – Sat, 9 AM – 7 PM IST</span>
            </div>
          </motion.div>

          {/* RIGHT — Form card */}
          <motion.div
            className="ct-form-panel"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={revealRight}
          >
            <div className="ct-form-card">
              {/* Card accent line */}
              <div className="ct-form-card-accent" />

              <div className="ct-form-card-header">
                <h3 className="ct-form-title">Send us a Message</h3>
                <p className="ct-form-subtitle">We typically respond within 24 hours.</p>
              </div>

              {success ? (
                <div className="ct-success-state">
                  <div className="ct-success-icon"><i className="ri-check-double-line" /></div>
                  <h4 className="ct-success-title">Message Sent!</h4>
                  <p className="ct-success-text">Thank you for reaching out. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form className="ct-form" onSubmit={handleSubmit}>

                  <div className="ct-row">
                    <div className="ct-field">
                      <label htmlFor="ct-name" className="ct-field-label">Full Name</label>
                      <div className="ct-field-inner">
                        <i className="ri-user-3-line ct-field-icon" />
                        <input
                          type="text"
                          id="ct-name"
                          value={name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                    </div>

                    <div className="ct-field">
                      <label htmlFor="ct-email" className="ct-field-label">Email Address</label>
                      <div className="ct-field-inner">
                        <i className="ri-mail-line ct-field-icon" />
                        <input
                          type="email"
                          id="ct-email"
                          value={email}
                          onChange={handleInputChange}
                          placeholder="you@company.com"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="ct-field">
                    <label htmlFor="ct-number" className="ct-field-label">Phone Number</label>
                    <div className="ct-field-inner">
                      <i className="ri-phone-line ct-field-icon" />
                      <input
                        type="tel"
                        id="ct-number"
                        value={phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />
                    </div>
                  </div>

                  <div className="ct-field">
                    <label htmlFor="ct-message" className="ct-field-label">Project Details</label>
                    <div className="ct-field-inner ct-field-inner--textarea">
                      <i className="ri-chat-3-line ct-field-icon ct-field-icon--top" />
                      <textarea
                        id="ct-message"
                        rows="5"
                        value={message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project, goals, or any questions…"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={`ct-submit-btn ${loading ? 'ct-submit-btn--loading' : ''}`}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="ct-spinner" />
                        <span>Sending…</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <i className="ri-send-plane-2-fill" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

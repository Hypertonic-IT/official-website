import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectModal.css';

const ProjectModal = ({ modal, onClose }) => {
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = 'Required';
        if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
        if (!form.phone.trim() || !/^[0-9+\s\-()]{7,15}$/.test(form.phone)) e.phone = 'Valid phone required';
        if (!form.message.trim()) e.message = 'Required';
        return e;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) { setErrors(errs); return; }
        setSubmitted(true);
    };

    return (
        <AnimatePresence>
            {modal && (
                <motion.div
                    className="pm-backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="pm-shell"
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 30 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                        onClick={e => e.stopPropagation()}
                    >
                        {/* ── Left Panel ── */}
                        <div className="pm-left">
                            <img src="/img/modal-software.png" alt="Hypertonic IT Solutions" className="pm-left-img" />

                            {/* Gradient overlay at bottom */}
                            <div className="pm-left-overlay">
                                <h2 className="pm-company-name">Hypertonic IT Solutions</h2>
                            </div>

                            {/* Corner accents */}
                            <div className="pm-corner pm-corner-tl" />
                            <div className="pm-corner pm-corner-br" />
                        </div>

                        {/* ── Right Panel ── */}
                        <div className="pm-right">
                            <button className="pm-close" onClick={onClose}>
                                <span>✕</span>
                            </button>

                            {submitted ? (
                                <motion.div
                                    className="pm-success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                >
                                    <div className="pm-success-ring">
                                        <svg viewBox="0 0 52 52" className="pm-checkmark" xmlns="http://www.w3.org/2000/svg">
                                            <circle className="pm-checkmark-circle" cx="26" cy="26" r="25" fill="none" />
                                            <path className="pm-checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                                        </svg>
                                    </div>
                                    <h3>Inquiry Sent!</h3>
                                    <p>We've received your message about <strong>{modal.name}</strong>. Our team will reach out shortly.</p>
                                    <button className="pm-close-btn" onClick={onClose}>Back to Portfolio</button>
                                </motion.div>
                            ) : (
                                <>
                                    <div className="pm-right-header">
                                        <p className="pm-eyebrow">GET IN TOUCH</p>
                                        <h3 className="pm-right-title">Like what you see?</h3>
                                        <p className="pm-right-sub">Tell us about your project and we'll get back to you within 24 hours.</p>
                                    </div>

                                    <form className="pm-form" onSubmit={handleSubmit} noValidate>
                                        <div className="pm-row">
                                            <div className="pm-field">
                                                <label>Full Name</label>
                                                <input
                                                    type="text"
                                                    placeholder="John Doe"
                                                    value={form.name}
                                                    onChange={e => setForm({ ...form, name: e.target.value })}
                                                    className={errors.name ? 'pm-input error' : 'pm-input'}
                                                />
                                                {errors.name && <span className="pm-err">{errors.name}</span>}
                                            </div>
                                            <div className="pm-field">
                                                <label>Phone</label>
                                                <input
                                                    type="tel"
                                                    placeholder="+91 98765 43210"
                                                    value={form.phone}
                                                    onChange={e => setForm({ ...form, phone: e.target.value })}
                                                    className={errors.phone ? 'pm-input error' : 'pm-input'}
                                                />
                                                {errors.phone && <span className="pm-err">{errors.phone}</span>}
                                            </div>
                                        </div>

                                        <div className="pm-field">
                                            <label>Email Address</label>
                                            <input
                                                type="email"
                                                placeholder="you@example.com"
                                                value={form.email}
                                                onChange={e => setForm({ ...form, email: e.target.value })}
                                                className={errors.email ? 'pm-input error' : 'pm-input'}
                                            />
                                            {errors.email && <span className="pm-err">{errors.email}</span>}
                                        </div>

                                        <div className="pm-field">
                                            <label>Message</label>
                                            <textarea
                                                rows={4}
                                                placeholder="Tell us about your requirements..."
                                                value={form.message}
                                                onChange={e => setForm({ ...form, message: e.target.value })}
                                                className={errors.message ? 'pm-input error' : 'pm-input'}
                                            />
                                            {errors.message && <span className="pm-err">{errors.message}</span>}
                                        </div>

                                        <button type="submit" className="pm-submit">
                                            Send Inquiry
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                                            </svg>
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;

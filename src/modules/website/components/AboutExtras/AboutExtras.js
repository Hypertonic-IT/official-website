import React, { useEffect, useRef } from 'react';
import './AboutExtras.css';

// helpers
function useReveal(threshold = 0.12) {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { el.classList.add('extras-visible'); obs.disconnect(); } },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return ref;
}

// 2. OUR PHILOSOPHY (Engineering DNA)
export const CompanyPhilosophy = () => {
    const ref = useReveal(0.1);
    const pillars = [
        {
            icon: 'ri-command-line',
            title: 'Architectural Rigour',
            text: 'We don\'t just build; we engineer. Every line of code is part of a scalable, resilient foundation.',
            featured: true
        },
        {
            icon: 'ri-pen-nib-line',
            title: 'Technical Craft',
            text: 'Precision is our baseline. We treat every pixel and every endpoint with artisan-level attention.'
        },
        {
            icon: 'ri-history-line',
            title: 'Long-term Thinking',
            text: 'We build for your first million users, ensuring your technology evolves as fast as your vision.'
        },
        {
            icon: 'ri-shield-flash-line',
            title: 'Security First',
            text: 'Privacy and data integrity aren\'t features; they are the bedrock of everything we deploy.',
            featured: true
        },
    ];
    return (
        <section className="philosophy-section extras-section" ref={ref}>
            <div className="container extras-container">
                <div className="philosophy-grid">
                    <div className="philosophy-header">
                        <span className="extras-eyebrow">OUR CORE DNA</span>
                        <h2 className="philosophy-title">Engineering Beyond<br />the Interface</h2>
                        <p className="philosophy-body">
                            At Hypertonic, we believe that the most powerful technology is often invisible.
                            Our philosophy centers on the structural integrity, security, and scalability
                            that happens beneath the surface.
                        </p>
                    </div>
                    <div className="philosophy-pillars">
                        {pillars.map((p, i) => (
                            <div
                                className={`philosophy-card ${p.featured ? 'philosophy-card-featured' : ''}`}
                                key={p.title}
                                style={{ animationDelay: `${i * 0.1}s` }}
                            >
                                <div className="philosophy-card-icon">
                                    <i className={p.icon} />
                                </div>
                                <h3 className="philosophy-card-title">{p.title}</h3>
                                <p className="philosophy-card-text">{p.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
// Re-exporting as OurStory for backward compatibility in About.js if needed, 
// but it's better to update About.js as well.
export const OurStory = CompanyPhilosophy;

// 4. WHY CHOOSE US (Bento Monochrome)
const WHY_CARDS = [
    {
        icon: 'ri-flashlight-line',
        title: 'Radical Innovation',
        desc: 'We don\'t follow trends. We set them using edge-case technologies.',
        span: 'large'
    },
    {
        icon: 'ri-shield-check-line',
        title: 'Bulletproof Trust',
        desc: 'Security and reliability are baked into our DNA.',
        span: 'small'
    },
    {
        icon: 'ri-code-s-slash-line',
        title: 'Command Execution',
        desc: 'Precision-grade development with zero friction.',
        span: 'small'
    },
    {
        icon: 'ri-global-line',
        title: 'Infinite Scale',
        desc: 'Architectures designed to handle your first 100 users or your first 100 million.',
        span: 'large'
    }
];

export const WhyChooseUs = () => {
    const ref = useReveal(0.05);
    // Mouse Spotlight Effect
    const handleMouseMove = (e) => {
        const cards = e.currentTarget.querySelectorAll('.why-choose-card');
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    };
    return (
        <section className="why-choose-section extras-section" ref={ref} onMouseMove={handleMouseMove}>
            <div className="container extras-container">
                <div className="extras-header-centered">
                    <h2 className="extras-heading" style={{ marginBottom: '5px' }}>Why We Lead</h2>
                    <p className="section-label"><span className="sv2-highlight">The</span> Hypertonic Edge</p>
                    <hr className="extras-divider extras-divider-center" />
                </div>
                <div className="why-choose-bento">
                    {WHY_CARDS.map((c, i) => (
                        <div
                            className={`why-choose-card why-choose-card-${c.span}`}
                            key={c.title}
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            <div className="why-choose-spotlight" />
                            <div className="why-choose-icon">
                                <i className={c.icon} />
                            </div>
                            <div className="why-choose-content">
                                <h3 className="why-choose-title">{c.title}</h3>
                                <p className="why-choose-desc">{c.desc}</p>
                            </div>
                            <div className="why-choose-edge-glow" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// 6. STATS STRIP
const STATS = [
    { num: '100%', lbl: 'Quality Standard' },
    { num: '24/7', lbl: 'Mission Control' },
    { num: '50+', lbl: 'Global Launches' },
    { num: '3+', lbl: 'Years of Magic' }
];

export const StatsStrip = () => {
    const ref = useReveal(0.08);
    return (
        <section className="stats-section extras-section" ref={ref}>
            <div className="container extras-container">
                <div className="extras-header-centered">
                    <h2 className="extras-heading" style={{ marginBottom: '5px' }}>Impact By The Numbers</h2>
                    <p className="section-label"><span className="sv2-highlight">Proven</span> Track Record</p>
                    <hr className="extras-divider extras-divider-center" />
                </div>
                <div className="stats-container">
                    {STATS.map((s, i) => (
                        <React.Fragment key={s.lbl}>
                            <div className="stats-item">
                                <span className="stats-number">{s.num}</span>
                                <span className="stats-label">{s.lbl}</span>
                            </div>
                            {i < STATS.length - 1 && <div className="stats-separator" />}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

// 8. VISION SECTION
export const VisionSection = () => {
    const ref = useReveal(0.12);
    return (
        <section className="vision-section extras-section" ref={ref}>
            <div className="vision-orb vision-orb-one" />
            <div className="vision-orb vision-orb-two" />
            <div className="container extras-container">
                <div className="vision-container">
                    <span className="extras-eyebrow extras-eyebrow-center">BEYOND THE HORIZON</span>
                    <h2 className="vision-heading">
                        Defying Gravity by<br />Building Better
                    </h2>
                    <p className="vision-body">
                        Our vision isn't just to be a partner; it's to be the standard.
                        We're building an ecosystem where innovation isn't a premium
                        - it's the default.
                    </p>
                </div>
            </div>
        </section>
    );
};

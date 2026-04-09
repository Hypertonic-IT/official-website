import React, { useRef, useState, useEffect } from 'react';
import './component.css';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const processSteps = [
    { num: "01", title: "Discovery", icon: "ri-search-eye-line", desc: "Understanding your vision, goals, and targets." },
    { num: "02", title: "Planning", icon: "ri-mind-map", desc: "Strategic blueprinting and UX/UI framing." },
    { num: "03", title: "Development", icon: "ri-terminal-box-line", desc: "Bringing the ideas to life with clean code." },
    { num: "04", title: "Testing", icon: "ri-bug-line", desc: "Rigorous quality checks for flawless execution." },
    { num: "05", title: "Launch", icon: "ri-rocket-line", desc: "Deploying the product to the live environment." },
    { num: "06", title: "Support", icon: "ri-customer-service-2-line", desc: "Continuous monitoring and enhancements." }
];

const TimelineStep = ({ step, isLeft, isActive }) => {
    const card = (
        <div className="timeline-card">
            <div className="tc-glass">
                <div className="tc-number">{step.num}</div>
                <div className="tc-content">
                    <div className="tc-icon-wrap">
                        <i className={step.icon}></i>
                    </div>
                    <div className="tc-texts">
                        <h3 className="tc-title">{step.title}</h3>
                        <p className="tc-desc">{step.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <motion.div
            className={`timeline-row ${isLeft ? 'row-left' : 'row-right'} ${isActive ? 'active' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <div className="timeline-dot">
                <div className="dot-inner"></div>
            </div>

            {isLeft ? (
                <>
                    {card}
                    <div className="timeline-space"></div>
                </>
            ) : (
                <>
                    <div className="timeline-space"></div>
                    {card}
                </>
            )}
        </motion.div>
    );
};

const ProcessTimeline = () => {
    const timelineRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(-1);
    const [thresholds, setThresholds] = useState([]);

    // Calculate physical DOM distances of all tracking dots relative to the overall timeline bar height
    useEffect(() => {
        if (!timelineRef.current) return;

        const updateThresholds = () => {
            const rows = Array.from(timelineRef.current.querySelectorAll('.timeline-row'));
            const totalHeight = timelineRef.current.clientHeight;

            const newThresholds = rows.map(row => {
                // Since the timeline line spans the whole height (100%), and the tracker dot is exactly matching that percentage:
                // Absolute vertical center position relative to container = offsetTop + (clientHeight / 2)
                // Divide by totalHeight to get the exact % mark (0 to 1) where the scrolling line will precisely intersect it.
                return (row.offsetTop + row.clientHeight / 2) / totalHeight;
            });
            setThresholds(newThresholds);
        };

        // Delay slight calculation trick because Framer animations might adjust height on load 
        setTimeout(updateThresholds, 100);
        window.addEventListener('resize', updateThresholds);
        return () => window.removeEventListener('resize', updateThresholds);
    }, []);

    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start center", "end center"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (thresholds.length === 0) return;

        // Track active threshold. Start at -1 (nothing active).
        let targetIndex = -1;

        // Evaluate sequentially which dots are passed by the scrolling tracking line (latest)
        for (let i = 0; i < thresholds.length; i++) {
            // A strict condition tracking collision of moving line over mapped node boundaries + 1.5% collision overlap tolerance
            if (latest >= thresholds[i] - 0.015) {
                targetIndex = i;
            }
        }

        if (activeIndex !== targetIndex) {
            setActiveIndex(targetIndex);
        }
    });

    return (
        <div className="process-v3-section">
            <div className="container position-relative">

                <motion.div
                    className="process-v3-header text-center"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="process-v3-title">Our Process</h2>
                    <p className="process-v3-subtitle"> <span className="sv2-highlight">A seamless journey</span> from idea to execution</p>
                </motion.div>

                <div className="process-timeline" ref={timelineRef}>

                    <div className="timeline-line"></div>

                    <motion.div
                        className="timeline-line-filled"
                        style={{ height: lineHeight }}
                    >
                        <div className="timeline-line-glow-head"></div>
                    </motion.div>

                    {processSteps.map((step, idx) => {
                        const isLeft = idx % 2 === 0;
                        return <TimelineStep key={idx} step={step} isLeft={isLeft} isActive={activeIndex === idx} />;
                    })}
                </div>

            </div>
        </div>
    );
};

export default ProcessTimeline;

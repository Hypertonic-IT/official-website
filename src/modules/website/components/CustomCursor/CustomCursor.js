import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./CustomCursor.css";

const CustomCursor = () => {
  const [cursorType, setCursorType] = useState("default");
  const [cursorText, setCursorText] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Core movement
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring settings for the outer circle (lag effect for premium feel)
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const outerX = useSpring(mouseX, springConfig);
  const outerY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Magnetic effect detection
      const magneticTarget = e.target.closest(".hero-btn-primary, .hero-btn-outline, .btn-primary-dark, .btn-outline-dark, .magnetic");
      if (magneticTarget) {
        const { left, top, width, height } = magneticTarget.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const distance = Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2));

        if (distance < 100) {
          const moveX = (e.clientX - centerX) * 0.3;
          const moveY = (e.clientY - centerY) * 0.3;
          magneticTarget.style.transform = `translate(${moveX}px, ${moveY}px)`;
          magneticTarget.style.transition = "transform 0.1s ease-out";
        } else {
          magneticTarget.style.transform = "translate(0px, 0px)";
          magneticTarget.style.transition = "transform 0.3s ease-out";
        }
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeaveWindow = () => setIsVisible(false);
    const handleMouseEnterWindow = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);

    // Dynamic hover listeners for all interactive elements
    const handleMouseOver = (e) => {
      const clickableTarget = e.target.closest("a, button, .nav-link, .navbar-brand, .clickable, .hero-btn-primary, .hero-btn-outline, .btn-primary-dark, .btn-outline-dark, .readaboutbtn, .navbar-cta");
      if (clickableTarget) {
        setCursorType("hover");
        if (clickableTarget.dataset.cursorText) {
          setCursorText(clickableTarget.dataset.cursorText);
        }
      }

      const viewTarget = e.target.closest(".hq-card, .portfolio-card, img, .project-card");
      if (viewTarget) {
        setCursorType("view");
        setCursorText(viewTarget.dataset.cursorText || "View");
      }

      const dragTarget = e.target.closest(".slider-container, .swiper-container, .draggable");
      if (dragTarget) {
        setCursorType("drag");
        setCursorText("Drag");
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      if (target.closest(".hero-btn-primary, .hero-btn-outline, .btn-primary-dark, .btn-outline-dark, .magnetic")) {
        target.style.transform = "translate(0px, 0px)";
        target.style.transition = "transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
      }
      setCursorType("default");
      setCursorText("");
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="custom-cursor-wrapper">
      {/* Inner Dot - Fast Follow */}
      <motion.div
        className="cursor-dot"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Outer Circle - Delayed Smooth Follow */}
      <motion.div
        className={`cursor-outline ${cursorType} ${isClicked ? "clicked" : ""}`}
        style={{
          x: outerX,
          y: outerY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        {cursorText && (
          <motion.span 
            className="cursor-text"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
};

export default CustomCursor;

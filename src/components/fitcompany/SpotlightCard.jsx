import React, { useRef } from "react";
import { motion } from "framer-motion";

export default function SpotlightCard({ children, className = "", glowColor = "rgba(255, 107, 0, 0.12)", ...props }) {
  const glowRef = useRef(null);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current || !glowRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glowRef.current.style.background = `radial-gradient(circle 250px at ${x}px ${y}px, ${glowColor}, transparent 70%)`;
    glowRef.current.style.opacity = "1";
  };

  const handleMouseLeave = () => {
    if (glowRef.current) glowRef.current.style.opacity = "0";
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className}`}
      {...props}
    >
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500"
      />
      {children}
    </motion.div>
  );
}
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function TiltCard({ image, title, description, index }) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glareX, setGlareX] = useState(50);
  const [glareY, setGlareY] = useState(50);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setRotateX((y - 0.5) * -15);
    setRotateY((x - 0.5) * 15);
    setGlareX(x * 100);
    setGlareY(y * 100);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative flex-shrink-0 w-72 md:w-80 h-[420px] rounded-2xl overflow-hidden group"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="w-full h-full rounded-2xl overflow-hidden"
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />

        {/* Glare */}
        {isHovered && (
          <div
            className="absolute inset-0 opacity-20 pointer-events-none transition-opacity"
            style={{
              background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,140,0,0.3), transparent 60%)`,
            }}
          />
        )}

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold text-white mb-2 tracking-wide">{title}</h3>
          <motion.p
            className="text-sm leading-relaxed"
            animate={{ color: isHovered ? "#FF8C00" : "#525252" }}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}
import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { damping: 25, stiffness: 250 });
  const springY = useSpring(cursorY, { damping: 25, stiffness: 250 });
  const isTouchDevice = useRef(false);

  useEffect(() => {
    isTouchDevice.current = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice.current) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", moveCursor);

    const interactives = document.querySelectorAll("a, button, [role='button'], input, textarea, select");
    interactives.forEach(el => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    const observer = new MutationObserver(() => {
      const newInteractives = document.querySelectorAll("a, button, [role='button'], input, textarea, select");
      newInteractives.forEach(el => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactives.forEach(el => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      observer.disconnect();
    };
  }, [isVisible]);

  if (isTouchDevice.current) return null;

  return (
    <>
      {/* Dot — orange with glow */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-flame rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow: "0 0 12px rgba(255, 107, 0, 0.8)",
        }}
        animate={{ opacity: isVisible ? 1 : 0 }}
      />
      {/* Ring — orange, expands on hover */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border border-flame"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow: "0 0 20px rgba(255, 107, 0, 0.4)",
        }}
        animate={{
          width: isHovering ? 64 : 28,
          height: isHovering ? 64 : 28,
          borderColor: isHovering ? "rgba(255,107,0,0.9)" : "rgba(255,140,0,0.5)",
          backgroundColor: isHovering ? "rgba(255,107,0,0.1)" : "transparent",
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
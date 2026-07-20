import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

/**
 * Cursor premium para a unidade São Pedro.
 * - Rastro de brasas que segue o mouse (GPU-friendly, limitado a 12 partículas)
 * - Aura expansiva que reage a hover em elementos interativos
 * - Explosão de partículas no clique
 * - Desativa em dispositivos de toque
 */
export default function CustomCursorSaoPedro() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [bursts, setBursts] = useState([]);
  const [trail, setTrail] = useState([]);
  const burstId = useRef(0);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { damping: 28, stiffness: 350 });
  const springY = useSpring(cursorY, { damping: 28, stiffness: 350 });
  const isTouchDevice = useRef(false);
  const lastTrailTime = useRef(0);

  useEffect(() => {
    isTouchDevice.current = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice.current) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Throttle ember trail spawn (~every 45ms)
      const now = performance.now();
      if (now - lastTrailTime.current > 45) {
        lastTrailTime.current = now;
        setTrail((prev) => {
          const next = [
            ...prev,
            {
              id: now + Math.random(),
              x: e.clientX + (Math.random() - 0.5) * 8,
              y: e.clientY + (Math.random() - 0.5) * 8,
              size: 3 + Math.random() * 5,
              drift: (Math.random() - 0.5) * 30,
              duration: 0.6 + Math.random() * 0.5,
            },
          ];
          return next.slice(-14);
        });
      }
    };

    const handleClick = (e) => {
      const id = burstId.current++;
      const particles = Array.from({ length: 10 }).map((_, i) => ({
        id: `${id}-${i}`,
        angle: (i / 10) * Math.PI * 2,
        distance: 30 + Math.random() * 40,
        size: 3 + Math.random() * 4,
        duration: 0.5 + Math.random() * 0.3,
      }));
      setBursts((prev) => [...prev, { id, x: e.clientX, y: e.clientY, particles }]);
      setTimeout(() => {
        setBursts((prev) => prev.filter((b) => b.id !== id));
      }, 900);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("click", handleClick);

    const attachInteractives = () => {
      const interactives = document.querySelectorAll("a, button, [role='button'], input, textarea, select");
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    };
    attachInteractives();

    const observer = new MutationObserver(attachInteractives);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("click", handleClick);
      observer.disconnect();
      document.querySelectorAll("a, button, [role='button'], input, textarea, select").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isVisible, cursorX, cursorY]);

  // Clean up expired trail particles
  useEffect(() => {
    if (trail.length === 0) return;
    const timer = setTimeout(() => {
      setTrail((prev) => prev.slice(-8));
    }, 700);
    return () => clearTimeout(timer);
  }, [trail]);

  if (isTouchDevice.current) return null;

  return (
    <>
      {/* Ember trail */}
      <div className="fixed inset-0 pointer-events-none z-[9997]">
        <AnimatePresence>
          {trail.map((p) => (
            <motion.span
              key={p.id}
              className="absolute rounded-full bg-flame"
              style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
              initial={{ opacity: 0.9, scale: 1, x: 0, y: 0 }}
              animate={{ opacity: 0, scale: 0.2, x: p.drift, y: 25 + Math.random() * 20 }}
              exit={{ opacity: 0 }}
              transition={{ duration: p.duration, ease: "easeOut" }}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Click bursts */}
      <div className="fixed inset-0 pointer-events-none z-[9998]">
        <AnimatePresence>
          {bursts.map((burst) =>
            burst.particles.map((p) => {
              const tx = Math.cos(p.angle) * p.distance;
              const ty = Math.sin(p.angle) * p.distance;
              return (
                <motion.span
                  key={p.id}
                  className="absolute rounded-full bg-flame-light"
                  style={{
                    left: burst.x,
                    top: burst.y,
                    width: p.size,
                    height: p.size,
                    boxShadow: "0 0 8px rgba(255,126,71,0.9)",
                  }}
                  initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  animate={{ opacity: 0, scale: 0.1, x: tx, y: ty }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: p.duration, ease: "easeOut" }}
                />
              );
            })
          )}
        </AnimatePresence>
      </div>

      {/* Core dot — bright ember */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-flame-light rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow: "0 0 14px rgba(255,126,71,0.95), 0 0 28px rgba(255,94,26,0.6)",
        }}
        animate={{ opacity: isVisible ? 1 : 0 }}
      />

      {/* Outer ring — expands on hover, magnetic aura */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border border-flame"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 72 : 32,
          height: isHovering ? 72 : 32,
          borderColor: isHovering ? "rgba(255,126,71,0.95)" : "rgba(255,94,26,0.5)",
          backgroundColor: isHovering ? "rgba(255,94,26,0.12)" : "transparent",
          boxShadow: isHovering
            ? "0 0 40px rgba(255,94,26,0.5), inset 0 0 20px rgba(255,126,71,0.2)"
            : "0 0 20px rgba(255,94,26,0.3)",
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />

      {/* Soft aura glow — separate layer for depth */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-flame/20 blur-xl pointer-events-none z-[9996]"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 120 : 60,
          height: isHovering ? 120 : 60,
          opacity: isHovering ? 0.6 : 0.3,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </>
  );
}
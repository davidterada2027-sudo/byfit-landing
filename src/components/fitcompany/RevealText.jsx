import React from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export default function RevealText({ children, className = "", delay = 0, direction = "up" }) {
  const isMobile = useIsMobile();
  const yVal = direction === "up" ? (isMobile ? 8 : 14) : (isMobile ? -8 : -14);
  const blur = isMobile ? "blur(4px)" : "blur(6px)";

  return (
    <div className="overflow-hidden">
      <motion.div
        className={className}
        initial={{ y: yVal, opacity: 0, filter: blur }}
        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}
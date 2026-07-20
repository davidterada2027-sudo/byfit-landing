import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dumbbell } from "lucide-react";
import Logo from "./Logo";

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("loading");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setPhase("morph"), 200);
          setTimeout(() => setPhase("fly"), 1000);
          setTimeout(() => {
            setPhase("done");
            onComplete();
          }, 1700);
          return 100;
        }
        return prev + Math.random() * 8 + 2;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [onComplete]);

  const isMorphing = phase === "morph" || phase === "fly";
  const isFlying = phase === "fly";

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[100] bg-obsidian flex flex-col items-center justify-center"
          animate={isFlying
            ? { opacity: 0, filter: "blur(16px)" }
            : { opacity: 1, filter: "blur(0px)" }
          }
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Morphing container: dumbbell shrinks → logo scales up → flies to navbar */}
          <motion.div
            className="relative flex items-center justify-center mb-10"
            animate={isFlying ? { y: -280, scale: 0.6 } : isMorphing ? { y: 0, scale: 1.08 } : { y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Dumbbell — spins during load, fades + shrinks during morph */}
            <motion.div
              className="absolute"
              animate={{ rotate: 360, opacity: isMorphing ? 0 : 1, scale: isMorphing ? 0.2 : 1 }}
              transition={{
                rotate: { duration: 1.8, repeat: Infinity, ease: "linear" },
                opacity: { duration: 0.5 },
                scale: { duration: 0.5 },
              }}
            >
              <Dumbbell size={52} className="text-flame glow-flame-icon" />
            </motion.div>

            {/* Logo — fades in + scales up during morph */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={isMorphing ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Logo className="h-14 md:h-16 w-auto" />
            </motion.div>
          </motion.div>

          {/* Progress bar + percentage — hidden during morph */}
          <motion.div
            className="flex flex-col items-center"
            animate={{ opacity: isMorphing ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-48 md:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#ff6b00] to-[#ff4500] rounded-full"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
            <p className="mt-4 text-steel text-sm font-mono tracking-widest">
              {Math.min(Math.round(progress), 100)}%
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
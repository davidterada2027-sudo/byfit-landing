import React from "react";
import { motion } from "framer-motion";
import RevealText from "./RevealText";
import AnimatedCounter from "./AnimatedCounter";

const STATS = [
  { end: 4500, suffix: "+", label: "Alunos transformados" },
  { end: 12, suffix: "", label: "Anos de história" },
  { end: 300, suffix: "+", label: "Equipamentos" },
  { end: 25, suffix: "+", label: "Personal trainers" },
];

export default function StatsSection() {
  return (
    <section className="py-24 md:py-32 bg-soft-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-glow-flame opacity-10 pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <RevealText>
          <div className="text-center mb-16">
            <h2 className="heading-lg text-white">
              NÚMEROS QUE
              <br />
              <span className="text-gradient-flame">NÃO MENTEM</span>
            </h2>
          </div>
        </RevealText>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, i) => (
            <RevealText key={stat.label} delay={i * 0.15}>
              <motion.div
                className="text-center group"
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="font-display text-5xl md:text-6xl lg:text-7xl text-gradient-flame glow-flame-icon transition-all duration-500">
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                </div>
                <div className="mx-auto mt-3 w-12 h-[2px] bg-flame/40 group-hover:w-16 group-hover:bg-flame transition-all duration-500" />
                <p className="mt-3 text-sm md:text-base text-steel tracking-wide uppercase">
                  {stat.label}
                </p>
              </motion.div>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
}
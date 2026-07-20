const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Instagram, Facebook, Youtube, ArrowRight, Play } from "lucide-react";
import RevealText from "./RevealText";

const DEFAULT_HERO_IMAGE = "https://media.db.com/images/public/6a470591140c597a3a4863f3/52b66ea2c_generated_image.png";
const DEFAULT_HERO_VIDEO = "https://media.db.com/videos/public/6a470591140c597a3a4863f3/056633f3a_fitcompany_ByTkS9PgWOe.mp4";

export default function HeroSection({
  heroImage = DEFAULT_HERO_IMAGE,
  heroVideo = DEFAULT_HERO_VIDEO,
  tagline = "Força · Energia · Superação",
  headlineTop = "SUPERE",
  headlineAccent = "LIMITES",
  subheadline = "Mais que uma academia. Um estilo de vida.",
}) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleScroll = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden flex items-center bg-obsidian">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden bg-obsidian">
        <video
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-h-full min-w-full object-cover opacity-100"
          autoPlay
          muted
          loop
          playsInline
          preload="auto">
          
          <source
            src={heroVideo}
            type="video/mp4" className="opacity-100" />
          
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-obsidian/40 opacity-65" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/40" />
        <div className="absolute inset-0 bg-obsidian/30" />
      </div>

      {/* Edge glow accent */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-glow-flame opacity-10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
      

      {/* Content split */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 items-center"
        style={{ opacity }}
        data-mounted={mounted}>
        
        {/* Left: text */}
        <div className="max-w-xl">
          <RevealText delay={0.3}>
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-[2px] bg-flame" />
              <span className="text-flame text-sm font-semibold tracking-[0.2em] uppercase">
                {tagline}
              </span>
            </div>
          </RevealText>

          <RevealText delay={0.5}>
            <h1 className="heading-xl text-white leading-[0.95]">
              {headlineTop} <span className="text-flame">SEUS</span>
              <br />
              {headlineAccent}
            </h1>
          </RevealText>

          <RevealText delay={0.7}>
            <p className="mt-6 body-text max-w-lg">
              {subheadline}
            </p>
          </RevealText>

          <RevealText delay={0.9}>
            <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4">
              <motion.button
                onClick={() => handleScroll("#planos")}
                className="w-full sm:w-auto px-8 py-4 bg-flame text-obsidian cta-text rounded-full animate-glow-pulse hover:bg-flame-light transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}>
                
                MATRICULE-SE AGORA <ArrowRight size={16} />
              </motion.button>
              <motion.button
                className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white cta-text rounded-full hover:border-flame hover:text-flame transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}>
                
                <Play size={16} /> ASSISTA AO VÍDEO
              </motion.button>
            </div>
          </RevealText>
        </div>

        {/* Right: athlete image */}
        <motion.div
          className="relative hidden md:block h-[75vh]"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}>
          
          <img
            src={heroImage}
            alt="Atleta em movimento com iluminação dramática laranja"
            className="w-full h-full object-cover rounded-2xl hidden" />
          
          <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 hidden" />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-obsidian/60 via-transparent to-transparent hidden" />
        </motion.div>
      </motion.div>

      {/* Vertical Est. 2014 */}
      <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-20">
        <div className="w-[1px] h-16 bg-gradient-to-b from-flame to-transparent" />
        <span className="text-steel text-xs tracking-[0.3em] uppercase [writing-mode:vertical-rl] rotate-180">
          Est · 2014
        </span>
        <div className="w-[1px] h-16 bg-gradient-to-t from-flame to-transparent" />
      </div>

      {/* Status card */}
      <motion.div
        className="hidden md:block absolute bottom-28 right-12 z-20 bg-obsidian/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 w-48"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}>
        
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full bg-flame animate-pulse" />
          <span className="text-steel text-xs tracking-wide uppercase">Agora</span>
        </div>
        <p className="font-display text-3xl text-white tracking-wide">+2.000</p>
        <p className="text-steel text-xs">alunos transformados</p>
      </motion.div>

      {/* Social icons */}
      <div className="hidden md:flex absolute bottom-10 right-12 z-20 items-center gap-3">
        <a href="https://www.instagram.com/fit.company/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-flame hover:text-flame transition-all">
          <Instagram size={18} />
        </a>
        <a href="https://facebook.com/fitcompany" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-flame hover:text-flame transition-all">
          <Facebook size={18} />
        </a>
        <a href="https://youtube.com/fitcompany" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-flame hover:text-flame transition-all">
          <Youtube size={18} />
        </a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
        
        <span className="text-steel text-xs tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-flame to-transparent" />
      </motion.div>
    </section>);

}
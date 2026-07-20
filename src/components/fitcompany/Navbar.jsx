const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
const NAV_LOGO_URL = "https://media.db.com/images/public/6a470591140c597a3a4863f3/79b9d9d7e_logo-vertical-branco.png";
const ALUNO_URL = "https://evo-totem.w12app.com.br/fitcompanysjp/1/totem/escolher-acao/cliente";

const NAV_LINKS = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Modalidades", href: "#treinos" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "Planos", href: "#planos" },
  { label: "Equipe", href: "#equipe" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar({ unitName, alunoUrl = ALUNO_URL }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-500 ${
          scrolled
            ? "bg-black/90 backdrop-blur-2xl border-b border-white/5 py-3"
            : "bg-transparent py-4 md:py-6"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <motion.button
            onClick={() => handleNavClick("#hero")}
            className="flex items-center hover:opacity-80 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={NAV_LOGO_URL}
              alt="FitCompany"
              className="h-12 md:h-24 w-auto object-contain"
              draggable={false}
            />
          </motion.button>
          {unitName && (
            <span className="hidden xl:block ml-2 pl-3 border-l border-white/15 font-display text-sm tracking-[0.2em] text-flame">
              {unitName}
            </span>
          )}

          <div className="hidden xl:flex items-center gap-1">
            {NAV_LINKS.map((link, index) => (
              <motion.div
                key={link.href}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative"
              >
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="relative px-4 py-2.5 text-[15px] font-bold tracking-[0.12em] uppercase transition-colors duration-300 text-white hover:text-flame"
                >
                  {link.label}
                  {/* Animated underline */}
                  <motion.span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-flame rounded-full"
                    initial={false}
                    animate={{
                      width: hoveredIndex === index ? "70%" : "0%",
                      opacity: hoveredIndex === index ? 1 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  />
                </button>
              </motion.div>
            ))}
          </div>

          <motion.a
            href={alunoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-8 py-4 bg-flame text-white text-sm font-bold tracking-[0.1em] uppercase rounded-full hover:bg-flame-light transition-colors duration-300 shadow-lg shadow-flame/20 hover:shadow-flame/40 hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            ÁREA DO ALUNO
            <ArrowRight size={14} />
          </motion.a>

          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Animated bottom border line */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-flame to-transparent"
          initial={{ width: "0%" }}
          animate={{ width: scrolled ? "100%" : "0%" }}
          transition={{ duration: 0.5 }}
        />
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[75] bg-black flex flex-col overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex-1 flex flex-col items-center justify-center gap-2 px-6 py-10 overflow-y-auto">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="group flex items-center gap-4 text-2xl font-bold text-white hover:text-flame transition-colors py-2"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, type: "spring", stiffness: 300 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
            <motion.div
              className="p-8 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href={alunoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-flame text-white font-bold rounded-full text-lg flex items-center gap-2 shadow-lg shadow-flame/30"
              >
                ÁREA DO ALUNO <ArrowRight size={18} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
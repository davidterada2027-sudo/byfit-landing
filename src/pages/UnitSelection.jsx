const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  MapPin,
  ArrowRight,
  Check,
  Dumbbell,
  Shield,
  Cog,
  UserCheck,
  Users,
  Smartphone } from
"lucide-react";
import Logo from "@/components/fitcompany/Logo";
import CustomCursor from "@/components/fitcompany/CustomCursor";

// Floating ember particles — lightweight, GPU-friendly
function EmberParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 2 + Math.random() * 4,
        delay: Math.random() * 6,
        duration: 6 + Math.random() * 8,
        drift: (Math.random() - 0.5) * 40,
      })),
    []
  );
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute bottom-0 rounded-full bg-flame"
          style={{ left: `${p.left}%`, width: p.size, height: p.size }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [0, -window.innerHeight * 0.7], x: [0, p.drift], opacity: [0, 0.9, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

const UNITS = [
{
  id: "afonso-pena",
  name: "AFONSO PENA",
  subtitle: "UNIDADE MATRIZ",
  address: "R. Alm. Alexandrino, 1460",
  addressLine2: "Afonso Pena — São José dos Pinhais / PR",
  image:
  "https://media.db.com/images/public/6a470591140c597a3a4863f3/1085cc458_AFONSOPENA.png",
  featured: false
},
{
  id: "buritis",
  name: "BAIRRO ALTO",
  subtitle: "UNIDADE CURITIBA",
  address: "R. José de Oliveira Franco, 2837",
  addressLine2: "Bairro Alto — Curitiba / PR",
  image:
  "https://media.db.com/images/public/6a470591140c597a3a4863f3/a4ddd230e_fitcompanycwb_DXhB9IDgKHa.jpg",
  featured: false
},
{
  id: "sao-pedro",
  name: "SÃO PEDRO",
  subtitle: "UNIDADE SÃO PEDRO",
  address: "Rua Joinville, 3091",
  addressLine2: "São Pedro — São José dos Pinhais / PR",
  image:
  "https://media.db.com/images/public/6a470591140c597a3a4863f3/6f6cc3295_SOPEDRO.png",
  featured: false
}];

const FEATURES = [
{ icon: Shield, label: "ESTRUTURA PREMIUM" },
{ icon: Cog, label: "EQUIPAMENTOS DE ÚLTIMA GERAÇÃO" },
{ icon: UserCheck, label: "PROFISSIONAIS QUALIFICADOS" },
{ icon: Users, label: "DIVERSAS MODALIDADES PARA VOCÊ" },
{ icon: Smartphone, label: "PLANOS FLEXÍVEIS E ACESSÍVEIS" }];

export default function UnitSelection() {
  const navigate = useNavigate();
  const [redirecting, setRedirecting] = useState(false);

  const handleSelect = (unit) => {
    localStorage.setItem("selected_unit", JSON.stringify(unit));
    setRedirecting(true);
    const path = unit.id === "sao-pedro" ? "/sao-pedro" : "/home";
    setTimeout(() => navigate(path), 700);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col overflow-x-hidden">
      <CustomCursor />

      {/* Redirect overlay */}
      <AnimatePresence>
        {redirecting &&
        <motion.div
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}>
          
            <motion.div
            className="w-20 h-20 rounded-full bg-flame flex items-center justify-center glow-flame"
            initial={{ scale: 0.5, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}>
            
              <Check size={40} className="text-white" />
            </motion.div>
            <motion.p
            className="font-display text-2xl tracking-[0.1em] text-white"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}>
            
              ENTRANDO...
            </motion.p>
          </motion.div>
        }
      </AnimatePresence>

      {/* Background: gradient + grid + ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b0b] to-black" />
        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 20%, transparent 48%)",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 20%, transparent 48%)",
          }} />
        
        {/* Ambient breathing glows */}
        <motion.div
          className="absolute top-[15%] left-[10%] w-[600px] h-[600px] rounded-full bg-flame/[0.08] blur-[160px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />
        
        <motion.div
          className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-flame/[0.06] blur-[140px]"
          animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }} />
        
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.7)_100%)]" />
      </div>

      {/* Hero */}
      <section className="relative z-10 text-center px-6 pt-2 md:pt-6 pb-10 md:pb-14">
        <EmberParticles />

        {/* Scanning beam line */}
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-flame to-transparent origin-center"
          initial={{ scaleX: 0, opacity: 0, y: 0 }}
          animate={{ scaleX: 1, opacity: [0, 1, 0] }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          style={{ top: "30%" }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative flex flex-col items-center mb-7">
          
          {/* Rotating halo ring behind logo */}
          <motion.div
            className="absolute -inset-8 rounded-full border border-flame/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            style={{ borderTopColor: "rgba(255,107,0,0.9)", borderRightColor: "transparent", borderBottomColor: "transparent", borderLeftColor: "transparent" }}
          />
          <motion.div
            className="absolute -inset-10 rounded-full border border-flame/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            style={{ borderBottomColor: "rgba(255,107,0,0.6)", borderTopColor: "transparent", borderLeftColor: "transparent", borderRightColor: "transparent" }}
          />
          <div className="absolute -inset-6 bg-flame/15 blur-[70px] rounded-full pointer-events-none" />
          
          {/* Light sweep over logo */}
          <div className="relative overflow-hidden rounded-full">
            <Logo className="relative h-24 md:h-28 w-auto object-contain drop-shadow-[0_0_25px_rgba(255,107,0,0.5)]" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
              initial={{ x: "-120%" }}
              animate={{ x: "120%" }}
              transition={{ duration: 1.4, delay: 0.8, ease: "easeInOut" }}
              style={{ skewX: "-20deg" }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex items-center justify-center mb-5">
          
          <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-flame" />
          <Dumbbell size={22} className="text-flame mx-4 glow-flame-icon" />
          <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-flame" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-display text-4xl md:text-5xl text-white text-center leading-[0.9] tracking-[0.06em] drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] relative inline-block">
          
          <span className="relative inline-block overflow-hidden">
            {"ESCOLHA ".split("").map((ch, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.03, ease: [0.22, 1, 0.36, 1] }}
              >
                {ch === " " ? "\u00A0" : ch}
              </motion.span>
            ))}
          </span>
          <span className="relative inline-block overflow-hidden align-baseline">
            <span className="text-gradient-flame drop-shadow-[0_0_28px_rgba(255,107,0,0.55)]">
              {"SUA UNIDADE".split("").map((ch, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.03, ease: [0.22, 1, 0.36, 1] }}
                >
                  {ch === " " ? "\u00A0" : ch}
                </motion.span>
              ))}
            </span>
          </span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mx-auto mt-6 flex items-center justify-center gap-2">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-flame" />
          <span className="w-1.5 h-1.5 rotate-45 bg-flame glow-flame-icon" />
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-flame" />
        </motion.div>
        

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="body-text mt-4 max-w-lg mx-auto">
          
          Selecione a unidade mais próxima e comece sua jornada de transformação.
        </motion.p>
      </section>

      {/* Unit cards */}
      <div className="relative z-10 flex-1 px-6 md:px-12 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
          {UNITS.map((unit, i) =>
          <motion.div
            key={unit.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
            onClick={() => handleSelect(unit)}
            className="group relative rounded-[1.75rem] overflow-hidden border border-white/10 hover:border-flame/70 transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:shadow-[0_30px_80px_-20px_rgba(255,107,0,0.45)]">

              {/* Image container */}
              <div className="relative h-[600px] md:h-[680px] overflow-hidden">
                <img
                src={unit.image}
                alt={`Unidade ${unit.name}`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110" />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-br from-flame/0 via-transparent to-flame/0 group-hover:from-flame/10 group-hover:to-flame/20 transition-all duration-500" />

                {/* Overlaid content */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <span className="text-flame text-[11px] font-bold tracking-[0.2em] uppercase block mb-2">
                    {unit.subtitle}
                  </span>

                  <h3 className="text-3xl md:text-4xl font-display tracking-[0.04em] text-white mb-4 leading-[0.95]">
                    {unit.name}
                  </h3>

                  {/* Address */}
                  <div className="flex items-start gap-2 mb-6">
                    <MapPin size={16} className="text-flame flex-shrink-0 mt-0.5" />
                    <div className="text-white/90 text-[13px] leading-snug">
                      <p>{unit.address}</p>
                      <p>{unit.addressLine2}</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-center gap-2 w-full px-4 py-3.5 rounded-xl bg-flame text-white text-xs font-bold tracking-[0.12em] uppercase transition-all duration-300 group-hover:bg-flame-light group-hover:shadow-lg group-hover:shadow-flame/40">
                    ESCOLHER ESTA UNIDADE
                    <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-flame origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Features footer bar */}
      <div className="relative z-10 bg-[#0a0a0a] border-t border-white/5 px-6 md:px-12 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-8">
          {FEATURES.map((feat, i) =>
          <motion.div
            key={feat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1 + i * 0.1 }}
            className="flex flex-col items-center text-center gap-3 relative md:px-4">
            
              {i !== 0 &&
            <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-10 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />
            }
              <div className="w-12 h-12 rounded-full bg-flame/10 border border-flame/20 flex items-center justify-center group-hover:bg-flame/20 transition-colors">
                <feat.icon size={22} className="text-flame" strokeWidth={1.5} />
              </div>
              <span className="text-[10px] md:text-[11px] text-white font-semibold tracking-[0.08em] leading-tight">
                {feat.label}
              </span>
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 bg-black border-t border-white/5 px-6 py-5">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-3 text-center">
          <Shield size={18} className="text-flame flex-shrink-0 glow-flame-icon" />
          <p className="text-steel text-xs md:text-sm">
            Todas as unidades seguem os mais altos padrões de qualidade{" "}
            <span className="text-flame font-bold tracking-wide">FITCOMPANY</span>
          </p>
        </div>
      </div>
    </div>);

}
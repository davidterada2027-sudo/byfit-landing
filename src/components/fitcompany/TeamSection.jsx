const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { motion } from "framer-motion";
import RevealText from "./RevealText";

const TRAINERS = [
{
  name: "RAFAEL SOUZA",
  specialty: "Musculação & Hipertrofia",
  image: "https://media.db.com/images/public/6a470591140c597a3a4863f3/8c6c3e89e_generated_image.png"
},
{
  name: "JULIANA CRUZ",
  specialty: "Funcional & HIIT",
  image: "https://media.db.com/images/public/6a470591140c597a3a4863f3/4bc989ace_generated_image.png"
},
{
  name: "MARCOS OLIVEIRA",
  specialty: "Crossfit & Performance",
  image: "https://media.db.com/images/public/6a470591140c597a3a4863f3/dfdf8d456_generated_image.png"
},
{
  name: "BEATRIZ LIMA",
  specialty: "Yoga & Mobilidade",
  image: "https://media.db.com/images/public/6a470591140c597a3a4863f3/d38a933d6_generated_image.png"
}];

export default function TeamSection() {
  return (
    <section id="equipe" className="py-28 md:py-36 bg-light-bg relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-flame/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <RevealText>
            <div className="inline-flex items-center gap-2 mb-4 justify-center">
              <div className="w-8 h-[2px] bg-flame" />
              <span className="text-flame text-sm font-semibold tracking-[0.2em] uppercase">
                Especialistas
              </span>
              <div className="w-8 h-[2px] bg-flame" />
            </div>
          </RevealText>
          <RevealText delay={0.1}>
            <h2 className="heading-lg text-dark-text">
              NOSSOS
              <br />
              <span className="text-gradient-flame">PROFISSIONAIS</span>
            </h2>
            

            
          </RevealText>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {TRAINERS.map((trainer, i) =>
          <motion.div
            key={trainer.name}
            className="group relative rounded-2xl overflow-hidden aspect-[3/4] border border-black/5 shadow-lg shadow-black/5"
            initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}>
            
              <img
              src={trainer.image}
              alt={trainer.name}
              loading="lazy"
              className="w-full h-full object-cover transition-all duration-[1.2s] ease-out group-hover:scale-[1.15] group-hover:brightness-110" />
            
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-tr from-flame/30 via-transparent to-flame-fire/10 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute top-4 left-4 font-display text-sm tracking-[0.1em] text-white/50">
                0{i + 1}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <h3 className="font-display text-xl md:text-2xl tracking-[0.06em] text-white">
                  {trainer.name}
                </h3>
                <p className="text-sm text-flame mt-1">{trainer.specialty}</p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-flame scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          )}
        </div>

        <div className="text-center mt-12">
          <motion.button
            className="px-8 py-4 border border-dark-text/20 text-dark-text cta-text rounded-full hover:border-flame hover:text-flame transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            CONHEÇA TODA EQUIPE
          </motion.button>
        </div>
      </div>
    </section>);

}
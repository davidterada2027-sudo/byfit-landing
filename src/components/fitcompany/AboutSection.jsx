const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { motion } from "framer-motion";
import { Target, Award, Users } from "lucide-react";
import RevealText from "./RevealText";

const GYM_IMAGE = "https://media.db.com/images/public/6a470591140c597a3a4863f3/6063f6c8c_fitcompany_B9kbC1lAzV3.jpg";

const PILLARS = [
  { icon: Target, title: "Método", desc: "Periodização científica" },
  { icon: Award, title: "Excelência", desc: "Estrutura premium" },
  { icon: Users, title: "Comunidade", desc: "Time de especialistas" },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="py-28 md:py-36 bg-light-bg relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-flame/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          <motion.div
            className="relative rounded-2xl overflow-hidden aspect-video md:aspect-square border border-black/5 shadow-xl shadow-black/5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={GYM_IMAGE}
              alt="Fachada da Academia Fit Company"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-flame to-transparent" />
            <div className="absolute top-6 right-6 bg-flame text-white px-4 py-2 rounded-full">
              <span className="font-display text-sm tracking-[0.1em]">PREMIUM</span>
            </div>
          </motion.div>

          <div>
            <RevealText>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-[2px] bg-flame" />
                <span className="text-flame text-sm font-semibold tracking-[0.2em] uppercase">
                  Nossa filosofia
                </span>
              </div>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="heading-lg text-dark-text mb-6">
                DISCIPLINA É
                <br />
                <span className="text-gradient-flame">LIBERDADE</span>
              </h2>
            </RevealText>
            <RevealText delay={0.2}>
              <p className="body-text-dark mb-4">
                A FitCompany nasceu da convicção de que treinar é um ato de respeito consigo mesmo. Não vendemos acesso a equipamentos — entregamos um sistema de transformação.
              </p>
            </RevealText>
            <RevealText delay={0.3}>
              <p className="body-text-dark mb-10">
                Cada detalhe do nosso espaço, dos profissionais aos programas, é projetado para eliminar desculpas e construir resultados que duram.
              </p>
            </RevealText>
            <div className="grid grid-cols-3 gap-4">
              {PILLARS.map((pillar, i) => (
                <RevealText key={pillar.title} delay={0.4 + i * 0.1}>
                  <div className="border-t-2 border-flame pt-4">
                    <pillar.icon size={22} className="text-flame mb-2" />
                    <p className="font-display text-lg tracking-[0.04em] text-dark-text">
                      {pillar.title}
                    </p>
                    <p className="text-xs text-dark-muted mt-0.5">{pillar.desc}</p>
                  </div>
                </RevealText>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
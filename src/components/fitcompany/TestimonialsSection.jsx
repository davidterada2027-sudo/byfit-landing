import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import RevealText from "./RevealText";

const TESTIMONIALS = [
  {
    name: "CARLOS EDUARDO",
    role: "Membro há 2 anos",
    text: "Em 6 meses perdi 18kg e ganhei uma confiança que não tinha. Os personals são excepcionais e o ambiente te puxa pra cima.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    name: "MARIANA SANTOS",
    role: "Membro há 1 ano",
    text: "Saí de uma academia comum para a FitCompany e a diferença é absurda. Estrutura impecável e atendimento de outro nível.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "RODRIGO ALVES",
    role: "Membro há 3 anos",
    text: "Já treinei em várias academias premium e nenhuma chega perto. O acompanhamento e a periodização falam por si.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-28 md:py-36 bg-light-bg relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-flame/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <RevealText>
            <div className="inline-flex items-center gap-2 mb-4 justify-center">
              <div className="w-8 h-[2px] bg-flame" />
              <span className="text-flame text-sm font-semibold tracking-[0.2em] uppercase">
                Depoimentos
              </span>
              <div className="w-8 h-[2px] bg-flame" />
            </div>
          </RevealText>
          <RevealText delay={0.1}>
            <h2 className="heading-lg text-dark-text">
              O QUE NOSSOS
              <br />
              <span className="text-gradient-flame">ALUNOS DIZEM</span>
            </h2>
          </RevealText>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              className="relative bg-light-card rounded-2xl border border-black/5 shadow-lg shadow-black/5 p-8 flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Quote size={32} className="text-flame/40 mb-4" />

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} size={16} className="text-flame fill-current" />
                ))}
              </div>

              <p className="text-dark-muted text-sm leading-relaxed mb-6 flex-grow">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-black/5">
                <img
                  src={t.image}
                  alt={t.name}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover border-2 border-flame/40"
                />
                <div>
                  <p className="font-display text-sm tracking-[0.06em] text-dark-text">{t.name}</p>
                  <p className="text-xs text-flame">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
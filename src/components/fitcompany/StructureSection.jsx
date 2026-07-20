import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import RevealText from "./RevealText";

const FACILITY_IMAGES = [
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80",
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166c?w=600&q=80",
  "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80",
];

export default function StructureSection() {
  return (
    <section id="estrutura" className="py-28 md:py-36 bg-soft-black relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-flame/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          <div>
            <RevealText>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-[2px] bg-flame" />
                <span className="text-flame text-sm font-semibold tracking-[0.2em] uppercase">
                  Estrutura
                </span>
              </div>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="heading-lg text-white mb-6">
                FEITA PARA TEU
                <br />
                <span className="text-gradient-flame">MELHOR</span>
              </h2>
            </RevealText>
            <RevealText delay={0.2}>
              <p className="body-text mb-4">
                Mais de 300 equipamentos de última geração, áreas dedicadas para cada modalidade e um ambiente projetado para te inspirar.
              </p>
            </RevealText>
            <RevealText delay={0.3}>
              <p className="body-text mb-8">
                Sauna, espaço de recuperação, vestiários premium e tecnologia em cada detalhe.
              </p>
            </RevealText>
            <RevealText delay={0.4}>
              <motion.button
                className="px-8 py-4 bg-flame text-white cta-text rounded-full hover:bg-flame-light transition-colors inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                CONHEÇA A FIT <ArrowRight size={16} />
              </motion.button>
            </RevealText>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {FACILITY_IMAGES.map((img, i) => (
              <motion.div
                key={i}
                className={`relative rounded-2xl overflow-hidden border border-white/10 aspect-square ${i % 2 === 0 ? "mt-8" : ""}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <img
                  src={img}
                  alt={`Instalação ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
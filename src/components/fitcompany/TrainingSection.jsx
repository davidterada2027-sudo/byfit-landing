const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Dumbbell, Flame, Activity, Bike, Flower2, Shield, ArrowRight, Play, Search } from "lucide-react";
import RevealText from "./RevealText";
import SpotlightCard from "./SpotlightCard";
import VideoModal from "./VideoModal";
import TrainingSearch from "./TrainingSearch";

const TRAININGS = [
  {
    title: "MUSCULAÇÃO",
    description: "Periodização científica para ganhos reais de força e hipertrofia.",
    icon: Dumbbell,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    video: "https://www.youtube.com/watch?v=2lAe1ddbCFs",
  },
  {
    title: "FITDANÇE",
    description: "Movimentos funcionais em alta intensidade. Supere seus limites.",
    icon: Flame,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    video: "https://www.youtube.com/watch?v=wkp4EYbe4x8",
  },
  {
    title: "FUNCIONAL",
    description: "Treinamento inteligente para o corpo todo. Performance real.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&q=80",
    video: "https://media.db.com/videos/public/6a470591140c597a3a4863f3/66102af63_fitcompany_highlight_2025-10-01_0.mp4",
  },
  {
    title: "SPINNING",
    description: "Cardio de alta intensidade. Acelere o metabolismo com energia.",
    icon: Bike,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
    video: "https://www.youtube.com/watch?v=9DyRj8o4W4g",
  },
  {
    title: "YOGA",
    description: "Equilíbrio corpo-mente. Mobilidade e recuperação ativa.",
    icon: Flower2,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    video: "https://www.youtube.com/watch?v=v7AYKMP6rOE",
  },
  {
    title: "BOXE",
    description: "Técnica e explosão. Constrói resistência e confiança.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80",
    video: "https://www.youtube.com/watch?v=Th1sjzDJkR0",
  },
];

export default function TrainingSection() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [query, setQuery] = useState("");

  const filteredTrainings = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return TRAININGS;
    return TRAININGS.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section id="treinos" className="py-28 md:py-36 bg-light-bg relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-flame/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <RevealText>
            <div className="inline-flex items-center gap-2 mb-4 justify-center">
              <div className="w-8 h-[2px] bg-flame" />
              <span className="text-flame text-sm font-semibold tracking-[0.2em] uppercase">
                Modalidades
              </span>
              <div className="w-8 h-[2px] bg-flame" />
            </div>
          </RevealText>
          <RevealText delay={0.1}>
            <h2 className="heading-lg text-dark-text">
              NOSSAS
              <br />
              <span className="text-gradient-flame">MODALIDADES</span>
            </h2>
          </RevealText>
        </div>

        <TrainingSearch
          value={query}
          onChange={setQuery}
          resultCount={TRAININGS.length}
        />

        {filteredTrainings.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Search size={40} className="text-flame/30 mb-4" strokeWidth={1} />
            <p className="font-display text-2xl tracking-[0.06em] text-dark-text mb-1">
              NENHUMA MODALIDADE ENCONTRADA
            </p>
            <p className="text-sm text-dark-muted">
              Tente buscar por outro termo.
            </p>
          </div>
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredTrainings.map((training, i) => (
            <SpotlightCard
              key={training.title}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] border border-black/5 hover:border-flame/50 transition-all duration-500 shadow-lg shadow-black/5 cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => setActiveVideo(training)}
            >
              <img
                src={training.image}
                alt={training.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />
              <div className="absolute inset-0 bg-flame/0 group-hover:bg-flame/10 transition-colors duration-500" />

              {/* Play indicator */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-16 h-16 rounded-full bg-flame/90 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-flame/40 group-hover:scale-110 transition-transform duration-500">
                  <Play size={26} className="text-white ml-1" fill="white" />
                </div>
              </div>

              <div className="absolute top-6 right-6 font-display text-sm tracking-[0.1em] text-white/40">
                0{i + 1}
              </div>

              <div className="absolute top-6 left-6 inline-flex p-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm group-hover:bg-flame group-hover:border-flame transition-all duration-500">
                <training.icon size={24} className="text-white" strokeWidth={1.5} />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-2xl tracking-[0.06em] text-white mb-2">
                  {training.title}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  {training.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-flame scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </SpotlightCard>
          ))}
        </div>
        )}

        <div className="text-center mt-12">
          <motion.button
            className="px-8 py-4 border border-flame text-flame cta-text rounded-full hover:bg-flame hover:text-white transition-colors inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            VER TODAS AS MODALIDADES <ArrowRight size={16} />
          </motion.button>
        </div>
      </div>

      <VideoModal
        video={activeVideo?.video}
        title={activeVideo?.title}
        onClose={() => setActiveVideo(null)}
      />
    </section>
  );
}
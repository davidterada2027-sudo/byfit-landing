import React from "react";
import { motion } from "framer-motion";
import { Check, ExternalLink } from "lucide-react";
import RevealText from "./RevealText";
import SpotlightCard from "./SpotlightCard";

const PLANS = [
  {
    name: "BASIC",
    price: "99",
    period: "/mês",
    description: "Comece sua jornada com acesso completo à estrutura.",
    features: [
      "Acesso à musculação e funcional",
      "Aulas em grupo ilimitadas",
      "Avaliação física trimestral",
      "App de treinos",
      "Acesso em horário padrão",
    ],
    highlighted: false,
  },
  {
    name: "STANDARD",
    price: "129",
    period: "/mês",
    description: "O plano ideal para quem leva performance a sério.",
    features: [
      "Acesso ilimitado a todas as áreas",
      "Aulas ilimitadas em todas as modalidades",
      "Personal trainer 2x por semana",
      "Avaliação física mensal",
      "Acesso 24 horas",
      "Nutricionista incluso",
      "Área de recuperação e sauna",
    ],
    highlighted: true,
  },
  {
    name: "SELECT",
    price: "197",
    period: "/mês",
    description: "Compromisso total. A experiência completa.",
    features: [
      "Acesso ilimitado a todas as áreas",
      "Aulas ilimitadas em todas as modalidades",
      "Personal trainer 1x por semana",
      "Avaliação física mensal",
      "App de treinos avançado",
      "Acesso 24 horas",
      "2 meses grátis",
    ],
    highlighted: false,
  },
];

export default function PlansSection({ plansIframeUrl }) {
  return (
    <section id="planos" className="py-28 md:py-36 bg-soft-black relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-flame/30 to-transparent" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-glow-flame opacity-[0.06] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <RevealText>
            <div className="inline-flex items-center gap-2 mb-4 justify-center">
              <div className="w-8 h-[2px] bg-flame" />
              <span className="text-flame text-sm font-semibold tracking-[0.2em] uppercase">
                Investimento
              </span>
              <div className="w-8 h-[2px] bg-flame" />
            </div>
          </RevealText>
          <RevealText delay={0.1}>
            <h2 className="heading-lg text-white">
              ESCOLHA SEU
              <br />
              <span className="text-steel">PLANO</span>
            </h2>
          </RevealText>
          <RevealText delay={0.2}>
            <p className="mt-4 body-text max-w-md mx-auto">
              Planos sem fidelidade. Cancele quando quiser. Sem surpresas.
            </p>
          </RevealText>
        </div>

        {plansIframeUrl ? (
          <div className="group relative rounded-2xl overflow-hidden bg-obsidian shadow-2xl shadow-black/50">
            {/* Animated gradient border */}
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-flame/40 via-flame-fire/20 to-flame/40 opacity-50 group-hover:opacity-100 blur-sm transition-opacity duration-500 pointer-events-none" />

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-flame/60 rounded-tl-2xl pointer-events-none z-10" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-flame/60 rounded-tr-2xl pointer-events-none z-10" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-flame/60 rounded-bl-2xl pointer-events-none z-10" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-flame/60 rounded-br-2xl pointer-events-none z-10" />

            <div className="relative rounded-2xl border border-white/10 overflow-hidden">
              {/* Header bar */}
              <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-obsidian via-soft-black to-obsidian border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-2.5 h-2.5 rounded-full bg-flame" />
                    <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-flame animate-ping opacity-75" />
                  </div>
                  <span className="font-display text-sm tracking-[0.2em] text-white">PLANOS FITCOMPANY</span>
                </div>
                <a
                  href={plansIframeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase text-steel hover:text-flame transition-colors group/btn"
                >
                  <span className="hidden sm:inline">Tela cheia</span>
                  <ExternalLink size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Iframe */}
              <div className="relative w-full bg-obsidian overflow-hidden" style={{ minHeight: "800px" }}>
                <iframe
                  src={plansIframeUrl}
                  title="Planos FitCompany São Pedro"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0, minHeight: "800px" }}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
                {/* Overlay cobre o badge do reCAPTCHA no canto inferior esquerdo */}
                <div
                  className="absolute bottom-0 left-0 z-10 bg-obsidian pointer-events-none"
                  style={{ width: "70px", height: "70px" }}
                  aria-hidden="true"
                />
              </div>

              {/* reCAPTCHA disclaimer */}
              <p className="px-6 py-3 bg-obsidian border-t border-white/5 text-[11px] leading-relaxed text-steel/70 text-center">
                Este site é protegido pelo reCAPTCHA e aplica-se à{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-flame/80 hover:text-flame underline underline-offset-2 transition-colors">
                  Política de Privacidade
                </a>{" "}
                e aos{" "}
                <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-flame/80 hover:text-flame underline underline-offset-2 transition-colors">
                  Termos de Serviço
                </a>{" "}
                do Google.
              </p>
            </div>
          </div>
        ) : (
          <>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {PLANS.map((plan, i) => (
            <SpotlightCard
              key={plan.name}
              className={`relative rounded-2xl p-8 md:p-10 ${
                plan.highlighted
                  ? "bg-obsidian md:-mt-6 md:pb-14 shadow-2xl shadow-flame/20 border-2 border-flame glow-flame"
                  : "bg-obsidian/60 border border-white/10"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-flame text-white text-xs font-bold tracking-widest uppercase rounded-full whitespace-nowrap">
                  MAIS ESCOLHIDO
                </div>
              )}

              <h3 className={`font-display text-2xl tracking-[0.08em] mb-4 ${
                plan.highlighted ? "text-flame" : "text-steel"
              }`}>
                {plan.name}
              </h3>

              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-steel text-lg">R$</span>
                <span className="text-5xl md:text-6xl font-extrabold text-white">{plan.price}</span>
                <span className="text-steel text-sm">{plan.period}</span>
              </div>

              <p className="body-text mb-8 text-sm">{plan.description}</p>

              <ul className="space-y-3 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={16} className="text-flame mt-0.5 flex-shrink-0" />
                    <span className="text-steel text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                className={`w-full py-4 rounded-full cta-text transition-all ${
                  plan.highlighted
                    ? "bg-flame text-white hover:bg-flame-light"
                    : "border border-white/20 text-white hover:border-flame hover:text-flame"
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {plan.highlighted ? "MATRICULE-SE" : "ESCOLHER PLANO"}
              </motion.button>
            </SpotlightCard>
          ))}
        </div>

        <RevealText delay={0.5}>
          <p className="text-center text-steel text-sm tracking-[0.15em] uppercase mt-12">
            Planos sem fidelidade <span className="text-flame">|</span> Cancele quando quiser
          </p>
        </RevealText>
          </>
        )}
      </div>
    </section>
  );
}
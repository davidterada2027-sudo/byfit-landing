import React from "react";
import { motion } from "framer-motion";
import { Clock, ExternalLink, Calendar, Flame } from "lucide-react";
import RevealText from "./RevealText";

const SCHEDULE = [
  { day: "SEGUNDA A SEXTA", hours: "06:00 — 23:00", highlighted: true },
  { day: "SÁBADO", hours: "08:00 — 18:00", highlighted: false },
  { day: "DOMINGO", hours: "08:00 — 13:00", highlighted: false },
  { day: "FERIADOS", hours: "08:00 — 13:00", highlighted: false },
];

const AGENDA_URL = "https://evo-totem.w12app.com.br/fitcompanysjp/1/page/landing-page/agenda";

export default function ScheduleSection({ schedule = SCHEDULE, agendaUrl = AGENDA_URL }) {
  return (
    <section id="horarios" className="py-28 md:py-36 bg-soft-black relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-flame/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-flame-fire/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-flame/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <RevealText>
            <div className="inline-flex items-center gap-2 mb-4 justify-center">
              <Calendar size={16} className="text-flame" />
              <span className="text-flame text-sm font-semibold tracking-[0.2em] uppercase">
                Horários
              </span>
            </div>
          </RevealText>
          <RevealText delay={0.1}>
            <h2 className="heading-lg text-white">
              GRADE DE
              <br />
              <span className="text-gradient-flame">AULAS</span>
            </h2>
          </RevealText>
        </div>

        {/* Operating hours */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {schedule.map((item, i) => (
            <RevealText key={item.day} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className={`group relative rounded-xl p-4 md:p-6 text-center border overflow-hidden ${
                  item.highlighted
                    ? "bg-obsidian border-flame glow-flame"
                    : "bg-obsidian/60 border-white/10"
                }`}
              >
                {/* Animated top accent */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${item.highlighted ? "bg-flame" : "bg-gradient-to-r from-flame to-flame-fire"}`} />

                {/* Hover radial glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-flame/0 to-flame/0 group-hover:from-flame/10 transition-all duration-500" />

                <div className="relative z-10">
                  <Clock
                    size={18}
                    className={`mx-auto mb-3 transition-transform duration-500 group-hover:scale-110 ${item.highlighted ? "text-flame" : "text-steel group-hover:text-flame"}`}
                    strokeWidth={1.5}
                  />
                  <p className="font-display text-lg tracking-[0.06em] mb-2 text-white">
                    {item.day}
                  </p>
                  <p className={`text-sm font-medium ${item.highlighted ? "text-flame" : "text-steel group-hover:text-white"} transition-colors duration-300`}>
                    {item.hours}
                  </p>
                </div>
              </motion.div>
            </RevealText>
          ))}
        </div>

        {/* Agenda iframe */}
        <RevealText delay={0.2}>
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
                  <span className="font-display text-sm tracking-[0.2em] text-white">AGENDA FITCOMPANY</span>
                  <Flame size={14} className="text-flame/60" />
                </div>
                <a
                  href={agendaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase text-steel hover:text-flame transition-colors group/btn"
                >
                  <span className="hidden sm:inline">Tela cheia</span>
                  <ExternalLink size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Iframe — badge do reCAPTCHA (dentro do iframe) é coberto pelo overlay */}
              <div className="relative w-full bg-obsidian overflow-hidden" style={{ minHeight: "600px" }}>
                <iframe
                  src={agendaUrl}
                  title="Grade de Horários FitCompany"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0, minHeight: "600px" }}
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
        </RevealText>
      </div>
    </section>
  );
}
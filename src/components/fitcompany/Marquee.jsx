import React from "react";

const MARQUEE_ITEMS = [
  "FORÇA",
  "DISCIPLINA",
  "ENERGIA",
  "SUPERAÇÃO",
  "FOCO",
  "RESULTADO",
];

export default function Marquee() {
  return (
    <div className="relative bg-flame py-5 md:py-6 overflow-hidden border-y border-flame-fire/30">
      <div className="flex whitespace-nowrap animate-marquee">
        {[0, 1].map((rep) => (
          <div key={rep} className="flex items-center shrink-0" aria-hidden={rep === 1}>
            {MARQUEE_ITEMS.map((word, i) => (
              <React.Fragment key={`${rep}-${i}`}>
                <span className="font-display text-3xl md:text-5xl tracking-[0.08em] text-obsidian px-6 md:px-8">
                  {word}
                </span>
                <span className="text-obsidian/40 text-2xl md:text-3xl font-bold">+</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
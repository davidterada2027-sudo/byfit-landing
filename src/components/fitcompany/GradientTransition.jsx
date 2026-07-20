import React from "react";

const COLORS = {
  "light-bg": "#f4f4f5",
  white: "#ffffff",
  "soft-black": "#1e1e1e",
  obsidian: "#141414",
};

export default function GradientTransition({ from = "soft-black", to = "light-bg" }) {
  const fromColor = COLORS[from] || from;
  const toColor = COLORS[to] || to;

  return (
    <div className="relative w-full h-20 md:h-28 pointer-events-none overflow-hidden">
      {/* Base color blend */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, ${fromColor} 0%, ${toColor} 100%)`,
        }}
      />
      {/* Soft warm ember glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[140%] bg-flame/[0.08] blur-3xl rounded-full" />
      {/* Delicate center accent line with node */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex items-center justify-center">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-flame/40" />
        <div
          className="w-2 h-2 bg-flame rotate-45 mx-3"
          style={{ boxShadow: "0 0 16px rgba(255,107,0,0.6)" }}
        />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-flame/40" />
      </div>
    </div>
  );
}
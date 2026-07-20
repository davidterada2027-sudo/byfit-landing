import React from "react";

export default function EnergyLines() {
  return (
    <div className="relative w-full py-10 flex items-center justify-center overflow-hidden">
      {/* Horizontal gradient line */}
      <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-flame/25 to-transparent" />

      {/* Diagonal energy lines + geometric node */}
      <svg className="relative z-10" width="180" height="24" viewBox="0 0 180 24" fill="none">
        {/* Left diagonal lines */}
        <line x1="20" y1="20" x2="60" y2="4" stroke="#FF8C00" strokeWidth="1.5" opacity="0.7" />
        <line x1="40" y1="20" x2="70" y2="4" stroke="#FF8C00" strokeWidth="1" opacity="0.4" />
        {/* Right diagonal lines */}
        <line x1="110" y1="4" x2="140" y2="20" stroke="#FF8C00" strokeWidth="1" opacity="0.4" />
        <line x1="120" y1="4" x2="160" y2="20" stroke="#FF8C00" strokeWidth="1.5" opacity="0.7" />
      </svg>

      {/* Center geometric diamond node with glow */}
      <div
        className="absolute z-20 w-2.5 h-2.5 bg-flame rotate-45"
        style={{ boxShadow: "0 0 20px rgba(255, 107, 0, 0.6)" }}
      />

      {/* Tech dots */}
      <div className="absolute z-10 left-1/4 w-1 h-1 bg-flame/40 rounded-full" />
      <div className="absolute z-10 right-1/4 w-1 h-1 bg-flame/40 rounded-full" />
    </div>
  );
}
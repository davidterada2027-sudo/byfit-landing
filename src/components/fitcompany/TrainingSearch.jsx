import React from "react";
import { Search, X } from "lucide-react";

export default function TrainingSearch({ value, onChange, resultCount }) {
  return (
    <div className="max-w-2xl mx-auto mb-12">
      <div className="relative group">
        {/* Glow ring on focus */}
        <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-flame/40 via-flame/20 to-flame-fire/40 opacity-0 group-focus-within:opacity-100 blur-md transition-opacity duration-500" />

        <div className="relative flex items-center gap-4 bg-obsidian border border-white/10 group-focus-within:border-flame/50 rounded-full px-6 py-4 transition-all duration-300">
          <Search
            size={20}
            className="text-white/40 group-focus-within:text-flame transition-colors duration-300 shrink-0"
            strokeWidth={1.5}
          />

          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Buscar modalidade..."
            className="flex-1 bg-transparent text-white placeholder:text-white/30 text-sm font-medium tracking-[0.06em] uppercase outline-none border-none min-w-0"
          />

          {value && (
            <button
              onClick={() => onChange("")}
              className="shrink-0 w-6 h-6 rounded-full bg-white/10 hover:bg-flame flex items-center justify-center transition-colors duration-300"
              aria-label="Limpar busca"
            >
              <X size={12} className="text-white" strokeWidth={2} />
            </button>
          )}

          {!value && (
            <span className="hidden sm:inline-block shrink-0 text-[11px] font-bold tracking-[0.15em] uppercase text-white/20 border border-white/10 rounded-full px-3 py-1">
              {resultCount} modalidades
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
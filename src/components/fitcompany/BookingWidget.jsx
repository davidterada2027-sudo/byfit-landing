import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, X, Clock, ChevronRight } from "lucide-react";

const TIME_SLOTS = [
  { time: "06:00", label: "Manhã" },
  { time: "07:00", label: "Manhã" },
  { time: "09:00", label: "Manhã" },
  { time: "12:00", label: "Tarde" },
  { time: "14:00", label: "Tarde" },
  { time: "17:00", label: "Noite" },
  { time: "19:00", label: "Noite" },
  { time: "20:00", label: "Noite" },
];

export default function BookingWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <motion.button
        className="fixed right-6 z-[60] w-14 h-14 bg-flame rounded-full flex items-center justify-center shadow-lg shadow-flame/20" style={{ bottom: 'calc(1.5rem + env(safe-area-inset-bottom))' }}
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={!isOpen ? { y: [0, -5, 0] } : {}}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Calendar size={22} className="text-white" />
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[65] bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Widget Panel */}
            <motion.div
              className="fixed bottom-0 right-0 md:bottom-8 md:right-8 z-[70] w-full md:w-96 md:rounded-2xl bg-obsidian/95 backdrop-blur-2xl border border-white/10 overflow-hidden"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div>
                  <h3 className="subtitle text-white">Agendar Aula</h3>
                  <p className="body-text mt-1">Escolha o melhor horário</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition"
                >
                  <X size={16} className="text-white" />
                </button>
              </div>

              {/* Time Slots */}
              <div className="p-6 space-y-2 max-h-80 overflow-y-auto">
                {TIME_SLOTS.map((slot) => (
                  <button
                    key={slot.time}
                    className="w-full flex items-center justify-between p-4 rounded-xl bg-card-dark hover:bg-card-dark/70 border border-white/5 hover:border-flame/30 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <Clock size={16} className="text-flame" />
                      <span className="text-white font-semibold">{slot.time}</span>
                      <span className="text-steel text-sm">{slot.label}</span>
                    </div>
                    <ChevronRight size={16} className="text-steel group-hover:text-flame transition-colors" />
                  </button>
                ))}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-white/10">
                <button className="w-full py-3 bg-flame text-white cta-text rounded-full hover:bg-flame-light transition">
                  CONFIRMAR AGENDAMENTO
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
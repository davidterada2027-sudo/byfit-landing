import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const getYouTubeEmbedUrl = (url) => {
  if (!url) return null;
  const yt = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
  if (yt) return `https://www.youtube.com/embed/${yt[1]}?autoplay=1&rel=0`;
  return null;
};

export default function VideoModal({ video, title, onClose }) {
  const ytEmbed = getYouTubeEmbedUrl(video);
  const isLocal = video && !ytEmbed;

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (video) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [video, onClose]);

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="absolute inset-0 bg-obsidian/90 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.div
            className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden border border-flame/30 shadow-2xl shadow-flame/20"
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-flame animate-pulse" />
                <h3 className="font-display text-2xl tracking-[0.06em] text-white uppercase">
                  {title}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-flame hover:text-flame transition-all"
                aria-label="Fechar vídeo"
              >
                <X size={20} />
              </button>
            </div>

            <div className="relative aspect-video bg-black">
              {ytEmbed ? (
                <iframe
                  src={ytEmbed}
                  title={title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : isLocal ? (
                <video
                  src={video}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
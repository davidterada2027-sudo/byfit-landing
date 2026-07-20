const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Instagram, Loader2 } from "lucide-react";
import RevealText from "./RevealText";

export default function GallerySection({ curatedPosts, username: usernameProp }) {
  const [posts, setPosts] = useState(curatedPosts || []);
  const [loading, setLoading] = useState(!curatedPosts);
  const [username, setUsername] = useState(usernameProp || "fit.company");

  useEffect(() => {
    if (curatedPosts) {
      setPosts(curatedPosts);
      setUsername(usernameProp || "fit.company");
      setLoading(false);
      return;
    }
    const fetchPosts = async () => {
      try {
        const res = await db.functions.invoke("instagramFeed", {});
        setPosts(res.data?.posts || []);
        setUsername(res.data?.username || "fit.company");
      } catch {
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [curatedPosts, usernameProp]);

  return (
    <section id="galeria" className="py-28 md:py-36 bg-soft-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-flame/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <RevealText>
            <div className="inline-flex items-center gap-3 mb-4 justify-center">
              <Instagram size={20} className="text-flame" />
              <span className="text-flame text-sm font-semibold tracking-[0.2em] uppercase">
                @{username}
              </span>
            </div>
          </RevealText>
          <RevealText delay={0.1}>
            <h2 className="heading-lg text-white">
              O LIFESTYLE
              <br />
              <span className="text-gradient-flame">FITCOMPANY</span>
            </h2>
          </RevealText>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 size={32} className="text-flame animate-spin" />
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border border-white/10 bg-obsidian/60 mb-6">
              <Instagram size={36} className="text-flame glow-flame-icon" strokeWidth={1.5} />
            </div>
            <p className="font-display text-xl tracking-[0.06em] text-white mb-2">
              GALERIA EM ATUALIZAÇÃO
            </p>
            <p className="text-sm text-steel">
              Em breve novos posts do nosso Instagram aqui.
            </p>
            <a
              href={`https://www.instagram.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 border border-flame text-flame cta-text rounded-full hover:bg-flame hover:text-white transition-all"
            >
              <Instagram size={16} /> SEGUIR NO INSTAGRAM
            </a>
          </div>
        ) : (
          <div className="columns-2 md:columns-3 gap-3 md:gap-4">
            {posts.map((post, i) => (
              <motion.a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative rounded-xl overflow-hidden group block break-inside-avoid mb-3 md:mb-4 bg-soft-black ${
                  post.media_type === "VIDEO" ? "aspect-video" : "aspect-square"
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <img
                  src={post.media_type === "VIDEO" ? (post.thumbnail_url || post.media_url) : post.media_url}
                  alt="Post do Instagram"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-obsidian/0 group-hover:bg-flame/30 transition-colors duration-300 flex items-center justify-center">
                  <Instagram
                    size={32}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                {post.media_type === "VIDEO" && (
                  <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold">▶</span>
                  </div>
                )}
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
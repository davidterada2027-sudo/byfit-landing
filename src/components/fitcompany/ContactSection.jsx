import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Phone } from "lucide-react";
import RevealText from "./RevealText";

export default function ContactSection({ phone = "(11) 99999-9999" }) {
  const phoneHref = `tel:+55${phone.replace(/\D/g, "")}`;
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Informe seu nome";
    if (!form.email.trim()) errs.email = "Informe seu e-mail";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "E-mail inválido";
    if (!form.phone.trim()) errs.phone = "Informe seu telefone";
    else if (form.phone.replace(/\D/g, "").length < 10) errs.phone = "Telefone inválido";
    if (!form.message.trim()) errs.message = "Escreva uma mensagem";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  const scrollToPlans = (e) => {
    e.preventDefault();
    const el = document.querySelector("#planos");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 bg-obsidian/60 rounded-xl text-white text-sm outline-none border transition-all placeholder:text-steel/40 ${
      errors[field] ? "border-flame-fire" : "border-white/10 focus:border-flame"
    }`;

  return (
    <section id="contato" className="py-28 md:py-36 bg-soft-black relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-flame/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-glow-flame opacity-[0.05] blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-12 text-center">
          <RevealText>
            <div className="inline-flex items-center gap-2 mb-4 justify-center">
              <div className="w-8 h-[2px] bg-flame" />
              <span className="text-flame text-sm font-semibold tracking-[0.2em] uppercase">
                Matrícula
              </span>
              <div className="w-8 h-[2px] bg-flame" />
            </div>
          </RevealText>
          <RevealText delay={0.1}>
            <h2 className="heading-lg text-white">
              VEM SER
              <br />
              <span className="text-gradient-flame">FIT!</span>
            </h2>
          </RevealText>
          <RevealText delay={0.2}>
            <p className="body-text mt-4 max-w-md mx-auto">
              Preencha o formulário e nossa equipe entrará em contato em até 24 horas.
            </p>
          </RevealText>
          <RevealText delay={0.3}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={phoneHref}
                className="px-8 py-4 border border-white/20 text-white cta-text rounded-full hover:border-flame hover:text-flame transition-all flex items-center justify-center gap-2"
              >
                <Phone size={16} /> {phone}
              </a>
              <a
                href="#planos"
                onClick={scrollToPlans}
                className="px-8 py-4 bg-flame text-white cta-text rounded-full hover:bg-flame-light transition-colors"
              >
                QUERO ME MATRICULAR
              </a>
            </div>
          </RevealText>
        </div>

        <RevealText delay={0.4}>
          <div className="bg-obsidian/60 rounded-2xl p-8 md:p-12 border border-white/10">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <CheckCircle size={64} className="text-flame mx-auto mb-6 glow-flame-icon" />
                  <h3 className="font-display text-2xl tracking-[0.06em] text-white mb-3">
                    MENSAGEM ENVIADA!
                  </h3>
                  <p className="body-text">
                    Recebemos seu contato. Em breve um de nossos consultores falará com você.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-steel mb-2">Nome completo *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        className={inputClass("name")}
                      />
                      {errors.name && (
                        <p className="text-flame-fire text-xs mt-1.5 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm text-steel mb-2">Telefone / WhatsApp *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(11) 99999-9999"
                        className={inputClass("phone")}
                      />
                      {errors.phone && (
                        <p className="text-flame-fire text-xs mt-1.5 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-steel mb-2">E-mail *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className={inputClass("email")}
                    />
                    {errors.email && (
                      <p className="text-flame-fire text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm text-steel mb-2">Mensagem *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Conte-nos sobre seus objetivos..."
                      className={inputClass("message") + " resize-none"}
                    />
                    {errors.message && (
                      <p className="text-flame-fire text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.message}
                      </p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full py-4 bg-flame text-white cta-text rounded-xl hover:bg-flame-light transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send size={16} />
                    ENVIAR MATRÍCULA
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </RevealText>
      </div>
    </section>
  );
}
import React from "react";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import RevealText from "./RevealText";

export default function CtaBanner({ phone = "(11) 99999-9999" }) {
  const phoneHref = `tel:+55${phone.replace(/\D/g, "")}`;
  const scrollToPlans = () => {
    const el = document.querySelector("#planos");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 md:py-32 bg-light-bg relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-flame/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-flame/40 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <RevealText>
          <h2 className="heading-lg text-dark-text mb-8">
            PRONTO PARA SUA
            <br />
            <span className="text-gradient-flame">MELHOR VERSÃO?</span>
          </h2>
        </RevealText>
        <RevealText delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={phoneHref}
              className="px-8 py-4 border border-dark-text/20 text-dark-text cta-text rounded-full hover:border-flame hover:text-flame transition-all flex items-center gap-2"
            >
              <Phone size={16} /> {phone}
            </a>
            <motion.button
              onClick={scrollToPlans}
              className="px-8 py-4 bg-flame text-white cta-text rounded-full hover:bg-flame-light transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              MATRICULE-SE AGORA <ArrowRight size={16} />
            </motion.button>
          </div>
        </RevealText>
      </div>
    </section>
  );
}
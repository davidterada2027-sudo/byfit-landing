import React from "react";
import { Instagram, Facebook, Youtube, MessageCircle, MapPin, Phone, Mail, Clock, ArrowUp } from "lucide-react";
import RevealText from "./RevealText";
import Logo from "./Logo";

const SOCIAL_LINKS = [
  { icon: Instagram, href: "https://www.instagram.com/fit.company/", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/fitcompany", label: "Facebook" },
  { icon: MessageCircle, href: "https://wa.me/5511999999999", label: "WhatsApp" },
  { icon: Youtube, href: "https://youtube.com/fitcompany", label: "YouTube" },
];

const NAV_LINKS = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Modalidades", href: "#treinos" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "Planos", href: "#planos" },
  { label: "Equipe", href: "#equipe" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" },
];

const CONTACTS = [
  {
    label: "Endereço",
    icon: MapPin,
    value: "Av. Paulista, 1000 — São Paulo, SP",
    href: "https://maps.google.com",
  },
  {
    label: "Telefone",
    icon: Phone,
    value: "(11) 99999-9999",
    href: "tel:+5511999999999",
  },
  {
    label: "E-mail",
    icon: Mail,
    value: "contato@fitcompany.com.br",
    href: "mailto:contato@fitcompany.com.br",
  },
];

const HOURS = [
  { day: "Seg — Sex", hours: "06:00 — 23:00" },
  { day: "Sábado", hours: "08:00 — 18:00" },
  { day: "Domingo", hours: "08:00 — 13:00" },
];

export default function Footer({ contacts = CONTACTS, hours = HOURS, socialLinks = SOCIAL_LINKS }) {
  const handleNavClick = (href) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-obsidian border-t border-white/5 pt-20 pb-8 relative">
      {/* Top hairline accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-flame/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Brand + Social */}
          <div className="md:col-span-5">
            <RevealText>
              <div className="mb-6 rounded-lg overflow-hidden inline-block">
                <Logo className="h-12 w-auto" />
              </div>
            </RevealText>
            <RevealText delay={0.1}>
              <p className="text-steel text-sm leading-relaxed max-w-xs mb-8">
                Mais do que uma academia — um compromisso com sua melhor versão.
              </p>
            </RevealText>
            <RevealText delay={0.2}>
              <div className="flex items-center gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-steel hover:text-white hover:border-flame hover:bg-flame/10 transition-all duration-300"
                  >
                    <Icon size={22} className="transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </RevealText>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-white/40 tracking-[0.25em] mb-6">ACESSO RÁPIDO</h4>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-6 gap-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="group relative text-sm text-steel hover:text-white transition-colors duration-300"
                  >
                    <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-flame group-hover:w-full transition-all duration-300" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold text-white/40 tracking-[0.25em] mb-6">CONTATO</h4>
            <ul className="space-y-5">
              {contacts.map(({ label, icon: Icon, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-flame shrink-0 group-hover:bg-flame/10 transition-colors duration-300">
                      <Icon size={16} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-white/40 mb-0.5">{label}</p>
                      <p className="text-sm text-steel group-hover:text-white transition-colors duration-300">{value}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Hours bar */}
        <div className="border-t border-white/5 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Clock size={16} className="text-flame" strokeWidth={1.5} />
              <span className="text-xs font-bold tracking-[0.25em] text-white/40 uppercase">Funcionamento</span>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {hours.map((item) => (
                <div key={item.day} className="flex items-center gap-2 text-sm">
                  <span className="text-steel">{item.day}</span>
                  <span className="text-white/30">·</span>
                  <span className="text-white font-medium">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-white/30 tracking-wide">
            © {new Date().getFullYear()} FitCompany. Todos os direitos reservados.
          </p>
          <button
            onClick={scrollTop}
            className="group flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-white/40 hover:text-flame transition-colors duration-300"
          >
            Voltar ao topo
            <span className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center group-hover:border-flame group-hover:bg-flame/10 transition-all duration-300">
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
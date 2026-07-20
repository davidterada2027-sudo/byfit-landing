const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState, useCallback } from "react";
import { Instagram, Facebook, Youtube, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import Preloader from "@/components/fitcompany/Preloader";
import CustomCursorSaoPedro from "@/components/fitcompany/CustomCursorSaoPedro";
import ScrollProgress from "@/components/fitcompany/ScrollProgress";
import Navbar from "@/components/fitcompany/Navbar";
import HeroSection from "@/components/fitcompany/HeroSection";
import Marquee from "@/components/fitcompany/Marquee";
import GradientTransition from "@/components/fitcompany/GradientTransition";
import WhatsAppButton from "@/components/fitcompany/WhatsAppButton";
import BookingWidget from "@/components/fitcompany/BookingWidget";
import CtaBanner from "@/components/fitcompany/CtaBanner";
import AboutSection from "@/components/fitcompany/AboutSection";
import StatsSection from "@/components/fitcompany/StatsSection";
import TrainingSection from "@/components/fitcompany/TrainingSection";
import StructureSection from "@/components/fitcompany/StructureSection";
import TeamSection from "@/components/fitcompany/TeamSection";
import PlansSection from "@/components/fitcompany/PlansSection";
import ScheduleSection from "@/components/fitcompany/ScheduleSection";
import GallerySection from "@/components/fitcompany/GallerySection";
import ContactSection from "@/components/fitcompany/ContactSection";
import Footer from "@/components/fitcompany/Footer";

const PHONE = "(41) 98833-8989";
const WHATSAPP_NUMBER = "5541988338989";
const WHATSAPP_MSG = "Olá!%20Tenho%20interesse%20em%20conhecer%20a%20FitCompany%20São%20Pedro";

const SAO_PEDRO_SOCIAL = [
  { icon: Instagram, href: "https://www.instagram.com/fit.company/", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/fitcompany", label: "Facebook" },
  { icon: MessageCircle, href: `https://wa.me/${WHATSAPP_NUMBER}`, label: "WhatsApp" },
  { icon: Youtube, href: "https://youtube.com/fitcompany", label: "YouTube" },
];

const SAO_PEDRO_CONTACTS = [
  {
    label: "Endereço",
    icon: MapPin,
    value: "Rua Joinville, 3091 — São Pedro, São José dos Pinhais - PR",
    href: "https://maps.google.com/?q=Rua+Joinville+3091+São+José+dos+Pinhais",
  },
  {
    label: "Telefone / WhatsApp",
    icon: Phone,
    value: PHONE,
    href: `tel:+55${PHONE.replace(/\D/g, "")}`,
  },
  {
    label: "E-mail",
    icon: Mail,
    value: "contato@fitcompany.com.br",
    href: "mailto:contato@fitcompany.com.br",
  },
];

const SAO_PEDRO_HOURS = [
  { day: "Seg — Sex", hours: "05:00 — 23:00" },
  { day: "Sábado", hours: "09:00 — 13:00" },
];

const SAO_PEDRO_SCHEDULE = [
  { day: "SEGUNDA A SEXTA", hours: "05:00 — 23:00", highlighted: true },
  { day: "SÁBADO", hours: "09:00 — 13:00", highlighted: false },
];

const SAO_PEDRO_HERO_VIDEO = "https://media.db.com/videos/public/6a470591140c597a3a4863f3/056633f3a_fitcompany_ByTkS9PgWOe.mp4";

const SAO_PEDRO_INSTAGRAM = "https://www.instagram.com/fit.company/";

const SAO_PEDRO_GALLERY = [
  { id: "sp1", media_type: "IMAGE", media_url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80", permalink: SAO_PEDRO_INSTAGRAM, caption: "Força e foco" },
  { id: "sp2", media_type: "IMAGE", media_url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80", permalink: SAO_PEDRO_INSTAGRAM, caption: "Superação diária" },
  { id: "sp3", media_type: "IMAGE", media_url: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80", permalink: SAO_PEDRO_INSTAGRAM, caption: "Treino completo" },
  { id: "sp4", media_type: "IMAGE", media_url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80", permalink: SAO_PEDRO_INSTAGRAM, caption: "Estrutura premium" },
  { id: "sp5", media_type: "IMAGE", media_url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&q=80", permalink: SAO_PEDRO_INSTAGRAM, caption: "Performance" },
  { id: "sp6", media_type: "IMAGE", media_url: "https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?w=600&q=80", permalink: SAO_PEDRO_INSTAGRAM, caption: "Disciplina" },
  { id: "sp7", media_type: "IMAGE", media_url: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&q=80", permalink: SAO_PEDRO_INSTAGRAM, caption: "Energia" },
  { id: "sp8", media_type: "IMAGE", media_url: "https://images.unsplash.com/photo-1605296867304-46d5465a13f6?w=600&q=80", permalink: SAO_PEDRO_INSTAGRAM, caption: "Lifestyle" },
];

export default function HomeSaoPedro() {
  const [loading, setLoading] = useState(true);
  const handlePreloaderComplete = useCallback(() => setLoading(false), []);

  return (
    <div className="theme-sao-pedro bg-light-bg min-h-screen overflow-x-hidden">
      {loading && <Preloader onComplete={handlePreloaderComplete} />}
      {!loading && (
        <>
          <CustomCursorSaoPedro />
          <ScrollProgress />
          <Navbar unitName="SÃO PEDRO" alunoUrl="https://evo-totem.w12app.com.br/fitcompany/1/totem/escolher-acao/cliente" />
          <HeroSection
            heroVideo={SAO_PEDRO_HERO_VIDEO}
            tagline="São Pedro · Energia · Superação"
            subheadline="A nova sede da performance em São José dos Pinhais."
          />
          <Marquee />
          <AboutSection />
          <GradientTransition from="light-bg" to="soft-black" />
          <StatsSection />
          <Marquee />
          <TrainingSection />
          <GradientTransition from="light-bg" to="soft-black" />
          <ScheduleSection schedule={SAO_PEDRO_SCHEDULE} agendaUrl="https://evo-totem.w12app.com.br/fitcompany/1/page/landing-page/agenda" />
          <StructureSection />
          <GradientTransition from="soft-black" to="light-bg" />
          <TeamSection />
          <GradientTransition from="light-bg" to="soft-black" />
          <PlansSection plansIframeUrl="https://evo-totem.w12app.com.br/fitcompany/1/site/%5BPLUS%5DeIL%5BPLUS%5DfzZNcy7Gt%5BBAR%5DPl5KIrQ%5BEQUAL%5D%5BEQUAL%5D" />
          <Marquee />
          <GallerySection curatedPosts={SAO_PEDRO_GALLERY} username="fit.company" />
          <GradientTransition from="white" to="soft-black" />
          <ContactSection phone={PHONE} />
          <GradientTransition from="soft-black" to="light-bg" />
          <CtaBanner phone={PHONE} />
          <GradientTransition from="light-bg" to="obsidian" />
          <Footer contacts={SAO_PEDRO_CONTACTS} hours={SAO_PEDRO_HOURS} socialLinks={SAO_PEDRO_SOCIAL} />
          <WhatsAppButton phone={WHATSAPP_NUMBER} message={WHATSAPP_MSG} />
          <BookingWidget />
        </>
      )}
    </div>
  );
}
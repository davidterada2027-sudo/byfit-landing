import React, { useState, useCallback } from "react";
import { Instagram, Facebook, Youtube, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import Preloader from "@/components/fitcompany/Preloader";
import CustomCursor from "@/components/fitcompany/CustomCursor";
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

const HOME_SOCIAL = [
  { icon: Instagram, href: "https://www.instagram.com/fit.company/", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/fitcompany", label: "Facebook" },
  { icon: MessageCircle, href: `https://wa.me/${WHATSAPP_NUMBER}`, label: "WhatsApp" },
  { icon: Youtube, href: "https://youtube.com/fitcompany", label: "YouTube" },
];

const HOME_CONTACTS = [
  {
    label: "Endereço",
    icon: MapPin,
    value: "R. Alm. Alexandrino, 1460 — Afonso Pena, São José dos Pinhais - PR",
    href: "https://maps.google.com/?q=Rua+Almirante+Alexandrino+1460+São+José+dos+Pinhais",
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

const HOME_HOURS = [
  { day: "Seg — Sex", hours: "06:00 — 23:00" },
  { day: "Sábado", hours: "08:00 — 18:00" },
  { day: "Domingo", hours: "08:00 — 13:00" },
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const handlePreloaderComplete = useCallback(() => setLoading(false), []);

  return (
    <div className="bg-light-bg min-h-screen overflow-x-hidden">
      {loading && <Preloader onComplete={handlePreloaderComplete} />}
      {!loading && (
        <>
          <CustomCursor />
          <ScrollProgress />
          <Navbar unitName="AFONSO PENA" />
          <HeroSection />
          <Marquee />
          <AboutSection />
          <GradientTransition from="light-bg" to="soft-black" />
          <StatsSection />
          <Marquee />
          <TrainingSection />
          <GradientTransition from="light-bg" to="soft-black" />
          <ScheduleSection />
          <StructureSection />
          <GradientTransition from="soft-black" to="light-bg" />
          <TeamSection />
          <GradientTransition from="light-bg" to="soft-black" />
          <PlansSection />
          <Marquee />
          <GallerySection />
          <GradientTransition from="white" to="soft-black" />
          <ContactSection />
          <GradientTransition from="soft-black" to="light-bg" />
          <CtaBanner />
          <GradientTransition from="light-bg" to="obsidian" />
          <Footer contacts={HOME_CONTACTS} hours={HOME_HOURS} socialLinks={HOME_SOCIAL} />
          <WhatsAppButton />
          <BookingWidget />
        </>
      )}
    </div>
  );
}
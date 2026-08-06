import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/layout/WhatsAppButton';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { WhyUsSection } from './components/sections/WhyUsSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { PricingModal } from './components/sections/PricingModal';
import { FAQSection } from './components/sections/FAQSection';
import { ContactSection } from './components/sections/ContactSection';
import { X } from 'lucide-react';
import { COMPANY_INFO } from './data/content';

export const App: React.FC = () => {
  const [pricingModalOpen, setPricingModalOpen] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-brand-600 selection:text-white overflow-x-hidden">

      {/* Announcement Banner */}
      {announcementVisible && (
        <div className="relative bg-gradient-to-r from-brand-700 via-brand-600 to-brand-700 text-white text-xs font-semibold py-2 px-4 text-center z-50 flex items-center justify-center gap-2">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <span>
            ⚡ Atendimento 24 Horas · Segunda a Segunda ·{' '}
            <a
              href={`tel:${COMPANY_INFO.phoneRaw1}`}
              className="underline underline-offset-2 hover:no-underline font-bold"
            >
              {COMPANY_INFO.phone1}
            </a>
          </span>
          <button
            onClick={() => setAnnouncementVisible(false)}
            aria-label="Fechar aviso"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-white/20 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Sticky Blur Navbar */}
      <Navbar onOpenPricingModal={() => setPricingModalOpen(true)} />

      {/* Main Single-Page Content */}
      <main className="flex-grow">
        <HeroSection onOpenPricingModal={() => setPricingModalOpen(true)} />
        <AboutSection />
        <ServicesSection onOpenPricingModal={() => setPricingModalOpen(true)} />
        <WhyUsSection />
        <ProcessSection />
        <FAQSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />

      {/* Pricing Table Modal */}
      <PricingModal
        isOpen={pricingModalOpen}
        onClose={() => setPricingModalOpen(false)}
      />
    </div>
  );
};

export default App;

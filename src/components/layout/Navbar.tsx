import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronRight, Zap } from 'lucide-react';
import { COMPANY_INFO } from '../../data/content';

interface NavbarProps {
  onOpenPricingModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPricingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Quem Somos', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-2xl'
        : 'bg-gradient-to-b from-slate-950/80 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">

          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center shadow-lg shadow-brand-600/40 border border-brand-500/50 group-hover:scale-105 transition-transform shrink-0">
              <Zap className="w-4.5 h-4.5 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-base sm:text-lg font-extrabold tracking-tight text-white">
                COOPSTAR <span className="text-brand-500">EXPRESS</span>
              </span>
              <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400">
                Moto Frete 24h · SP
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 flex-1 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-300 hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-500 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={onOpenPricingModal}
              className="text-xs font-bold text-brand-400 hover:text-brand-300 transition-colors px-3 py-1.5 rounded-lg border border-brand-500/30 hover:border-brand-500/60 bg-brand-500/10 hover:bg-brand-500/15"
            >
              Tabela de Preços
            </button>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw1}`}
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-xs font-medium bg-slate-900/80 px-3 py-2 rounded-lg border border-slate-800 hover:border-slate-700"
            >
              <Phone className="w-3.5 h-3.5 text-brand-500" />
              <span className="hidden xl:inline">{COMPANY_INFO.phone1}</span>
              <span className="xl:hidden">Ligar</span>
            </a>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá!%20Gostaria%20de%20solicitar%20um%20serviço%20de%20moto%20frete.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-lg shadow-brand-600/30 transition-all hover:scale-[1.02] hover:shadow-brand-600/50"
            >
              Chamar Motoboy
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
            className="flex lg:hidden p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800/60 bg-slate-950/95 backdrop-blur-xl px-4 pt-4 pb-6 mt-2">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-slate-200 hover:text-brand-400 hover:bg-slate-900 py-3 px-3 rounded-lg border-b border-slate-800/40 flex items-center justify-between transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-600" />
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPricingModal();
              }}
              className="text-sm font-semibold text-brand-400 hover:text-brand-300 hover:bg-slate-900 py-3 px-3 rounded-lg border-b border-slate-800/40 flex items-center justify-between text-left transition-colors"
            >
              <span>Ver Tabela de Preços</span>
              <ChevronRight className="w-4 h-4 text-brand-500" />
            </button>
          </nav>

          <div className="flex flex-col gap-3 mt-5 pt-4 border-t border-slate-800">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw1}`}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 text-white font-bold text-sm border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-500" />
              Ligar: {COMPANY_INFO.phone1}
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá!%20Gostaria%20de%20solicitar%20um%20serviço%20de%20moto%20frete.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm shadow-lg shadow-brand-600/30 transition-colors"
            >
              Solicitar Motoboy via WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

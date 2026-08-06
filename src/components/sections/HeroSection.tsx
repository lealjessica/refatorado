import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ShieldCheck, Zap, ArrowRight, MapPin, Award, Clock } from 'lucide-react';
import { COMPANY_INFO, STATS } from '../../data/content';

interface HeroSectionProps {
  onOpenPricingModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenPricingModal }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950">
      {/* Background Radial Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-600/12 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-red-900/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-900/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Dot Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />
      {/* Horizontal gradient overlay to fade the grid at edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950 pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy Area */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-brand-500/30 shadow-lg">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold tracking-wide uppercase text-slate-200">
                Atendimento 24h Disponível em SP
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Entregas Rápidas, Seguras e <span className="text-gradient-red">24h em São Paulo</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Empresa especializada em <strong className="text-white">Moto Frete Express</strong>, transporte de documentos urgentes, despachos aeroportuários e delivery corporativo dedicado há mais de 9 anos.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá!%20Gostaria%20de%20chamar%20um%20motoboy.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-500 hover:to-brand-600 text-white font-bold text-base shadow-xl shadow-brand-600/30 transition-all hover:scale-[1.02] focus:ring-2 focus:ring-brand-500 focus:outline-none"
              >
                <Zap className="w-5 h-5 fill-white/20" />
                Chamar Motoboy Agora
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenPricingModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-base border border-slate-800 transition-all"
              >
                Consultar Tabela de Preços
              </button>
            </div>

            {/* Quick Contact Numbers */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-500" />
                <span>Central: <strong className="text-slate-200">{COMPANY_INFO.phone1}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-500" />
                <span>Base em Moema - SP</span>
              </div>
            </div>
          </motion.div>

          {/* Visual Interactive Feature Card / Image Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-slate-800 shadow-2xl overflow-hidden">
              
              {/* Badge Highlight Top */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-brand-600/20 border border-brand-500/30 flex items-center justify-center text-brand-500">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Garantia Coopstar</h3>
                    <p className="text-xs text-slate-400">Protocolo Físico & Digital</p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-950 text-brand-400 border border-brand-800/50">
                  9+ Anos
                </span>
              </div>

              {/* Service Cards Checklist */}
              <div className="py-6 space-y-4">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="p-2 rounded-lg bg-emerald-950 text-emerald-400 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">Funcionamento 24h / 7 Dias</h4>
                    <p className="text-xs text-slate-400">Agendamento prévio com hora marcada ou atendimento imediato.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="p-2 rounded-lg bg-brand-950 text-brand-400 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">Serviços Bancários e Cartórios</h4>
                    <p className="text-xs text-slate-400">Coletas de assinaturas, autenticações e depósitos com total sigilo.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="p-2 rounded-lg bg-blue-950 text-blue-400 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">Capital, Grande SP & Viagens</h4>
                    <p className="text-xs text-slate-400">Entrega rápida em Alphaville, ABC, Guarulhos e cidades do interior.</p>
                  </div>
                </div>
              </div>

              {/* Callout Box */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Dúvidas ou agendamentos?</span>
                <a 
                  href="#contato"
                  className="text-brand-400 hover:text-brand-300 font-bold flex items-center gap-1"
                >
                  Falar com Representante
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Stats Row */}
        <div className="mt-16 pt-10 border-t border-slate-900 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 text-center"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

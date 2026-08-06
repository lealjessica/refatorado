import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Truck, Navigation, Check, ArrowRight, ExternalLink } from 'lucide-react';
import { SERVICES } from '../../data/content';

interface ServicesSectionProps {
  onOpenPricingModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenPricingModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-7 h-7 text-brand-500" />;
      case 'Truck':
        return <Truck className="w-7 h-7 text-brand-500" />;
      case 'Navigation':
        return <Navigation className="w-7 h-7 text-brand-500" />;
      default:
        return <Zap className="w-7 h-7 text-brand-500" />;
    }
  };

  return (
    <section id="servicos" className="py-20 md:py-28 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
      {/* Glow Backdrops */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider">
            Soluções Logísticas
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Nossos <span className="text-gradient-red">Serviços Especializados</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Oferecemos soluções sob medida tanto para necessidades pontuais e urgentes quanto para frotas dedicadas de empresas.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative flex flex-col justify-between rounded-3xl p-8 bg-slate-900/60 border border-slate-800 hover:border-brand-500/50 hover:shadow-2xl hover:shadow-brand-600/10 transition-all duration-300"
            >
              <div>
                {/* Badge & Icon Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:scale-110 group-hover:border-brand-500/40 transition-all">
                    {getIcon(service.iconName)}
                  </div>
                  {service.badge && (
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-brand-950 text-brand-400 border border-brand-800/60">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Title & Short Description */}
                <h3 className="text-xl font-bold text-white group-hover:text-brand-400 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {service.fullDesc}
                </p>

                {/* Features List */}
                <div className="mt-6 pt-6 border-t border-slate-800/80 space-y-3">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Principais Destaques</h4>
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <div className="p-0.5 rounded-md bg-brand-950 text-brand-400 mt-0.5 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button inside card */}
              <div className="mt-8 pt-4">
                {service.id === 'fora-da-capital' ? (
                  <button
                    onClick={onOpenPricingModal}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-brand-600 text-white font-bold text-sm transition-all"
                  >
                    <span>Ver Tabela de Preços</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                ) : (
                  <a
                    href={`https://wa.me/551150523563?text=Olá!%20Tenho%20interesse%20no%20serviço%20de%20${encodeURIComponent(service.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 group-hover:bg-brand-600 text-slate-200 group-hover:text-white font-bold text-sm transition-all"
                  >
                    <span>Solicitar Cotação</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>

            </motion.div>
          ))}
        </div>

        {/* Extra Banner Callout */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-brand-950/80 via-slate-900 to-slate-950 border border-brand-900/60 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-extrabold text-white">Sua empresa precisa de contrato mensal flexível?</h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Implantamos entregadores dedicados com faturamento quinzenal para farmácias, auto peças, escritórios e e-commerce.
            </p>
          </div>
          <a
            href="https://wa.me/551150523563?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20contratos%20mensais%20para%20minha%20empresa."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm transition-all shadow-lg shadow-brand-600/30 whitespace-nowrap"
          >
            Falar com Consultor Corporativo
          </a>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, PackageCheck, ShieldAlert, CheckCircle2, ArrowRight } from 'lucide-react';
import { WORKFLOW_STEPS } from '../../data/content';

export const ProcessSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'PhoneCall':
        return <PhoneCall className="w-6 h-6 text-brand-500" />;
      case 'PackageCheck':
        return <PackageCheck className="w-6 h-6 text-brand-500" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-brand-500" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-brand-500" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-brand-500" />;
    }
  };

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider">
            Transparência & Agilidade
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Como Funciona o <span className="text-gradient-red">Nosso Atendimento</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Do primeiro contato até a entrega com protocolo assinado, garantimos um processo ágil e sem complicações.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {WORKFLOW_STEPS.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="relative p-6 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between group hover:border-brand-500/40 transition-all"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:scale-110 group-hover:border-brand-500/40 transition-all">
                    {getIcon(step.icon)}
                  </div>
                  <span className="text-3xl font-extrabold text-slate-800 group-hover:text-brand-600/40 transition-colors">
                    {step.step}
                  </span>
                </div>

                {/* Step Content */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow Indicator for Desktop */}
              {index < WORKFLOW_STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-slate-700">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

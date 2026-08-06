import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ShieldCheck, Users, MapPin, FileCheck, CreditCard } from 'lucide-react';
import { DIFFERENTIALS } from '../../data/content';

export const WhyUsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clock':
        return <Clock className="w-6 h-6 text-brand-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-brand-500" />;
      case 'Users':
        return <Users className="w-6 h-6 text-brand-500" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-brand-500" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6 text-brand-500" />;
      case 'CreditCard':
        return <CreditCard className="w-6 h-6 text-brand-500" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-brand-500" />;
    }
  };

  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider">
            Por que a Coopstar?
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Nossos <span className="text-brand-500">Diferenciais Competitivos</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Construímos uma reputação sólida baseada em eficiência, transparência e respeito pelo tempo do nosso cliente.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFFERENTIALS.map((diff, index) => (
            <motion.div
              key={diff.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-brand-500/40 transition-all">
                {getIcon(diff.icon)}
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-brand-400 transition-colors">
                {diff.title}
              </h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                {diff.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

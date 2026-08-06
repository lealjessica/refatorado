import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Clock, Info, MessageSquare } from 'lucide-react';
import { PRICING_TABLE, COMPANY_INFO } from '../../data/content';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PricingModal: React.FC<PricingModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-3xl rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden z-10 my-8"
          >
            
            {/* Header */}
            <div className="flex items-center justify-between p-6 sm:p-8 border-b border-slate-800 bg-slate-950/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-600/20 border border-brand-500/30 flex items-center justify-center text-brand-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white">Tabela de Preços & Regiões</h3>
                  <p className="text-xs text-slate-400">Atendimento em SP Capital, Grande SP, Litoral e Interior</p>
                </div>
              </div>

              <button
                onClick={onClose}
                aria-label="Fechar janela"
                className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Table Content Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
              
              <div className="p-4 rounded-2xl bg-brand-950/30 border border-brand-900/50 flex items-start gap-3">
                <Info className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-300 leading-relaxed">
                  Os valores exibidos abaixo são estimativos com base nas regiões tarifárias padrão. Para cotações exatas por CEP de coleta e entrega, consulte nossa central em tempo real.
                </p>
              </div>

              <div className="space-y-4">
                {PRICING_TABLE.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-brand-500/30 transition-all space-y-2"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <h4 className="font-bold text-white text-base">{item.region}</h4>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-brand-400 text-xs font-semibold border border-slate-800">
                        <Clock className="w-3.5 h-3.5" />
                        {item.estimatedTime}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                    <div className="pt-2 text-xs font-medium text-slate-300 flex items-center gap-1">
                      <span className="text-slate-500">Condição:</span>
                      <span className="text-brand-400">{item.priceNote}</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Footer Actions */}
            <div className="p-6 sm:p-8 border-t border-slate-800 bg-slate-950/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400 text-center sm:text-left">
                Central de Atendimento: <strong className="text-white">{COMPANY_INFO.phone1}</strong>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá!%20Gostaria%20de%20solicitar%20uma%20cotação%20de%20preço.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-brand-600/30 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  Cotar via WhatsApp
                </a>
              </div>
            </div>

          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
};

import React from 'react';
import { MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../../data/content';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá!%20Preciso%20de%20um%20motoboy%20urgente.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Atendimento via WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 group focus:outline-none"
    >
      {/* Tooltip Label */}
      <span className="hidden sm:inline-block px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold shadow-xl border border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Pedir Motoboy 24h
      </span>

      {/* Button with Glowing Pulse */}
      <div className="relative">
        <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping opacity-75" />
        <div className="relative w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-600/50 transition-transform group-hover:scale-110 border-2 border-emerald-400/40">
          <MessageSquare className="w-7 h-7 fill-white/20" />
        </div>
      </div>
    </a>
  );
};

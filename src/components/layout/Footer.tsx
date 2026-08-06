import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 pt-16 pb-12 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-brand-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-brand-600/40">
                C
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                COOPSTAR <span className="text-brand-500">EXPRESS</span>
              </span>
            </div>
            
            <p className="text-sm leading-relaxed text-slate-400">
              Empresa líder em serviços de moto frete, entregas rápidas e soluções de delivery empresarial em São Paulo e Grande SP. Agilidade, segurança e profissionalismo há mais de 9 anos.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-950/60 border border-brand-800/40 text-brand-400 text-xs font-semibold">
              <Clock className="w-3.5 h-3.5" />
              <span>Atendimento 24/7 de Segunda a Segunda</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide">Navegação Rápida</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#sobre" className="hover:text-brand-400 transition-colors flex items-center gap-1 group">
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-brand-500 group-hover:translate-x-0.5 transition-transform" />
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-brand-400 transition-colors flex items-center gap-1 group">
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-brand-500 group-hover:translate-x-0.5 transition-transform" />
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-brand-400 transition-colors flex items-center gap-1 group">
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-brand-500 group-hover:translate-x-0.5 transition-transform" />
                  Diferenciais Competitivos
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-brand-400 transition-colors flex items-center gap-1 group">
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-brand-500 group-hover:translate-x-0.5 transition-transform" />
                  Processo de Atendimento
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-brand-400 transition-colors flex items-center gap-1 group">
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-brand-500 group-hover:translate-x-0.5 transition-transform" />
                  Perguntas Frequentes (FAQ)
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-brand-400 transition-colors flex items-center gap-1 group">
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-brand-500 group-hover:translate-x-0.5 transition-transform" />
                  Fale Conosco / Localização
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide">Canais de Atendimento</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-500 mt-1 shrink-0" />
                <div>
                  <p className="text-slate-200 font-medium">{COMPANY_INFO.phone1}</p>
                  <p className="text-slate-200 font-medium">{COMPANY_INFO.phone2}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-brand-500 mt-1 shrink-0" />
                <div>
                  <p className="text-slate-300">{COMPANY_INFO.email}</p>
                  <p className="text-slate-400 text-xs">{COMPANY_INFO.emailAlt}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-500 mt-1 shrink-0" />
                <p className="text-slate-300">
                  {COMPANY_INFO.address}<br />
                  {COMPANY_INFO.cityState}
                </p>
              </li>
            </ul>
          </div>

          {/* Guarantee / Coverage */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide">Região de Cobertura</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Atendemos todos os bairros da Capital de São Paulo, Grande SP (ABC, Alphaville, Osasco, Guarulhos) e viagens rápidas para o Litoral e Interior.
            </p>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold text-xs">
                <ShieldCheck className="w-4 h-4 text-brand-500" />
                Garantia de Protocolo Seguro
              </div>
              <p className="text-[11px] text-slate-400">
                Todas as encomendas contam com acompanhamento direto e protocolo físico ou digital assinado na entrega.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Projetado com alta performance e design moderno em TypeScript & Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
};

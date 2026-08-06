import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, MapPin, CheckCircle2, Building2 } from 'lucide-react';
import { COMPANY_INFO } from '../../data/content';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Highlight Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl p-8 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-950 border border-brand-800/60 text-brand-400 text-xs font-bold uppercase tracking-wider mb-6">
                <Building2 className="w-3.5 h-3.5" />
                História & Tradição
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Mais de 9 Anos Agilizando Entregas em São Paulo
              </h3>

              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                A <strong className="text-white">Coopstar Express</strong> nasceu com a missão de resolver gargalos logísticos urbanos. Oferecemos um serviço ágil, seguro e altamente confiável para que sua empresa ganhe tempo e produtividade.
              </p>

              <div className="mt-6 pt-6 border-t border-slate-800 space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
                  <span>Equipe especializada de motoboys credenciados</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
                  <span>Central de atendimento 24h e agendamento pontual</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
                  <span>Cobertura completa na Capital e Grande São Paulo</span>
                </div>
              </div>

              {/* Stat highlight inside */}
              <div className="mt-8 p-4 rounded-2xl bg-brand-950/40 border border-brand-900/50 flex items-center justify-between">
                <div>
                  <span className="text-xs text-brand-300 uppercase font-semibold">Sede Principal</span>
                  <p className="text-sm font-bold text-white mt-0.5">{COMPANY_INFO.address}</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-brand-600/30 flex items-center justify-center text-brand-400">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Detailed Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider">
              Quem Somos
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Sua Parceira Logística de Confiança para <span className="text-brand-500">Qualquer Hora</span>
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              A Coopstar Express é uma empresa consolidada no mercado de transporte de pequenas encomendas e documentos. Compreendemos a importância estratégica que cada entrega representa para o seu negócio – seja um contrato assinado a tempo de fechar uma negociação ou o despacho urgente de um lote de medicamentos.
            </p>

            <p className="text-base text-slate-300 leading-relaxed">
              Atendemos em toda a cidade de São Paulo (Capital) e região metropolitana da Grande SP. Nossa equipe passa por rigoroso processo de qualificação para garantir a integridade dos materiais transportados e a pontualidade que a sua empresa merece.
            </p>

            {/* Key Advantages Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 space-y-1.5">
                <div className="flex items-center gap-2 text-brand-400 font-bold text-sm">
                  <Clock className="w-4 h-4" />
                  Atendimento 24 Horas
                </div>
                <p className="text-xs text-slate-400">
                  Operamos de Segunda a Segunda-feira. Opção de contratação urgente ou agendamento prévio com hora marcada.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 space-y-1.5">
                <div className="flex items-center gap-2 text-brand-400 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  Garantia de Segurança
                </div>
                <p className="text-xs text-slate-400">
                  Protocolo digital de entrega contendo nome legível, RG e horário da coleta/recibo para total transparência.
                </p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

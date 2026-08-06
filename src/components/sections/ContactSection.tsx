import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle, Clock, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../../data/content';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.nome.trim()) errs.nome = 'Por favor digite seu Nome.';
    if (!formData.email.trim()) {
      errs.email = 'Por favor digite seu E-mail.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Digite um E-mail válido.';
    }
    if (!formData.assunto.trim()) errs.assunto = 'Por favor digite o Assunto.';
    if (!formData.mensagem.trim()) errs.mensagem = 'Por favor digite a Mensagem.';
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitError(false);
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '54ea28f4-9efe-4089-b5ae-e5f796b7b8b7',
          subject: `[Coopstar Express] ${formData.assunto}`,
          from_name: formData.nome,
          name: formData.nome,
          email: formData.email,
          assunto: formData.assunto,
          message: formData.mensagem,
          botcheck: '',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ nome: '', email: '', assunto: '', mensagem: '' });
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
      {/* Background Lights */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider">
            Fale Conosco
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contato & <span className="text-gradient-red">Localização</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Envie sua mensagem ou entre em contato diretamente com nossa central de atendimento em Moema.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl p-8 bg-slate-900/60 border border-slate-800 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">Envie uma Mensagem</h3>
              <p className="text-xs text-slate-400 mb-6">Preencha o formulário abaixo para orçamentos ou suporte.</p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-800/60 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-600/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Mensagem Enviada com Sucesso!</h4>
                  <p className="text-sm text-slate-300">
                    Agradecemos o contato. Nossa equipe retornará sua solicitação o mais rápido possível.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors"
                  >
                    Enviar Outra Mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  
                  {/* Nome */}
                  <div>
                    <label htmlFor="nome" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      placeholder="Ex: Carlos Silva"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                        errors.nome ? 'border-red-500' : 'border-slate-800 focus:border-brand-500'
                      } text-white placeholder-slate-600 focus:outline-none text-sm transition-colors`}
                    />
                    {errors.nome && <p className="mt-1.5 text-xs text-red-400">{errors.nome}</p>}
                  </div>

                  {/* E-mail */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      E-mail para Retorno *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Ex: carlos@empresa.com.br"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                        errors.email ? 'border-red-500' : 'border-slate-800 focus:border-brand-500'
                      } text-white placeholder-slate-600 focus:outline-none text-sm transition-colors`}
                    />
                    {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
                  </div>

                  {/* Assunto */}
                  <div>
                    <label htmlFor="assunto" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Assunto *
                    </label>
                    <input
                      type="text"
                      id="assunto"
                      value={formData.assunto}
                      onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
                      placeholder="Ex: Cotação de Contrato Mensal / Moto Frete"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                        errors.assunto ? 'border-red-500' : 'border-slate-800 focus:border-brand-500'
                      } text-white placeholder-slate-600 focus:outline-none text-sm transition-colors`}
                    />
                    {errors.assunto && <p className="mt-1.5 text-xs text-red-400">{errors.assunto}</p>}
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label htmlFor="mensagem" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="mensagem"
                      rows={4}
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      placeholder="Descreva detalhes da coleta, entrega ou dúvidas..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                        errors.mensagem ? 'border-red-500' : 'border-slate-800 focus:border-brand-500'
                      } text-white placeholder-slate-600 focus:outline-none text-sm transition-colors`}
                    />
                    {errors.mensagem && <p className="mt-1.5 text-xs text-red-400">{errors.mensagem}</p>}
                  </div>

                  {/* Honeypot anti-bot - deve ficar oculto */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    aria-hidden="true"
                  />

                  {/* Botão de envio */}
                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm shadow-lg shadow-brand-600/30 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                          </svg>
                          <span>Enviando...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Enviar Mensagem</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Mensagem de erro de envio */}
                  {submitError && (
                    <div className="mt-3 p-4 rounded-xl bg-red-950/50 border border-red-800/60 text-xs text-red-300 flex items-start gap-2">
                      <span className="text-red-400 font-bold shrink-0">⚠</span>
                      <span>
                        Ocorreu um erro ao enviar sua mensagem. Tente novamente ou entre em contato diretamente pelo telefone{' '}
                        <a href="tel:1150523563" className="underline font-bold hover:text-red-200">{COMPANY_INFO.phone1}</a>.
                      </span>
                    </div>
                  )}

                </form>
              )}

            </div>
          </motion.div>

          {/* Right Column: Direct Contact & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Contact Info Box */}
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white">Canais Diretos</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-600/20 text-brand-500 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400">Telefones 24h</p>
                    <p className="text-sm font-bold text-white">{COMPANY_INFO.phone1}</p>
                    <p className="text-sm font-bold text-white">{COMPANY_INFO.phone2}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-600/20 text-brand-500 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400">E-mails de Contato</p>
                    <p className="text-sm font-bold text-white">{COMPANY_INFO.email}</p>
                    <p className="text-xs text-slate-400">{COMPANY_INFO.emailAlt}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-600/20 text-brand-500 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400">Endereço Principal</p>
                    <p className="text-sm font-bold text-white">{COMPANY_INFO.address}</p>
                    <p className="text-xs text-slate-400">{COMPANY_INFO.cityState} • Moema</p>
                  </div>
                </div>
              </div>

              {/* Working Hours Badge */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                <Clock className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-white">Atendimento 24 Horas</p>
                  <p className="text-[11px] text-slate-400">De Segunda a Segunda-feira com plantão contínuo.</p>
                </div>
              </div>
            </div>

            {/* Interactive Map Showcase Box */}
            <div className="rounded-3xl p-6 bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <MapPin className="w-4 h-4 text-brand-500" />
                  <span>Localização da Base (Moema)</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Av.+Juruce,+898+-+Moema,+Sao+Paulo+-+SP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-brand-400 hover:text-brand-300 font-semibold flex items-center gap-1"
                >
                  Abrir no Google Maps
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Embedded Frame */}
              <div className="relative w-full h-48 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
                <iframe
                  title="Mapa Coopstar Express Moema"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://maps.google.com/maps?q=Av.+Juruce,+898+-+Moema,+Sao+Paulo+-+SP&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

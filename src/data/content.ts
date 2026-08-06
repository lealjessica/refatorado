export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge?: string;
  features: string[];
}

export interface PricingRegion {
  region: string;
  description: string;
  estimatedTime: string;
  priceNote: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const COMPANY_INFO = {
  name: "Coopstar Express",
  slogan: "Serviços de Moto Frete & Delivery 24 Horas",
  phone1: "(11) 5052-3563",
  phone2: "(11) 5051-4442",
  phoneRaw1: "1150523563",
  phoneRaw2: "1150514442",
  whatsapp: "551150523563",
  email: "contato@coopstarexpress.com.br",
  emailAlt: "coopstar_express@hotmail.com",
  address: "Av. Juruce, 898 - Moema",
  cityState: "São Paulo - SP",
  zip: "04514-002",
  yearsInBusiness: "9+",
  workingHours: "24 Horas / 7 dias por semana (Segunda a Segunda)",
};

export const STATS = [
  { value: "9+", label: "Anos no mercado", icon: "Award" },
  { value: "24/7", label: "Funcionamento ininterrupto", icon: "Clock" },
  { value: "100%", label: "Segurança e Rastreabilidade", icon: "ShieldCheck" },
  { value: "SP & SP+", label: "Capital e Grande São Paulo", icon: "MapPin" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "moto-frete",
    title: "Serviços de Moto Frete Express",
    badge: "Mais Solicitado",
    shortDesc: "Entregas ultrarrápidas de documentos e pequenos volumes de um ponto a outro da cidade.",
    fullDesc: "Solução ideal para empresas e pessoas físicas que necessitam de rapidez absoluta na entrega de documentos confidenciais, contratos, exames médicos, cheques e pequenos volumes. Inclui serviços cartorários, bancários e despachos/retiradas em aeroportos com comprovante em tempo real.",
    iconName: "Zap",
    features: [
      "Coleta rápida em até 30 minutos",
      "Serviços cartorários e bancários com protocolo",
      "Despacho e retirada nos aeroportos (Congonhas / Guarulhos)",
      "Coletas e entregas agendadas ou imediatas"
    ]
  },
  {
    id: "delivery-corporativo",
    title: "Delivery Corporativo Dedicado",
    badge: "Para Empresas",
    shortDesc: "Implantação de serviço de entrega dedicado com o melhor custo-benefício para seu negócio.",
    fullDesc: "Aloque motoboys dedicados ou sob demanda para sua operação comercial. Atendemos farmácias de manipulação, restaurantes, pizzarias, lojas de auto peças, e-commerces e escritórios de advocacia que demandam alto fluxo diário de entregas.",
    iconName: "Truck",
    features: [
      "Frota padronizada e treinada para atendimento ao cliente",
      "Redução drástica de custos logísticos e trabalhistas",
      "Atendimento exclusivo para farmácias, auto peças e e-commerce",
      "Contratos mensais flexíveis ou atendimento sob demanda"
    ]
  },
  {
    id: "fora-da-capital",
    title: "Viagens & Fora da Capital",
    badge: "Tabela Especial",
    shortDesc: "Atendimento expresso para municípios da Grande São Paulo, litoral e interior do estado.",
    fullDesc: "Atendemos urgências logísticas fora da cidade de São Paulo com total pontualidade. Envio imediato para Alphaville, ABC Paulista, Guarulhos, Campinas, Santos e região metropolitana com tabela de preços clara e transparente.",
    iconName: "Navigation",
    features: [
      "Atendimento para Grande SP, ABC, Litoral e Interior",
      "Rotas otimizadas via GPS para menor tempo de trânsito",
      "Tabela com valores pré-fixados sem surpresas",
      "Disponibilidade para agendamento prévio 24h"
    ]
  }
];

export const PRICING_TABLE: PricingRegion[] = [
  {
    region: "São Paulo (Centro / Moema / Zona Sul)",
    description: "Coletas e entregas expressas locais de pequeno volume.",
    estimatedTime: "30 a 60 min",
    priceNote: "Sob cotação rápida via WhatsApp / Telefone"
  },
  {
    region: "Grande São Paulo (ABC Paulista - Santo André, São Bernardo, São Caetano)",
    description: "Atendimento direto via rodovias rápidas Anchieta/Imigrantes.",
    estimatedTime: "60 a 90 min",
    priceNote: "Tabela especial com taxa fixa por região"
  },
  {
    region: "Região Oeste & Barueri (Alphaville / Tamboré / Osasco)",
    description: "Despacho expresso de documentos e contratos corporativos.",
    estimatedTime: "60 a 90 min",
    priceNote: "Tabela regional pré-definida"
  },
  {
    region: "Guarulhos & Aeroporto internacional (GRU)",
    description: "Despachos aéreos urgentes e entregas na região de Guarulhos.",
    estimatedTime: "45 a 75 min",
    priceNote: "Serviço com protocolo de embarque"
  },
  {
    region: "Litoral & Interior (Santos, Campinas, Jundiaí e região)",
    description: "Transporte dedicado porta a porta para urgências industriais e comerciais.",
    estimatedTime: "Consulte previsão",
    priceNote: "Tabela por km percorrido / taxa sob consulta"
  }
];

export const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Solicitação Rápida",
    description: "Entre em contato via telefone ou WhatsApp informando os endereços de coleta e entrega.",
    icon: "PhoneCall"
  },
  {
    step: "02",
    title: "Coleta Imediata",
    description: "Nosso motoboy credenciado mais próximo é acionado e efetua a coleta no endereço em minutos.",
    icon: "PackageCheck"
  },
  {
    step: "03",
    title: "Transporte Seguro",
    description: "Sua encomenda viaja protegida em baú vedado com acompanhamento em tempo real.",
    icon: "ShieldAlert"
  },
  {
    step: "04",
    title: "Protocolo & Entrega",
    description: "A encomenda é entregue ao destinatário com assinatura e confirmação imediata.",
    icon: "CheckCircle2"
  }
];

export const DIFFERENTIALS = [
  {
    title: "Atendimento 24 Horas",
    description: "Funcionalidade total de Segunda a Segunda, incluindo feriados, com opção de agendamento prévio.",
    icon: "Clock"
  },
  {
    title: "+9 Anos de Credibilidade",
    description: "Tradição e excelência comprovada no mercado de transporte expresso em São Paulo.",
    icon: "ShieldCheck"
  },
  {
    title: "Equipe Especializada",
    description: "Profissionais registrados, uniformizados e treinados para manuseio seguro de documentos sensíveis.",
    icon: "Users"
  },
  {
    title: "Localização Estratégica",
    description: "Base situada em Moema (Zona Sul), com acesso rápido aos principais corredores da capital.",
    icon: "MapPin"
  },
  {
    title: "Protocolo de Recebimento",
    description: "Todas as entregas possuem confirmação com nome, RG e horário exato da entrega.",
    icon: "FileCheck"
  },
  {
    title: "Flexibilidade de Pagamento",
    description: "Faturamento quinzenal ou mensal para empresas cadastradas, além de PIX e cartão.",
    icon: "CreditCard"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Como solicitar uma entrega de motoboy urgente?",
    answer: "Basta ligar para (11) 5052-3563 ou enviar uma mensagem pelo nosso WhatsApp. Nossa central localiza o motoboy mais próximo do local de coleta e realiza o despacho imediatamente.",
    category: "Serviços"
  },
  {
    question: "Qual o horário de funcionamento da Coopstar Express?",
    answer: "Funcionamos 24 horas por dia, 7 dias por semana (inclusive sábados, domingos e feriados). Para horários noturnos e madrugadas, recomendamos solicitar ou agendar com antecedência.",
    category: "Horários"
  },
  {
    question: "Vocês atendem fora da cidade de São Paulo?",
    answer: "Sim! Atendemos toda a Grande São Paulo (Alphaville, Osasco, Guarulhos, ABC), bem como cidades do Litoral (Santos, Praia Grande) e Interior (Campinas, Jundiaí, Sorocaba).",
    category: "Cobertura"
  },
  {
    question: "Como funciona o faturamento para empresas?",
    answer: "Empresas cadastradas possuem faturamento quinzenal ou mensal através de boleto bancário, acompanhado da fatura detalhada com todas as OS (Ordens de Serviço) executadas no período.",
    category: "Pagamento"
  },
  {
    question: "Quais tipos de itens podem ser transportados?",
    answer: "Transportamos documentos, contratos, exames de laboratório, peças de automóveis, produtos farmacêuticos, presentes, pequenos eletrônicos e encomendas leves de até 20kg no baú.",
    category: "Carga"
  }
];

<div align="center">

# 🏍️ Coopstar Express

### Site Institucional Refatorado — v2.0

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

**Serviços de Moto Frete & Delivery 24 Horas em São Paulo**

[🌐 Acessar o Site](https://coopstarexpress.com.br/) · [📞 (11) 5052-3563](tel:1150523563) · [💬 WhatsApp](https://wa.me/551150523563)

</div>

---

## 📋 Sobre o Projeto

Refatoração completa do site institucional da **Coopstar Express**, empresa especializada em serviços de moto frete, entregas expressas e delivery para empresas e pessoas físicas em São Paulo e Grande SP.

O site antigo (PHP + HTML simples) foi completamente reescrito com tecnologias modernas, resultando em:

- ✅ **Performance superior** — carregamento ultrarrápido com Vite
- ✅ **Design responsivo** — otimizado para mobile, tablet e desktop
- ✅ **SEO aprimorado** — meta tags, Open Graph e estrutura semântica
- ✅ **Animações profissionais** — Framer Motion para UX premium
- ✅ **Acessibilidade** — aria-labels, contraste adequado e navegação por teclado

---

## 🚀 Stack Tecnológica

| Tecnologia | Versão | Finalidade |
|---|---|---|
| [React](https://react.dev/) | 18.3.1 | Biblioteca de UI |
| [TypeScript](https://www.typescriptlang.org/) | 5.6.3 | Tipagem estática |
| [Vite](https://vitejs.dev/) | 5.4.11 | Build tool & Dev Server |
| [TailwindCSS](https://tailwindcss.com/) | 3.4.17 | Estilização utilitária |
| [Framer Motion](https://www.framer.com/motion/) | 11.15.0 | Animações e transições |
| [Lucide React](https://lucide.dev/) | 0.469.0 | Biblioteca de ícones |
| [PostCSS](https://postcss.org/) | 8.4.49 | Processamento CSS |

---

## 📁 Estrutura do Projeto

```
04 Refatorar Site/
├── public/                  # Ativos estáticos públicos
│   ├── favicon.svg
│   ├── logo.png
│   └── logotipo.png
├── src/
│   ├── components/
│   │   ├── layout/          # Componentes de estrutura global
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── WhatsAppButton.tsx
│   │   └── sections/        # Seções da landing page
│   │       ├── HeroSection.tsx
│   │       ├── AboutSection.tsx
│   │       ├── ServicesSection.tsx
│   │       ├── WhyUsSection.tsx
│   │       ├── ProcessSection.tsx
│   │       ├── PricingModal.tsx
│   │       ├── FAQSection.tsx
│   │       └── ContactSection.tsx
│   ├── data/
│   │   └── content.ts       # Dados centralizados do site (textos, serviços, FAQs)
│   ├── styles/
│   │   └── globals.css      # Estilos globais e variáveis CSS
│   ├── App.tsx              # Componente raiz da aplicação
│   └── main.tsx             # Ponto de entrada da aplicação
├── index.html               # Template HTML principal
├── vite.config.ts           # Configuração do Vite
├── tailwind.config.js       # Configuração do TailwindCSS
├── tsconfig.json            # Configuração do TypeScript
└── package.json             # Dependências e scripts
```

---

## ⚙️ Como Executar Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- npm v9 ou superior

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/lealjessica/refatorado.git

# 2. Entre na pasta do projeto
cd refatorado

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

O site estará disponível em **http://localhost:5173**

### Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento (hot reload)
npm run build    # Gera o build de produção em /dist
npm run preview  # Visualiza o build de produção localmente
npm run lint     # Verifica erros de TypeScript
```

---

## 🏗️ Build para Produção

```bash
# Gerar bundle otimizado
npm run build

# Os arquivos serão gerados em /dist — pronto para deploy!
```

### Deploy Recomendado

| Plataforma | Configuração |
|---|---|
| [Vercel](https://vercel.com/) | Conecte o repositório — deploy automático |
| [Netlify](https://netlify.com/) | Build command: `npm run build` / Publish dir: `dist` |
| [GitHub Pages](https://pages.github.com/) | Use `gh-pages` com branch de deploy |

---

## 🎯 Funcionalidades do Site

- **🏠 Hero Section** — Banner principal com CTA e animações de entrada
- **📖 Sobre Nós** — Estatísticas da empresa e diferenciais
- **🛵 Serviços** — Cards expandíveis com detalhes de cada serviço
- **🏆 Por Que Nos Escolher** — Diferenciais competitivos
- **⚙️ Como Funciona** — Processo de solicitação passo a passo
- **💰 Tabela de Preços** — Modal com regiões e estimativas de preço
- **❓ FAQ** — Perguntas frequentes com accordion
- **📞 Contato** — Formulário e informações de contato
- **💬 Botão WhatsApp** — Atalho flutuante para contato rápido

---

## 🏢 Sobre a Empresa

**Coopstar Express** atua no mercado de transporte expresso há mais de 9 anos, oferecendo:

- 🕐 Atendimento **24 horas**, 7 dias por semana
- 📍 Base em **Moema (Zona Sul de SP)** — acesso rápido a toda a capital
- 🗺️ Cobertura: **SP Capital, Grande SP, ABC, Litoral e Interior**
- 📄 Protocolo de entrega com **confirmação em tempo real**

| Contato | |
|---|---|
| 📞 Telefone 1 | [(11) 5052-3563](tel:1150523563) |
| 📞 Telefone 2 | [(11) 5051-4442](tel:1150514442) |
| 💬 WhatsApp | [Clique aqui](https://wa.me/551150523563) |
| 📧 E-mail | contato@coopstarexpress.com.br |
| 📍 Endereço | Av. Juruce, 898 - Moema, São Paulo - SP, 04514-002 |

---

## 👩‍💻 Autora

Desenvolvido por **[@lealjessica](https://github.com/lealjessica)**

---

<div align="center">

Feito com ❤️ para a **Coopstar Express** · 2026

</div>
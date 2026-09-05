import Image from "next/image";
import type { Metadata } from "next";
import SolutionSelector from "./SolutionSelector";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://walbrasil.dev/",
  },
};

const TECERALE_URL = "https://tecerale.com.br";
const TECERALE_WHATSAPP_URL =
  "https://wa.me/5517996535988?text=Ol%C3%A1%21%20Vim%20pelo%20portf%C3%B3lio%20walbrasil.dev%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.";
const WAL_DIRECT_WHATSAPP_URL =
  "https://wa.me/5519982704544?text=Ol%C3%A1%2C%20Wal.%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20falar%20diretamente%20com%20voc%C3%AA.";

const services = [
  {
    title: "WordPress & Elementor",
    description:
      "Sites profissionais, fáceis de administrar e preparados para o crescimento do seu negócio.",
    icon: "W",
  },
  {
    title: "Landing Pages",
    description:
      "Páginas diretas, responsivas e pensadas para apresentar sua oferta e gerar contatos.",
    icon: "L",
  },
  {
    title: "Sites Institucionais",
    description:
      "Presença digital clara e profissional para empresas, escolas, escritórios e prestadores de serviço.",
    icon: "S",
  },
  {
    title: "SEO",
    description:
      "Estrutura, conteúdo e otimizações on-page para melhorar a organização e a presença do site no Google.",
    icon: "SEO",
  },
  {
    title: "Desenvolvimento Web",
    description:
      "Interfaces modernas e aplicações web construídas com tecnologias atuais e foco em desempenho.",
    icon: "</>",
  },
  {
    title: "Soluções com IA",
    description:
      "Agentes, automações e integrações com inteligência artificial desenvolvidos em conexão com a TECÉRALE.",
    icon: "AI",
  },
];

const projects = [
  {
    eyebrow: "PLATAFORMA WEB + IA",
    title: "Waldemática IA",
    description:
      "Plataforma educacional completa com autenticação, trilhas, avaliações, dashboards, gestão administrativa, Tutor IA e lógica pedagógica própria.",
    stack: ["Next.js", "Supabase", "IA", "SaaS/LMS"],
    href: "/projetos/waldematica-ia",
    accent: "from-cyan-400/20 via-blue-500/10 to-transparent",
    type: "Projeto real",
    image: "/projetos/waldematica-ia/dashboard-aluno.jpg",
    imageAlt: "Dashboard real da plataforma Waldemática IA",
  },
  {
    eyebrow: "WORDPRESS + ELEMENTOR",
    title: "Waldemática",
    description:
      "Site institucional e estrutura comercial para cursos, páginas de conversão, conteúdo, formulários e navegação integrada.",
    stack: ["WordPress", "Elementor", "SEO", "Responsivo"],
    href: "/projetos/waldematica",
    accent: "from-blue-500/20 via-indigo-500/10 to-transparent",
    type: "Projeto real",
    image: "/projetos/waldematica/home-waldematica.png",
    imageAlt: "Página inicial real do site Waldemática",
  },
  {
    eyebrow: "CONTEÚDO + SEO",
    title: "Blog Waldemática",
    description:
      "Projeto editorial em WordPress com foco em Matemática, organização de conteúdo, SEO on-page, performance e experiência do usuário.",
    stack: ["WordPress", "SEO", "Conteúdo", "Performance"],
    href: "/projetos/blog-wordpress-seo",
    accent: "from-amber-300/15 via-emerald-400/10 to-transparent",
    type: "Projeto real",
    image: "/projetos/blog/estatistica-no-enem.jpg",
    imageAlt: "Imagem real de artigo do Blog Waldemática",
  },
  {
    eyebrow: "LANDING PAGE DEMONSTRATIVA",
    title: "Brasil Cotrim Advocacia",
    description:
      "Landing page conceitual para escritório de advocacia, criada para demonstrar posicionamento premium, hierarquia visual, responsividade e conversão.",
    stack: ["Next.js", "Landing Page", "UX/UI", "Responsivo"],
    href: "/projetos/landing-page-advocacia",
    accent: "from-amber-300/15 via-slate-400/10 to-transparent",
    type: "Projeto demonstrativo",
    image: "/demos/advocacia/advogada-hero.png",
    imageAlt: "Imagem institucional da landing page Brasil Cotrim Advocacia",
  },
  {
    eyebrow: "SITE MÉDICO DEMONSTRATIVO",
    title: "Clínica Silva",
    description:
      "Site demonstrativo para clínica médica com Gastroenterologia, Nutrição e Endocrinologia, equipe em destaque, estrutura da clínica e foco em agendamento.",
    stack: ["Next.js", "Landing Page", "UX/UI", "Responsivo"],
    href: "/projetos/clinica-silva",
    accent: "from-emerald-300/15 via-cyan-400/10 to-transparent",
    type: "Projeto demonstrativo",
    image: "/demos/clinica-silva/recepcao.jpg",
    imageAlt: "Recepção da Clínica Silva em projeto demonstrativo",
  },
];

const technologies = [
  "WordPress",
  "Elementor",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "SEO",
  "Inteligência Artificial",
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M15 3h6v6" />
      <path d="m10 14 11-11" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white antialiased">
      <div className="fixed inset-0 -z-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[-10%] top-[-10%] h-[480px] w-[480px] rounded-full bg-blue-600/15 blur-[120px]" />
        <div className="absolute right-[-10%] top-[18%] h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[130px]" />
      </div>

      <div className="relative z-10">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
            <a href="#inicio" className="flex items-center gap-3">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full shadow-lg shadow-blue-500/20">
                <Image
                  src="/branding/wal-brasil-logo.png"
                  alt="Logo Wal Brasil"
                  fill
                  sizes="44px"
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <p className="font-semibold leading-none">Wal Brasil</p>
                <p className="mt-1 text-xs text-slate-400">Web Developer</p>
              </div>
            </a>

            <nav className="hidden items-center gap-7 text-sm text-slate-300 lg:flex">
              <a className="transition hover:text-white" href="#inicio">
                Início
              </a>
              <a className="transition hover:text-white" href="#servicos">
                Serviços
              </a>
              <a className="transition hover:text-white" href="#projetos">
                Projetos
              </a>
              <a className="transition hover:text-white" href="#sobre">
                Sobre
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={TECERALE_URL}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold tracking-wide text-blue-300 transition hover:text-white sm:text-sm"
              >
                TECÉRALE ↗
              </a>
              <a
                href="#contato"
                className="hidden rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-[#07111f] transition hover:bg-blue-50 sm:inline-flex"
              >
                Solicitar orçamento
              </a>
            </div>
          </div>
        </header>

        <section
          id="inicio"
          className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.1fr_.9fr] lg:px-8"
        >
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-200">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              Projetos web profissionais, claros e fáceis de manter
            </div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
              Wal Brasil · Fundador e Desenvolvedor da TECÉRALE
            </p>

            <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
              WordPress, Landing Pages, SEO e{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Soluções Web com IA
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Desenvolvimento de sites e soluções digitais rápidas, responsivas e
              organizadas para resolver problemas reais — sem complexidade
              desnecessária e sem prender o cliente à manutenção técnica para
              pequenas alterações.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projetos"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 font-semibold shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
              >
                Ver projetos
                <ArrowIcon />
              </a>
              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Falar sobre um projeto
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">
              <span>✓ WordPress & Elementor</span>
              <span>✓ Desenvolvimento moderno</span>
              <span>✓ SEO e performance</span>
              <span>✓ IA aplicada à web</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-4 rounded-[2rem] bg-blue-500/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-4">
                <span className="h-3 w-3 rounded-full bg-white/20" />
                <span className="h-3 w-3 rounded-full bg-white/20" />
                <span className="h-3 w-3 rounded-full bg-white/20" />
                <div className="ml-3 flex-1 rounded-lg bg-white/5 px-3 py-2 text-center text-xs text-slate-500">
                  walbrasil.dev
                </div>
              </div>

              <div className="rounded-2xl border border-blue-400/10 bg-[#0a1728] p-7">
                <div className="mb-7 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-blue-300">
                      Projeto em destaque
                    </p>
                    <h2 className="mt-2 text-2xl font-bold">Waldemática IA</h2>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-lg font-bold text-blue-300">
                    AI
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    ["Dashboard", "Progresso do aluno"],
                    ["Tutor IA", "Assistência integrada"],
                    ["Avaliações", "Domínio e revisão"],
                    ["Admin", "Gestão da plataforma"],
                  ].map(([title, text]) => (
                    <div
                      key={title}
                      className="rounded-xl border border-white/10 bg-white/[0.035] p-4"
                    >
                      <div className="mb-3 h-1.5 w-10 rounded-full bg-blue-400" />
                      <p className="font-semibold">{title}</p>
                      <p className="mt-1 text-xs leading-5 text-slate-400">{text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-xl border border-cyan-300/10 bg-gradient-to-r from-blue-500/10 to-cyan-400/5 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400">Stack principal</p>
                      <p className="mt-1 text-sm font-medium">
                        Next.js · Supabase · Inteligência Artificial
                      </p>
                    </div>
                    <span className="rounded-lg bg-white/5 px-3 py-2 text-xs text-cyan-200">
                      Projeto real
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SolutionSelector />

        <section id="servicos" className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Serviços
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Do site institucional à solução web sob medida.
              </h2>
              <p className="mt-4 text-slate-400">
                O foco é entregar a solução adequada ao projeto, com boa
                experiência no computador e no celular e estrutura simples de
                manter.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.055]"
                >
                  <div className="mb-5 flex h-11 min-w-11 w-fit items-center justify-center rounded-xl bg-blue-500/10 px-3 text-sm font-bold text-blue-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projetos" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Projetos em destaque
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Trabalho real, não só promessa.
              </h2>
              <p className="mt-4 text-slate-400">
                Projetos reais e demonstrativos que mostram desenvolvimento,
                WordPress, SEO, organização de conteúdo, aplicações web e
                integração com IA.
              </p>
            </div>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-blue-200"
            >
              Precisa de algo parecido?
              <ArrowIcon />
            </a>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035]"
              >
                <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${project.accent}`}>
                  <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:28px_28px]" />

                  <div className="absolute inset-4 overflow-hidden rounded-2xl border border-white/10 bg-[#091625]">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={`transition duration-500 hover:scale-[1.02] ${
                        project.title === "Brasil Cotrim Advocacia"
                          ? "object-cover object-[center_22%]"
                          : project.title === "Clínica Silva"
                            ? "object-cover object-center"
                            : "object-cover object-top"
                      }`}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/85 via-transparent to-[#07111f]/10" />

                    <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-4">
                      <span className="rounded-full border border-white/10 bg-[#07111f]/75 px-3 py-1.5 text-[10px] font-semibold tracking-[0.14em] text-blue-200 backdrop-blur">
                        {project.eyebrow}
                      </span>
                      <span className="rounded-full border border-white/10 bg-[#07111f]/75 px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] text-slate-200 backdrop-blur">
                        {project.type}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-3 min-h-20 text-sm leading-6 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-blue-200"
                  >
                    {project.type === "Projeto demonstrativo" ? "Ver demonstração" : "Ver projeto"}
                    <ExternalIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-500/10 via-white/[0.035] to-cyan-400/5 p-7 sm:p-10">
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
              <div className="relative max-w-4xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                  Agência / TECÉRALE
                </p>
                <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
                  Projetos técnicos que também viram soluções comerciais.
                </h2>
                <p className="mt-5 max-w-3xl leading-7 text-slate-300">
                  Wal Brasil é Fundador e Desenvolvedor Sênior da TECÉRALE,
                  agência de tecnologia AI-first focada em agentes de IA,
                  automações, desenvolvimento web e sistemas sob medida.
                </p>
                <p className="mt-3 max-w-3xl leading-7 text-slate-400">
                  O walbrasil.dev reúne o portfólio técnico. A TECÉRALE é onde
                  essas competências se transformam em soluções para empresas e
                  profissionais.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={TECERALE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-400"
                  >
                    Conhecer a TECÉRALE
                    <ExternalIcon />
                  </a>
                  <a
                    href={TECERALE_WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-400/25 bg-emerald-400/10 px-6 py-3.5 font-semibold text-emerald-200 transition hover:bg-emerald-400/15 hover:text-white"
                  >
                    Testar o agente no WhatsApp
                    <ExternalIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Como eu trabalho
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Tecnologia tem que simplificar o negócio, não complicar.
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-slate-400">
                Cada projeto começa pela necessidade real do cliente. A escolha
                da tecnologia vem depois. Quando WordPress resolve bem, uso
                WordPress. Quando o projeto pede uma aplicação mais moderna,
                trabalho com desenvolvimento web sob medida.
              </p>
              <p className="mt-4 max-w-xl leading-7 text-slate-400">
                O objetivo é entregar uma solução profissional, rápida,
                organizada e que continue fazendo sentido depois da publicação.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Autonomia", "Estruturas que o cliente consegue administrar sem depender de programação para cada ajuste."],
                ["Responsividade", "Experiência consistente em desktop, tablet e celular."],
                ["Performance", "Páginas enxutas, organizadas e pensadas para carregar bem."],
                ["Comunicação direta", "Escopo claro, decisões objetivas e menos ruído durante o projeto."],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
                >
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/10 text-blue-300">
                    <CheckIcon />
                  </div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Tecnologias
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Ferramentas que fazem parte do trabalho
            </h2>
          </div>

          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-xl border border-white/10 bg-white/[0.035] px-4 py-2.5 text-sm text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        <section id="contato" className="px-6 pb-24 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-blue-400/20 bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-cyan-400/5 p-8 sm:p-12 lg:p-16">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Vamos conversar
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                Tem um projeto em mente?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Você pode conhecer meus trabalhos aqui no portfólio e conversar
                com a TECÉRALE para transformar a ideia em um projeto real.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={TECERALE_WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 font-semibold text-white transition hover:bg-emerald-400"
                >
                  Conversar com a TECÉRALE
                  <ExternalIcon />
                </a>

                <a
                  href={TECERALE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-[#07111f] transition hover:bg-blue-50"
                >
                  Conhecer a TECÉRALE
                  <ExternalIcon />
                </a>

                <a
                  href="#projetos"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold transition hover:bg-white/10"
                >
                  Ver projetos
                </a>
              </div>

              <div className="mt-6 flex flex-col gap-2 text-sm text-slate-400 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
                <span>Comercial automatizado: (17) 99653-5988</span>
                <span className="hidden text-slate-600 sm:inline">•</span>
                <a
                  href={WAL_DIRECT_WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  Contato direto com Wal: (19) 98270-4544
                </a>
                <span className="hidden text-slate-600 sm:inline">•</span>
                <a
                  href="mailto:contato@walbrasil.dev"
                  className="transition hover:text-white"
                >
                  contato@walbrasil.dev
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <div className="flex items-center gap-3">
              <div className="relative h-8 w-8 overflow-hidden rounded-full">
                <Image
                  src="/branding/wal-brasil-logo.png"
                  alt=""
                  fill
                  sizes="32px"
                  className="object-contain"
                />
              </div>
              <p>© 2026 Wal Brasil. Todos os direitos reservados.</p>
            </div>
            <p>WordPress · Desenvolvimento Web · SEO · IA</p>
          </div>
        </footer>
      </div>
    </main>
  );
}

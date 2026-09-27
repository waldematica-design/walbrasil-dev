import Image from "next/image";
import type { Metadata } from "next";
import TrackedLink from "@/components/TrackedLink";
import { QuoteProvider } from "@/components/quote-provider";
import { QuoteTrigger } from "@/components/quote-trigger";
import PageMotion from "@/components/page-motion";
import SolutionSelector from "./SolutionSelector";
import styles from "./page.module.css";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://walbrasil.dev/",
  },
};

const TECERALE_URL = "https://tecerale.com.br";
const TECERALE_WHATSAPP_URL =
  "https://wa.me/5517996535988?text=Ol%C3%A1%21%20Vim%20pelo%20portf%C3%B3lio%20walbrasil.dev%20e%20gostaria%20de%20conhecer%20a%20TEC%C3%89RALE.";
const WAL_DIRECT_WHATSAPP_NUMBER = "5517996802980";
const WAL_DIRECT_WHATSAPP_URL =
  "https://wa.me/5517996802980?text=Ol%C3%A1%2C%20Wal.%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20falar%20diretamente%20com%20voc%C3%AA.";
const WAL_EMAIL = "contato@walbrasil.dev";

const commercialServices = [
  {
    title: "Landing page profissional",
    description:
      "Página de alta conversão para apresentar uma oferta, captar contatos e levar o visitante direto para a ação certa.",
    price: "R$ 500",
    image: "/images/servicos/servico-landing-page-profissional.webp",
    imageAlt: "Landing page profissional, moderna, responsiva e rápida",
    tags: ["Conversão", "WhatsApp", "Responsivo", "Performance"],
  },
  {
    title: "Site institucional moderno",
    description:
      "Presença digital profissional para empresas e especialistas, com até 5 páginas, responsividade, SEO básico e publicação.",
    price: "R$ 900",
    image: "/images/servicos/servico-site-institucional.webp",
    imageAlt: "Site institucional moderno para empresas e profissionais",
    tags: ["Até 5 páginas", "Responsivo", "SEO básico", "Publicação"],
  },
  {
    title: "Sistema web / MVP",
    description:
      "Transforme uma ideia ou processo interno em uma aplicação funcional com login, banco de dados e painel administrativo.",
    price: "R$ 1.600",
    image: "/images/servicos/servico-mvp-sistema-web.webp",
    imageAlt: "Sistema web MVP com login e painel administrativo",
    tags: ["Login", "Painel administrativo", "Banco de dados", "Até 3 módulos"],
  },
  {
    title: "Blog profissional com painel",
    description:
      "Blog moderno e otimizado para SEO, com painel administrativo para publicar artigos, organizar categorias e enviar imagens.",
    price: "R$ 850",
    image: "/images/servicos/servico-blog-profissional-seo.webp",
    imageAlt: "Blog profissional com painel para publicação de artigos",
    tags: ["Painel de artigos", "Upload de imagens", "SEO", "Categorias"],
  },
  {
    title: "Site para clínica com IA e agendamento",
    description:
      "Site premium para clínica ou consultório com atendimento inteligente, dúvidas frequentes e agendamento pelo site ou WhatsApp.",
    price: "R$ 1.400",
    image: "/images/servicos/servico-site-clinica-agendamento-ia.webp",
    imageAlt: "Site para clínica com agendamento online, WhatsApp e inteligência artificial",
    tags: ["Site profissional", "IA no site", "WhatsApp", "Agenda online"],
  },
  {
    title: "Agente de IA para atendimento e agendamento",
    description:
      "Atenda clientes, responda dúvidas, apresente serviços e organize agendamentos com um agente configurado para as regras do negócio.",
    price: "R$ 1.000",
    image: "/images/servicos/servico-agente-ia-atendimento-agendamento.webp",
    imageAlt: "Agente de IA para atendimento, vendas e agendamento",
    tags: ["Atendimento 24/7", "WhatsApp", "Agendamento", "Respostas inteligentes"],
  },
];

function buildServiceWhatsAppUrl(serviceTitle: string) {
  const message = `Olá, Wal! Vi o serviço "${serviceTitle}" no walbrasil.dev e gostaria de conversar sobre meu projeto.`;
  return `https://wa.me/${WAL_DIRECT_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}


const heroTickerTop = [
  "Landing Pages",
  "Sites Institucionais",
  "Sistemas Web / MVP",
  "Blogs com Painel",
  "Agentes de IA",
  "Next.js",
  "Supabase",
  "Integrações",
];

const heroTickerBottom = [
  "Automação",
  "WhatsApp",
  "Dashboards",
  "SEO",
  "APIs",
  "Performance",
  "Responsivo",
  "IA Aplicada",
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
    eyebrow: "AGÊNCIA + IA + AUTOMAÇÕES",
    title: "TECÉRALE",
    description:
      "Agência de tecnologia AI-first com site institucional, agentes de IA, automações, integrações e soluções digitais sob medida para empresas e profissionais.",
    stack: ["Next.js", "TypeScript", "Agentes de IA", "Automação"],
    href: TECERALE_URL,
    accent: "from-cyan-400/20 via-blue-500/10 to-indigo-500/5",
    type: "Projeto real",
    image: "/branding/wal-brasil-logo.png",
    imageAlt: "TECÉRALE — agentes de IA, automações e desenvolvimento web",
  },
  {
    eyebrow: "NEXT.JS + VENDAS",
    title: "Waldemática",
    description:
      "Site comercial em Next.js para cursos, páginas de conversão, captação de leads, checkouts e navegação integrada ao ecossistema Waldemática.",
    stack: ["Next.js", "TypeScript", "Supabase", "SEO"],
    href: "/projetos/waldematica",
    accent: "from-blue-500/20 via-indigo-500/10 to-transparent",
    type: "Projeto real",
    image: "/projetos/waldematica/home-waldematica.jpg",
    imageAlt: "Página inicial real do site Waldemática",
  },
  {
    eyebrow: "NEXT.JS + MDX + SEO",
    title: "Blog Waldemática",
    description:
      "Projeto editorial em Next.js e MDX com foco em Matemática, SEO técnico, conteúdo estruturado, performance e publicação versionada.",
    stack: ["Next.js", "MDX", "SEO", "Supabase"],
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
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "PostgreSQL",
  "Vercel",
  "GitHub",
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
    <QuoteProvider>
      <main className={`${styles.motionRoot} min-h-screen bg-[#0b0d12] text-white antialiased`}>
        <PageMotion />
        <div className="fixed inset-0 -z-0 overflow-hidden pointer-events-none">
          <div className={`${styles.ambientOrb} ${styles.ambientOrbOne} absolute left-[-10%] top-[-10%] h-[480px] w-[480px] rounded-full bg-emerald-500/10 blur-[120px]`} />
          <div className={`${styles.ambientOrb} ${styles.ambientOrbTwo} absolute right-[-10%] top-[18%] h-[420px] w-[420px] rounded-full bg-amber-400/8 blur-[130px]`} />
          <div className={styles.ambientGrid} />
        </div>

      <div className="relative z-10">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0d12]/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
            <a href="#inicio" className="flex items-center gap-3">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full shadow-lg shadow-emerald-500/15">
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
              <TrackedLink
                href={TECERALE_URL}
                eventName="tecerale_click"
                ctaLocation="header_tecerale"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold tracking-wide text-emerald-300 transition hover:text-white sm:text-sm"
              >
                TECÉRALE ↗
              </TrackedLink>
              <QuoteTrigger
                className="hidden rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-[#07111f] transition hover:bg-blue-50 sm:inline-flex"
              >
                Solicitar orçamento
              </QuoteTrigger>
            </div>
          </div>
        </header>

        <section
          id="inicio"
          className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.1fr_.9fr] lg:px-8"
        >
          <div data-reveal data-direction="left">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/8 px-4 py-2 text-sm text-emerald-100">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              Projetos web e soluções de IA desenvolvidos para problemas reais
            </div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">
              Wal Brasil · Fundador e Desenvolvedor da TECÉRALE
            </p>

            <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
              Sites, Sistemas e{" "}
              <span className="bg-gradient-to-r from-slate-100 via-emerald-300 to-teal-300 bg-clip-text text-transparent">
                Soluções Web com IA
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Desenvolvimento de sites, sistemas e aplicações modernas com
              Next.js, Supabase e Inteligência Artificial, do projeto inicial à
              publicação.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projetos"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 font-semibold shadow-lg shadow-emerald-500/15 transition hover:bg-emerald-400"
              >
                Ver projetos
                <ArrowIcon />
              </a>
              <QuoteTrigger
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Falar sobre um projeto
              </QuoteTrigger>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">
              <span>✓ Next.js & React</span>
              <span>✓ Sistemas Web</span>
              <span>✓ Supabase</span>
              <span>✓ Inteligência Artificial</span>
            </div>
          </div>

          <div
            className={`${styles.heroMockup} relative mx-auto w-full max-w-xl`}
            data-reveal
            data-direction="right"
            data-delay="120"
          >
            <div className={styles.featuredProjectGlow} />
            <article className={styles.featuredProjectCard}>
              <div className={styles.featuredProjectTopbar}>
                <div className={styles.featuredProjectDots} aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <span>walbrasil.dev · case real</span>
              </div>

              <div className={styles.featuredProjectVisual}>
                <Image
                  src="/projetos/waldematica-ia/dashboard-aluno.jpg"
                  alt="Dashboard real da plataforma Waldemática IA"
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  quality={75}
                  loading="eager"
                  className={styles.featuredProjectImage}
                />
                <div className={styles.featuredProjectVisualShade} />

                <div className={styles.featuredProjectBadge}>
                  <span>PROJETO EM DESTAQUE</span>
                  <strong>Waldemática IA</strong>
                  <small>Plataforma educacional com IA, gestão e trilhas adaptativas.</small>
                </div>
              </div>

              <div className={styles.featuredProjectFooter}>
                <div>
                  <span>STACK</span>
                  <strong>Next.js · Supabase · IA</strong>
                </div>
                <div>
                  <span>ESCOPO</span>
                  <strong>SaaS / LMS</strong>
                </div>
                <div>
                  <span>STATUS</span>
                  <strong className={styles.featuredProjectStatus}>Projeto real</strong>
                </div>
              </div>
            </article>
          </div>

          <div
            className={styles.heroTickerWrap}
            aria-label="Tecnologias e soluções que fazem parte dos projetos"
            data-reveal
            data-delay="180"
          >
            <div className={styles.heroTickerFade}>
              <div className={`${styles.heroTickerTrack} ${styles.heroTickerTrackLeft}`}>
                {[0, 1].map((copy) => (
                  <div className={styles.heroTickerSet} aria-hidden={copy === 1} key={copy}>
                    {heroTickerTop.map((item) => (
                      <span
                        className={styles.heroTickerChip}
                        key={`${copy}-${item}`}
                      >
                        <i />
                        {item}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.heroTickerFade}>
              <div className={`${styles.heroTickerTrack} ${styles.heroTickerTrackRight}`}>
                {[0, 1].map((copy) => (
                  <div className={styles.heroTickerSet} aria-hidden={copy === 1} key={copy}>
                    {heroTickerBottom.map((item) => (
                      <span
                        className={styles.heroTickerChip}
                        key={`${copy}-${item}`}
                      >
                        <i />
                        {item}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.heroTickerCaption}>
              <span />
              <p>TECNOLOGIA EM MOVIMENTO · PROJETOS PENSADOS PARA CRESCER</p>
              <span />
            </div>
          </div>
        </section>

        <section
          id="servicos"
          className="border-y border-white/10 bg-white/[0.02]"
        >
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-end" data-reveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                  Serviços com escopo inicial claro
                </p>
                <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  Soluções que podemos colocar no ar para você.
                </h2>
              </div>
              <div className="lg:border-l lg:border-white/10 lg:pl-8">
                <p className="leading-7 text-slate-300">
                  Projetos modernos, preços de entrada acessíveis e espaço para a
                  solução crescer somente quando você realmente precisar.
                </p>
                <p className="mt-3 text-xs leading-5 text-slate-500">
                  Valores a partir do pacote inicial. Recursos adicionais recebem
                  orçamento personalizado.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {commercialServices.slice(0, 3).map((service, index) => (
                <article
                  key={service.title}
                  className="service-card-motion group flex min-h-full flex-col overflow-hidden rounded-3xl border border-emerald-300/20 bg-[#081421] shadow-2xl shadow-black/10 transition hover:-translate-y-1 hover:border-emerald-300/30"
                  data-reveal
                  data-delay={index * 80}
                >
                  <div className="relative h-[220px] overflow-hidden border-b border-white/10 bg-[#0d1117] sm:h-[280px] lg:h-[220px]">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      quality={75}
                      loading="eager"
                      className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#11151b]/40 via-transparent to-transparent" />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-semibold tracking-tight text-white">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {service.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-emerald-300/15 bg-emerald-300/[0.05] px-2.5 py-1.5 text-[11px] text-emerald-100/75"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-8">
                      <div className="flex items-end justify-between gap-4 border-t border-white/10 pt-5">
                        <span className="text-xs text-slate-500">A partir de</span>
                        <strong className="text-2xl font-bold tracking-tight text-white">
                          {service.price}
                        </strong>
                      </div>

                      <div className="mt-5 grid grid-cols-2 gap-2">
                        <TrackedLink
                          href={buildServiceWhatsAppUrl(service.title)}
                          eventName="whatsapp_click"
                          ctaLocation={`service_${index + 1}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex min-h-11 items-center justify-center rounded-xl bg-emerald-500 px-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
                        >
                          WhatsApp
                        </TrackedLink>
                        <QuoteTrigger
                          projectType={service.title}
                          className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.035] px-3 text-sm font-semibold text-white transition hover:bg-white/[0.07]"
                        >
                          Orçamento
                        </QuoteTrigger>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-14 flex items-center gap-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Outros projetos que também entrego
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <div className="mt-6 grid gap-5 lg:grid-cols-3">
              {commercialServices.slice(3).map((service, index) => (
                <article
                  key={service.title}
                  className="service-card-motion group flex min-h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] transition hover:-translate-y-1 hover:border-amber-300/25 hover:bg-white/[0.04]"
                  data-reveal
                  data-delay={index * 80}
                >
                  <div className="relative h-[220px] overflow-hidden border-b border-white/10 bg-[#0d1117] sm:h-[280px] lg:h-[220px]">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      quality={75}
                      className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-semibold tracking-tight">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {service.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-white/10 bg-white/[0.035] px-2.5 py-1.5 text-[11px] text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-8">
                      <div className="flex items-end justify-between gap-4 border-t border-white/10 pt-5">
                        <span className="text-xs text-slate-500">A partir de</span>
                        <strong className="text-2xl font-bold tracking-tight text-white">
                          {service.price}
                        </strong>
                      </div>

                      <div className="mt-5 grid grid-cols-2 gap-2">
                        <TrackedLink
                          href={buildServiceWhatsAppUrl(service.title)}
                          eventName="whatsapp_click"
                          ctaLocation={`service_${index + 4}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex min-h-11 items-center justify-center rounded-xl bg-emerald-500 px-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
                        >
                          WhatsApp
                        </TrackedLink>
                        <QuoteTrigger
                          projectType={service.title}
                          className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.035] px-3 text-sm font-semibold text-white transition hover:bg-white/[0.07]"
                        >
                          Orçamento
                        </QuoteTrigger>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <SolutionSelector />

        <section id="projetos" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end" data-reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Projetos em destaque
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Trabalho real, não só promessa.
              </h2>
              <p className="mt-4 text-slate-400">
                Projetos reais e demonstrativos que mostram desenvolvimento
                moderno, sistemas web, SEO, organização de conteúdo e integração
                com inteligência artificial.
              </p>
            </div>
            <QuoteTrigger
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-emerald-100"
            >
              Precisa de algo parecido?
              <ArrowIcon />
            </QuoteTrigger>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="project-card-motion overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035]"
                data-reveal
                data-delay={(index % 2) * 90}
              >
                <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${project.accent}`}>
                  <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:28px_28px]" />

                  <div className="absolute inset-4 overflow-hidden rounded-2xl border border-white/10 bg-[#091625]">
                    {project.title === "TECÉRALE" ? (
                      <div className="absolute inset-0 overflow-hidden bg-[#061425]">
                        <div className="absolute -left-10 -top-12 h-44 w-44 rounded-full bg-emerald-500/25 blur-3xl" />
                        <div className="absolute -bottom-16 right-0 h-52 w-52 rounded-full bg-cyan-400/20 blur-3xl" />
                        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(56,189,248,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,.16)_1px,transparent_1px)] [background-size:32px_32px]" />

                        <div className="absolute inset-x-6 bottom-6 top-16 flex items-center justify-between gap-6">
                          <div className="max-w-[58%]">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-300">
                              Tecnologia AI-first
                            </p>
                            <p className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
                              TECÉRALE
                            </p>
                            <p className="mt-2 text-xs leading-5 text-slate-300">
                              Agentes de IA, automações e soluções digitais para negócios.
                            </p>
                          </div>

                          <div className="grid w-[38%] grid-cols-2 gap-2">
                            {["Agentes IA", "WhatsApp", "Automação", "Web"].map((item) => (
                              <div
                                key={item}
                                className="flex min-h-14 items-center justify-center rounded-xl border border-cyan-300/15 bg-white/[0.055] px-2 text-center text-[10px] font-semibold text-cyan-100 backdrop-blur"
                              >
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
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
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/85 via-transparent to-[#07111f]/10" />

                    <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-4">
                      <span className="rounded-full border border-white/10 bg-[#0b0d12]/75 px-3 py-1.5 text-[10px] font-semibold tracking-[0.14em] text-emerald-100 backdrop-blur">
                        {project.eyebrow}
                      </span>
                      <span className="rounded-full border border-white/10 bg-[#0b0d12]/75 px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] text-slate-200 backdrop-blur">
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
                    target={project.href.startsWith("http") ? "_blank" : undefined}
                    rel={project.href.startsWith("http") ? "noreferrer" : undefined}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-emerald-100"
                  >
                    {project.href.startsWith("http")
                      ? "Visitar site"
                      : project.type === "Projeto demonstrativo"
                        ? "Ver demonstração"
                        : "Ver projeto"}
                    <ExternalIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-emerald-300/20 bg-gradient-to-br from-blue-500/10 via-white/[0.035] to-cyan-400/5 p-7 sm:p-10">
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />
              <div className="relative max-w-4xl" data-reveal>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                  Agência / TECÉRALE
                </p>
                <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
                  Projetos técnicos que também viram soluções comerciais.
                </h2>
                <p className="mt-5 max-w-3xl leading-7 text-slate-300">
                  Wal Brasil é Fundador e Desenvolvedor da TECÉRALE,
                  agência de tecnologia AI-first focada em agentes de IA,
                  automações, desenvolvimento web e sistemas sob medida.
                </p>
                <p className="mt-3 max-w-3xl leading-7 text-slate-400">
                  O walbrasil.dev reúne o portfólio técnico. A TECÉRALE é onde
                  essas competências se transformam em soluções para empresas e
                  profissionais.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <TrackedLink
                    href={TECERALE_URL}
                    eventName="tecerale_click"
                    ctaLocation="agency_tecerale"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 font-semibold text-white transition hover:bg-emerald-400"
                  >
                    Conhecer a TECÉRALE
                    <ExternalIcon />
                  </TrackedLink>
                  <TrackedLink
                    href={TECERALE_WHATSAPP_URL}
                    eventName="whatsapp_click"
                    ctaLocation="agency_tecerale"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-400/25 bg-emerald-400/10 px-6 py-3.5 font-semibold text-emerald-200 transition hover:bg-emerald-400/15 hover:text-white"
                  >
                    Testar o agente no WhatsApp
                    <ExternalIcon />
                  </TrackedLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:px-8" data-reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Como eu trabalho
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Tecnologia tem que simplificar o negócio, não complicar.
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-slate-400">
                Cada projeto começa pela necessidade real do cliente. A partir
                dela, estruturo a solução com tecnologias modernas, priorizando
                Next.js, React, Supabase e integrações com inteligência artificial
                quando elas realmente agregam valor.
              </p>
              <p className="mt-4 max-w-xl leading-7 text-slate-400">
                O objetivo é entregar uma solução profissional, rápida,
                organizada e preparada para crescer sem criar complexidade
                técnica desnecessária.
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
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300">
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
          <div className="text-center" data-reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
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
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-emerald-300/20 bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-cyan-400/5 p-8 sm:p-12 lg:p-16">
            <div className="max-w-3xl" data-reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Vamos conversar
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                Tem um projeto em mente?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Fale diretamente comigo pelo WhatsApp ou por e-mail. Se o projeto
                envolver agentes de IA e automações comerciais, a TECÉRALE também
                faz parte do ecossistema.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <QuoteTrigger
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 font-semibold text-white transition hover:bg-emerald-400"
                >
                  Solicitar orçamento
                  <ArrowIcon />
                </QuoteTrigger>

                <TrackedLink
                  href={WAL_DIRECT_WHATSAPP_URL}
                  eventName="whatsapp_click"
                  ctaLocation="contact_wal"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 font-semibold text-white transition hover:bg-emerald-400"
                >
                  Falar diretamente com Wal
                  <ExternalIcon />
                </TrackedLink>

                <a
                  href={`mailto:${WAL_EMAIL}?subject=${encodeURIComponent("Projeto pelo walbrasil.dev")}`}
                  className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 font-semibold text-[#07111f] transition hover:bg-blue-50"
                >
                  Enviar e-mail
                </a>

                <TrackedLink
                  href={TECERALE_URL}
                  eventName="tecerale_click"
                  ctaLocation="contact_tecerale"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold transition hover:bg-white/10"
                >
                  Conhecer a TECÉRALE
                  <ExternalIcon />
                </TrackedLink>
              </div>

              <div className="mt-6 flex flex-col gap-2 text-sm text-slate-400 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
                <TrackedLink
                  href={WAL_DIRECT_WHATSAPP_URL}
                  eventName="whatsapp_click"
                  ctaLocation="direct_wal"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  WhatsApp direto: (17) 99680-2980
                </TrackedLink>
                <span className="hidden text-slate-600 sm:inline">•</span>
                <a
                  href={`mailto:${WAL_EMAIL}`}
                  className="transition hover:text-white"
                >
                  {WAL_EMAIL}
                </a>
                <span className="hidden text-slate-600 sm:inline">•</span>
                <span>Agente comercial TECÉRALE: (17) 99653-5988</span>
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
            <p>Next.js · Sistemas Web · SEO · IA</p>
          </div>
        </footer>
      </div>
      </main>
    </QuoteProvider>
  );
}
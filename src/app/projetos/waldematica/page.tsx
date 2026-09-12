import Image from "next/image";
import type { Metadata } from "next";

const title = "Waldemática | Site em Next.js, Supabase e SEO";
const description =
  "Case do site comercial Waldemática em Next.js, com páginas de cursos, captação de leads, checkouts, responsividade, SEO e integrações.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "https://walbrasil.dev/projetos/waldematica",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://walbrasil.dev/projetos/waldematica",
    siteName: "Wal Brasil",
    title,
    description,
    images: [
      {
        url: "/projetos/waldematica/home-waldematica.png",
        alt: "Página inicial real do site Waldemática",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/projetos/waldematica/home-waldematica.png"],
  },
};

const serviceBlocks = [
  {
    title: "Arquitetura comercial",
    description:
      "Home, páginas de cursos, ofertas e CTAs organizados para conduzir o visitante com clareza até a decisão.",
    icon: "01",
  },
  {
    title: "Captação de leads",
    description:
      "Formulários e rotas server-side conectados ao Supabase para registrar interesse sem expor credenciais no navegador.",
    icon: "02",
  },
  {
    title: "Checkouts integrados",
    description:
      "Páginas comerciais conectadas aos links oficiais da Hotmart, mantendo cada produto com sua oferta correta.",
    icon: "03",
  },
  {
    title: "SEO e performance",
    description:
      "Estrutura técnica, metadata, responsividade e deploy contínuo em Vercel para manter o site rápido e indexável.",
    icon: "04",
  },
];

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "SEO",
  "Vercel",
  "Responsividade",
];

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M19 12H5" />
      <path d="m11 18-6-6 6-6" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M15 3h6v6" />
      <path d="m10 14 11-11" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

export default function WaldematicaCasePage() {
  return (
    <main className="min-h-screen bg-[#090c11] text-white antialiased">
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute left-[-8%] top-[-6%] h-[500px] w-[500px] rounded-full bg-blue-500/8 blur-[140px]" />
        <div className="absolute right-[-10%] top-[18%] h-[420px] w-[420px] rounded-full bg-cyan-300/5 blur-[140px]" />
      </div>

      <div className="relative z-10">
        <header className="border-b border-white/10 bg-[#090c11]/88 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
            <a href="/" className="flex items-center gap-3">
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full shadow-lg shadow-blue-500/20">
                <Image
                  src="/branding/wal-brasil-logo.png"
                  alt="Logo Wal Brasil"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-semibold leading-none">Wal Brasil</p>
                <p className="mt-1 text-xs text-slate-400">Web Developer</p>
              </div>
            </a>

            <a
              href="/#projetos"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white"
            >
              <ArrowLeftIcon />
              Voltar aos projetos
            </a>
          </div>
        </header>

        <section className="mx-auto max-w-7xl px-6 pb-16 pt-20 lg:px-8 lg:pt-28">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <div className="mb-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">
                  Projeto real
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                  Next.js + TypeScript
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                  Site comercial
                </span>
              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
                Case · Waldemática
              </p>

              <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Um site comercial que conecta{" "}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-amber-200 bg-clip-text text-transparent">
                  marca, cursos, leads e conversão
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                A Waldemática foi reconstruída em Next.js para concentrar páginas
                comerciais, cursos, ofertas, captação de leads e integrações em
                uma base moderna, rápida e versionada. O projeto evolui pelo fluxo
                GitHub → Vercel e se conecta ao Supabase e aos checkouts oficiais.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://waldematica.com.br"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 font-semibold shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
                >
                  Visitar site
                  <ExternalIcon />
                </a>
                <a
                  href="/#contato"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold transition hover:bg-white/10"
                >
                  Quero um projeto semelhante
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-5 rounded-[2.4rem] bg-gradient-to-br from-blue-500/8 via-transparent to-cyan-300/5 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#11161d] p-4 shadow-2xl shadow-black/30">
                <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-4">
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                  <div className="ml-3 flex-1 rounded-lg bg-white/5 px-3 py-2 text-center text-xs text-slate-500">
                    waldematica.com.br
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                  <img
                    src="/projetos/waldematica/home-waldematica.png"
                    alt="Página inicial pública da Waldemática"
                    width={2254}
                    height={1269}
                    className="block h-auto w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0d1117]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                  Estratégia
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Uma base única para vendas, conteúdo comercial e integrações.
                </h2>
              </div>

              <p className="max-w-2xl text-base leading-7 text-slate-400">
                A estrutura separa claramente as páginas de produto, mantém os
                checkouts oficiais, centraliza captura de leads e permite evoluir
                o site sem depender de plugins ou de uma instalação WordPress.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-12 grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Páginas reais do projeto
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Diferentes objetivos dentro do mesmo ecossistema.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-7 text-slate-400">
              A Home apresenta a marca e os produtos, enquanto páginas específicas
              trabalham dúvidas, cursos gratuitos, ofertas e conversão.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Home institucional",
                label: "Marca + posicionamento",
                image: "/projetos/waldematica/home-waldematica.png",
                alt: "Página inicial do site Waldemática",
                description:
                  "Apresentação da marca, cursos, proposta de valor e navegação principal em uma página comercial completa.",
              },
              {
                title: "Perguntas frequentes",
                label: "Informação + decisão",
                image: "/projetos/waldematica/faq-waldematica.jpg",
                alt: "Seção de perguntas frequentes e formas de pagamento do site Waldemática",
                description:
                  "FAQ organizado para responder objeções, explicar os cursos e facilitar a decisão do visitante.",
              },
              {
                title: "Cursos gratuitos",
                label: "Lead + relacionamento",
                image: "/projetos/waldematica/cursos-gratuitos-waldematica.jpg",
                alt: "Página de cursos gratuitos da Waldemática",
                description:
                  "Página de entrada com formulário de lead, acesso gratuito a conteúdos e conexão com o ecossistema comercial.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-3xl border border-white/10 bg-[#11161d]"
              >
                <div className="border-b border-white/10 px-5 py-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
                    {item.label}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                </div>

                <a
                  href="https://waldematica.com.br"
                  target="_blank"
                  rel="noreferrer"
                  className="group block bg-[#0d1218] p-3"
                >
                  <div
                    className="overflow-hidden rounded-2xl border border-white/10 bg-black/20"
                    style={{ aspectRatio: "2254 / 1269" }}
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      width={2254}
                      height={1269}
                      className="block h-full w-full object-contain transition duration-500 group-hover:scale-[1.015]"
                    />
                  </div>
                </a>

                <div className="px-5 pb-5 pt-2">
                  <p className="text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                  <a
                    href="https://waldematica.com.br"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-blue-200"
                  >
                    Ver site ao vivo
                    <ExternalIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0d1117]">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1fr] lg:px-8">
            <div className="rounded-[2rem] border border-blue-400/20 bg-[#121925] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Next.js como base comercial
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight">
                Versionamento, performance e integrações no mesmo projeto.
              </h2>
              <p className="mt-5 leading-7 text-slate-300">
                A migração para Next.js deixou o site alinhado ao restante da
                infraestrutura moderna da Waldemática. Conteúdo comercial,
                formulários, SEO e integrações agora evoluem no mesmo repositório,
                com histórico no Git e deploy automatizado.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  ["Arquitetura modular", "Páginas e componentes organizados para evoluir sem duplicação desnecessária."],
                  ["Deploy contínuo", "GitHub e Vercel reduzem atrito entre alteração, revisão e publicação."],
                  ["Integrações", "Supabase, Hotmart e agente comercial conectados ao fluxo real do site."],
                  ["SEO técnico", "Metadata, URLs e estrutura controladas diretamente pela aplicação."],
                ].map(([itemTitle, text]) => (
                  <div
                    key={itemTitle}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <div className="mb-3 h-1.5 w-10 rounded-full bg-cyan-300" />
                    <p className="font-semibold">{itemTitle}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#11161d] p-5">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                    Projeto publicado
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">
                    Site acessível publicamente
                  </h3>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                  Next.js
                </span>
              </div>

              <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-[#0d1218] p-4">
                <img
                  src="/projetos/waldematica/home-waldematica.png"
                  alt="Página inicial pública da Waldemática"
                  width={2254}
                  height={1269}
                  className="block h-auto w-full rounded-xl border border-white/10 object-contain"
                />
              </div>

              <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xl text-sm leading-6 text-slate-400">
                  O visitante pode conferir o projeto em produção e navegar pelas
                  páginas comerciais completas no domínio oficial.
                </p>

                <a
                  href="https://waldematica.com.br"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-blue-200"
                >
                  Abrir Waldemática
                  <ExternalIcon />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                O que foi trabalhado
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Mais do que montar páginas: um ecossistema comercial em Next.js.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {serviceBlocks.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-[#11161d] p-5"
                >
                  <span className="text-xs font-semibold tracking-[0.18em] text-slate-500">
                    {item.icon}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0d1117]">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Tecnologias
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Ferramentas usadas no projeto
              </h2>
              <p className="mt-5 leading-7 text-slate-400">
                A stack atual prioriza performance, versionamento, segurança das
                integrações e evolução contínua do site.
              </p>
            </div>

            <div className="flex flex-wrap content-start gap-3">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-xl border border-white/10 bg-[#11161d] px-4 py-3 text-sm text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Resultado
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Uma presença comercial moderna, integrada e pronta para evoluir.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-slate-400">
            <p>
              O site centraliza marca, cursos, ofertas, leads, checkouts e pontos
              de contato em uma aplicação moderna e responsiva.
            </p>
            <p>
              Com Next.js, GitHub, Vercel e Supabase, novas páginas e integrações
              podem ser adicionadas com versionamento, revisão e deploy contínuo.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-blue-400/20 bg-gradient-to-br from-[#111927] via-[#10161e] to-[#07111f] p-8 sm:p-12 lg:p-16">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Desenvolvimento web
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                Precisa de um site comercial com estrutura para crescer?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Posso estruturar a solução com a tecnologia adequada ao projeto,
                priorizando clareza, performance, integrações úteis e manutenção
                sem complexidade desnecessária.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/#contato"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-[#07111f] transition hover:bg-blue-50"
                >
                  Solicitar orçamento
                  <ArrowIcon />
                </a>
                <a
                  href="/#projetos"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold transition hover:bg-white/10"
                >
                  Ver outros projetos
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <div className="flex items-center gap-3">
              <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full">
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
            <a href="/" className="transition hover:text-slate-300">
              walbrasil.dev
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
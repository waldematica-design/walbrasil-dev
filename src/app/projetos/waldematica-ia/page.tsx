import Image from "next/image";
import type { Metadata } from "next";

const title = "Waldemática IA | Plataforma Web com Next.js, Supabase e IA";
const description =
  "Case da Waldemática IA, plataforma educacional com Next.js, Supabase, trilhas adaptativas, avaliações, gestão administrativa e Tutor IA.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "https://walbrasil.dev/projetos/waldematica-ia",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://walbrasil.dev/projetos/waldematica-ia",
    siteName: "Wal Brasil",
    title,
    description,
    images: [
      {
        url: "/projetos/waldematica-ia/dashboard-aluno.jpg",
        alt: "Dashboard real da plataforma Waldemática IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/projetos/waldematica-ia/dashboard-aluno.jpg"],
  },
};

const productLayers = [
  {
    title: "Interface e experiência",
    description:
      "Aplicação em Next.js com React, TypeScript, Tailwind CSS e Shadcn UI para navegação, telas do aluno, tutor e administração.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    accent: "from-blue-500/15 to-cyan-400/10",
  },
  {
    title: "Dados e autenticação",
    description:
      "Usuários, perfis, permissões, banco, segurança de acesso, convites, redefinição de senha, armazenamento e funções centralizadas no ecossistema Supabase/PostgreSQL.",
    tags: ["Supabase", "PostgreSQL", "Supabase Auth", "Supabase Storage", "RLS"],
    accent: "from-emerald-500/15 to-cyan-400/10",
  },
  {
    title: "IA e telemetria",
    description:
      "Tutor IA com OpenAI API, modelo GPT-5.6 Luna, telemetria própria, registro de uso, imagens, ferramentas e custo por aluno.",
    tags: ["OpenAI API", "GPT-5.6 Luna", "Telemetria", "Cotas semanais"],
    accent: "from-violet-500/15 to-blue-500/10",
  },
  {
    title: "Operação e publicação",
    description:
      "Deploy, versionamento, publicação, hospedagem e fluxo técnico organizados com GitHub, Vercel, Node.js, VS Code, PowerShell e serviços de e-mail.",
    tags: ["Vercel", "GitHub", "Node.js", "PowerShell", "Zoho Mail"],
    accent: "from-fuchsia-500/10 to-blue-500/10",
  },
];

const coreSystems = [
  {
    title: "Trilhas adaptativas",
    description:
      "Organização da jornada por módulos, pré-requisitos, checkpoints e acompanhamento real do avanço do aluno.",
  },
  {
    title: "Avaliações de domínio",
    description:
      "Avaliações com lógica pedagógica própria, revisão direcionada e continuidade do estudo com base no desempenho.",
  },
  {
    title: "Tutor IA contextual",
    description:
      "IA conectada à etapa atual, contexto do curso, preferências do aluno e fluxo natural de atendimento.",
  },
  {
    title: "Admin e operação",
    description:
      "Painel administrativo para gestão de alunos, avisos, convites, bloqueio/liberação de acesso e acompanhamento da plataforma.",
  },
  {
    title: "Telemetria e cotas",
    description:
      "Controle de custo real da IA, uso por aluno, consumo semanal e visibilidade operacional do produto.",
  },
  {
    title: "Integrações e ecossistema",
    description:
      "Infra pronta para Hotmart, webhooks futuros, e-mails transacionais, storage, segurança e evolução contínua.",
  },
];

const realScreens = [
  {
    title: "Landing da plataforma",
    description:
      "A entrada do produto apresenta a proposta, o sistema pedagógico adaptativo e o posicionamento da plataforma.",
    file: "/projetos/waldematica-ia/landing.jpg",
    alt: "Tela inicial da Waldemática IA",
    label: "Entrada do produto",
    width: 2254,
    height: 1269,
  },
  {
    title: "Dashboard do aluno",
    description:
      "Mostra trilha, módulo atual, progresso, últimas avaliações e o próximo passo da jornada do estudante.",
    file: "/projetos/waldematica-ia/dashboard-aluno.jpg",
    alt: "Dashboard do aluno na Waldemática IA",
    label: "Jornada do aluno",
    width: 2254,
    height: 1269,
  },
  {
    title: "Tutor IA",
    description:
      "Atendimento contextual com chat, etapa atual, preferências personalizadas e apoio contínuo ao estudo.",
    file: "/projetos/waldematica-ia/tutor-ia.jpg",
    alt: "Tela do Tutor IA na Waldemática IA",
    label: "IA contextual",
    width: 2254,
    height: 1269,
  },
  {
    title: "Administração",
    description:
      "Painel para gestão administrativa, avisos, editais, alunos e ações operacionais da plataforma.",
    file: "/projetos/waldematica-ia/admin.jpg",
    alt: "Painel administrativo da Waldemática IA",
    label: "Gestão da plataforma",
    width: 2240,
    height: 1250,
  },
];

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Shadcn UI",
  "Supabase",
  "PostgreSQL",
  "Supabase Auth",
  "Supabase Storage",
  "OpenAI API",
  "GPT-5.6 Luna",
  "Vercel",
  "GitHub",
  "Node.js",
  "VS Code",
  "PowerShell",
  "Zoho Mail",
  "RLS",
  "Telemetria própria",
  "Cota semanal de IA",
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

export default function WaldematicaIACasePage() {
  return (
    <main className="min-h-screen bg-[#070b11] text-white antialiased">
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute left-[-10%] top-[-6%] h-[520px] w-[520px] rounded-full bg-blue-500/7 blur-[150px]" />
        <div className="absolute right-[-12%] top-[16%] h-[460px] w-[460px] rounded-full bg-cyan-400/5 blur-[150px]" />
        <div className="absolute left-[35%] top-[48%] h-[420px] w-[420px] rounded-full bg-violet-500/5 blur-[170px]" />
      </div>

      <div className="relative z-10">
        <header className="border-b border-white/10 bg-[#070b11]/88 backdrop-blur-xl">
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
          <div className="grid gap-14 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
            <div>
              <div className="mb-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
                  Projeto principal do portfólio
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                  SaaS + LMS + IA
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                  Aplicação educacional completa
                </span>
              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
                Case · Waldemática IA
              </p>

              <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Uma plataforma educacional com{" "}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-300 bg-clip-text text-transparent">
                  trilhas, avaliações, IA e lógica pedagógica própria
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                A Waldemática IA deixou de ser apenas um site e se tornou uma
                aplicação real: produto digital, área do aluno, autenticação,
                banco de dados, Tutor IA, telemetria, cotas de uso e sistemas
                pedagógicos construídos sobre uma base técnica robusta.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://ia.waldematica.com.br"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 font-semibold shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
                >
                  Visitar projeto
                  <ExternalIcon />
                </a>
                <a
                  href="/#contato"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold transition hover:bg-white/10"
                >
                  Quero algo semelhante
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-4">
                {[
                  ["SaaS", "Produto digital em evolução"],
                  ["LMS", "Jornada pedagógica estruturada"],
                  ["IA", "Tutor contextual com telemetria"],
                  ["Ops", "Custos, cotas e administração"],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <p className="font-semibold">{title}</p>
                    <p className="mt-2 text-xs leading-5 text-slate-400">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-5 rounded-[2.4rem] bg-gradient-to-br from-blue-500/8 via-cyan-400/5 to-violet-400/5 blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-[#11161d] p-4 shadow-2xl shadow-black/30">
                <div className="rounded-[1.5rem] border border-white/10 bg-[#0d1218] p-4">
                  <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-4">
                    <span className="h-3 w-3 rounded-full bg-white/20" />
                    <span className="h-3 w-3 rounded-full bg-white/20" />
                    <span className="h-3 w-3 rounded-full bg-white/20" />
                    <div className="ml-3 flex-1 rounded-lg bg-white/5 px-3 py-2 text-center text-xs text-slate-500">
                      arquitetura da Waldemática IA
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-[1fr_.88fr]">
                    <div className="rounded-2xl border border-cyan-400/15 bg-[#111724] p-5">
                      <div className="mx-auto flex h-52 w-full items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-transparent to-violet-500/10">
                        <div className="relative h-28 w-28 rounded-full border border-cyan-300/25">
                          <div className="absolute inset-1 rounded-full border border-cyan-300/20" />
                          <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.8)]" />
                          <div className="absolute left-4 top-1/2 h-px w-[calc(100%-2rem)] -translate-y-1/2 bg-cyan-300/20" />
                          <div className="absolute left-1/2 top-4 h-[calc(100%-2rem)] w-px -translate-x-1/2 bg-cyan-300/20" />
                          {[
                            "left-1 top-1/2 -translate-y-1/2",
                            "right-1 top-1/2 -translate-y-1/2",
                            "top-1 left-1/2 -translate-x-1/2",
                            "bottom-1 left-1/2 -translate-x-1/2",
                            "left-4 top-4",
                            "right-4 top-4",
                            "left-4 bottom-4",
                            "right-4 bottom-4",
                          ].map((pos, idx) => (
                            <span
                              key={idx}
                              className={`absolute ${pos} h-2.5 w-2.5 rounded-full bg-white/85`}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                          Mente do produto
                        </p>
                        <p className="mt-3 text-sm leading-6 text-slate-400">
                          IA, dados, autenticação, operação e lógica pedagógica
                          conectados em uma mesma plataforma.
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-4">
                      {[
                        ["Aluno", "Trilha, avaliações, materiais e progresso"],
                        ["Tutor IA", "Contexto do curso, telemetria e cotas"],
                        ["Admin", "Gestão, convites, avisos e acesso"],
                        ["Infra", "Deploy, banco, e-mail e integrações"],
                      ].map(([title, text], idx) => (
                        <div
                          key={title}
                          className={`rounded-2xl border p-4 ${
                            idx === 0
                              ? "border-blue-400/20 bg-blue-500/[0.06]"
                              : idx === 1
                              ? "border-cyan-400/20 bg-cyan-500/[0.05]"
                              : idx === 2
                              ? "border-emerald-400/20 bg-emerald-500/[0.05]"
                              : "border-violet-400/20 bg-violet-500/[0.05]"
                          }`}
                        >
                          <p className="font-semibold">{title}</p>
                          <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0d1117]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  O que torna este projeto diferente
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  A complexidade não está apenas nas tecnologias, mas no sistema construído sobre elas.
                </h2>
              </div>

              <p className="max-w-2xl text-base leading-7 text-slate-400">
                Não é simplesmente “um site em Next.js”. A plataforma reúne
                SaaS, LMS, IA, banco de dados, autenticação, regras de acesso,
                lógica pedagógica, telemetria e operação contínua em um único
                produto digital.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {[
                ["Produto educacional", "Trilhas adaptativas, pré-requisitos, checkpoints, avaliações de domínio e revisão direcionada organizam a jornada do aluno."],
                ["Plataforma SaaS", "Autenticação, perfis, permissões, administração, gestão de acesso e fluxos operacionais sustentam o produto como aplicação real."],
                ["IA integrada", "Tutor IA contextual, telemetria própria, controle de custo e cotas semanais tornam o uso da IA operacionalmente viável."],
                ["Infra e operação", "Deploy, versionamento, e-mails, banco, segurança, monitoramento e manutenção contínua sustentam a evolução da plataforma."],
              ].map(([title, text], idx) => (
                <article
                  key={title}
                  className="rounded-3xl border border-white/10 bg-[#11161d] p-6"
                >
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-300">
                    {idx === 0 ? "Edu" : idx === 1 ? "SaaS" : idx === 2 ? "IA" : "Ops"}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Arquitetura da plataforma
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Uma base técnica organizada por camadas, não uma lista solta de ferramentas.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {productLayers.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-3xl border border-white/10 bg-[#11161d]"
              >
                <div className={`h-1.5 bg-gradient-to-r ${item.accent}`} />
                <div className="p-6">
                  <p className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-300 inline-flex">
                    Camada
                  </p>
                  <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0d1117]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Telas reais da plataforma
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Prova concreta de um produto em funcionamento.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-400">
                Em vez de depender apenas de diagramas e mockups, a página agora
                mostra partes reais da aplicação: entrada da plataforma, jornada
                do aluno, Tutor IA e área administrativa.
              </p>
            </div>

            <div className="grid gap-8">
              {realScreens.map((screen) => (
                <article
                  key={screen.title}
                  className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#11161d]"
                >
                  <div className="flex items-center justify-between gap-4 border-b border-white/10 px-6 py-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                        {screen.label}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold">{screen.title}</h3>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                      Screenshot real
                    </span>
                  </div>

                  <div className="bg-[#0d1218] p-4">
                    <div
                      className="mx-auto w-full overflow-hidden rounded-2xl border border-white/10 bg-black/20"
                      style={{ aspectRatio: `${screen.width} / ${screen.height}` }}
                    >
                      <img
                        src={screen.file}
                        alt={screen.alt}
                        width={screen.width}
                        height={screen.height}
                        className="block h-full w-full object-contain"
                      />
                    </div>
                  </div>

                  <div className="px-6 pb-6">
                    <p className="text-sm leading-6 text-slate-400">
                      {screen.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Sistemas próprios
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                O valor não está só na stack, mas na lógica construída em cima dela.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {coreSystems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-[#11161d] p-5"
                >
                  <div className="mb-4 h-1.5 w-12 rounded-full bg-cyan-300" />
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
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
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Tecnologias
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Ferramentas usadas no projeto
              </h2>
              <p className="mt-5 leading-7 text-slate-400">
                A base principal combina front-end moderno, banco de dados,
                autenticação, IA, deploy, telemetria e operação contínua.
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
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Resultado
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Um ambiente único para organizar experiência de estudo, IA e operação.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-slate-400">
            <p>
              O projeto nasceu da necessidade de reunir acompanhamento
              pedagógico, acesso aos materiais, avaliações e assistência por
              inteligência artificial dentro de uma única experiência.
            </p>
            <p>
              O resultado é uma aplicação web modular, conectada ao progresso do
              aluno, com área do aluno, Tutor IA, administração, telemetria e
              base técnica preparada para continuar evoluindo.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-[#111927] via-[#10161e] to-[#11111f] p-8 sm:p-12 lg:p-16">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Produto digital + IA
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                Quer desenvolver um produto web mais robusto do que um site institucional?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Posso ajudar a estruturar aplicações com autenticação, banco de
                dados, IA, painel administrativo, fluxos próprios e evolução
                contínua, escolhendo a complexidade certa para o projeto.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/#contato"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-[#07111f] transition hover:bg-cyan-50"
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

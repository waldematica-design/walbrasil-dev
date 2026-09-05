import Image from "next/image";
import type { Metadata } from "next";

const title = "Waldemática | Site WordPress, Elementor e SEO";
const description =
  "Case do site Waldemática em WordPress e Elementor, com páginas institucionais, landing pages, gestão de conteúdo, responsividade e SEO.";

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
      "Páginas institucionais, cursos, ofertas e pontos de contato organizados para orientar o visitante com clareza.",
    icon: "01",
  },
  {
    title: "Landing pages",
    description:
      "Páginas de campanha pensadas para apresentar ofertas específicas sem depender da estrutura inteira do site.",
    icon: "02",
  },
  {
    title: "Autonomia no WordPress",
    description:
      "Estrutura editável para alterar textos, imagens e informações sem recorrer a programação em tarefas comuns.",
    icon: "03",
  },
  {
    title: "SEO e conteúdo",
    description:
      "Organização on-page, navegação e integração com o blog para sustentar presença orgânica e descoberta de conteúdo.",
    icon: "04",
  },
];

const projectPages = [
  {
    title: "Home institucional",
    label: "Marca + posicionamento",
    tone: "from-blue-500/20 to-cyan-400/10",
  },
  {
    title: "Landing page de curso",
    label: "Oferta + conversão",
    tone: "from-violet-500/20 to-blue-400/10",
  },
  {
    title: "Cursos gratuitos",
    label: "Conteúdo + relacionamento",
    tone: "from-emerald-500/20 to-cyan-400/10",
  },
];

const stack = [
  "WordPress",
  "Elementor",
  "SEO",
  "HTML",
  "CSS",
  "Design Responsivo",
  "Hospedagem",
  "Gestão de Conteúdo",
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
        <div className="absolute right-[-10%] top-[18%] h-[420px] w-[420px] rounded-full bg-amber-300/5 blur-[140px]" />
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
                  WordPress + Elementor
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                  Site institucional
                </span>
              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
                Case · Waldemática
              </p>

              <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Um site comercial que conecta{" "}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-amber-200 bg-clip-text text-transparent">
                  marca, cursos, conteúdo e conversão
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                A Waldemática precisava de uma presença digital que funcionasse
                como vitrine, base editorial e ponto de entrada para cursos e
                ofertas. O projeto foi estruturado em WordPress para crescer sem
                transformar cada atualização em um novo trabalho técnico.
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
                  Quero um site semelhante
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-5 rounded-[2.4rem] bg-gradient-to-br from-blue-500/8 via-transparent to-amber-300/5 blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-[#11161d] p-4 shadow-2xl shadow-black/30">
                <div className="rounded-[1.5rem] border border-white/10 bg-[#0d1218] p-4">
                  <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-4">
                    <span className="h-3 w-3 rounded-full bg-white/20" />
                    <span className="h-3 w-3 rounded-full bg-white/20" />
                    <span className="h-3 w-3 rounded-full bg-white/20" />
                    <div className="ml-3 flex-1 rounded-lg bg-white/5 px-3 py-2 text-center text-xs text-slate-500">
                      waldematica.com.br
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-[1.2fr_.8fr]">
                    <div className="rounded-2xl bg-[#151b24] p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
                        Home institucional
                      </p>
                      <div className="mt-5 h-3 w-4/5 rounded-full bg-white/20" />
                      <div className="mt-3 h-3 w-3/5 rounded-full bg-white/12" />
                      <div className="mt-7 space-y-2">
                        <div className="h-2 w-full rounded-full bg-white/10" />
                        <div className="h-2 w-10/12 rounded-full bg-white/10" />
                        <div className="h-2 w-8/12 rounded-full bg-white/10" />
                      </div>
                      <div className="mt-7 flex gap-3">
                        <span className="h-9 w-28 rounded-xl bg-blue-500/80" />
                        <span className="h-9 w-24 rounded-xl border border-white/10 bg-white/5" />
                      </div>
                    </div>

                    <div className="grid gap-4">
                      <div className="rounded-2xl border border-white/10 bg-[#151b24] p-4">
                        <div className="h-2 w-12 rounded-full bg-cyan-300" />
                        <div className="mt-4 h-2 w-3/4 rounded-full bg-white/15" />
                        <div className="mt-2 h-2 w-full rounded-full bg-white/10" />
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-[#151b24] p-4">
                        <div className="h-2 w-12 rounded-full bg-amber-200/80" />
                        <div className="mt-4 h-2 w-2/3 rounded-full bg-white/15" />
                        <div className="mt-2 h-2 w-full rounded-full bg-white/10" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {["Cursos", "Blog", "Contato"].map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center text-xs text-slate-400"
                      >
                        {item}
                      </div>
                    ))}
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
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                  Estratégia
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Um site único para várias funções do negócio.
                </h2>
              </div>

              <p className="max-w-2xl text-base leading-7 text-slate-400">
                A estrutura reúne apresentação da marca, páginas de cursos,
                landing pages, blog e áreas de contato. Em vez de criar peças
                isoladas, o projeto foi organizado como um ecossistema comercial
                e editorial que pode continuar crescendo.
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
              Como o site é público, estes recortes funcionam como uma visão
              rápida do trabalho. O visitante também pode abrir a Waldemática e
              navegar pelas páginas completas ao vivo.
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
                image: "/projetos/waldematica/faq-waldematica.png",
                alt: "Seção de perguntas frequentes e formas de pagamento do site Waldemática",
                description:
                  "FAQ organizado para responder objeções, explicar os cursos e facilitar a decisão do visitante.",
              },
              {
                title: "Cursos gratuitos",
                label: "Conteúdo + conversão",
                image: "/projetos/waldematica/cursos-gratuitos-waldematica.png",
                alt: "Página de cursos gratuitos da Waldemática",
                description:
                  "Página de entrada para experimentação da metodologia, com conteúdo gratuito e conexão com a oferta principal.",
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
                WordPress como escolha estratégica
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight">
                O cliente não deveria precisar de programador para tudo.
              </h2>
              <p className="mt-5 leading-7 text-slate-300">
                Textos, imagens, informações de cursos e páginas podem ser
                atualizados diretamente no painel. Isso reduz custo, evita
                dependência técnica e deixa a evolução do site muito mais prática.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  ["Editar conteúdo", "Alterar textos, imagens e informações no painel."],
                  ["Criar novas páginas", "Reaproveitar estruturas e seções já existentes."],
                  ["Atualizar ofertas", "Modificar cursos e chamadas sem mexer em código."],
                  ["Manter autonomia", "Resolver tarefas comuns sem depender de desenvolvimento."],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <div className="mb-3 h-1.5 w-10 rounded-full bg-cyan-300" />
                    <p className="font-semibold">{title}</p>
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
                  WordPress
                </span>
              </div>

              <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-[#0d1218] p-4">
                <div
                  className="overflow-hidden rounded-xl border border-white/10"
                  style={{ aspectRatio: "2254 / 1269" }}
                >
                  <img
                    src="/projetos/waldematica/home-waldematica.png"
                    alt="Página inicial pública da Waldemática"
                    width={2254}
                    height={1269}
                    className="block h-full w-full object-contain"
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xl text-sm leading-6 text-slate-400">
                  O visitante pode conferir o projeto completo em produção,
                  navegar pelas páginas e avaliar diretamente a experiência do site.
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
                Muito além de montar páginas no Elementor.
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
                A stack prioriza edição prática, presença orgânica,
                responsividade e evolução contínua do site.
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
              Uma presença digital que centraliza o negócio sem engessar a manutenção.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-slate-400">
            <p>
              O site passou a concentrar marca, cursos, conteúdo, landing pages e
              pontos de contato em um único ecossistema, mantendo consistência
              visual e uma estrutura simples de evoluir.
            </p>
            <p>
              O WordPress permite que o projeto continue recebendo novas páginas,
              campanhas e conteúdos sem recomeçar do zero nem exigir programação
              para cada pequena alteração.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-blue-400/20 bg-gradient-to-br from-[#111927] via-[#10161e] to-[#17130d] p-8 sm:p-12 lg:p-16">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Site profissional
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                Precisa de um site profissional que continue fácil de administrar?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Posso estruturar o projeto em WordPress, Elementor ou
                desenvolvimento sob medida, escolhendo a solução adequada para
                o negócio e evitando complexidade desnecessária.
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

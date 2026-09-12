import Image from "next/image";
import type { Metadata } from "next";

const title = "Blog Waldemática | Next.js, MDX e SEO";
const description =
  "Case editorial do Blog Waldemática em Next.js e MDX, com SEO técnico, conteúdo versionado, performance, comentários e publicação contínua.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "https://walbrasil.dev/projetos/blog-wordpress-seo",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://walbrasil.dev/projetos/blog-wordpress-seo",
    siteName: "Wal Brasil",
    title,
    description,
    images: [
      {
        url: "/projetos/blog/estatistica-no-enem.jpg",
        alt: "Imagem real de artigo do Blog Waldemática",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/projetos/blog/estatistica-no-enem.jpg"],
  },
};

const editorialPillars = [
  {
    title: "Conteúdo em MDX",
    description:
      "Artigos versionados em arquivos MDX, com estrutura editorial consistente e liberdade para evoluir o conteúdo sem depender de um CMS tradicional.",
    accent: "from-amber-300/20 to-orange-400/10",
  },
  {
    title: "SEO técnico",
    description:
      "Canonical, metadata, schema, sitemap, redirects e preservação de URLs já indexadas fazem parte da arquitetura do projeto.",
    accent: "from-emerald-400/20 to-cyan-400/10",
  },
  {
    title: "Experiência de leitura",
    description:
      "Layout responsivo, páginas de artigos e categorias organizadas para facilitar leitura, descoberta e navegação em qualquer tela.",
    accent: "from-blue-400/20 to-indigo-400/10",
  },
  {
    title: "Publicação versionada",
    description:
      "GitHub e Vercel conectam criação, revisão e publicação em um fluxo rastreável, com histórico claro das alterações editoriais.",
    accent: "from-violet-400/20 to-fuchsia-400/10",
  },
];

const articleMockups = [
  {
    title: "Conteúdo para vestibulares",
    meta: "SEO + intenção de busca",
    accent: "bg-amber-300/70",
  },
  {
    title: "Artigos de Matemática",
    meta: "MDX + leitura",
    accent: "bg-emerald-300/70",
  },
  {
    title: "Guias e materiais",
    meta: "Clusters + navegação",
    accent: "bg-blue-300/70",
  },
];

const seoFlow = [
  "Pauta e intenção",
  "Estrutura do artigo",
  "MDX + metadata",
  "Links internos",
  "Imagens e ALT",
  "Revisão",
  "GitHub → Vercel",
];

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "MDX",
  "Supabase",
  "SEO",
  "Vercel",
];

function ArrowLeftIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M19 12H5" />
      <path d="m11 18-6-6 6-6" />
    </svg>
  );
}

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

export default function BlogWordpressSeoCasePage() {
  return (
    <main className="min-h-screen bg-[#0a0b0d] text-white antialiased">
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute left-[-10%] top-[-8%] h-[520px] w-[520px] rounded-full bg-amber-300/6 blur-[150px]" />
        <div className="absolute right-[-12%] top-[20%] h-[440px] w-[440px] rounded-full bg-emerald-400/5 blur-[150px]" />
        <div className="absolute left-[35%] top-[55%] h-[420px] w-[420px] rounded-full bg-blue-400/4 blur-[160px]" />
      </div>

      <div className="relative z-10">
        <header className="border-b border-white/10 bg-[#0a0b0d]/90 backdrop-blur-xl">
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
                <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">
                  Projeto real
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                  Next.js + MDX
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                  Conteúdo + SEO
                </span>
              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">
                Case · Blog Waldemática
              </p>

              <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Um blog pensado para transformar{" "}
                <span className="bg-gradient-to-r from-amber-200 via-emerald-300 to-blue-300 bg-clip-text text-transparent">
                  conteúdo em descoberta, leitura e presença orgânica
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                O Blog Waldemática foi migrado para Next.js e MDX para unir
                conteúdo editorial, SEO técnico, performance e publicação
                versionada. O projeto preserva URLs importantes do acervo e
                integra recursos de conta, comentários e leads com Supabase.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://blog.waldematica.com.br/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-200 px-6 py-3.5 font-semibold text-[#17130b] shadow-lg shadow-amber-200/10 transition hover:bg-amber-100"
                >
                  Visitar blog
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
              <div className="absolute -inset-5 rounded-[2.4rem] bg-gradient-to-br from-amber-300/6 via-emerald-300/4 to-blue-400/5 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111317] p-5 shadow-2xl shadow-black/30">
                <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-4">
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                  <div className="ml-3 flex-1 rounded-lg bg-white/5 px-3 py-2 text-center text-xs text-slate-500">
                    blog.waldematica.com.br
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-[1.1fr_.9fr]">
                  <a
                    href="https://blog.waldematica.com.br/"
                    target="_blank"
                    rel="noreferrer"
                    className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0f1216] transition hover:border-amber-200/35"
                  >
                    <div className="p-5">
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">
                          Artigo real em destaque
                        </p>
                        <span className="rounded-full border border-amber-200/20 bg-amber-200/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-amber-100">
                          Projeto publicado
                        </span>
                      </div>

                      <h3 className="mt-4 text-lg font-semibold leading-7 text-white">
                        Estatística no ENEM: Domine Média, Mediana, Moda e Interpretação de Gráficos
                      </h3>
                    </div>

                    <div className="overflow-hidden border-y border-white/10 bg-black/20">
                      <img
                        src="/projetos/blog/estatistica-no-enem.jpg"
                        alt="Imagem do artigo Estatística no ENEM no Blog Waldemática"
                        className="block h-auto w-full object-contain transition duration-500 group-hover:scale-[1.015]"
                      />
                    </div>

                    <div className="flex items-center justify-between gap-4 p-5">
                      <div>
                        <p className="text-xs text-slate-500">
                          Conteúdo + MDX + SEO + experiência de leitura
                        </p>
                        <p className="mt-1 text-sm font-medium text-slate-300">
                          Explorar o blog ao vivo
                        </p>
                      </div>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-amber-200 transition group-hover:bg-amber-200 group-hover:text-[#17130b]">
                        <ExternalIcon />
                      </span>
                    </div>
                  </a>

                  <div className="space-y-4">
                    {articleMockups.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-white/10 bg-[#0f1216] p-4"
                      >
                        <div className={`h-1.5 w-12 rounded-full ${item.accent}`} />
                        <p className="mt-4 font-semibold">{item.title}</p>
                        <p className="mt-1 text-xs text-slate-500">{item.meta}</p>
                        <div className="mt-4 h-2 w-full rounded-full bg-white/10" />
                        <div className="mt-2 h-2 w-3/4 rounded-full bg-white/10" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0d1014]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">
                  Estratégia editorial
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Um blog forte não é uma coleção de posts soltos.
                </h2>
              </div>

              <p className="max-w-2xl text-base leading-7 text-slate-400">
                O acervo cresce em uma arquitetura de artigos, categorias, links
                internos, metadata e URLs consistentes. O conteúdo fica versionado
                no repositório e pode evoluir sem perder o histórico editorial.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">
              Quatro pilares
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Conteúdo bom precisa de estrutura para continuar funcionando.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {editorialPillars.map((pillar) => (
              <article
                key={pillar.title}
                className="overflow-hidden rounded-3xl border border-white/10 bg-[#111317]"
              >
                <div className={`h-1.5 bg-gradient-to-r ${pillar.accent}`} />
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {pillar.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0d1014]">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Fluxo editorial
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Da pauta ao deploy com revisão e histórico.
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-slate-400">
                O processo editorial separa criação, revisão e publicação. Cada
                artigo pode ser revisado antes do commit e entra em produção pelo
                fluxo GitHub → Vercel.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {seoFlow.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#111317] p-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-300/10 text-xs font-bold text-emerald-200">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Migração e continuidade
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                WordPress ficou no histórico. As URLs importantes continuaram.
              </h2>
              <p className="mt-5 leading-7 text-slate-400">
                A migração para Next.js não foi tratada como um recomeço do zero.
                URLs já indexadas, redirects, canonical, sitemap e estrutura de
                SEO foram preservados para reduzir impacto orgânico e manter a
                continuidade do acervo.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#111317] p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["MDX versionado", "Artigos ficam no repositório e acompanham o histórico do projeto."],
                  ["URLs preservadas", "Slugs e redirects protegem o patrimônio já indexado."],
                  ["Supabase", "Conta, comentários, preferências e leads vivem fora do conteúdo estático."],
                  ["Vercel", "Deploy automático e infraestrutura alinhada ao restante do ecossistema Waldemática."],
                ].map(([itemTitle, text]) => (
                  <div
                    key={itemTitle}
                    className="rounded-2xl border border-white/10 bg-white/[0.025] p-4"
                  >
                    <div className="mb-3 h-1.5 w-10 rounded-full bg-blue-300" />
                    <p className="font-semibold">{itemTitle}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0d1014]">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">
                Tecnologias
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Ferramentas usadas no projeto
              </h2>
              <p className="mt-5 leading-7 text-slate-400">
                A stack atual combina conteúdo versionado, aplicação web moderna,
                serviços de backend e uma infraestrutura de publicação contínua.
              </p>
            </div>

            <div className="flex flex-wrap content-start gap-3">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-xl border border-white/10 bg-[#111317] px-4 py-3 text-sm text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">
              Resultado
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Um projeto editorial moderno, versionado e preparado para crescer.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-slate-400">
            <p>
              O Blog Waldemática deixou de depender de WordPress e plugins como
              base operacional. Hoje conteúdo e aplicação evoluem em Next.js e
              MDX, com deploy contínuo e controle direto da estrutura técnica.
            </p>
            <p>
              A migração preservou o trabalho de SEO já acumulado e abriu espaço
              para novas automações editoriais sem sacrificar revisão, URLs ou
              consistência do projeto.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-amber-200/15 bg-gradient-to-br from-[#17140f] via-[#111317] to-[#0a0b0d] p-8 sm:p-12 lg:p-16">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">
                Next.js + MDX + SEO
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                Precisa de um projeto editorial rápido, organizado e indexável?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Posso estruturar conteúdo, aplicação e SEO com uma base moderna,
                responsiva e preparada para publicação contínua sem complexidade
                desnecessária.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/#contato"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-200 px-6 py-3.5 font-semibold text-[#17130b] transition hover:bg-amber-100"
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

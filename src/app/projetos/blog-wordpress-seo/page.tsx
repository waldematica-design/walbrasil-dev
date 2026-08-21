import Image from "next/image";

const editorialPillars = [
  {
    title: "Arquitetura editorial",
    description:
      "Categorias, páginas e artigos organizados para facilitar navegação, descoberta e crescimento do acervo.",
    accent: "from-amber-300/20 to-orange-400/10",
  },
  {
    title: "SEO on-page",
    description:
      "Hierarquia de títulos, links internos, descrições, estrutura semântica e organização voltadas à presença orgânica.",
    accent: "from-emerald-400/20 to-cyan-400/10",
  },
  {
    title: "Experiência de leitura",
    description:
      "Layout limpo, responsivo e pensado para que o conteúdo seja confortável de consumir em qualquer tela.",
    accent: "from-blue-400/20 to-indigo-400/10",
  },
  {
    title: "Publicação contínua",
    description:
      "Uma base WordPress preparada para receber novos artigos sem perder consistência visual ou organização.",
    accent: "from-violet-400/20 to-fuchsia-400/10",
  },
];

const articleMockups = [
  {
    title: "Conteúdo para vestibulares",
    meta: "SEO + estrutura",
    accent: "bg-amber-300/70",
  },
  {
    title: "Artigos de Matemática",
    meta: "Leitura + navegação",
    accent: "bg-emerald-300/70",
  },
  {
    title: "Guias e materiais",
    meta: "Conteúdo + descoberta",
    accent: "bg-blue-300/70",
  },
];

const seoFlow = [
  "Tema e intenção",
  "Estrutura do artigo",
  "Hierarquia de títulos",
  "Links internos",
  "Otimização on-page",
  "Publicação",
  "Revisão e atualização",
];

const stack = [
  "WordPress",
  "SEO",
  "Gestão de Conteúdo",
  "Elementor",
  "HTML",
  "CSS",
  "Responsividade",
  "Performance",
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
                  Conteúdo + SEO
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                  WordPress editorial
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
                O Blog Waldemática foi estruturado como um sistema editorial em
                WordPress, com foco em organização de conteúdo, experiência de
                leitura, SEO on-page, links internos e crescimento contínuo do
                acervo.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://waldematica.com.br/blog/"
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
                    waldematica.com.br/blog
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-[1.1fr_.9fr]">
                  <a
                    href="https://waldematica.com.br/estatistica-no-enem/"
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
                        Estatística no Enem: Domine Média, Mediana, Moda e Interpretação de Gráficos
                      </h3>
                    </div>

                    <div className="overflow-hidden border-y border-white/10 bg-black/20">
                      <img
                        src="/projetos/blog/estatistica-no-enem.jpg"
                        alt="Imagem do artigo Estatística no Enem no Blog Waldemática"
                        className="block h-auto w-full object-contain transition duration-500 group-hover:scale-[1.015]"
                      />
                    </div>

                    <div className="flex items-center justify-between gap-4 p-5">
                      <div>
                        <p className="text-xs text-slate-500">Conteúdo + SEO + experiência de leitura</p>
                        <p className="mt-1 text-sm font-medium text-slate-300">
                          Ver artigo publicado
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
                O projeto foi pensado para que novos artigos entrem em uma
                estrutura organizada, conectada por categorias, links internos e
                páginas relacionadas. Isso melhora a navegação e evita que o
                acervo cresça de forma desordenada.
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
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">
                Estrutura do conteúdo
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Da descoberta do tema até a publicação.
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-slate-400">
                O fluxo editorial considera intenção do conteúdo, estrutura,
                hierarquia, links internos e revisão. SEO entra no processo como
                parte da organização, não como um “plugin mágico”.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#111317] p-6">
              <div className="space-y-4">
                {seoFlow.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-200/10 text-sm font-semibold text-amber-200">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{step}</p>
                    </div>
                    {index < seoFlow.length - 1 ? (
                      <div className="hidden sm:block h-px w-14 bg-gradient-to-r from-amber-200/70 to-transparent" />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">
              Organização visual
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Artigos, categorias e leitura com funções diferentes.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
            <div className="rounded-[2rem] border border-white/10 bg-[#111317] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">
                Página de artigo
              </p>
              <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_260px]">
                <div>
                  <div className="h-3 w-4/5 rounded-full bg-white/20" />
                  <div className="mt-3 h-3 w-3/5 rounded-full bg-white/12" />
                  <div className="mt-6 h-56 rounded-2xl bg-gradient-to-br from-amber-200/8 via-emerald-300/4 to-blue-300/5" />
                  <div className="mt-6 space-y-3">
                    {[100, 94, 87, 96, 76].map((width) => (
                      <div
                        key={width}
                        className="h-2 rounded-full bg-white/10"
                        style={{ width: `${width}%` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  {["Relacionados", "Categorias", "Navegação"].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-[#0f1216] p-4"
                    >
                      <div className="h-1.5 w-10 rounded-full bg-emerald-300" />
                      <p className="mt-4 font-semibold">{item}</p>
                      <div className="mt-3 h-2 w-full rounded-full bg-white/10" />
                      <div className="mt-2 h-2 w-3/4 rounded-full bg-white/10" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              {[
                ["Busca e descoberta", "A estrutura ajuda o visitante a encontrar conteúdos relacionados sem depender apenas do menu."],
                ["Links internos", "Artigos são conectados entre si para criar contexto, continuidade de leitura e melhor organização."],
                ["Categorias", "Temas são agrupados de forma coerente para evitar um acervo solto ou difícil de navegar."],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-3xl border border-white/10 bg-[#111317] p-6"
                >
                  <div className="mb-4 h-1.5 w-12 rounded-full bg-blue-300" />
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
                </div>
              ))}
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
                A stack prioriza publicação prática, organização editorial,
                leitura confortável e evolução contínua do blog.
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
              Uma base editorial preparada para continuar crescendo sem perder clareza.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-slate-400">
            <p>
              O blog passou a concentrar uma biblioteca crescente de conteúdos em
              uma estrutura integrada ao restante da presença digital da
              Waldemática, mantendo consistência visual e organização editorial.
            </p>
            <p>
              A base em WordPress permite publicação contínua e ajustes
              progressivos de SEO, navegação e apresentação sem interromper o
              funcionamento do projeto.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-amber-300/20 bg-gradient-to-br from-[#17140e] via-[#111416] to-[#0e1514] p-8 sm:p-12 lg:p-16">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">
                WordPress + SEO
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                Precisa transformar conteúdo solto em uma estrutura editorial organizada?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Posso ajudar a organizar páginas, artigos e SEO on-page para
                deixar o site mais claro, navegável e preparado para crescer.
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

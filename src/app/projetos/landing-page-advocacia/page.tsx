import Image from "next/image";
import type { Metadata } from "next";

const title = "Landing Page para Advocacia | Case Demonstrativo";
const description =
  "Case demonstrativo de landing page para advocacia, com posicionamento premium, hierarquia comercial, responsividade e chamadas para ação.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "https://walbrasil.dev/projetos/landing-page-advocacia",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://walbrasil.dev/projetos/landing-page-advocacia",
    siteName: "Wal Brasil",
    title,
    description,
    images: [
      {
        url: "/demos/advocacia/advogada-hero.png",
        alt: "Imagem institucional da landing page Brasil Cotrim Advocacia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/demos/advocacia/advogada-hero.png"],
  },
};

const highlights = [
  {
    title: "Posicionamento premium",
    description:
      "Paleta sóbria, tipografia elegante e composição visual pensadas para transmitir confiança e profissionalismo.",
  },
  {
    title: "Hierarquia comercial",
    description:
      "A página conduz o visitante da proposta de valor para áreas de atuação, diferenciais, processo e contato.",
  },
  {
    title: "Responsividade",
    description:
      "Estrutura preparada para funcionar bem em desktop, tablet e celular sem perder clareza ou impacto visual.",
  },
  {
    title: "Conversão sem exagero",
    description:
      "Chamadas para ação aparecem nos pontos certos da jornada sem transformar o layout em uma página agressiva de vendas.",
  },
];

const decisions = [
  "Hero com proposta de valor direta",
  "Imagem institucional exclusiva",
  "Seções curtas e escaneáveis",
  "CTA distribuído ao longo da página",
  "Identidade própria para o nicho jurídico",
  "Projeto claramente identificado como demonstrativo",
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

export default function LandingPageAdvocaciaCase() {
  return (
    <main className="min-h-screen bg-[#090c11] text-white antialiased">
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute left-[-10%] top-[-8%] h-[520px] w-[520px] rounded-full bg-blue-500/8 blur-[150px]" />
        <div className="absolute right-[-12%] top-[18%] h-[440px] w-[440px] rounded-full bg-amber-300/6 blur-[150px]" />
      </div>

      <div className="relative z-10">
        <header className="border-b border-white/10 bg-[#090c11]/88 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
            <a href="/" className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
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
                  Projeto demonstrativo
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                  Landing Page
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                  UX/UI + Responsividade
                </span>
              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">
                Case · Brasil Cotrim Advocacia
              </p>

              <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Uma landing page jurídica com{" "}
                <span className="bg-gradient-to-r from-amber-200 via-slate-200 to-blue-300 bg-clip-text text-transparent">
                  autoridade, clareza e conversão
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                Projeto conceitual criado para demonstrar como um escritório de
                advocacia pode apresentar serviços com uma identidade premium,
                linguagem sóbria e uma jornada clara até o contato.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/demos/advocacia"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-200 px-6 py-3.5 font-semibold text-[#17130b] transition hover:bg-amber-100"
                >
                  Ver demonstração completa
                  <ExternalIcon />
                </a>

                <a
                  href="/#contato"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold transition hover:bg-white/10"
                >
                  Quero uma landing page
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-5 rounded-[2.4rem] bg-gradient-to-br from-amber-300/7 via-transparent to-blue-400/5 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111317] p-4 shadow-2xl shadow-black/30">
                <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-4">
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                  <div className="ml-3 flex-1 rounded-lg bg-white/5 px-3 py-2">
                    <span className="block h-2 w-24 rounded-full bg-white/5" />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-[.9fr_1.1fr]">
                  <div className="rounded-2xl border border-white/10 bg-[#0f1216] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">
                      Conceito
                    </p>
                    <div className="mt-5 h-3 w-4/5 rounded-full bg-white/20" />
                    <div className="mt-3 h-3 w-3/5 rounded-full bg-white/12" />
                    <div className="mt-7 space-y-3">
                      <div className="h-2 w-full rounded-full bg-white/10" />
                      <div className="h-2 w-11/12 rounded-full bg-white/10" />
                      <div className="h-2 w-8/12 rounded-full bg-white/10" />
                    </div>
                    <div className="mt-8 h-10 w-36 rounded-full bg-amber-200/80" />
                  </div>

                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0f1216]">
                    <Image
                      src="/demos/advocacia/advogada-hero.png"
                      alt="Imagem institucional da landing page Brasil Cotrim Advocacia"
                      width={1122}
                      height={1402}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0d1014]">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">
                Objetivo
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Demonstrar uma solução comercial fora do nicho educacional.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-7 text-slate-400">
              <p>
                A proposta foi criar uma página de alto padrão para um segmento
                que exige confiança, sobriedade e comunicação objetiva.
              </p>
              <p>
                O projeto foi construído como demonstração de capacidade em
                landing pages para profissionais liberais e empresas, sem
                representar um cliente real.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">
              Decisões de projeto
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Design pensado para gerar confiança antes do primeiro contato.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-[#111317] p-6"
              >
                <div className="mb-4 h-1.5 w-12 rounded-full bg-amber-200" />
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0d1014]">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">
                Estrutura
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Uma landing page curta, elegante e orientada à ação.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {decisions.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#111317] p-5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-200/10 text-sm font-semibold text-amber-200">
                    {index + 1}
                  </span>
                  <p className="text-sm font-medium text-slate-200">{item}</p>
                </div>
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
              Um exemplo de como adaptar design e mensagem ao perfil do negócio.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-slate-400">
            <p>
              A demo mostra uma direção visual completamente diferente dos
              projetos educacionais do portfólio, preservando clareza,
              responsividade e foco comercial.
            </p>
            <p>
              Isso demonstra capacidade de adaptar identidade, estrutura e
              comunicação ao segmento do cliente, em vez de repetir o mesmo
              template em todos os projetos.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-amber-300/20 bg-gradient-to-br from-[#17140e] via-[#111416] to-[#111827] p-8 sm:p-12 lg:p-16">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">
                Landing pages
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                Precisa apresentar seu serviço com mais clareza e profissionalismo?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Posso criar uma landing page alinhada ao posicionamento do seu
                negócio, com estrutura responsiva, mensagem objetiva e chamadas
                para ação bem distribuídas.
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
                  href="/demos/advocacia"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold transition hover:bg-white/10"
                >
                  Abrir demonstração
                  <ExternalIcon />
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

            <a href="/" className="transition hover:text-slate-300">
              walbrasil.dev
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}

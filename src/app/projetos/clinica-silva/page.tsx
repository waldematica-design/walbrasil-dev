import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clínica Silva | Case Demonstrativo | Wal Brasil",
  description:
    "Case demonstrativo de site para clínica médica, com apresentação de especialidades, equipe, estrutura e agendamento.",
};

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

const highlights = [
  {
    title: "Arquitetura direta",
    text: "A página conduz o visitante pelas especialidades, equipe, estrutura e contato sem excesso de etapas.",
  },
  {
    title: "Identidade acolhedora",
    text: "Branco, verde-azulado e madeira criam uma estética médica moderna sem cair no visual hospitalar genérico.",
  },
  {
    title: "Equipe em destaque",
    text: "Os profissionais aparecem com fotos grandes, especialidade e apresentação curta para reforçar confiança e proximidade.",
  },
  {
    title: "Mobile first",
    text: "A experiência foi ajustada para funcionar bem em telas pequenas, com CTAs claros e conteúdo empilhado naturalmente.",
  },
];

export default function ClinicaSilvaCasePage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white antialiased">
      <div className="fixed inset-0 -z-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[-8%] top-[-8%] h-[460px] w-[460px] rounded-full bg-emerald-500/10 blur-[130px]" />
        <div className="absolute right-[-8%] top-[28%] h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[130px]" />
      </div>

      <div className="relative z-10">
        <header className="border-b border-white/10 bg-[#07111f]/88 backdrop-blur-xl">
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
          <div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div>
              <div className="mb-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">
                  Projeto demonstrativo
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                  Clínica médica
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                  Landing page
                </span>
              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">
                Case · Clínica Silva
              </p>

              <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Um site médico que combina{" "}
                <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  confiança, clareza e acolhimento
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                A Clínica Silva foi criada como projeto demonstrativo para mostrar
                como uma clínica com diferentes especialidades pode apresentar sua
                equipe, estrutura e formas de contato de maneira profissional,
                simples e responsiva.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/demos/clinica-silva"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-6 py-3.5 font-semibold text-[#07111f] transition hover:bg-emerald-300"
                >
                  Ver demonstração
                  <ExternalIcon />
                </a>

                <a
                  href="/#contato"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold transition hover:bg-white/10"
                >
                  Solicitar um projeto
                  <ArrowIcon />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-emerald-400/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-3 shadow-2xl shadow-black/30">
                <Image
                  src="/demos/clinica-silva/recepcao.jpg"
                  alt="Recepção da Clínica Silva — projeto demonstrativo"
                  width={1600}
                  height={900}
                  className="h-auto w-full rounded-[1.4rem] object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                  Objetivo
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Transformar informações básicas em uma presença digital confiável.
                </h2>
              </div>

              <div className="space-y-5 text-base leading-8 text-slate-300">
                <p>
                  O projeto parte de uma necessidade comum em clínicas e consultórios:
                  apresentar especialidades e profissionais, transmitir confiança e
                  facilitar o primeiro contato do paciente.
                </p>
                <p>
                  Em vez de criar uma estrutura extensa, a solução concentra tudo em
                  uma página clara, com hierarquia visual forte e chamadas de ação
                  distribuídas nos pontos certos.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Decisões do projeto
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Uma solução simples, mas pensada nos detalhes.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-6"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-3">
                <Image
                  src="/demos/clinica-silva/consultorio.jpg"
                  alt="Consultório da Clínica Silva — projeto demonstrativo"
                  width={1600}
                  height={900}
                  className="h-full min-h-[300px] w-full rounded-[1.35rem] object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-3">
                <Image
                  src="/demos/clinica-silva/sala-espera.jpg"
                  alt="Sala de espera da Clínica Silva — projeto demonstrativo"
                  width={1600}
                  height={900}
                  className="h-full min-h-[300px] w-full rounded-[1.35rem] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Resultado
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Um exemplo pronto para apresentar a clínicas e profissionais de saúde.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-slate-300">
                A demo mostra como um projeto enxuto pode ter aparência profissional,
                boa experiência no celular e uma estrutura clara para apresentar
                médicos, especialidades, ambiente e canais de agendamento.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Design responsivo",
                  "UI/UX",
                  "Landing Page",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-emerald-300/20 bg-gradient-to-br from-emerald-500/15 via-cyan-500/10 to-blue-500/5 p-8 sm:p-12 lg:p-16">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Precisa de algo semelhante?
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                Posso criar uma presença digital profissional para sua clínica ou consultório.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                O projeto pode ser adaptado às especialidades, identidade visual,
                equipe, formas de atendimento e objetivos reais do negócio.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/#contato"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-300 px-6 py-3.5 font-semibold text-[#07111f] transition hover:bg-emerald-200"
                >
                  Solicitar orçamento
                  <ArrowIcon />
                </a>

                <a
                  href="/demos/clinica-silva"
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

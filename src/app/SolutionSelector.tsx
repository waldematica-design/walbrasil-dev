"use client";

import { useEffect, useMemo, useState } from "react";

type Solution = {
  request: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  note: string;
};

const solutions: Solution[] = [
  {
    request: "Preciso de um site profissional para minha empresa.",
    category: "SITE PROFISSIONAL",
    title: "WordPress é a escolha certa aqui.",
    description:
      "Uma estrutura profissional, rápida de publicar e simples para o cliente atualizar depois.",
    technologies: [
      "WordPress",
      "Elementor",
      "SEO",
      "Responsivo",
      "Fácil manutenção",
    ],
    note: "Sem complexidade técnica desnecessária.",
  },
  {
    request: "Quero uma plataforma com login, dashboard e IA.",
    category: "APLICAÇÃO SOB MEDIDA",
    title: "Aqui o projeto pede desenvolvimento customizado.",
    description:
      "Uma aplicação moderna com autenticação, banco de dados, dashboards e inteligência artificial integrada.",
    technologies: [
      "Next.js",
      "Supabase",
      "OpenAI",
      "Autenticação",
      "Dashboard",
    ],
    note: "Arquitetura preparada para crescer com o produto.",
  },
];

function SparkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" />
      <path d="m18.5 14 .9 2.6L22 17.5l-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9.9-2.6Z" />
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

export default function SolutionSelector() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [phase, setPhase] = useState<
    "typing" | "processing" | "revealed" | "leaving"
  >("typing");
  const [reduceMotion, setReduceMotion] = useState(false);

  const activeSolution = useMemo(
    () => solutions[activeIndex],
    [activeIndex]
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (reduceMotion) {
      setTypedText(activeSolution.request);
      setPhase("revealed");

      timeout = setTimeout(() => {
        setActiveIndex((current) => (current + 1) % solutions.length);
      }, 6500);

      return () => clearTimeout(timeout);
    }

    setTypedText("");
    setPhase("typing");

    let characterIndex = 0;

    const typeNextCharacter = () => {
      characterIndex += 1;
      setTypedText(activeSolution.request.slice(0, characterIndex));

      if (characterIndex < activeSolution.request.length) {
        timeout = setTimeout(typeNextCharacter, 42);
        return;
      }

      timeout = setTimeout(() => {
        setPhase("processing");

        timeout = setTimeout(() => {
          setPhase("revealed");

          timeout = setTimeout(() => {
            setPhase("leaving");

            timeout = setTimeout(() => {
              setActiveIndex((current) => (current + 1) % solutions.length);
            }, 500);
          }, 4200);
        }, 700);
      }, 550);
    };

    timeout = setTimeout(typeNextCharacter, 450);

    return () => clearTimeout(timeout);
  }, [activeIndex, activeSolution.request, reduceMotion]);

  const panelVisible = phase === "revealed";
  const isProcessing = phase === "processing";

  return (
    <section className="relative border-y border-white/10 bg-white/[0.02]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[12%] top-[-160px] h-80 w-80 rounded-full bg-blue-500/10 blur-[110px]" />
        <div className="absolute bottom-[-180px] right-[8%] h-96 w-96 rounded-full bg-cyan-400/[0.07] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            A tecnologia vem depois do problema
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Cada projeto pede uma{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              solução diferente.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            Primeiro eu entendo o que precisa ser resolvido. Depois escolho a
            tecnologia que entrega o melhor resultado — sem complicar o que pode
            ser simples.
          </p>
        </div>

        <div className="relative mx-auto mt-14 grid max-w-6xl gap-5 lg:grid-cols-[1.02fr_.98fr]">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#091625]/90 p-5 shadow-2xl shadow-black/20 sm:p-7">
            <div className="mb-7 flex items-center justify-between border-b border-white/10 pb-5">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                  <SparkIcon />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Conte o que você precisa
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">
                    A solução começa pelo objetivo.
                  </p>
                </div>
              </div>

              <div className="hidden gap-1.5 sm:flex">
                <span
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    activeIndex === 0
                      ? "w-7 bg-blue-400"
                      : "w-1.5 bg-white/15"
                  }`}
                />
                <span
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    activeIndex === 1
                      ? "w-7 bg-blue-400"
                      : "w-1.5 bg-white/15"
                  }`}
                />
              </div>
            </div>

            <div className="relative min-h-[178px] rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Necessidade do projeto
              </p>

              <div className="mt-4 min-h-[78px] text-lg font-medium leading-8 text-slate-100 sm:text-xl">
                {typedText}
                {phase === "typing" && !reduceMotion && (
                  <span
                    className="ml-0.5 inline-block h-6 w-[2px] translate-y-1 bg-cyan-300 animate-pulse"
                    aria-hidden="true"
                  />
                )}
              </div>

              <div className="absolute bottom-4 left-5 right-5 sm:bottom-5 sm:left-6 sm:right-6">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs text-slate-600">
                    walbrasil.dev / diagnóstico
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    projeto online
                  </span>
                </div>
              </div>
            </div>

            <button
              type="button"
              tabIndex={-1}
              aria-hidden="true"
              className={`mt-5 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition-all duration-500 ${
                isProcessing
                  ? "scale-[1.015] bg-cyan-300 text-[#07111f] shadow-lg shadow-cyan-400/20"
                  : panelVisible
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/15"
                    : "bg-white/10 text-slate-300"
              }`}
            >
              {isProcessing ? "Analisando o projeto..." : "Encontrar a melhor solução"}
              <ArrowIcon />
            </button>
          </div>

          <div
            className={`relative overflow-hidden rounded-[1.75rem] border bg-gradient-to-br p-5 shadow-2xl shadow-black/20 transition-all duration-500 sm:p-7 ${
              panelVisible
                ? "translate-y-0 border-blue-400/25 from-blue-500/[0.14] via-[#0a1728] to-cyan-400/[0.07] opacity-100"
                : "translate-y-3 border-white/10 from-white/[0.035] via-[#0a1728] to-white/[0.02] opacity-70"
            }`}
          >
            <div
              className={`transition-all duration-500 ${
                panelVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }`}
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                    {activeSolution.category}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
                    {activeSolution.title}
                  </h3>
                </div>

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/10 text-cyan-200">
                  <SparkIcon />
                </span>
              </div>

              <p className="mt-5 max-w-xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
                {activeSolution.description}
              </p>

              <div className="mt-7">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                  Solução sugerida
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {activeSolution.technologies.map((technology, index) => (
                    <span
                      key={technology}
                      className="rounded-xl border border-white/10 bg-white/[0.055] px-3 py-2 text-sm text-slate-200 transition-all duration-500"
                      style={{
                        transitionDelay: panelVisible
                          ? `${120 + index * 70}ms`
                          : "0ms",
                      }}
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7 rounded-2xl border border-blue-400/10 bg-black/10 p-4">
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-300">
                      Por quê?
                    </p>
                    <p className="mt-1.5 text-sm leading-6 text-slate-400">
                      {activeSolution.note}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {!panelVisible && (
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="max-w-xs text-center">
                  <div
                    className={`mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-500 transition ${
                      isProcessing ? "scale-110 text-cyan-300" : ""
                    }`}
                  >
                    <SparkIcon />
                  </div>
                  <p className="mt-4 text-sm font-medium text-slate-400">
                    {isProcessing
                      ? "Comparando necessidade, manutenção e complexidade..."
                      : "A solução aparece aqui depois de entender o projeto."}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <p className="mx-auto mt-7 max-w-3xl text-center text-sm leading-6 text-slate-500">
          WordPress quando ele resolve melhor. Desenvolvimento sob medida quando
          o projeto realmente precisa.
        </p>
      </div>
    </section>
  );
}

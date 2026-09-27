"use client";

import {
  createContext,
  type FormEvent,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type QuoteContextValue = {
  openQuote: (projectType?: string) => void;
};

const QuoteContext = createContext<QuoteContextValue | null>(null);

const PROJECT_OPTIONS = [
  "Landing page profissional",
  "Site institucional moderno",
  "Sistema web / MVP",
  "Blog profissional com painel",
  "Site para clínica com IA e agendamento",
  "Agente de IA para atendimento e agendamento",
  "Outro",
];

type FormState = {
  projectType: string;
  description: string;
  name: string;
  phone: string;
  email: string;
  website: string;
};

const EMPTY_FORM: FormState = {
  projectType: "",
  description: "",
  name: "",
  phone: "",
  email: "",
  website: "",
};

export function useQuote() {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error("useQuote must be used within QuoteProvider");
  }
  return context;
}

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showFloating, setShowFloating] = useState(false);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const projectSelectRef = useRef<HTMLSelectElement | null>(null);

  const value = useMemo<QuoteContextValue>(
    () => ({
      openQuote(projectType?: string) {
        setForm((current) => ({
          ...current,
          projectType:
            projectType && PROJECT_OPTIONS.includes(projectType)
              ? projectType
              : current.projectType,
        }));
        setStatus("idle");
        setFeedback("");
        setIsOpen(true);
      },
    }),
    [],
  );

  useEffect(() => {
    const hero = document.getElementById("inicio");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowFloating(!entry.isIntersecting),
      { threshold: 0.12 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    const timer = window.setTimeout(() => projectSelectRef.current?.focus(), 60);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/orcamento", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source: window.location.href,
        }),
      });

      const result = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Não foi possível enviar sua solicitação.");
      }

      setStatus("success");
      setFeedback("Solicitação enviada. Vou receber os dados por e-mail.");
      setForm(EMPTY_FORM);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Não foi possível enviar sua solicitação.",
      );
    }
  }

  return (
    <QuoteContext.Provider value={value}>
      {children}

      {showFloating && !isOpen ? (
        <button
          type="button"
          className="fixed bottom-5 right-5 z-[70] hidden items-center gap-2 rounded-full border border-blue-300/25 bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-2xl shadow-blue-500/25 transition hover:-translate-y-1 hover:bg-blue-400 sm:inline-flex"
          onClick={() => value.openQuote()}
        >
          <span aria-hidden="true">✦</span>
          Solicitar orçamento
        </button>
      ) : null}

      {isOpen ? (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-[#020713]/80 p-4 backdrop-blur-md"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <section
            className="relative max-h-[min(760px,calc(100dvh-32px))] w-full max-w-2xl overflow-y-auto rounded-[1.75rem] border border-blue-300/20 bg-[#081421] p-6 text-white shadow-[0_35px_120px_rgba(0,0,0,.55)] sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="quote-title"
          >
            <button
              type="button"
              aria-label="Fechar formulário de orçamento"
              className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-xl text-slate-300 transition hover:bg-white/[0.1] hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>

            <div className="pr-12">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-300">
                Orçamento
              </p>
              <h2 id="quote-title" className="mt-3 text-3xl font-bold tracking-tight">
                Conte pra mim a sua ideia.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
                Preencha os dados abaixo. Eu recebo sua solicitação com o contexto do
                projeto e retorno pelo canal informado.
              </p>
            </div>

            {status === "success" ? (
              <div className="mt-8 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-6">
                <strong className="text-emerald-200">Pedido enviado.</strong>
                <p className="mt-2 text-sm leading-6 text-emerald-100/75">
                  {feedback}
                </p>
                <button
                  type="button"
                  className="mt-5 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-[#07111f]"
                  onClick={() => setIsOpen(false)}
                >
                  Fechar
                </button>
              </div>
            ) : (
              <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
                <label className="grid gap-2 text-sm font-semibold text-slate-200">
                  Que tipo de projeto tem em mente?
                  <select
                    ref={projectSelectRef}
                    required
                    value={form.projectType}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        projectType: event.target.value,
                      }))
                    }
                    className="h-12 rounded-xl border border-blue-300/15 bg-[#0d1c2e] px-4 font-normal text-white outline-none transition focus:border-blue-300/50"
                  >
                    <option value="" disabled>
                      Selecione uma opção
                    </option>
                    {PROJECT_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="grid gap-2 text-sm font-semibold text-slate-200">
                  Descreva sua ideia / projeto
                  <textarea
                    required
                    minLength={20}
                    maxLength={2000}
                    rows={5}
                    value={form.description}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        description: event.target.value,
                      }))
                    }
                    placeholder="O que você precisa, qual o objetivo e o que já existe hoje?"
                    className="resize-y rounded-xl border border-blue-300/15 bg-[#0d1c2e] px-4 py-3 font-normal leading-6 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-300/50"
                  />
                </label>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-semibold text-slate-200">
                    Nome
                    <input
                      required
                      maxLength={120}
                      value={form.name}
                      onChange={(event) =>
                        setForm((current) => ({
                          ...current,
                          name: event.target.value,
                        }))
                      }
                      className="h-12 rounded-xl border border-blue-300/15 bg-[#0d1c2e] px-4 font-normal text-white outline-none transition focus:border-blue-300/50"
                    />
                  </label>

                  <label className="grid gap-2 text-sm font-semibold text-slate-200">
                    Telefone / WhatsApp
                    <input
                      required
                      inputMode="tel"
                      maxLength={40}
                      value={form.phone}
                      onChange={(event) =>
                        setForm((current) => ({
                          ...current,
                          phone: event.target.value,
                        }))
                      }
                      placeholder="(17) 99999-9999"
                      className="h-12 rounded-xl border border-blue-300/15 bg-[#0d1c2e] px-4 font-normal text-white outline-none transition placeholder:text-slate-600 focus:border-blue-300/50"
                    />
                  </label>
                </div>

                <label className="grid gap-2 text-sm font-semibold text-slate-200">
                  E-mail
                  <input
                    required
                    type="email"
                    maxLength={200}
                    value={form.email}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        email: event.target.value,
                      }))
                    }
                    className="h-12 rounded-xl border border-blue-300/15 bg-[#0d1c2e] px-4 font-normal text-white outline-none transition focus:border-blue-300/50"
                  />
                </label>

                <label className="sr-only" aria-hidden="true">
                  Website
                  <input
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        website: event.target.value,
                      }))
                    }
                  />
                </label>

                {feedback ? (
                  <p
                    className={`rounded-xl border px-4 py-3 text-sm ${
                      status === "error"
                        ? "border-red-400/20 bg-red-400/10 text-red-200"
                        : "border-blue-400/20 bg-blue-400/10 text-blue-200"
                    }`}
                    role="status"
                  >
                    {feedback}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="min-h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-6 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60"
                >
                  {status === "sending" ? "Enviando..." : "Enviar solicitação"}
                </button>
              </form>
            )}
          </section>
        </div>
      ) : null}
    </QuoteContext.Provider>
  );
}

"use client";

import { useEffect } from "react";
import Link from "next/link";
import { QuoteProvider, useQuote } from "@/components/quote-provider";

function OpenQuoteOnArrival() {
  const { openQuote } = useQuote();

  useEffect(() => {
    openQuote();
  }, [openQuote]);

  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center bg-[#050b13] px-6 py-16 text-center text-white">
      <div className="w-full max-w-xl rounded-3xl border border-blue-300/20 bg-[#081421] p-8 shadow-2xl sm:p-12">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">WALBRASIL.DEV</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Solicitar orçamento</h1>
        <p className="mt-4 text-base leading-7 text-slate-300">
          Conte sua ideia no formulário. Se ele estiver fechado, abra novamente pelo botão abaixo.
        </p>
        <button
          type="button"
          onClick={() => openQuote()}
          className="mt-7 inline-flex min-h-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-6 font-semibold text-white transition hover:brightness-110"
        >
          Abrir formulário de orçamento
        </button>
        <p className="mt-6 text-sm text-slate-400">
          <Link href="/" className="underline underline-offset-4 hover:text-white">
            Conhecer o portfólio
          </Link>
        </p>
      </div>
    </main>
  );
}

export function OrcamentoClient() {
  return (
    <QuoteProvider>
      <OpenQuoteOnArrival />
    </QuoteProvider>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type ConsentChoice = "granted" | "denied";

const STORAGE_KEY = "walbrasil-cookie-consent-v1";

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

function pushConsent(choice: ConsentChoice) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push([
    "consent",
    "update",
    {
      analytics_storage: choice,
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    },
  ]);
}

function loadGoogleTagManager(containerId: string) {
  if (document.getElementById("walbrasil-gtm-script")) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });

  const script = document.createElement("script");
  script.id = "walbrasil-gtm-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(containerId)}`;
  document.head.appendChild(script);
}

export function CookieConsent({ containerId }: { containerId: string }) {
  const [choice, setChoice] = useState<ConsentChoice | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push([
      "consent",
      "default",
      {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      },
    ]);

    const saved = window.localStorage.getItem(STORAGE_KEY) as ConsentChoice | null;
    if (saved === "granted" || saved === "denied") {
      setChoice(saved);
      pushConsent(saved);
      if (saved === "granted") loadGoogleTagManager(containerId);
      return;
    }

    setOpen(true);
  }, [containerId]);

  function save(nextChoice: ConsentChoice) {
    const previous = choice;
    window.localStorage.setItem(STORAGE_KEY, nextChoice);
    setChoice(nextChoice);
    setOpen(false);
    pushConsent(nextChoice);

    if (nextChoice === "granted") {
      loadGoogleTagManager(containerId);
    } else if (previous === "granted") {
      window.location.reload();
    }
  }

  return (
    <>
      {open ? (
        <aside
          className="fixed inset-x-4 bottom-4 z-[9999] mx-auto max-w-3xl rounded-2xl border border-white/15 bg-[#07111f]/95 p-5 text-white shadow-2xl backdrop-blur-xl sm:p-6"
          role="dialog"
          aria-label="Preferências de privacidade"
        >
          <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <strong className="text-base">Privacidade e medição.</strong>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                O site usa recursos essenciais e, somente se você permitir, ferramentas opcionais de medição de acesso por meio do Google Tag Manager. Você pode mudar essa escolha a qualquer momento.
              </p>
              <Link
                className="mt-3 inline-block text-sm font-semibold text-blue-300 underline underline-offset-4"
                href="/politica-de-privacidade/"
              >
                Ver Política de Privacidade
              </Link>
            </div>
            <div className="flex flex-col gap-2 sm:min-w-44">
              <button
                type="button"
                onClick={() => save("granted")}
                className="rounded-xl bg-blue-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-400"
              >
                Aceitar medição
              </button>
              <button
                type="button"
                onClick={() => save("denied")}
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Recusar opcionais
              </button>
            </div>
          </div>
        </aside>
      ) : choice ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-4 left-4 z-[9998] rounded-full border border-white/15 bg-[#07111f]/90 px-3.5 py-2 text-xs font-semibold text-slate-200 shadow-lg backdrop-blur transition hover:border-blue-300/30 hover:text-blue-200"
          aria-label="Alterar preferências de privacidade"
        >
          Privacidade
        </button>
      ) : null}
    </>
  );
}

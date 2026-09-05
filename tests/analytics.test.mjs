import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { trackEvent } from "../src/lib/analytics.ts";

test("helper de analytics é seguro no server e remove PII no browser", () => {
  assert.equal("window" in globalThis, false);
  assert.doesNotThrow(() =>
    trackEvent("agent_open", {
      source_site: "walbrasil.dev",
      page_path: "/",
    }),
  );

  Object.defineProperty(globalThis, "window", {
    configurable: true,
    value: {},
    writable: true,
  });

  try {
    trackEvent("lead_created", {
      source_site: "walbrasil.dev",
      page_path: "/",
      name: "Maria",
      phone: "5517999990000",
      email: "maria@example.com",
      companyName: "Empresa",
      message: "conteúdo privado",
      leadId: "private-id",
    });

    assert.deepEqual(globalThis.window.dataLayer, [
      {
        event: "lead_created",
        source_site: "walbrasil.dev",
        page_path: "/",
      },
    ]);
  } finally {
    delete globalThis.window;
  }
});

test("ponte do Wal Brasil expõe somente resposta e booleanos seguros", async () => {
  const route = await readFile(
    new URL("../src/app/api/ai-chat/route.ts", import.meta.url),
    "utf8",
  );

  assert.doesNotMatch(route, /\.\.\.data/);
  assert.match(route, /leadCreated: data\.leadCreated/);
  assert.match(route, /quoteJustRequested: data\.quoteJustRequested/);
  assert.match(
    route,
    /humanHandoffJustRequested: data\.humanHandoffJustRequested/,
  );
});

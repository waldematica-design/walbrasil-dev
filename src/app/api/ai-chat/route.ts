import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const LEGACY_AGENT_API_URL = "https://wal-ai-agent.vercel.app/api/chat";
const TECERALE_AGENT_API_URL =
  process.env.TECERALE_COMMERCIAL_API_URL?.trim();
const TECERALE_AGENT_API_TOKEN =
  process.env.TECERALE_COMMERCIAL_API_TOKEN?.trim();

const MAX_REQUEST_BYTES = 64_000;
const MAX_RECEIVED_MESSAGES = 50;
const MAX_MESSAGE_CHARS = 2_000;

type ChatMessage = {
  role: "assistant" | "user";
  content: string;
};

type ChatRequestBody = {
  message?: string;
  visitorToken?: string;
  conversationKey?: string;
  messages?: ChatMessage[];
  attribution?: {
    utmSource?: string | null;
    utmMedium?: string | null;
    utmCampaign?: string | null;
    utmTerm?: string | null;
  };
};

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function jsonResponse(body: unknown, status = 200) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

function cleanOptionalText(value: unknown, maxLength = 200) {
  return typeof value === "string" && value.trim()
    ? value.trim().slice(0, maxLength)
    : null;
}

function prepareMessages(body: ChatRequestBody): ChatMessage[] | null {
  if (Array.isArray(body.messages)) {
    if (!body.messages.length || body.messages.length > MAX_RECEIVED_MESSAGES) {
      return null;
    }

    for (const item of body.messages) {
      if (
        !item ||
        (item.role !== "assistant" && item.role !== "user") ||
        typeof item.content !== "string" ||
        !item.content.trim() ||
        item.content.length > MAX_MESSAGE_CHARS
      ) {
        return null;
      }
    }

    return body.messages.at(-1)?.role === "user" ? body.messages : null;
  }

  const message = body.message?.trim();
  return message && message.length <= MAX_MESSAGE_CHARS
    ? [{ role: "user", content: message }]
    : null;
}

async function callTeceraleAgent(
  body: ChatRequestBody,
  messages: ChatMessage[],
  conversationKey: string,
) {
  if (!TECERALE_AGENT_API_URL || !TECERALE_AGENT_API_TOKEN) {
    throw new Error("Tecérale integration is not fully configured.");
  }

  const attribution = body.attribution ?? {};
  const response = await fetch(TECERALE_AGENT_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TECERALE_AGENT_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messages: messages.map((item) => ({
        role: item.role === "assistant" ? "agent" : "user",
        content: item.content.trim(),
      })),
      conversationKey,
      attribution: {
        utmSource: cleanOptionalText(attribution.utmSource),
        utmMedium: cleanOptionalText(attribution.utmMedium),
        utmCampaign: cleanOptionalText(attribution.utmCampaign),
        utmTerm: cleanOptionalText(attribution.utmTerm),
      },
    }),
    cache: "no-store",
    signal: AbortSignal.timeout(25_000),
  });

  const data: unknown = await response.json();
  if (
    !response.ok ||
    !data ||
    typeof data !== "object" ||
    !("reply" in data) ||
    typeof data.reply !== "string"
  ) {
    throw new Error(`Tecérale agent returned ${response.status}.`);
  }

  return {
    reply: data.reply,
    leadCreated: "leadCreated" in data && data.leadCreated === true,
    quoteJustRequested:
      "quoteJustRequested" in data && data.quoteJustRequested === true,
    humanHandoffJustRequested:
      "humanHandoffJustRequested" in data &&
      data.humanHandoffJustRequested === true,
  };
}

async function callLegacyAgent(message: string, visitorToken?: string) {
  const response = await fetch(LEGACY_AGENT_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, visitorToken: visitorToken || undefined }),
    cache: "no-store",
    signal: AbortSignal.timeout(25_000),
  });

  const data: unknown = await response.json();
  if (!response.ok || !data || typeof data !== "object") {
    throw new Error(`Legacy agent returned ${response.status}.`);
  }

  return data as {
    reply?: unknown;
    visitorToken?: unknown;
    memoriesUpdated?: unknown;
  };
}

export async function POST(request: NextRequest) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_REQUEST_BYTES) {
    return jsonResponse(
      { status: "invalid_message", error: "A conversa enviada é muito grande." },
      413,
    );
  }

  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return jsonResponse(
      { status: "invalid_message", error: "Não foi possível ler a mensagem." },
      400,
    );
  }

  if (new TextEncoder().encode(rawBody).byteLength > MAX_REQUEST_BYTES) {
    return jsonResponse(
      { status: "invalid_message", error: "A conversa enviada é muito grande." },
      413,
    );
  }

  let body: ChatRequestBody;
  try {
    body = JSON.parse(rawBody) as ChatRequestBody;
  } catch {
    return jsonResponse(
      { status: "invalid_message", error: "Não foi possível ler a mensagem." },
      400,
    );
  }

  const messages = prepareMessages(body);
  const latestMessage = messages?.at(-1)?.content.trim();
  if (!messages || !latestMessage) {
    return jsonResponse(
      { status: "invalid_message", error: "Mensagem vazia ou inválida." },
      400,
    );
  }

  const conversationKey = body.conversationKey?.trim() || body.visitorToken?.trim();
  if (!conversationKey || !UUID_PATTERN.test(conversationKey)) {
    return jsonResponse(
      { status: "invalid_conversation", error: "Não foi possível identificar a conversa." },
      400,
    );
  }

  try {
    if (TECERALE_AGENT_API_URL && TECERALE_AGENT_API_TOKEN) {
      const data = await callTeceraleAgent(body, messages, conversationKey);
      return jsonResponse({
        status: "ok",
        reply: data.reply,
        visitorToken: conversationKey,
        leadCreated: data.leadCreated,
        quoteJustRequested: data.quoteJustRequested,
        humanHandoffJustRequested: data.humanHandoffJustRequested,
      });
    }

    if (TECERALE_AGENT_API_URL || TECERALE_AGENT_API_TOKEN) {
      console.error("Tecérale commercial integration is only partially configured.");
      return jsonResponse(
        {
          status: "configuration_error",
          error: "O assistente está temporariamente indisponível.",
        },
        503,
      );
    }

    const data = await callLegacyAgent(latestMessage, conversationKey);
    if (typeof data.reply !== "string" || !data.reply.trim()) {
      throw new Error("Legacy agent returned an invalid reply.");
    }

    return jsonResponse({
      status: "ok",
      reply: data.reply,
      visitorToken:
        typeof data.visitorToken === "string" ? data.visitorToken : conversationKey,
      memoriesUpdated:
        typeof data.memoriesUpdated === "number" ? data.memoriesUpdated : 0,
      leadCreated: false,
      quoteJustRequested: false,
      humanHandoffJustRequested: false,
    });
  } catch {
    console.error("AI chat bridge request failed.");
    return jsonResponse(
      { status: "error", error: "Não foi possível conectar ao assistente." },
      502,
    );
  }
}

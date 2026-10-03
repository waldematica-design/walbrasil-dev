import { NextResponse } from "next/server";

export const runtime = "nodejs";

type QuotePayload = {
  projectType?: unknown;
  description?: unknown;
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  website?: unknown;
  source?: unknown;
};

function asText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  let body: QuotePayload;

  try {
    body = (await request.json()) as QuotePayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Dados inválidos." },
      { status: 400 },
    );
  }

  const projectType = asText(body.projectType, 160);
  const description = asText(body.description, 2000);
  const name = asText(body.name, 120);
  const phone = asText(body.phone, 40);
  const email = asText(body.email, 200)
    .normalize("NFKC")
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .toLowerCase();
  const website = asText(body.website, 200);
  const source = asText(body.source, 500);

  // Honeypot: bots costumam preencher campos invisíveis.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!projectType || description.length < 20 || !name || !phone || !email) {
    return NextResponse.json(
      { ok: false, error: "Preencha todos os campos obrigatórios." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Informe um e-mail válido." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.WALBRASIL_ALERT_FROM_EMAIL;
  const to = process.env.WALBRASIL_ALERT_EMAIL;

  if (!apiKey || !from || !to) {
    console.error("Quote form email environment variables are missing.");
    return NextResponse.json(
      {
        ok: false,
        error:
          "O formulário ainda não está configurado para envio. Use o WhatsApp por enquanto.",
      },
      { status: 503 },
    );
  }

  const recipients = to
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  const subject = `Novo orçamento — ${projectType}`;
  const safeDescription = escapeHtml(description).replaceAll("\n", "<br />");
  const safeSource = source ? escapeHtml(source) : "Não informado";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: recipients,
      reply_to: [email],
      subject,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#172033">
          <h1 style="font-size:22px;margin:0 0 18px">Novo pedido de orçamento</h1>
          <p><strong>Projeto:</strong> ${escapeHtml(projectType)}</p>
          <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
          <p><strong>WhatsApp:</strong> ${escapeHtml(phone)}</p>
          <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
          <p><strong>Descrição:</strong><br />${safeDescription}</p>
          <p style="color:#667085;font-size:12px"><strong>Origem:</strong> ${safeSource}</p>
        </div>
      `,
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    console.error("Resend quote form error:", response.status, details);

    return NextResponse.json(
      {
        ok: false,
        error: "Não foi possível enviar agora. Tente novamente ou use o WhatsApp.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

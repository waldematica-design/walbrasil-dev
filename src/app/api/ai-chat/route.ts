import { NextRequest, NextResponse } from "next/server";

const AGENT_API_URL =
  "https://wal-ai-agent.vercel.app/api/chat";

type ChatRequestBody = {
  message?: string;
  visitorToken?: string;
};

export async function POST(request: NextRequest) {
  try {
    const body =
      (await request.json()) as ChatRequestBody;

    const message =
      body.message?.trim();

    if (!message) {
      return NextResponse.json(
        {
          status: "invalid_message",
          error: "Mensagem vazia.",
        },
        {
          status: 400,
        }
      );
    }

    const agentResponse =
      await fetch(AGENT_API_URL, {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          message,
          visitorToken:
            body.visitorToken ||
            undefined,
        }),

        cache: "no-store",
      });

    const data =
      await agentResponse.json();

    if (!agentResponse.ok) {
      console.error(
        "Erro retornado pelo agente:",
        data
      );

      return NextResponse.json(
        {
          status:
            "agent_error",

          error:
            "Não foi possível processar a mensagem.",
        },
        {
          status: agentResponse.status,
        }
      );
    }

    return NextResponse.json({
      status: "ok",

      reply: data.reply,

      visitorToken:
        data.visitorToken,

      memoriesUpdated:
        data.memoriesUpdated || 0,
    });
  } catch (error) {
    console.error(
      "Erro na ponte do chat:",
      error
    );

    return NextResponse.json(
      {
        status: "error",
        error:
          "Não foi possível conectar ao assistente.",
      },
      {
        status: 500,
      }
    );
  }
}
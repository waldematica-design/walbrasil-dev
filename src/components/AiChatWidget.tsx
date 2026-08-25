"use client";

import {
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";

import ReactMarkdown from "react-markdown";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const VISITOR_TOKEN_KEY =
  "walbrasil_ai_visitor_token";

const INITIAL_MESSAGE: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Olá! 👋 Sou o agente de IA do @walbrasil.dev. Posso te ajudar a planejar sites, sistemas, automações e soluções com inteligência artificial. O que você gostaria de criar?",
};

export default function AiChatWidget() {
  const [isOpen, setIsOpen] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [messages, setMessages] =
    useState<ChatMessage[]>([
      INITIAL_MESSAGE,
    ]);

  const [isLoading, setIsLoading] =
    useState(false);

  const messagesEndRef =
    useRef<HTMLDivElement | null>(
      null
    );

  const textareaRef =
    useRef<HTMLTextAreaElement | null>(
      null
    );

  /*
   * Mantém o chat sempre rolado
   * para a mensagem mais recente.
   */
  useEffect(() => {
    if (!isOpen) return;

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [
    messages,
    isLoading,
    isOpen,
  ]);

  /*
   * Quando o chat abre,
   * coloca o cursor no campo.
   */
  useEffect(() => {
    if (!isOpen) return;

    const timeout = window.setTimeout(() => {
      textareaRef.current?.focus();
    }, 100);

    return () =>
      window.clearTimeout(timeout);
  }, [isOpen]);

  /*
   * Quando a IA termina de responder,
   * devolve o foco automaticamente
   * ao campo de mensagem.
   */
  useEffect(() => {
    if (!isOpen || isLoading) {
      return;
    }

    const timeout = window.setTimeout(() => {
      textareaRef.current?.focus();
    }, 80);

    return () =>
      window.clearTimeout(timeout);
  }, [isLoading, isOpen]);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const trimmedMessage =
      message.trim();

    if (
      !trimmedMessage ||
      isLoading
    ) {
      return;
    }

    const userMessage: ChatMessage =
      {
        id: crypto.randomUUID(),
        role: "user",
        content:
          trimmedMessage,
      };

    setMessages((current) => [
      ...current,
      userMessage,
    ]);

    setMessage("");
    setIsLoading(true);

    /*
     * Mantém o foco no textarea
     * mesmo enquanto a IA responde.
     */
    window.setTimeout(() => {
      textareaRef.current?.focus();
    }, 0);

    try {
      const visitorToken =
        window.localStorage.getItem(
          VISITOR_TOKEN_KEY
        );

      const response =
        await fetch(
          "/api/ai-chat",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              message:
                trimmedMessage,

              visitorToken:
                visitorToken ||
                undefined,
            }),
          }
        );

      const data =
        await response.json();

      if (
        !response.ok ||
        !data.reply
      ) {
        throw new Error(
          data.error ||
            "Não foi possível obter uma resposta."
        );
      }

      if (
        data.visitorToken
      ) {
        window.localStorage.setItem(
          VISITOR_TOKEN_KEY,
          data.visitorToken
        );
      }

      const assistantMessage: ChatMessage =
        {
          id: crypto.randomUUID(),
          role:
            "assistant",
          content:
            data.reply,
        };

      setMessages(
        (current) => [
          ...current,
          assistantMessage,
        ]
      );
    } catch (error) {
      console.error(
        "Erro no chat:",
        error
      );

      const errorMessage: ChatMessage =
        {
          id: crypto.randomUUID(),
          role:
            "assistant",
          content:
            "Não consegui responder agora. Tente novamente em alguns instantes.",
        };

      setMessages(
        (current) => [
          ...current,
          errorMessage,
        ]
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-[100] flex h-[560px] w-[calc(100vw-2rem)] max-w-[390px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl sm:right-6">
          <div className="flex items-center justify-between border-b border-white/10 bg-slate-900 px-4 py-4">
            <div>
              <p className="font-semibold text-white">
                Agente de IA @walbrasil.dev
              </p>

              <div className="mt-1 flex items-center gap-2 text-xs text-slate-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Online
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                setIsOpen(false)
              }
              aria-label="Fechar chat"
              className="flex h-9 w-9 items-center justify-center rounded-full text-xl text-slate-400 transition hover:bg-white/10 hover:text-white"
            >
              ×
            </button>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto bg-slate-950 p-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {messages.map(
              (chatMessage) => {
                const isUser =
                  chatMessage.role ===
                  "user";

                return (
                  <div
                    key={
                      chatMessage.id
                    }
                    className={`flex ${
                      isUser
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        isUser
                          ? "rounded-br-md bg-blue-600 text-white"
                          : "rounded-bl-md bg-slate-800 text-slate-100"
                      }`}
                    >
                      {isUser ? (
                        <div className="whitespace-pre-wrap">
                          {
                            chatMessage.content
                          }
                        </div>
                      ) : (
                        <ReactMarkdown
                          components={{
                            p: ({
                              children,
                            }) => (
                              <p className="mb-2 last:mb-0">
                                {
                                  children
                                }
                              </p>
                            ),

                            ul: ({
                              children,
                            }) => (
                              <ul className="my-2 list-disc space-y-1 pl-5">
                                {
                                  children
                                }
                              </ul>
                            ),

                            ol: ({
                              children,
                            }) => (
                              <ol className="my-2 list-decimal space-y-1 pl-5">
                                {
                                  children
                                }
                              </ol>
                            ),

                            li: ({
                              children,
                            }) => (
                              <li>
                                {
                                  children
                                }
                              </li>
                            ),

                            strong: ({
                              children,
                            }) => (
                              <strong className="font-semibold text-white">
                                {
                                  children
                                }
                              </strong>
                            ),

                            a: ({
                              href,
                              children,
                            }) => (
                              <a
                                href={
                                  href
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="break-all text-blue-300 underline underline-offset-2 hover:text-blue-200"
                              >
                                {
                                  children
                                }
                              </a>
                            ),
                          }}
                        >
                          {
                            chatMessage.content
                          }
                        </ReactMarkdown>
                      )}
                    </div>
                  </div>
                );
              }
            )}

            {isLoading && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md bg-slate-800 px-4 py-3 text-sm text-slate-300">
                  <span className="animate-pulse">
                    Pensando...
                  </span>
                </div>
              </div>
            )}

            <div
              ref={
                messagesEndRef
              }
            />
          </div>

          <form
            onSubmit={
              handleSubmit
            }
            className="border-t border-white/10 bg-slate-900 p-3"
          >
            <div className="flex items-end gap-2">
              <textarea
                ref={
                  textareaRef
                }
                value={
                  message
                }
                onChange={(
                  event
                ) =>
                  setMessage(
                    event.target
                      .value
                  )
                }
                onKeyDown={(
                  event
                ) => {
                  if (
                    event.key ===
                      "Enter" &&
                    !event.shiftKey
                  ) {
                    event.preventDefault();

                    if (
                      !isLoading
                    ) {
                      event.currentTarget.form?.requestSubmit();
                    }
                  }
                }}
                placeholder={
                  isLoading
                    ? "Você pode continuar digitando..."
                    : "Digite sua mensagem..."
                }
                rows={1}
                className="max-h-28 min-h-[44px] flex-1 resize-none overflow-y-auto rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              />

              <button
                type="submit"
                disabled={
                  !message.trim() ||
                  isLoading
                }
                aria-label="Enviar mensagem"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-lg text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-40"
              >
                ➜
              </button>
            </div>

            <p className="mt-2 text-center text-[10px] text-slate-500">
              Agente comercial com IA
            </p>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() =>
          setIsOpen(
            (current) =>
              !current
          )
        }
        aria-label={
          isOpen
            ? "Fechar agente de IA"
            : "Abrir agente de IA do @walbrasil.dev"
        }
        className="fixed bottom-5 right-4 z-[100] flex items-center gap-3 rounded-full bg-blue-600 px-4 py-3 font-medium text-white shadow-2xl transition hover:-translate-y-0.5 hover:bg-blue-500 sm:right-6"
      >
        <span className="text-xl">
          {isOpen
            ? "×"
            : "🤖"}
        </span>

        <span className="hidden text-sm sm:inline">
          {isOpen
            ? "Fechar"
            : "Teste nosso Agente de IA"}
        </span>
      </button>
    </>
  );
}
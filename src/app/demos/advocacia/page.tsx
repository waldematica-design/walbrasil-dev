import Image from "next/image";
import Link from "next/link";


function ScaleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M12 3v18" />
      <path d="M5 6h14" />
      <path d="m5 6-3 6h6L5 6Z" />
      <path d="m19 6-3 6h6l-3-6Z" />
      <path d="M7 21h10" />
    </svg>
  );
}

export default function DemoAdvocaciaPage() {
  const areas = [
    {
      title: "Direito Empresarial",
      text: "Apoio estratégico para empresas em contratos, prevenção de riscos, negociações e tomada de decisão jurídica mais segura.",
    },
    {
      title: "Contratos e Revisões",
      text: "Elaboração, análise e revisão contratual com foco em clareza, proteção patrimonial e redução de conflitos futuros.",
    },
    {
      title: "Consultoria Preventiva",
      text: "Orientação jurídica antes do problema acontecer, ajudando a estruturar decisões com mais segurança e previsibilidade.",
    },
    {
      title: "Atendimento Personalizado",
      text: "Comunicação direta, acompanhamento próximo e linguagem acessível para que o cliente entenda cada etapa do processo.",
    },
  ];

  const diferenciais = [
    "Atendimento consultivo e personalizado",
    "Comunicação clara durante todo o processo",
    "Análise estratégica antes de qualquer medida",
    "Atendimento online e presencial",
  ];

  const etapas = [
    {
      title: "1. Primeiro contato",
      text: "Você apresenta sua situação e os principais pontos do caso.",
    },
    {
      title: "2. Análise do cenário",
      text: "O escritório avalia riscos, possibilidades e o melhor caminho jurídico.",
    },
    {
      title: "3. Orientação objetiva",
      text: "Você recebe uma explicação clara sobre estratégia, próximos passos e viabilidade.",
    },
    {
      title: "4. Acompanhamento",
      text: "A condução do trabalho acontece com atualização constante e suporte próximo.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f6f3ec] text-[#17202f]">
      <div className="border-b border-[#d9d2c3]/20 bg-[#162231] px-4 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-[#d8b56a] sm:text-xs">
        Projeto demonstrativo · conceito de landing page para escritório de advocacia
      </div>

      <header className="border-b border-[#ddd6c8] bg-[#f6f3ec]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#b89a5e]/40 bg-[#17202f] text-[#e8d5a5] shadow-sm">
              <ScaleIcon />
            </div>

            <div>
              <p className="text-2xl font-semibold tracking-tight text-[#17202f]">
                Brasil Cotrim
              </p>
              <p className="text-xs uppercase tracking-[0.28em] text-[#9a8352]">
                Advocacia Empresarial
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-[#4c5563] md:flex">
            <a href="#atuacao" className="transition hover:text-[#17202f]">
              Atuação
            </a>
            <a href="#escritorio" className="transition hover:text-[#17202f]">
              Escritório
            </a>
            <a href="#como-funciona" className="transition hover:text-[#17202f]">
              Como funciona
            </a>
          </nav>

          <a
            href="#contato"
            className="rounded-full bg-[#162231] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#223247]"
          >
            Falar com advogado
          </a>
        </div>
      </header>

      <section className="overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.06fr_0.94fr] lg:items-center lg:gap-8 lg:py-16">
          <div className="max-w-3xl lg:pr-2">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#9a8352]">
              Estratégia jurídica com clareza
            </p>

            <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight text-[#17202f] sm:text-6xl xl:text-7xl">
              Segurança jurídica para decisões que não podem depender de improviso.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#55606e]">
              Assessoria jurídica empresarial e civil com atendimento próximo,
              análise estratégica e comunicação direta em cada etapa.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-full bg-[#162231] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#223247]"
              >
                Solicitar atendimento →
              </a>

              <a
                href="#atuacao"
                className="inline-flex items-center justify-center rounded-full border border-[#d6d0c3] bg-white px-7 py-4 text-sm font-semibold text-[#17202f] transition hover:bg-[#f1ece3]"
              >
                Conhecer áreas de atuação
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#6a7480]">
              <span>Atendimento online</span>
              <span>Atuação consultiva</span>
              <span>Comunicação objetiva</span>
            </div>
          </div>

          <div className="relative -mt-2 lg:ml-[-10px] lg:-mt-8">
            <div className="absolute -right-16 top-8 hidden h-72 w-72 rounded-full border border-[#e3dbcc] lg:block" />
            <div className="absolute right-12 top-20 hidden h-48 w-48 rounded-full border border-[#e9e2d5] lg:block" />

            <div className="relative mx-auto w-full max-w-[520px] rounded-[2rem] bg-[#ece5d8] p-4 shadow-[0_25px_60px_rgba(22,34,49,0.08)]">
              <div className="overflow-hidden rounded-[1.5rem] bg-[#f8f6f1]">
                <Image
                  src="/demos/advocacia/advogada-hero.png"
                  alt="Advogada em escritório elegante"
                  width={1122}
                  height={1402}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>

              <div className="mt-4 rounded-[1.35rem] bg-white p-5 shadow-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a8352]">
                  Atendimento inicial
                </p>
                <h2 className="mt-2 text-2xl font-semibold leading-tight text-[#17202f]">
                  Entenda seu cenário antes de decidir.
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#66717d]">
                  Uma primeira conversa ajuda a identificar riscos, alternativas
                  e o caminho jurídico mais adequado para a situação.
                </p>

                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {diferenciais.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[13px] leading-5 text-[#4f5a67]"
                    >
                      <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#162231] text-[10px] text-white">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contato"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-[#c4a057] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#b38f46]"
                >
                  Agendar conversa →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="atuacao" className="bg-[#162231] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d8b56a]">
              Áreas de atuação
            </p>
            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Soluções jurídicas para relações empresariais e patrimoniais.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {areas.map((area) => (
              <div
                key={area.title}
                className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-xl font-semibold text-white">{area.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-[#c5ccd6]">
                  {area.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="escritorio" className="bg-[#f6f3ec]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9a8352]">
              O escritório
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#17202f] sm:text-5xl">
              Atendimento próximo, postura técnica e foco em decisão bem orientada.
            </h2>
          </div>

          <div className="space-y-6 text-[16px] leading-8 text-[#55606e]">
            <p>
              Este projeto demonstrativo foi pensado para mostrar como uma
              landing page de advocacia pode transmitir autoridade sem ficar
              fria, e profissionalismo sem parecer genérica.
            </p>
            <p>
              A proposta visual combina clareza, elegância e uma comunicação
              objetiva — ideal para escritórios que desejam gerar confiança
              desde o primeiro contato.
            </p>
            <p>
              O foco não é só “ter um site bonito”, mas estruturar uma página
              que posicione bem o escritório, apresente a atuação com nitidez e
              conduza o visitante para a ação certa.
            </p>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9a8352]">
              Como funciona
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#17202f] sm:text-5xl">
              Um processo claro do primeiro contato ao acompanhamento.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {etapas.map((etapa) => (
              <div
                key={etapa.title}
                className="rounded-[1.6rem] border border-[#e7dfd1] bg-[#fbfaf7] p-6"
              >
                <p className="text-sm font-semibold text-[#17202f]">
                  {etapa.title}
                </p>
                <p className="mt-3 text-[15px] leading-7 text-[#5b6672]">
                  {etapa.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="bg-[#162231] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d8b56a]">
                  Fale com o escritório
                </p>
                <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                  Se precisar de uma avaliação jurídica, o próximo passo é uma conversa objetiva.
                </h2>
                <p className="mt-6 max-w-2xl text-[16px] leading-8 text-[#c5ccd6]">
                  Esta demo foi construída para representar uma landing page
                  comercial de alta credibilidade. Os contatos abaixo são ilustrativos.
                </p>
              </div>

              <div className="rounded-[1.6rem] bg-[#f7f4ee] p-7 text-[#17202f]">
                <div className="space-y-4 text-[15px] leading-7 text-[#55606e]">
                  <p>
                    <strong className="text-[#17202f]">WhatsApp:</strong>{" "}
                    (17) 99999-9999
                  </p>
                  <p>
                    <strong className="text-[#17202f]">E-mail:</strong>{" "}
                    contato@brasilcotrim.com.br
                  </p>
                  <p>
                    <strong className="text-[#17202f]">Atendimento:</strong>{" "}
                    online e presencial
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-xl bg-[#162231] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#223247]"
                  >
                    Solicitar atendimento
                  </a>

                  <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-xl border border-[#d8d2c8] px-5 py-4 text-sm font-semibold text-[#17202f] transition hover:bg-[#efe9de]"
                  >
                    Voltar ao início
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

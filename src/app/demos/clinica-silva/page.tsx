import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clínica Silva | Projeto Demonstrativo",
  description:
    "Projeto demonstrativo de site para clínica médica com Gastroenterologia, Nutrição e Endocrinologia.",
};

const doctors = [
  {
    name: "Dr. Carlos Silva",
    specialty: "Gastroenterologista",
    description:
      "Experiência no cuidado da saúde digestiva, com atenção à prevenção, ao diagnóstico e ao acompanhamento clínico.",
    image: "/demos/clinica-silva/dr-carlos-silva.jpg",
  },
  {
    name: "Dr. Ricardo Silva",
    specialty: "Gastroenterologista",
    description:
      "Atendimento clínico atualizado e próximo, voltado às principais queixas e condições do aparelho digestivo.",
    image: "/demos/clinica-silva/dr-ricardo-silva.jpg",
  },
  {
    name: "Dra. Juliana Silva",
    specialty: "Nutricionista",
    description:
      "Orientação alimentar individualizada para saúde, qualidade de vida, reeducação nutricional e equilíbrio.",
    image: "/demos/clinica-silva/dra-juliana-silva.jpg",
  },
  {
    name: "Dr. Eduardo Silva",
    specialty: "Endocrinologista",
    description:
      "Acompanhamento do metabolismo, controle de peso e equilíbrio hormonal com abordagem clínica responsável.",
    image: "/demos/clinica-silva/dr-eduardo-silva.jpg",
  },
];

const specialties = [
  {
    number: "01",
    title: "Gastroenterologia",
    text: "Cuidado especializado do aparelho digestivo, com acompanhamento de estômago, intestino, fígado e saúde gastrointestinal.",
  },
  {
    number: "02",
    title: "Nutrição",
    text: "Planejamento alimentar individualizado para reeducação nutricional, qualidade de vida e suporte à saúde digestiva.",
  },
  {
    number: "03",
    title: "Endocrinologia",
    text: "Avaliação de metabolismo, hormônios e controle de peso com acompanhamento médico individualizado.",
  },
];

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

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export default function ClinicaSilvaPage() {
  return (
    <main className="min-h-screen bg-[#f6faf9] text-[#173b3a] antialiased">
      <header className="sticky top-0 z-50 border-b border-[#173b3a]/10 bg-[#f6faf9]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1f7771] text-lg font-semibold text-white">
              S
            </div>
            <div>
              <p className="text-lg font-semibold leading-none">Clínica Silva</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-[#6f8c89]">
                Saúde integrada
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-[#52706d] md:flex">
            <a href="#especialidades" className="transition hover:text-[#173b3a]">
              Especialidades
            </a>
            <a href="#equipe" className="transition hover:text-[#173b3a]">
              Equipe
            </a>
            <a href="#estrutura" className="transition hover:text-[#173b3a]">
              A clínica
            </a>
            <a href="#contato" className="transition hover:text-[#173b3a]">
              Contato
            </a>
          </nav>

          <a
            href="#contato"
            className="rounded-full bg-[#1f7771] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#185f5a]"
          >
            Agendar consulta
          </a>
        </div>
      </header>

      <section id="inicio" className="relative overflow-hidden">
        <div className="absolute right-[-8rem] top-[-7rem] h-96 w-96 rounded-full bg-[#bfe4df]/35 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-[-8rem] h-80 w-80 rounded-full bg-[#d8eee9]/60 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.02fr_.98fr] lg:px-8 lg:py-24">
          <div>
            <div className="inline-flex items-center rounded-full border border-[#1f7771]/15 bg-white px-4 py-2 text-sm font-medium text-[#1f7771] shadow-sm">
              Gastroenterologia · Nutrição · Endocrinologia
            </div>

            <h1 className="mt-7 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#173b3a] sm:text-5xl lg:text-6xl">
              Cuidado integrado para uma vida com mais saúde e equilíbrio.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f7775]">
              Atendimento próximo e individualizado para saúde digestiva,
              alimentação, metabolismo e controle de peso em um só lugar.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1f7771] px-6 py-3.5 font-semibold text-white transition hover:bg-[#185f5a]"
              >
                Agendar consulta
                <ArrowIcon />
              </a>
              <a
                href="#equipe"
                className="inline-flex items-center justify-center rounded-full border border-[#173b3a]/15 bg-white px-6 py-3.5 font-semibold text-[#173b3a] transition hover:border-[#1f7771]/30"
              >
                Conhecer a equipe
              </a>
            </div>

            <div className="mt-10 grid max-w-xl gap-3 sm:grid-cols-2">
              {[
                "Atendimento humanizado",
                "Equipe especializada",
                "Clínica familiar",
                "Cuidado integrado",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-[#5b7471]"
                >
                  <span className="text-[#1f7771]">
                    <CheckIcon />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2.2rem] bg-[#dceceb] shadow-[0_30px_80px_rgba(20,70,67,.16)]">
              <Image
                src="/demos/clinica-silva/recepcao.jpg"
                alt="Recepção demonstrativa da Clínica Silva"
                width={1600}
                height={900}
                className="h-auto w-full object-cover"
                priority
              />
            </div>

            <div className="absolute -bottom-6 -left-4 rounded-2xl border border-white/80 bg-white/95 p-5 shadow-xl backdrop-blur sm:left-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6d8b88]">
                Atendimento
              </p>
              <p className="mt-1 text-lg font-semibold">Segunda a sábado</p>
              <p className="mt-1 text-sm text-[#6b807e]">
                Agendamento simples e rápido
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="especialidades" className="border-y border-[#173b3a]/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f7771]">
              Especialidades
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.025em] sm:text-4xl">
              Especialidades que se complementam.
            </h2>
            <p className="mt-4 leading-7 text-[#667d7a]">
              Uma proposta de cuidado que aproxima diferentes áreas para oferecer
              uma visão mais completa da saúde de cada paciente.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {specialties.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-[#173b3a]/10 bg-[#f7fbfa] p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-semibold text-[#75a7a2]">
                  {item.number}
                </span>
                <h3 className="mt-8 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#667d7a]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="equipe" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f7771]">
              Nossa equipe
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.025em] sm:text-4xl">
              Profissionais que cuidam de cada etapa.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#667d7a]">
            Uma equipe fictícia criada para demonstrar uma apresentação
            profissional, humana e clara para sites de clínicas e consultórios.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <article
              key={doctor.name}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-[#173b3a]/10"
            >
              <div className="overflow-hidden bg-[#dcebea]">
                <Image
                  src={doctor.image}
                  alt={`${doctor.name} — profissional fictício`}
                  width={1000}
                  height={1250}
                  className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1f7771]">
                  {doctor.specialty}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{doctor.name}</h3>
                <p className="mt-3 text-sm leading-6 text-[#687f7c]">
                  {doctor.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#173b3a] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9cd6cf]">
              Atendimento integrado
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-[-0.025em] sm:text-4xl">
              Saúde digestiva, nutrição e metabolismo olhando na mesma direção.
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-lg leading-8 text-[#cfdfdd]">
              A proposta da Clínica Silva é oferecer uma experiência mais
              organizada para pacientes que precisam acompanhar diferentes
              aspectos da saúde. As especialidades conversam entre si e permitem
              uma jornada de cuidado mais clara.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Saúde digestiva com acompanhamento especializado",
                "Nutrição alinhada às necessidades do paciente",
                "Controle metabólico e suporte ao emagrecimento",
                "Mais praticidade em um só local",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-[#e4efed]"
                >
                  <span className="mt-0.5 text-[#9cd6cf]">
                    <CheckIcon />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="estrutura" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f7771]">
              A clínica
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.025em] sm:text-4xl">
              Um ambiente acolhedor para cuidar bem de você.
            </h2>
            <p className="mt-4 leading-7 text-[#667d7a]">
              Espaços claros, confortáveis e organizados ajudam a tornar a
              experiência do paciente mais tranquila desde a chegada.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl">
              <Image
                src="/demos/clinica-silva/consultorio.jpg"
                alt="Consultório demonstrativo da Clínica Silva"
                width={1600}
                height={900}
                className="h-full min-h-[320px] w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-3xl">
              <Image
                src="/demos/clinica-silva/sala-espera.jpg"
                alt="Sala de espera demonstrativa da Clínica Silva"
                width={1600}
                height={900}
                className="h-full min-h-[320px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-[#e5f1ef] p-8 sm:p-10 lg:p-14">
          <div className="grid gap-12 lg:grid-cols-[1fr_.85fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f7771]">
                Agendamento
              </p>
              <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-[-0.025em] sm:text-4xl">
                Agende sua consulta com praticidade.
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-[#637b78]">
                Entre em contato com a equipe da clínica para escolher a
                especialidade e o melhor horário para seu atendimento.
              </p>

              <a
                href="#dados-contato"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1f7771] px-6 py-3.5 font-semibold text-white transition hover:bg-[#185f5a]"
              >
                Ver contatos
                <ArrowIcon />
              </a>
            </div>

            <div id="dados-contato" className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="flex gap-3">
                <span className="mt-1 text-[#1f7771]">
                  <PinIcon />
                </span>
                <div>
                  <p className="font-semibold">Clínica Silva</p>
                  <p className="mt-1 text-sm leading-6 text-[#667d7a]">
                    Rua Fênix, 245 — Centro
                    <br />
                    Fernandópolis-SP
                  </p>
                </div>
              </div>

              <div className="mt-6 border-t border-[#173b3a]/10 pt-6 text-sm leading-7 text-[#5e7673]">
                <p>
                  <strong className="text-[#173b3a]">WhatsApp:</strong>{" "}
                  (17) 99999-9999
                </p>
                <p>
                  <strong className="text-[#173b3a]">Telefone:</strong>{" "}
                  (17) 97777-7777
                </p>
                <p>
                  <strong className="text-[#173b3a]">Alternativo:</strong>{" "}
                  (17) 95555-5555
                </p>
                <p className="mt-3">
                  <strong className="text-[#173b3a]">Horário:</strong> Segunda a
                  sexta, 8h às 18h · Sábado, 8h às 12h
                </p>
                <p className="mt-3">
                  <strong className="text-[#173b3a]">Atendimento:</strong>{" "}
                  Particular e convênios selecionados
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#173b3a]/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-[-0.025em] sm:text-4xl">
            Cuidar da sua saúde pode começar com um atendimento mais próximo e
            completo.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#667d7a]">
            Uma experiência demonstrativa pensada para clínicas que desejam
            apresentar sua equipe, especialidades e formas de contato com
            clareza e profissionalismo.
          </p>
          <a
            href="#contato"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1f7771] px-6 py-3.5 font-semibold text-white transition hover:bg-[#185f5a]"
          >
            Agendar consulta
            <ArrowIcon />
          </a>
        </div>
      </section>

      <footer className="border-t border-[#173b3a]/10 bg-[#f6faf9]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-[#728784] sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <p className="font-semibold text-[#173b3a]">Clínica Silva</p>
            <p className="mt-1">
              Gastroenterologia · Nutrição · Endocrinologia
            </p>
          </div>
          <p>Projeto demonstrativo desenvolvido para portfólio.</p>
        </div>
      </footer>
    </main>
  );
}

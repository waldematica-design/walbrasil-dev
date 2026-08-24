export default function TermosDeServicoPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-10">
        <header className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
            Wal Brasil
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Termos de Serviço
          </h1>
          <p className="mt-4 text-sm text-zinc-500">
            Última atualização: 24 de agosto de 2026
          </p>
        </header>

        <div className="space-y-10 text-[17px] leading-8 text-zinc-700">
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">1. Aceitação dos termos</h2>
            <p>
              Ao utilizar sites, aplicações, automações, integrações ou outros serviços
              disponibilizados pela Wal Brasil, o usuário declara estar de acordo com estes
              Termos de Serviço e com a Política de Privacidade aplicável.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">2. Serviços oferecidos</h2>
            <p>
              A Wal Brasil desenvolve e opera soluções digitais, incluindo sites, aplicações
              web, automações, integrações, agentes de atendimento, ferramentas com
              inteligência artificial e outros serviços tecnológicos.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">3. Uso adequado</h2>
            <p>
              O usuário se compromete a utilizar os serviços de forma lícita e responsável,
              sem praticar atos que violem direitos de terceiros, leis aplicáveis, regras de
              plataformas integradas ou que prejudiquem a segurança e a disponibilidade dos
              sistemas.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">
              4. WhatsApp e serviços de terceiros
            </h2>
            <p>
              Algumas funcionalidades podem depender de serviços de terceiros, como Meta,
              WhatsApp, OpenAI, provedores de hospedagem e outras plataformas. O funcionamento
              de determinadas integrações pode estar sujeito às regras, limites e
              disponibilidade desses fornecedores.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">5. Inteligência artificial</h2>
            <p>
              Respostas e conteúdos gerados por sistemas de inteligência artificial podem
              conter imprecisões. O usuário deve avaliar informações relevantes antes de
              utilizá-las para decisões profissionais, financeiras, jurídicas, médicas ou
              outras situações que exijam análise especializada.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">6. Disponibilidade</h2>
            <p>
              A Wal Brasil busca manter seus serviços disponíveis e funcionais, mas não garante
              operação ininterrupta ou livre de falhas, especialmente em situações que dependam
              de infraestrutura ou serviços de terceiros.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">7. Propriedade intelectual</h2>
            <p>
              Marcas, códigos, layouts, textos, elementos visuais, estruturas e demais conteúdos
              próprios da Wal Brasil são protegidos pela legislação aplicável, salvo quando
              indicado de outra forma.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">8. Privacidade</h2>
            <p>
              O tratamento de dados pessoais relacionado aos serviços é descrito na Política de
              Privacidade da Wal Brasil.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">9. Alterações</h2>
            <p>
              Estes termos podem ser atualizados a qualquer momento para refletir mudanças nos
              serviços, integrações ou requisitos legais. A versão vigente permanecerá
              disponível nesta página.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">10. Contato</h2>
            <p>
              Dúvidas sobre estes termos podem ser enviadas para{" "}
              <a
                href="mailto:contato@walbrasil.dev"
                className="font-medium text-zinc-950 underline underline-offset-4"
              >
                contato@walbrasil.dev
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

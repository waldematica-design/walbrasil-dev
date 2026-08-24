export default function PoliticaDePrivacidadePage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-10">
        <header className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
            Wal Brasil
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Política de Privacidade
          </h1>
          <p className="mt-4 text-sm text-zinc-500">
            Última atualização: 24 de agosto de 2026
          </p>
        </header>

        <div className="space-y-10 text-[17px] leading-8 text-zinc-700">
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">1. Sobre esta política</h2>
            <p>
              Esta Política de Privacidade descreve como a Wal Brasil trata dados pessoais
              relacionados ao uso de seus sites, serviços digitais, automações, integrações
              com WhatsApp e soluções baseadas em inteligência artificial.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">2. Dados que podem ser tratados</h2>
            <p>
              Dependendo do serviço utilizado, podemos tratar informações como nome, telefone,
              e-mail, conteúdo de mensagens enviadas pelo usuário, dados técnicos de acesso,
              registros de uso, data e horário das interações e demais informações fornecidas
              voluntariamente durante o atendimento.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">3. Finalidades do tratamento</h2>
            <p>
              Os dados podem ser utilizados para prestar atendimento, responder solicitações,
              operar automações, melhorar nossos serviços, manter segurança e estabilidade,
              registrar interações necessárias ao funcionamento do sistema e cumprir
              obrigações legais ou regulatórias aplicáveis.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">
              4. WhatsApp, Meta e inteligência artificial
            </h2>
            <p>
              Alguns serviços da Wal Brasil podem utilizar a Plataforma do WhatsApp Business,
              fornecida pela Meta, para envio e recebimento de mensagens. Quando aplicável,
              mensagens também podem ser processadas por provedores de inteligência artificial,
              como a OpenAI, exclusivamente para gerar respostas, classificações, resumos,
              automações ou outras funcionalidades relacionadas ao serviço solicitado.
            </p>
            <p className="mt-4">
              O uso dessas tecnologias é realizado somente na medida necessária para a
              prestação do serviço e de acordo com as configurações técnicas adotadas pela
              Wal Brasil.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">5. Compartilhamento de dados</h2>
            <p>
              Dados podem ser compartilhados com provedores de infraestrutura, hospedagem,
              mensageria, inteligência artificial, monitoramento e outros serviços tecnológicos
              necessários ao funcionamento das soluções da Wal Brasil. Não vendemos dados
              pessoais.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">6. Armazenamento e segurança</h2>
            <p>
              Adotamos medidas técnicas e organizacionais compatíveis com a natureza dos
              serviços prestados para reduzir riscos de acesso não autorizado, perda,
              alteração ou divulgação indevida de informações.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">7. Direitos do usuário</h2>
            <p>
              O usuário pode solicitar informações sobre seus dados, correção, atualização,
              eliminação ou outras providências previstas na legislação aplicável, inclusive
              na Lei Geral de Proteção de Dados Pessoais (LGPD).
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">8. Exclusão de dados</h2>
            <p>
              Solicitações de exclusão podem ser feitas pelo e-mail contato@walbrasil.dev ou
              pela página específica de exclusão de dados da Wal Brasil.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">9. Alterações desta política</h2>
            <p>
              Esta política pode ser atualizada periodicamente para refletir mudanças nos
              serviços, tecnologias utilizadas ou exigências legais. A versão vigente será
              sempre disponibilizada nesta página.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">10. Contato</h2>
            <p>
              Para dúvidas sobre privacidade e proteção de dados, entre em contato pelo e-mail{" "}
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

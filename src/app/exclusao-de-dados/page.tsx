export default function ExclusaoDeDadosPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-10">
        <header className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
            Wal Brasil
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Exclusão de Dados
          </h1>
          <p className="mt-4 text-sm text-zinc-500">
            Última atualização: 24 de agosto de 2026
          </p>
        </header>

        <div className="space-y-10 text-[17px] leading-8 text-zinc-700">
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">
              Como solicitar a exclusão dos seus dados
            </h2>
            <p>
              Se você utilizou algum serviço da Wal Brasil e deseja solicitar a exclusão de
              dados pessoais associados à sua interação, envie uma solicitação para{" "}
              <a
                href="mailto:contato@walbrasil.dev"
                className="font-medium text-zinc-950 underline underline-offset-4"
              >
                contato@walbrasil.dev
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">
              Informações que devem constar na solicitação
            </h2>
            <p>
              Para localizar corretamente os dados, informe na mensagem, quando aplicável:
              nome, telefone ou e-mail utilizado no serviço e uma breve descrição da
              solicitação. Não envie senhas, documentos sensíveis ou informações
              desnecessárias.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">Prazo e processamento</h2>
            <p>
              A solicitação será analisada e processada em prazo razoável, observadas as
              exigências legais e técnicas aplicáveis. Poderemos solicitar informações
              adicionais apenas quando necessário para confirmar a identidade do solicitante
              ou localizar os registros corretos.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">
              Dados que podem ser preservados
            </h2>
            <p>
              Alguns registros podem ser mantidos quando houver obrigação legal, necessidade
              de prevenção a fraudes, exercício regular de direitos, segurança dos sistemas ou
              outra base legal aplicável. Nessas situações, os dados serão preservados apenas
              pelo período necessário.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">
              Dados relacionados ao WhatsApp e serviços integrados
            </h2>
            <p>
              Quando a solicitação envolver interações realizadas por WhatsApp ou outros
              serviços integrados, a Wal Brasil excluirá os dados sob seu controle na medida
              aplicável. Dados mantidos diretamente por plataformas de terceiros poderão estar
              sujeitos às políticas e procedimentos próprios desses fornecedores.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">Contato</h2>
            <p>
              Solicitações e dúvidas podem ser enviadas para{" "}
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

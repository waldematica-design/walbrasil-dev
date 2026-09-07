import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de Privacidade, cookies e proteção de dados da Wal Brasil.",
  alternates: { canonical: "/politica-de-privacidade/" },
};

export default function PoliticaDePrivacidadePage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-blue-700 hover:text-blue-600">
          ← Voltar ao site
        </Link>

        <header className="mb-12 mt-8">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
            Wal Brasil
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Política de Privacidade
          </h1>
          <p className="mt-4 text-sm text-zinc-500">
            Última atualização: 7 de setembro de 2026
          </p>
        </header>

        <div className="space-y-10 text-[17px] leading-8 text-zinc-700">
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">1. Sobre esta política</h2>
            <p>
              Esta Política de Privacidade descreve como a Wal Brasil trata dados pessoais relacionados ao site, contatos comerciais, demonstrações, integrações e recursos com inteligência artificial. O canal para assuntos de privacidade é contato@walbrasil.dev.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">2. Dados que podem ser tratados</h2>
            <p>
              Dependendo da interação, podem ser tratados nome, telefone, e-mail, empresa ou atividade profissional, conteúdo de mensagens, informações fornecidas voluntariamente em formulários ou conversas, dados técnicos de acesso, data e horário das interações e registros necessários ao funcionamento e à segurança do site.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">3. Finalidades</h2>
            <p>
              Os dados podem ser utilizados para responder solicitações, apresentar serviços e projetos, operar recursos de atendimento e inteligência artificial, registrar interações necessárias à continuidade do atendimento, medir o desempenho do site quando autorizado, prevenir abuso, manter segurança e cumprir obrigações legais.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">4. Inteligência artificial</h2>
            <p>
              O site pode oferecer recursos de conversa com inteligência artificial. O conteúdo enviado pelo usuário pode ser processado por provedores tecnológicos necessários para gerar respostas e manter o serviço. Sistemas de IA podem produzir imprecisões; evite compartilhar dados sensíveis ou informações desnecessárias e confira informações relevantes antes de utilizá-las em decisões importantes.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">5. Fornecedores e compartilhamento</h2>
            <p>
              Dados podem ser tratados por provedores de hospedagem, infraestrutura, inteligência artificial, mensageria, medição e outros serviços necessários ao funcionamento das soluções. Não vendemos dados pessoais. Alguns fornecedores podem operar infraestrutura fora do Brasil, o que pode envolver transferência internacional de dados conforme a legislação aplicável.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">6. Cookies e Google Tag Manager</h2>
            <div className="space-y-4">
              <p>
                O site utiliza recursos essenciais para funcionar e pode carregar ferramentas opcionais de medição por meio do Google Tag Manager. Essas ferramentas opcionais somente são carregadas depois que o visitante escolhe aceitar a medição no aviso de privacidade.
              </p>
              <p>
                A escolha é guardada no armazenamento local do navegador. O visitante pode reabrir e alterar essa decisão pelo link “Preferências de privacidade” disponível no rodapé do site.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">7. Armazenamento e segurança</h2>
            <p>
              Os dados são mantidos pelo período necessário às finalidades informadas, ao cumprimento de obrigações legais e ao exercício regular de direitos. Adotamos medidas técnicas e organizacionais compatíveis com a natureza dos serviços para reduzir riscos de acesso não autorizado, perda, alteração ou divulgação indevida.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">8. Direitos do titular</h2>
            <p>
              Nos termos da LGPD, o titular pode solicitar, conforme aplicável, confirmação de tratamento, acesso, correção, informação sobre compartilhamentos, anonimização, bloqueio ou eliminação, portabilidade, revogação de consentimento, oposição e revisão de decisões automatizadas.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">9. Exclusão de dados</h2>
            <p>
              Solicitações podem ser enviadas para contato@walbrasil.dev ou realizadas pela página de exclusão de dados disponível neste site. A exclusão observará as hipóteses legais de conservação obrigatória ou necessária.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">10. Alterações e contato</h2>
            <p>
              Esta política pode ser atualizada para refletir mudanças nos serviços, fornecedores ou exigências legais. Para dúvidas ou solicitações, escreva para{" "}
              <a href="mailto:contato@walbrasil.dev" className="font-medium text-zinc-950 underline underline-offset-4">
                contato@walbrasil.dev
              </a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Serviço",
  description: "Termos de Serviço dos sites, demonstrações e soluções da Wal Brasil.",
  alternates: { canonical: "/termos-de-servico/" },
};

export default function TermosDeServicoPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-blue-700 hover:text-blue-600">
          ← Voltar ao site
        </Link>

        <header className="mb-12 mt-8">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">Wal Brasil</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Termos de Serviço</h1>
          <p className="mt-4 text-sm text-zinc-500">Última atualização: 7 de setembro de 2026</p>
        </header>

        <div className="space-y-10 text-[17px] leading-8 text-zinc-700">
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">1. Aceitação</h2>
            <p>Ao utilizar este site, demonstrações, recursos de IA ou solicitar serviços, você concorda com estes Termos de Serviço e com a Política de Privacidade aplicável.</p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">2. Serviços</h2>
            <p>A Wal Brasil apresenta projetos e presta serviços de desenvolvimento web, sites, aplicações, integrações, SEO, automações e soluções com inteligência artificial. Escopo, preço, prazo e condições de um projeto contratado são definidos na proposta correspondente.</p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">3. Demonstrações e portfólio</h2>
            <p>Demonstrações e cases existem para apresentar conceitos, experiência técnica e possibilidades de implementação. Eles não representam promessa de resultado, contratação automática ou garantia de disponibilidade permanente.</p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">4. Inteligência artificial</h2>
            <p>Respostas produzidas por sistemas de IA podem conter imprecisões. O usuário deve conferir informações relevantes antes de utilizá-las em decisões profissionais, financeiras, jurídicas, médicas ou em outras situações que exijam análise especializada.</p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">5. Uso adequado</h2>
            <p>É proibido utilizar o site e seus recursos para fraude, spam, invasão, assédio, violação de direitos de terceiros, tratamento ilícito de dados, tentativa de comprometer sistemas ou qualquer finalidade contrária à legislação aplicável.</p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">6. Serviços de terceiros</h2>
            <p>Algumas funcionalidades podem depender de serviços de terceiros, incluindo hospedagem, inteligência artificial, mensageria, analytics, APIs e outras plataformas. Alterações, limites ou indisponibilidade desses fornecedores podem afetar temporariamente determinadas funcionalidades.</p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">7. Propriedade intelectual</h2>
            <p>Marcas, códigos, layouts, textos, estruturas, elementos visuais e demais conteúdos próprios da Wal Brasil são protegidos pela legislação aplicável, salvo indicação expressa em contrário. Direitos específicos sobre entregáveis de projetos são aqueles definidos na contratação correspondente.</p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">8. Disponibilidade</h2>
            <p>A Wal Brasil busca manter seus serviços disponíveis e funcionais, mas não garante operação ininterrupta ou livre de falhas, especialmente quando houver dependência de infraestrutura ou serviços de terceiros.</p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">9. Privacidade</h2>
            <p>O tratamento de dados pessoais é descrito na <Link href="/politica-de-privacidade/" className="font-medium text-zinc-950 underline underline-offset-4">Política de Privacidade</Link>. Solicitações de eliminação também podem ser encaminhadas pela página de exclusão de dados.</p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">10. Contato</h2>
            <p>Dúvidas sobre estes termos podem ser enviadas para <a href="mailto:contato@walbrasil.dev" className="font-medium text-zinc-950 underline underline-offset-4">contato@walbrasil.dev</a>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}

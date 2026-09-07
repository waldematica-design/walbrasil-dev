import Link from "next/link";

export function LegalFooterBar() {
  return (
    <div className="border-t border-white/10 bg-[#050b13] text-slate-500">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <span>© 2026 Wal Brasil. Todos os direitos reservados.</span>
        <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Informações legais">
          <Link className="transition hover:text-blue-300" href="/politica-de-privacidade/">Política de Privacidade</Link>
          <Link className="transition hover:text-blue-300" href="/termos-de-servico/">Termos de Serviço</Link>
          <Link className="transition hover:text-blue-300" href="/exclusao-de-dados/">Exclusão de Dados</Link>
          <a className="transition hover:text-blue-300" href="mailto:contato@walbrasil.dev">Contato</a>
        </nav>
      </div>
    </div>
  );
}

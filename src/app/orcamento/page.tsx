import type { Metadata } from "next";
import { OrcamentoClient } from "./orcamento-client";

export const metadata: Metadata = {
  title: "Solicitar orçamento",
  description: "Conte seu projeto e solicite um orçamento diretamente ao Wal Brasil.",
  robots: { index: false, follow: true },
};

export default function OrcamentoPage() {
  return <OrcamentoClient />;
}

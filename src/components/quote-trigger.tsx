"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

import { useQuote } from "./quote-provider";

type QuoteTriggerProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "onClick"> & {
  children: ReactNode;
  projectType?: string;
};

export function QuoteTrigger({
  children,
  projectType,
  className,
  ...props
}: QuoteTriggerProps) {
  const { openQuote } = useQuote();

  return (
    <button
      {...props}
      type="button"
      className={className}
      onClick={() => openQuote(projectType)}
    >
      {children}
    </button>
  );
}

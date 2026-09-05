"use client";

import { usePathname } from "next/navigation";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import {
  trackEvent,
  type AnalyticsEventName,
} from "@/lib/analytics";

type TrackedLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "onClick"
> & {
  href: string;
  eventName: AnalyticsEventName;
  ctaLocation: string;
  children: ReactNode;
};

export default function TrackedLink({
  href,
  eventName,
  ctaLocation,
  children,
  ...anchorProps
}: TrackedLinkProps) {
  const pathname = usePathname();

  return (
    <a
      {...anchorProps}
      href={href}
      onClick={() =>
        trackEvent(eventName, {
          source_site: "walbrasil.dev",
          page_path: pathname,
          cta_location: ctaLocation,
        })
      }
    >
      {children}
    </a>
  );
}

export const ANALYTICS_EVENT_NAMES = [
  "whatsapp_click",
  "agent_open",
  "agent_started",
  "lead_created",
  "quote_requested",
  "human_handoff_requested",
  "tecerale_click",
] as const;

export type AnalyticsEventName = (typeof ANALYTICS_EVENT_NAMES)[number];

export type AnalyticsEventParameters = {
  source_site?: string;
  page_path?: string;
  cta_location?: string;
  service?: string;
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

const allowedEvents = new Set<string>(ANALYTICS_EVENT_NAMES);
const parameterNames = [
  "source_site",
  "page_path",
  "cta_location",
  "service",
] as const;

function cleanParameter(value: unknown) {
  if (typeof value !== "string") return null;
  const cleaned = value.trim().slice(0, 120);
  return cleaned || null;
}

export function trackEvent(
  eventName: AnalyticsEventName,
  parameters: AnalyticsEventParameters = {},
) {
  if (typeof window === "undefined" || !allowedEvents.has(eventName)) return;

  try {
    const event: Record<string, string> = { event: eventName };

    for (const name of parameterNames) {
      const value = cleanParameter(parameters[name]);
      if (value) event[name] = value;
    }

    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push(event);
  } catch {
    // Analytics must never interrupt the visitor's action.
  }
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://walbrasil.dev"),

  title: {
    default: "Wal Brasil | Desenvolvimento Web, WordPress e IA",
    template: "%s | Wal Brasil",
  },

  description:
    "Desenvolvimento de sites, landing pages, WordPress, SEO e soluções web com inteligência artificial. Conheça os projetos e serviços da Wal Brasil.",

  applicationName: "Wal Brasil",

  keywords: [
    "desenvolvimento web",
    "desenvolvedor web",
    "WordPress",
    "Elementor",
    "landing pages",
    "sites institucionais",
    "SEO",
    "Next.js",
    "inteligência artificial",
    "soluções com IA",
    "Wal Brasil",
  ],

  authors: [{ name: "Wal Brasil", url: "https://walbrasil.dev" }],
  creator: "Wal Brasil",
  publisher: "Wal Brasil",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://walbrasil.dev",
    siteName: "Wal Brasil",
    title: "Wal Brasil | Desenvolvimento Web, WordPress e IA",
    description:
      "Desenvolvimento de sites, landing pages, WordPress, SEO e soluções web com inteligência artificial.",
    images: [
      {
        url: "/branding/wal-brasil-logo.png",
        width: 512,
        height: 512,
        alt: "Wal Brasil",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "Wal Brasil | Desenvolvimento Web, WordPress e IA",
    description:
      "Desenvolvimento de sites, landing pages, WordPress, SEO e soluções web com inteligência artificial.",
    images: ["/branding/wal-brasil-logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

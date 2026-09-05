import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: "https://walbrasil.dev/sitemap.xml",
    host: "https://walbrasil.dev",
  };
}

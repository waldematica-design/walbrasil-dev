import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://walbrasil.dev/",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://walbrasil.dev/projetos/waldematica-ia",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://walbrasil.dev/projetos/waldematica",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://walbrasil.dev/projetos/blog-wordpress-seo",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://walbrasil.dev/projetos/landing-page-advocacia",
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://walbrasil.dev/projetos/clinica-silva",
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}

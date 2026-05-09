import type { MetadataRoute } from "next";

export default function sitemap():
MetadataRoute.Sitemap {

  return [
    {
      url:
        "https://shakir-digital-hub.vercel.app",

      lastModified:
        new Date(),

      changeFrequency:
        "weekly",

      priority: 1,
    },

    {
      url:
        "https://shakir-digital-hub.vercel.app/login",

      lastModified:
        new Date(),

      changeFrequency:
        "monthly",

      priority: 0.8,
    },
  ];
}
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://shakirdigitalhub.vercel.app",
      lastModified: new Date(),
      priority: 1,
    },

    {
      url: "https://shakirdigitalhub.vercel.app/#courses",
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: "https://shakirdigitalhub.vercel.app/#services",
      lastModified: new Date(),
      priority: 0.8,
    },

    {
      url: "https://shakirdigitalhub.vercel.app/#contact",
      lastModified: new Date(),
      priority: 0.7,
    },
  ];
}
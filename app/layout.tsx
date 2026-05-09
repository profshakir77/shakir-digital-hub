import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {

  metadataBase:
    new URL(
      "https://shakir-digital-hub.vercel.app"
    ),

  title: {
    default:
      "Shakir Digital Hub | Online IT Courses & Digital Services",

    template:
      "%s | Shakir Digital Hub",
  },

  description:
    "Learn website development, graphic designing, digital marketing, freelancing, Shopify, SEO, and modern digital skills online with Shakir Digital Hub.",

  keywords: [
    "Shakir Digital Hub",
    "Online IT Courses",
    "Website Development",
    "Graphic Designing",
    "Digital Marketing",
    "Freelancing",
    "Shopify",
    "SEO",
    "Online Learning",
    "Pakistan IT Courses",
  ],

  authors: [
    {
      name:
        "Shakir Digital Hub",
    },
  ],

  creator:
    "Shakir Digital Hub",

  publisher:
    "Shakir Digital Hub",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {

    title:
      "Shakir Digital Hub",

    description:
      "Professional online IT courses and digital services worldwide.",

    url:
      "https://shakir-digital-hub.vercel.app",

    siteName:
      "Shakir Digital Hub",

    locale:
      "en_US",

    type:
      "website",

    images: [
      {
        url:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",

        width: 1200,

        height: 630,

        alt:
          "Shakir Digital Hub",
      },
    ],
  },

  twitter: {

    card:
      "summary_large_image",

    title:
      "Shakir Digital Hub",

    description:
      "Professional online IT courses and digital services worldwide.",

    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    ],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <body>
        {children}
      </body>

    </html>
  );
}
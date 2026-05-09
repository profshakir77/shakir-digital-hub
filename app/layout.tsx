import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {

  title:
    "Shakir Digital Hub | Online IT Courses & Digital Services",

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
  },

  twitter: {

    card:
      "summary_large_image",

    title:
      "Shakir Digital Hub",

    description:
      "Professional online IT courses and digital services worldwide.",
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
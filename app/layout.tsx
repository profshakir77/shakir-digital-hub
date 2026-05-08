import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shakir Digital Hub | Online IT Courses & Digital Services",

  description:
    "Shakir Digital Hub provides professional online courses in web development, graphic designing, freelancing, SEO, digital marketing, Shopify, and IT skills worldwide.",

  keywords: [
    "web development course",
    "graphic designing",
    "digital marketing",
    "freelancing",
    "SEO course",
    "online courses Pakistan",
    "Shakir Digital Hub",
  ],

  authors: [{ name: "Shakir Digital Hub" }],

  creator: "Shakir Digital Hub",

  publisher: "Shakir Digital Hub",

  metadataBase: new URL("https://shakir-digital-hub-website.vercel.app"),

  verification: {
    google: <meta name="google-site-verification" content="gf-suF1ZemBTVB9FcrSuTVm800cr82KixzLEyqJ4NQ8" />,
  },

  openGraph: {
    title: "Shakir Digital Hub",

    description:
      "Professional online IT courses and digital services worldwide.",

    url: "https://shakir-digital-hub-website.vercel.app",

    siteName: "Shakir Digital Hub",

    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Shakir Digital Hub",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Shakir Digital Hub",

    description:
      "Professional online IT courses and digital services.",

    images: ["/images/logo.png"],
  },

  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
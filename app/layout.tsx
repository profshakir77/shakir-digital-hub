import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>
          Shakir Digital Hub | Online IT Courses & Digital Services
        </title>

        <meta
          name="description"
          content="Shakir Digital Hub provides professional online courses in web development, graphic designing, freelancing, SEO, digital marketing, Shopify, and IT skills worldwide."
        />

        <meta
          name="keywords"
          content="web development, graphic designing, SEO, freelancing, digital marketing, online courses"
        />

        <meta
          name="google-site-verification"
          content="gf-suF1ZemBTVB9FcrSuTVm800cr82KixzLEyqJ4NQ8"
        />

        <meta
          property="og:title"
          content="Shakir Digital Hub"
        />

        <meta
          property="og:description"
          content="Professional online IT courses and digital services worldwide."
        />

        <meta
          property="og:url"
          content="https://shakir-digital-hub-website.vercel.app"
        />

        <meta
          property="og:type"
          content="website"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
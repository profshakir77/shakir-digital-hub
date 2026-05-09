import Navbar from "./components/Navbar";

import Hero from "./components/Hero";

import Stats from "./components/Stats";

import About from "./components/About";

import DynamicCourses from "./components/DynamicCourses";

import Testimonials from "./components/Testimonials";

import CTA from "./components/CTA";

import Faq from "./components/Faq";

import EnrollmentForm from "./components/EnrollmentForm";

import Contact from "./components/Contact";

import Whatsapp from "./components/Whatsapp";

import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className="bg-slate-950 text-white overflow-hidden">

      <Navbar />

      <Hero />

      <Stats />

      <About />

      <DynamicCourses />

      <Testimonials />

      <CTA />

      <Faq />

      <EnrollmentForm />

      <Contact />

      <Whatsapp />

      <Footer />

    </main>
  );
}
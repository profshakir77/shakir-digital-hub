import Navbar from "./components/Navbar";

import Hero from "./components/Hero";

import Stats from "./components/Stats";

import About from "./components/About";
import CourseCategories from "./components/CourseCategories";

import DynamicCourses from "./components/DynamicCourses";

import Testimonials from "./components/Testimonials";
import TechStack from "./components/TechStack";
import Brands from "./components/Brands";

import CTA from "./components/CTA";

import Faq from "./components/Faq";

import EnrollmentForm from "./components/EnrollmentForm";

import Contact from "./components/Contact";

import Whatsapp from "./components/Whatsapp";

import Footer from "./components/Footer";

import Newsletter from "./components/Newsletter";
import Process from "./components/Process";

export default function HomePage() {
  return (
    <main className="bg-slate-950 text-white overflow-hidden">

      <Navbar />

      <Hero />
      <Brands />
      <Stats />

      <About />

      <DynamicCourses />
      <Process />
      <TechStack />
      <CourseCategories />
      <Testimonials />

      <CTA />

      <Faq />

      <EnrollmentForm />
      <Newsletter />

      <Contact />

      <Whatsapp />

      <Footer />

    </main>
  );
}
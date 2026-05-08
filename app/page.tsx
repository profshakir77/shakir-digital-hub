import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Courses from "./components/Courses";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Whatsapp from "./components/Whatsapp";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Courses />
      <About />
      <Testimonials />
      <Blog />
      <Faq />
      <Contact />
      <Footer />
      <Whatsapp />
    </>
  );
}
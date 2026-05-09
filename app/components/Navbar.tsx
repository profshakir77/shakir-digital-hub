"use client";

import { useEffect, useState } from "react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [activeSection, setActiveSection] =
    useState("home");

  const [scrolled, setScrolled] =
    useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(
        window.scrollY > 50
      );

      const sections = [
        "home",
        "courses",
        "enroll",
        "contact",
      ];

      sections.forEach((section) => {

        const element =
          document.getElementById(
            section
          );

        if (element) {

          const top =
            window.scrollY;

          const offset =
            element.offsetTop - 150;

          const height =
            element.offsetHeight;

          if (
            top >= offset &&
            top <
              offset + height
          ) {

            setActiveSection(
              section
            );
          }
        }
      });
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };

  }, []);

  const navLinkClass = (
    section: string
  ) =>
    activeSection === section
      ? "text-blue-400 font-bold"
      : "hover:text-blue-400 transition";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-slate-800 shadow-2xl"
          : "bg-transparent"
      }`}
    >

      <div className="container-custom flex items-center justify-between py-5">

        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-black gradient-text"
        >
          Shakir Digital Hub
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10 text-white">

          <a
            href="#home"
            className={
              navLinkClass("home")
            }
          >
            Home
          </a>

          <a
            href="#courses"
            className={
              navLinkClass(
                "courses"
              )
            }
          >
            Courses
          </a>

          <a
            href="#enroll"
            className={
              navLinkClass(
                "enroll"
              )
            }
          >
            Enroll
          </a>

          <a
            href="#contact"
            className={
              navLinkClass(
                "contact"
              )
            }
          >
            Contact
          </a>

          <a
            href="/admin"
            className="hover:text-blue-400 transition"
          >
            Admin
          </a>

          <a
            href="https://wa.me/923059494585"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 hover:scale-105 transition duration-300 px-6 py-3 rounded-xl font-bold shadow-lg shadow-green-500/30"
          >
            WhatsApp
          </a>

        </nav>

        {/* Mobile Button */}
        <button
          onClick={() =>
            setMenuOpen(
              !menuOpen
            )
          }
          className="lg:hidden text-white text-4xl"
        >
          {menuOpen
            ? "×"
            : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-t border-slate-800 px-6 py-8 animate-in fade-in slide-in-from-top duration-300">

          <nav className="flex flex-col gap-6 text-white text-lg">

            <a
              href="#home"
              onClick={() =>
                setMenuOpen(false)
              }
              className={
                navLinkClass("home")
              }
            >
              Home
            </a>

            <a
              href="#courses"
              onClick={() =>
                setMenuOpen(false)
              }
              className={
                navLinkClass(
                  "courses"
                )
              }
            >
              Courses
            </a>

            <a
              href="#enroll"
              onClick={() =>
                setMenuOpen(false)
              }
              className={
                navLinkClass(
                  "enroll"
                )
              }
            >
              Enroll
            </a>

            <a
              href="#contact"
              onClick={() =>
                setMenuOpen(false)
              }
              className={
                navLinkClass(
                  "contact"
                )
              }
            >
              Contact
            </a>

            <a
              href="/admin"
              onClick={() =>
                setMenuOpen(false)
              }
              className="hover:text-blue-400 transition"
            >
              Admin
            </a>

            <a
              href="https://wa.me/923059494585"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 transition px-6 py-4 rounded-xl font-bold text-center"
            >
              WhatsApp
            </a>

          </nav>

        </div>

      )}

    </header>
  );
}
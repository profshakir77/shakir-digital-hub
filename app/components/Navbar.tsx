"use client";

import { useState } from "react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] =
    useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">

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
            className="hover:text-blue-400 transition"
          >
            Home
          </a>

          <a
            href="#courses"
            className="hover:text-blue-400 transition"
          >
            Courses
          </a>

          <a
            href="#enroll"
            className="hover:text-blue-400 transition"
          >
            Enroll
          </a>

          <a
            href="#contact"
            className="hover:text-blue-400 transition"
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
            setMenuOpen(!menuOpen)
          }
          className="lg:hidden text-white text-4xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="lg:hidden bg-slate-950 border-t border-slate-800 px-6 py-8">

          <nav className="flex flex-col gap-6 text-white text-lg">

            <a
              href="#home"
              onClick={() =>
                setMenuOpen(false)
              }
              className="hover:text-blue-400 transition"
            >
              Home
            </a>

            <a
              href="#courses"
              onClick={() =>
                setMenuOpen(false)
              }
              className="hover:text-blue-400 transition"
            >
              Courses
            </a>

            <a
              href="#enroll"
              onClick={() =>
                setMenuOpen(false)
              }
              className="hover:text-blue-400 transition"
            >
              Enroll
            </a>

            <a
              href="#contact"
              onClick={() =>
                setMenuOpen(false)
              }
              className="hover:text-blue-400 transition"
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
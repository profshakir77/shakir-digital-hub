"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur border-b border-slate-800">
      <div className="container-custom flex justify-between items-center py-5">

        {/* Logo */}
        <div className="flex items-center gap-4">
          <Image
            src="/images/logo.png"
            alt="Shakir Digital Hub"
            width={55}
            height={55}
            className="rounded-full border border-slate-700"
          />

          <div>
            <h1 className="text-2xl md:text-3xl font-black text-blue-400">
              SHAKIR DIGITAL HUB
            </h1>

            <p className="text-slate-400 text-sm">
              Digital Skills Academy
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-lg">
          <a href="#home" className="hover:text-blue-400 transition">
            Home
          </a>

          <a href="#services" className="hover:text-blue-400 transition">
            Services
          </a>

          <a href="#courses" className="hover:text-blue-400 transition">
            Courses
          </a>

          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>

          <a href="#testimonials" className="hover:text-blue-400 transition">
            Reviews
          </a>

          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <nav className="flex flex-col p-6 gap-5 text-lg">

            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>

            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>

            <a href="#courses" onClick={() => setMenuOpen(false)}>
              Courses
            </a>

            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>

            <a href="#testimonials" onClick={() => setMenuOpen(false)}>
              Reviews
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>

          </nav>
        </div>
      )}
    </header>
  );
}
"use client";

import { useState } from "react";

export default function Whatsapp() {

  const [hovered, setHovered] =
    useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {/* Tooltip */}
      {hovered && (

        <div className="absolute right-20 bottom-3 bg-slate-900 border border-slate-700 text-white px-5 py-3 rounded-2xl whitespace-nowrap shadow-2xl">

          Chat With Us 🚀

        </div>

      )}

      {/* Button */}
      <a
        href="https://wa.me/923059494585?text=Assalamualaikum%20I%20want%20information%20about%20your%20courses"
        target="_blank"
        onMouseEnter={() =>
          setHovered(true)
        }
        onMouseLeave={() =>
          setHovered(false)
        }
        className="relative bg-green-500 hover:bg-green-600 hover:scale-110 transition duration-300 w-16 h-16 rounded-full flex items-center justify-center text-white text-3xl shadow-2xl shadow-green-500/40"
      >

        {/* Pulse */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></span>

        {/* Icon */}
        <span className="relative z-10">
          💬
        </span>

      </a>

    </div>
  );
}
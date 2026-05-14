"use client";

import { useState } from "react";

export default function Newsletter() {

  const [email, setEmail] =
    useState("");

  const [success, setSuccess] =
    useState(false);

  const handleSubmit = (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    setSuccess(true);

    setEmail("");

    setTimeout(() => {

      setSuccess(false);

    }, 4000);
  };

  return (
    <section className="py-28 bg-slate-900 text-white relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="container-custom relative z-10">

        <div className="glass-effect rounded-[50px] p-10 md:p-20 text-center relative overflow-hidden">

          {/* Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10"></div>

          <div className="relative z-10">

            <span className="bg-blue-500/20 text-blue-400 px-5 py-2 rounded-full text-sm">
              Join Our Community
            </span>

            <h2 className="text-5xl md:text-7xl font-black mt-8 mb-8 leading-tight">

              Subscribe To
              <span className="block gradient-text">
                Our Newsletter
              </span>

            </h2>

            <p className="text-slate-400 text-xl leading-9 max-w-4xl mx-auto mb-12">

              Get updates about new online courses, freelancing tips, digital marketing strategies, and modern IT skills.

            </p>

            {/* Success */}
            {success && (

              <div className="bg-green-500/20 border border-green-500 text-green-300 rounded-2xl p-5 mb-8 max-w-2xl mx-auto font-bold">

                Subscription successful 🚀

              </div>

            )}

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="max-w-3xl mx-auto flex flex-col md:flex-row gap-5"
            >

              <input
                type="email"
                required
                value={email}
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
                placeholder="Enter your email address"
                className="flex-1 bg-slate-950 border border-slate-700 focus:border-blue-500 transition rounded-2xl p-5 text-white outline-none"
              />

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 hover:scale-105 transition duration-300 px-10 py-5 rounded-2xl font-bold text-lg shadow-lg shadow-blue-500/30"
              >
                Subscribe
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}
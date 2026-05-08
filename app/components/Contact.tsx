"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 bg-slate-950">
      <div className="container-custom">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black mb-6">
            Contact & Registration
          </h2>

          <p className="text-slate-400 text-xl">
            Start your digital learning journey today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left Side */}
          <div className="bg-slate-900 border border-slate-800 rounded-[32px] p-10">

            <h3 className="text-3xl font-black mb-10 text-blue-400">
              Student Registration
            </h3>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">

                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full bg-slate-950 border border-slate-700 rounded-2xl p-5 outline-none focus:border-blue-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full bg-slate-950 border border-slate-700 rounded-2xl p-5 outline-none focus:border-blue-500"
                />

                <input
                  type="text"
                  placeholder="Phone / WhatsApp"
                  required
                  className="w-full bg-slate-950 border border-slate-700 rounded-2xl p-5 outline-none focus:border-blue-500"
                />

                <select
                  required
                  className="w-full bg-slate-950 border border-slate-700 rounded-2xl p-5 outline-none focus:border-blue-500"
                >
                  <option value="">Select Course</option>
                  <option>Website Development</option>
                  <option>Graphic Designing</option>
                  <option>Digital Marketing</option>
                  <option>Freelancing</option>
                  <option>POS Software</option>
                  <option>Shopify & E-Commerce</option>
                </select>

                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full bg-slate-950 border border-slate-700 rounded-2xl p-5 outline-none focus:border-blue-500"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 transition py-5 rounded-2xl text-lg font-bold"
                >
                  Submit Registration
                </button>

              </form>
            ) : (
              <div className="bg-green-500/20 border border-green-500 rounded-2xl p-8 text-center">
                <h4 className="text-3xl font-bold text-green-400 mb-4">
                  Registration Submitted
                </h4>

                <p className="text-slate-300 text-lg">
                  Thank you for contacting Shakir Digital Hub.
                </p>
              </div>
            )}

          </div>

          {/* Right Side */}
          <div>

            {/* Contact Cards */}
            <div className="grid gap-6 mb-10">

              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">
                  WhatsApp
                </h3>

                <a
                  href="https://wa.me/923059494585"
                  target="_blank"
                  className="text-slate-300 text-lg"
                >
                  +92 305 9494585
                </a>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">
                  Email
                </h3>

                <a
                  href="mailto:shakirdigitalhub@gmail.com"
                  className="text-slate-300 text-lg"
                >
                  shakirdigitalhub@gmail.com
                </a>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">
                  Facebook Page
                </h3>

                <a
                  href="https://web.facebook.com/profile.php?id=61584067904240"
                  target="_blank"
                  className="text-slate-300 text-lg"
                >
                  Visit Facebook Page
                </a>
              </div>

            </div>

            {/* Google Map */}
            <div className="bg-slate-900 border border-slate-800 rounded-[32px] overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=Pakistan&t=&z=4&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="350"
                loading="lazy"
              ></iframe>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
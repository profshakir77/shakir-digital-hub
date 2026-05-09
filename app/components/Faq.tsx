"use client";

import { useState } from "react";

export default function Faq() {

  const faqs = [
    {
      question:
        "Are classes online or physical?",

      answer:
        "All courses are conducted online so students worldwide can learn from anywhere.",
    },

    {
      question:
        "Do you provide freelancing guidance?",

      answer:
        "Yes, we provide complete freelancing guidance including Fiverr, Upwork, and client hunting strategies.",
    },

    {
      question:
        "Will I receive certificates?",

      answer:
        "Yes, students receive certificates after successfully completing courses.",
    },

    {
      question:
        "Can beginners join these courses?",

      answer:
        "Absolutely. Our courses are beginner-friendly and designed for all skill levels.",
    },

    {
      question:
        "Do you provide recordings of classes?",

      answer:
        "Yes, class recordings and learning materials are provided for better learning experience.",
    },
  ];

  const [openIndex, setOpenIndex] =
    useState<number | null>(0);

  return (
    <section className="py-28 bg-black text-white relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full"></div>

      <div className="container-custom max-w-5xl relative z-10">

        <div className="text-center mb-20">

          <span className="bg-blue-500/20 text-blue-400 px-5 py-2 rounded-full text-sm">
            Frequently Asked Questions
          </span>

          <h2 className="text-5xl md:text-6xl font-black mt-8 mb-6">

            Got Questions?
            <span className="block gradient-text">
              We Have Answers
            </span>

          </h2>

          <p className="text-slate-400 text-xl leading-8">
            Everything you need to know about our online courses and services.
          </p>

        </div>

        <div className="space-y-6">

          {faqs.map((item, index) => (

            <div
              key={index}
              className="glass-effect rounded-[28px] overflow-hidden hover:border-blue-500 transition duration-300"
            >

              <button
                onClick={() =>
                  setOpenIndex(
                    openIndex === index
                      ? null
                      : index
                  )
                }
                className="w-full flex items-center justify-between text-left p-8 text-xl font-bold"
              >

                {item.question}

                <span className="text-3xl gradient-text">
                  {openIndex === index
                    ? "−"
                    : "+"}
                </span>

              </button>

              {openIndex === index && (

                <div className="px-8 pb-8 text-slate-400 leading-8 text-lg">

                  {item.answer}

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
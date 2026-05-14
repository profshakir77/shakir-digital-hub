"use client";

import { useState } from "react";

export default function Faq() {

  const [openIndex, setOpenIndex] =
    useState<number | null>(0);

  const faqs = [
    {
      question:
        "Are the courses completely online?",

      answer:
        "Yes, all courses are fully online and accessible from anywhere in the world.",
    },

    {
      question:
        "Do I need prior experience?",

      answer:
        "No. Our beginner-friendly courses are designed for students with zero experience.",
    },

    {
      question:
        "Will I get freelancing guidance?",

      answer:
        "Yes, we provide freelancing guidance, Fiverr tips, Upwork strategies, and client hunting methods.",
    },

    {
      question:
        "How do I enroll in a course?",

      answer:
        "You can enroll directly using the enrollment form or contact us on WhatsApp.",
    },

    {
      question:
        "Do you provide certificates?",

      answer:
        "Yes, certificates can be provided after successful course completion.",
    },
  ];

  const toggleFaq = (
    index: number
  ) => {

    setOpenIndex(
      openIndex === index
        ? null
        : index
    );
  };

  return (
    <section className="py-28 bg-slate-900 text-white relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full"></div>

      <div className="container-custom relative z-10">

        {/* Heading */}
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

          <p className="text-slate-400 text-xl leading-8 max-w-3xl mx-auto">

            Everything you need to know about our online IT courses and digital services.

          </p>

        </div>

        {/* FAQ List */}
        <div className="max-w-5xl mx-auto space-y-6">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="glass-effect rounded-[32px] overflow-hidden"
            >

              {/* Question */}
              <button
                onClick={() =>
                  toggleFaq(index)
                }
                className="w-full flex items-center justify-between p-8 text-left"
              >

                <h3 className="text-2xl font-bold">
                  {faq.question}
                </h3>

                <span className="text-4xl text-blue-400">

                  {openIndex === index
                    ? "−"
                    : "+"}

                </span>

              </button>

              {/* Answer */}
              {openIndex === index && (

                <div className="px-8 pb-8 text-slate-400 leading-8 text-lg">

                  {faq.answer}

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
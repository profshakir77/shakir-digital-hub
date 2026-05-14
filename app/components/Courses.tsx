"use client";

import { useState } from "react";
import PaymentModal from "./PaymentModal";

const courses = [
  {
    title: "Website Development",
    duration: "2 Months",
    local: "PKR 25,000",
    international: "$120",
  },
  {
    title: "Graphic Designing",
    duration: "6 Weeks",
    local: "PKR 18,000",
    international: "$90",
  },
  {
    title: "Digital Marketing",
    duration: "2 Months",
    local: "PKR 22,000",
    international: "$110",
  },
  {
    title: "Freelancing Mastery",
    duration: "45 Days",
    local: "PKR 20,000",
    international: "$100",
  },
  {
    title: "POS Software",
    duration: "1 Month",
    local: "PKR 15,000",
    international: "$70",
  },
  {
    title: "Shopify & E-Commerce",
    duration: "2 Months",
    local: "PKR 28,000",
    international: "$140",
  },
];

export default function Courses() {
  const [openPayment, setOpenPayment] = useState(false);

  return (
    <>
      <section id="courses" className="py-28 bg-slate-900">
        <div className="container-custom">
          
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-6">
              Professional Online Courses
            </h2>

            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              Skill-based online training programs for national and international students.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-slate-950 border border-slate-800 hover:border-blue-500 transition duration-300 rounded-[32px] p-8 hover:-translate-y-2"
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm">
                    Online Course
                  </span>

                  <span className="text-slate-400 text-sm">
                    {course.duration}
                  </span>
                </div>

                <h3 className="text-3xl font-black mb-8">
                  {course.title}
                </h3>

                <div className="space-y-5 text-lg">
                  <div className="flex justify-between">
                    <span className="text-slate-400">
                      National Fee
                    </span>

                    <span className="font-bold">
                      {course.local}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-400">
                      International
                    </span>

                    <span className="font-bold">
                      {course.international}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setOpenPayment(true)}
                  className="w-full mt-10 bg-blue-500 hover:bg-blue-600 transition py-4 rounded-2xl font-bold text-lg shadow-lg shadow-blue-500/20"
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PaymentModal
        isOpen={openPayment}
        onClose={() => setOpenPayment(false)}
        onSelect={(method) => {
          console.log("Selected Payment:", method);

          setOpenPayment(false);
        }}
      />
    </>
  );
}
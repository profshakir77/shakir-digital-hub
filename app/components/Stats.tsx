"use client";

import { useEffect, useState } from "react";

export default function Stats() {

  const [students, setStudents] =
    useState(0);

  const [courses, setCourses] =
    useState(0);

  const [countries, setCountries] =
    useState(0);

  const [projects, setProjects] =
    useState(0);

  useEffect(() => {

    const animateCounter = (
      setter: React.Dispatch<
        React.SetStateAction<number>
      >,
      target: number
    ) => {

      let start = 0;

      const interval =
        setInterval(() => {

          start += 1;

          setter(start);

          if (start >= target) {

            clearInterval(
              interval
            );
          }

        }, 20);
    };

    animateCounter(
      setStudents,
      500
    );

    animateCounter(
      setCourses,
      20
    );

    animateCounter(
      setCountries,
      10
    );

    animateCounter(
      setProjects,
      100
    );

  }, []);

  const stats = [
    {
      number: `${students}+`,
      label:
        "Students Trained",

      icon: "🎓",
    },

    {
      number: `${courses}+`,
      label:
        "Professional Courses",

      icon: "📚",
    },

    {
      number: `${countries}+`,
      label:
        "Countries Reached",

      icon: "🌍",
    },

    {
      number: `${projects}+`,
      label:
        "Projects Completed",

      icon: "💼",
    },
  ];

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full"></div>

      <div className="container-custom relative z-10">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <div
              key={index}
              className="glass-effect hover:border-blue-500 hover:-translate-y-3 transition duration-300 rounded-[32px] p-10 text-center float-animation"
            >

              <div className="text-6xl mb-6">
                {item.icon}
              </div>

              <h2 className="text-6xl font-black gradient-text mb-4">
                {item.number}
              </h2>

              <p className="text-slate-400 text-lg">
                {item.label}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
"use client";

import { useEffect, useState } from "react";

import {
  collection,
  onSnapshot,
} from "firebase/firestore";

import { db } from "../../lib/firebase";

interface Course {
  id: string;
  title: string;
  duration: string;
  price: string;
  description: string;
  image?: string;
  level?: string;
}

export default function DynamicCourses() {

  const [courses, setCourses] =
    useState<Course[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [level, setLevel] =
    useState("All");

  const [sort, setSort] =
    useState("default");

  useEffect(() => {

    const unsubscribe = onSnapshot(
      collection(db, "courses"),
      (snapshot) => {

        const coursesData: Course[] = [];

        snapshot.forEach((doc) => {

          const data = doc.data();

          coursesData.push({
            id: doc.id,
            title: data.title,
            duration: data.duration,
            price: data.price,
            description:
              data.description,
            image: data.image,
            level: data.level,
          });
        });

        setCourses(coursesData);

        setLoading(false);
      }
    );

    return () => unsubscribe();

  }, []);

  const filteredCourses =
    [...courses]
      .filter((course) => {

        const matchesSearch =
          course.title
            .toLowerCase()
            .includes(
              search.toLowerCase()
            );

        const matchesLevel =
          level === "All"
            ? true
            : course.level === level;

        return (
          matchesSearch &&
          matchesLevel
        );
      })

      .sort((a, b) => {

        if (sort === "a-z") {

          return a.title.localeCompare(
            b.title
          );
        }

        if (sort === "z-a") {

          return b.title.localeCompare(
            a.title
          );
        }

        return 0;
      });

  return (
    <section
      id="courses"
      className="py-28 bg-slate-900 text-white relative overflow-hidden"
    >

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full"></div>

      <div className="container-custom relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">

          <span className="bg-blue-500/20 text-blue-400 px-5 py-2 rounded-full text-sm">
            Professional Online Courses
          </span>

          <h2 className="text-5xl md:text-6xl font-black mt-8 mb-6">

            Upgrade Your
            <span className="block gradient-text">
              Digital Skills
            </span>

          </h2>

          <p className="text-slate-400 text-xl leading-8 max-w-3xl mx-auto">
            Learn modern high-income digital skills with practical online training and real-world projects.
          </p>

        </div>

        {/* Filters */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">

          {/* Search */}
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="bg-slate-950 border border-slate-700 focus:border-blue-500 transition rounded-2xl p-5 text-white outline-none"
          />

          {/* Level */}
          <select
            value={level}
            onChange={(e) =>
              setLevel(
                e.target.value
              )
            }
            className="bg-slate-950 border border-slate-700 focus:border-blue-500 transition rounded-2xl p-5 text-white outline-none"
          >

            <option value="All">
              All Levels
            </option>

            <option value="Beginner">
              Beginner
            </option>

            <option value="Intermediate">
              Intermediate
            </option>

            <option value="Advanced">
              Advanced
            </option>

          </select>

          {/* Sort */}
          <select
            value={sort}
            onChange={(e) =>
              setSort(
                e.target.value
              )
            }
            className="bg-slate-950 border border-slate-700 focus:border-blue-500 transition rounded-2xl p-5 text-white outline-none"
          >

            <option value="default">
              Sort Courses
            </option>

            <option value="a-z">
              A → Z
            </option>

            <option value="z-a">
              Z → A
            </option>

          </select>

        </div>

        {/* Loading */}
        {loading ? (

          <div className="text-center text-2xl text-white">
            Loading Courses...
          </div>

        ) : filteredCourses.length === 0 ? (

          <div className="text-center text-2xl text-red-400">
            No courses found.
          </div>

        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredCourses.map(
              (course) => (

                <div
                  key={course.id}
                  className="glass-effect hover:border-blue-500 hover:-translate-y-3 transition duration-300 rounded-[32px] overflow-hidden"
                >

                  {/* Image */}
                  <img
                    src={
                      course.image ||
                      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
                    }
                    alt={course.title}
                    className="w-full h-56 object-cover"
                  />

                  <div className="p-8">

                    {/* Level */}
                    <div className="inline-block bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm mb-6">

                      {course.level ||
                        "Beginner"}

                    </div>

                    <h3 className="text-3xl font-black gradient-text mb-6">
                      {course.title}
                    </h3>

                    <div className="space-y-3 mb-6">

                      <p className="text-slate-300">
                        <span className="font-bold text-white">
                          Duration:
                        </span>
                        {" "}
                        {course.duration}
                      </p>

                      <p className="text-slate-300">
                        <span className="font-bold text-white">
                          Price:
                        </span>
                        {" "}
                        {course.price}
                      </p>

                    </div>

                    <p className="text-slate-400 leading-8 mb-8">
                      {course.description}
                    </p>

                    <a
                      href={`https://wa.me/923059494585?text=Assalamualaikum%20I%20want%20to%20enroll%20in%20${course.title}`}
                      target="_blank"
                      className="inline-block bg-green-500 hover:bg-green-600 hover:scale-105 transition duration-300 px-6 py-3 rounded-xl font-bold text-white"
                    >
                      Enroll on WhatsApp
                    </a>

                  </div>

                </div>

              )
            )}

          </div>

        )}

      </div>

    </section>
  );
}
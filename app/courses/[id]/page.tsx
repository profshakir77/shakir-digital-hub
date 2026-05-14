"use client";

import {
  doc,
  getDoc,
  collection,
  getDocs,
} from "firebase/firestore";

import {
  useEffect,
  useState,
} from "react";

import { useParams } from "next/navigation";

import { db } from "../../../lib/firebase";

import EnrollModal from "../../components/EnrollModal";

interface Course {
  id?: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  image?: string;
  level?: string;
}

export default function CoursePage() {

  const params = useParams();

  const id = params.id as string;

  const [course, setCourse] =
    useState<Course | null>(null);

  const [relatedCourses,
    setRelatedCourses] =
    useState<Course[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [openEnroll,
    setOpenEnroll] =
    useState(false);

  const [openFaq,
    setOpenFaq] =
    useState<number | null>(0);

  const features = [
    "Lifetime Access",
    "Certificate Included",
    "Practical Projects",
    "Freelancing Guidance",
    "24/7 Support",
    "Downloadable Resources",
  ];

  const requirements = [
    "Basic computer knowledge",
    "Internet connection",
    "Laptop or desktop recommended",
    "No prior experience required",
    "Passion to learn digital skills",
    "Commitment to practice regularly",
  ];

  const targetStudents = [
    "Beginners who want to start freelancing",
    "Students wanting digital skills",
    "Business owners building online presence",
    "Developers upgrading modern technologies",
    "Anyone interested in remote earning",
    "Creative learners building professional portfolios",
  ];

  const outcomes = [
    "Build real-world projects professionally",
    "Start freelancing on Fiverr & Upwork",
    "Master modern digital skills",
    "Understand practical workflows",
    "Create portfolio-ready projects",
    "Learn industry-standard tools",
  ];

  const curriculum = [
    {
      title:
        "Introduction & Setup",
    },

    {
      title:
        "Core Fundamentals",
    },

    {
      title:
        "Practical Projects",
    },

    {
      title:
        "Advanced Concepts",
    },

    {
      title:
        "Freelancing Guidance",
    },

    {
      title:
        "Final Real-World Project",
    },
  ];

  const reviews = [
    {
      name: "Ali Hassan",
      role: "Frontend Developer",
      message:
        "This course completely changed my freelancing career. Very practical and beginner friendly.",
    },

    {
      name: "Ayesha Khan",
      role: "Graphic Designer",
      message:
        "Professional teaching style with real-world projects. Highly recommended.",
    },

    {
      name: "Usman Tariq",
      role: "Digital Marketer",
      message:
        "Excellent course structure and amazing instructor support throughout the journey.",
    },
  ];

  const faqs = [
    {
      question:
        "Is this course beginner friendly?",

      answer:
        "Yes, this course is designed for beginners and advanced learners.",
    },

    {
      question:
        "Will I get a certificate?",

      answer:
        "Yes, professional completion certificate is included.",
    },

    {
      question:
        "Can I access recordings later?",

      answer:
        "Yes, you will get lifetime access to recordings and resources.",
    },

    {
      question:
        "Do you provide freelancing guidance?",

      answer:
        "Yes, freelancing guidance and earning strategies are included.",
    },
  ];

  useEffect(() => {

    const fetchCourse =
      async () => {

        try {

          const docRef = doc(
            db,
            "courses",
            id
          );

          const docSnap =
            await getDoc(docRef);

          if (
            docSnap.exists()
          ) {

            setCourse(
              docSnap.data() as Course
            );

            const coursesSnapshot =
              await getDocs(
                collection(
                  db,
                  "courses"
                )
              );

            const related:
              Course[] = [];

            coursesSnapshot.forEach(
              (courseDoc) => {

                if (
                  courseDoc.id !==
                  id
                ) {

                  related.push({
                    id: courseDoc.id,
                    ...(courseDoc.data() as Course),
                  });
                }
              }
            );

            setRelatedCourses(
              related.slice(0, 3)
            );
          }

        } catch (error) {

          console.log(error);

        }

        setLoading(false);
      };

    if (id) {

      fetchCourse();
    }

  }, [id]);

  if (loading) {

    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center text-3xl">
        Loading Course...
      </div>
    );
  }

  if (!course) {

    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center text-3xl">
        Course Not Found
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-slate-950 text-white">

        {/* Hero */}
        <section className="relative overflow-hidden py-32">

          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

          <div className="container-custom relative z-10">

            <div className="grid lg:grid-cols-3 gap-12 items-start">

              {/* Left */}
              <div className="lg:col-span-2">

                <div className="inline-block bg-blue-500/20 text-blue-400 px-5 py-2 rounded-full text-sm mb-8">

                  {course.level ||
                    "Beginner"}

                </div>

                <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">

                  {course.title}

                </h1>

                <p className="text-slate-300 text-xl leading-9 mb-12">

                  {course.description}

                </p>

                {/* Features */}
                <div className="grid md:grid-cols-2 gap-6">

                  {features.map(
                    (
                      feature,
                      index
                    ) => (

                      <div
                        key={index}
                        className="glass-effect rounded-2xl p-6 flex items-center gap-4"
                      >

                        <div className="text-3xl">

                          🚀

                        </div>

                        <h3 className="text-xl font-bold">

                          {feature}

                        </h3>

                      </div>

                    )
                  )}

                </div>

              </div>

              {/* Sidebar */}
              <div className="lg:sticky lg:top-28">

                <div className="glass-effect rounded-[40px] overflow-hidden">

                  <img
                    src={
                      course.image ||
                      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
                    }
                    alt={course.title}
                    className="w-full h-64 object-cover"
                  />

                  <div className="p-8">

                    <div className="mb-8">

                      <h3 className="text-slate-400 mb-3">
                        Course Price
                      </h3>

                      <h2 className="text-5xl font-black gradient-text">
                        {course.price}
                      </h2>

                    </div>

                    <div className="space-y-5 mb-10">

                      <div className="flex justify-between">

                        <span className="text-slate-400">
                          Duration
                        </span>

                        <span className="font-bold">
                          {course.duration}
                        </span>

                      </div>

                      <div className="flex justify-between">

                        <span className="text-slate-400">
                          Level
                        </span>

                        <span className="font-bold">
                          {course.level ||
                            "Beginner"}
                        </span>

                      </div>

                      <div className="flex justify-between">

                        <span className="text-slate-400">
                          Access
                        </span>

                        <span className="font-bold">
                          Lifetime
                        </span>

                      </div>

                    </div>

                    <button
                      onClick={() =>
                        setOpenEnroll(true)
                      }
                      className="block w-full bg-green-500 hover:bg-green-600 hover:scale-[1.02] transition duration-300 py-5 rounded-2xl text-center text-xl font-bold"
                    >
                      Enroll Now
                    </button>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* Who This Course Is For */}
        <section className="pb-28">

          <div className="container-custom">

            <div className="glass-effect rounded-[40px] p-10 md:p-16">

              <div className="text-center mb-16">

                <span className="bg-blue-500/20 text-blue-400 px-5 py-2 rounded-full text-sm">

                  Perfect For Learners

                </span>

                <h2 className="text-5xl md:text-6xl font-black mt-8 mb-6">

                  Who This
                  <span className="block gradient-text">
                    Course Is For
                  </span>

                </h2>

              </div>

              <div className="grid md:grid-cols-2 gap-8">

                {targetStudents.map(
                  (
                    student,
                    index
                  ) => (

                    <div
                      key={index}
                      className="glass-effect rounded-3xl p-8 flex items-start gap-5"
                    >

                      <div className="text-3xl">

                        🎯

                      </div>

                      <h3 className="text-2xl font-bold leading-10">

                        {student}

                      </h3>

                    </div>

                  )
                )}

              </div>

            </div>

          </div>

        </section>

        {/* Requirements */}
        <section className="pb-28">

          <div className="container-custom">

            <div className="glass-effect rounded-[40px] p-10 md:p-16">

              <div className="text-center mb-16">

                <span className="bg-blue-500/20 text-blue-400 px-5 py-2 rounded-full text-sm">

                  Before You Start

                </span>

                <h2 className="text-5xl md:text-6xl font-black mt-8 mb-6">

                  Course
                  <span className="block gradient-text">
                    Requirements
                  </span>

                </h2>

              </div>

              <div className="grid md:grid-cols-2 gap-8">

                {requirements.map(
                  (
                    requirement,
                    index
                  ) => (

                    <div
                      key={index}
                      className="glass-effect rounded-3xl p-8 flex items-start gap-5"
                    >

                      <div className="text-3xl">

                        📌

                      </div>

                      <h3 className="text-2xl font-bold leading-10">

                        {requirement}

                      </h3>

                    </div>

                  )
                )}

              </div>

            </div>

          </div>

        </section>

      </div>

      <EnrollModal
        open={openEnroll}
        onClose={() =>
          setOpenEnroll(false)
        }
        courseTitle={
          course.title
        }
      />
    </>
  );
}
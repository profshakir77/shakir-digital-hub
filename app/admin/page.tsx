"use client";

import { useEffect, useState } from "react";

import {
  collection,
  deleteDoc,
  doc,
  addDoc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

import {
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { useRouter } from "next/navigation";

import { db, auth } from "../../lib/firebase";

interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
}

interface Course {
  id: string;
  title: string;
  duration: string;
  price: string;
  description: string;
  image?: string;
  level?: string;
}

export default function AdminPage() {

  const router = useRouter();

  const [students, setStudents] =
    useState<Student[]>([]);

  const [courses, setCourses] =
    useState<Course[]>([]);

  const [checkingAuth, setCheckingAuth] =
    useState(true);

  const [courseLoading, setCourseLoading] =
    useState(false);

  const [studentSearch,
    setStudentSearch] =
    useState("");

  const [courseSearch,
    setCourseSearch] =
    useState("");

  const [courseData, setCourseData] =
    useState({
      title: "",
      duration: "",
      price: "",
      description: "",
      image: "",
      level: "",
    });

  useEffect(() => {

    const unsubscribeAuth =
      onAuthStateChanged(
        auth,
        (user) => {

          if (!user) {

            router.push("/login");

          }

          setCheckingAuth(false);
        }
      );

    const unsubscribeStudents =
      onSnapshot(
        collection(db, "students"),
        (snapshot) => {

          const data: Student[] = [];

          snapshot.forEach((docItem) => {

            data.push({
              id: docItem.id,
              ...(docItem.data() as Omit<
                Student,
                "id"
              >),
            });

          });

          setStudents(data);
        }
      );

    const unsubscribeCourses =
      onSnapshot(
        collection(db, "courses"),
        (snapshot) => {

          const data: Course[] = [];

          snapshot.forEach((docItem) => {

            data.push({
              id: docItem.id,
              ...(docItem.data() as Omit<
                Course,
                "id"
              >),
            });

          });

          setCourses(data);
        }
      );

    return () => {
      unsubscribeAuth();
      unsubscribeStudents();
      unsubscribeCourses();
    };

  }, []);

  const filteredCourses =
    courses.filter((course) =>
      course.title
        .toLowerCase()
        .includes(
          courseSearch.toLowerCase()
        )
    );

  const filteredStudents =
    students.filter((student) =>
      student.name
        .toLowerCase()
        .includes(
          studentSearch.toLowerCase()
        )
    );

  const handleLogout = async () => {

    await signOut(auth);

    router.push("/login");
  };

  const handleDeleteStudent =
    async (id: string) => {

      const confirmDelete =
        confirm(
          "Delete this enrollment?"
        );

      if (!confirmDelete) return;

      try {

        await deleteDoc(
          doc(db, "students", id)
        );

      } catch (error) {

        console.log(error);

      }
    };

  const handleDeleteCourse =
    async (id: string) => {

      const confirmDelete =
        confirm(
          "Delete this course?"
        );

      if (!confirmDelete) return;

      try {

        await deleteDoc(
          doc(db, "courses", id)
        );

      } catch (error) {

        console.log(error);

      }
    };

  const handleCourseChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement
    >
  ) => {

    setCourseData({
      ...courseData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleAddCourse =
    async (
      e: React.FormEvent
    ) => {

      e.preventDefault();

      try {

        setCourseLoading(true);

        await addDoc(
          collection(db, "courses"),
          {
            ...courseData,
            createdAt:
              serverTimestamp(),
          }
        );

        alert(
          "Course added successfully!"
        );

        setCourseData({
          title: "",
          duration: "",
          price: "",
          description: "",
          image: "",
          level: "",
        });

      } catch (error) {

        console.log(error);

      }

      setCourseLoading(false);
    };

  if (checkingAuth) {

    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center text-3xl">
        Checking Authentication...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-10">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-12">

          <div>

            <h1 className="text-5xl md:text-6xl font-black gradient-text mb-4">
              Admin Dashboard
            </h1>

            <p className="text-slate-400 text-xl">
              Manage courses and student enrollments.
            </p>

          </div>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 transition px-8 py-4 rounded-2xl font-bold"
          >
            Logout
          </button>

        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">

          <div className="glass-effect rounded-[32px] p-8">

            <div className="text-5xl mb-6">
              🎓
            </div>

            <h2 className="text-5xl font-black gradient-text mb-4">
              {students.length}
            </h2>

            <p className="text-slate-400">
              Total Students
            </p>

          </div>

          <div className="glass-effect rounded-[32px] p-8">

            <div className="text-5xl mb-6">
              📚
            </div>

            <h2 className="text-5xl font-black gradient-text mb-4">
              {courses.length}
            </h2>

            <p className="text-slate-400">
              Total Courses
            </p>

          </div>

          <div className="glass-effect rounded-[32px] p-8">

            <div className="text-5xl mb-6">
              🌍
            </div>

            <h2 className="text-5xl font-black gradient-text mb-4">
              Online
            </h2>

            <p className="text-slate-400">
              System Status
            </p>

          </div>

        </div>

        {/* Add Course */}
        <div className="glass-effect rounded-[40px] p-10 mb-12">

          <h2 className="text-4xl font-black gradient-text mb-10">
            Add New Course
          </h2>

          <form
            onSubmit={handleAddCourse}
            className="grid gap-6"
          >

            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="text"
                name="title"
                placeholder="Course Title"
                required
                value={courseData.title}
                onChange={handleCourseChange}
                className="bg-slate-900 border border-slate-700 rounded-2xl p-5 text-white outline-none"
              />

              <input
                type="text"
                name="duration"
                placeholder="Course Duration"
                required
                value={courseData.duration}
                onChange={handleCourseChange}
                className="bg-slate-900 border border-slate-700 rounded-2xl p-5 text-white outline-none"
              />

            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="text"
                name="price"
                placeholder="Course Price"
                required
                value={courseData.price}
                onChange={handleCourseChange}
                className="bg-slate-900 border border-slate-700 rounded-2xl p-5 text-white outline-none"
              />

              <input
                type="text"
                name="level"
                placeholder="Course Level"
                value={courseData.level}
                onChange={handleCourseChange}
                className="bg-slate-900 border border-slate-700 rounded-2xl p-5 text-white outline-none"
              />

            </div>

            <input
              type="text"
              name="image"
              placeholder="Course Image URL"
              value={courseData.image}
              onChange={handleCourseChange}
              className="bg-slate-900 border border-slate-700 rounded-2xl p-5 text-white outline-none"
            />

            <textarea
              name="description"
              placeholder="Course Description"
              required
              rows={6}
              value={courseData.description}
              onChange={handleCourseChange}
              className="bg-slate-900 border border-slate-700 rounded-2xl p-5 text-white outline-none"
            />

            <button
              type="submit"
              disabled={courseLoading}
              className="bg-blue-500 hover:bg-blue-600 hover:scale-[1.02] transition duration-300 py-5 rounded-2xl text-xl font-bold"
            >

              {courseLoading
                ? "Adding Course..."
                : "Add Course"}

            </button>

          </form>

        </div>

        {/* Courses */}
        <div className="mb-12">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

            <h2 className="text-4xl font-black gradient-text">
              Manage Courses
            </h2>

            <input
              type="text"
              placeholder="Search courses..."
              value={courseSearch}
              onChange={(e) =>
                setCourseSearch(
                  e.target.value
                )
              }
              className="bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 text-white outline-none lg:w-[350px]"
            />

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredCourses.map((course) => (

              <div
                key={course.id}
                className="glass-effect rounded-[32px] overflow-hidden"
              >

                <img
                  src={
                    course.image ||
                    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
                  }
                  alt={course.title}
                  className="w-full h-52 object-cover"
                />

                <div className="p-8">

                  <div className="inline-block bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm mb-6">

                    {course.level ||
                      "Beginner"}

                  </div>

                  <h3 className="text-3xl font-black gradient-text mb-4">
                    {course.title}
                  </h3>

                  <p className="text-slate-400 mb-3">
                    Duration:
                    {" "}
                    {course.duration}
                  </p>

                  <p className="text-slate-400 mb-6">
                    Price:
                    {" "}
                    {course.price}
                  </p>

                  <button
                    onClick={() =>
                      handleDeleteCourse(
                        course.id
                      )
                    }
                    className="bg-red-500 hover:bg-red-600 transition px-6 py-3 rounded-xl font-bold"
                  >
                    Delete Course
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Students */}
        <div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

            <h2 className="text-4xl font-black gradient-text">
              Student Enrollments
            </h2>

            <input
              type="text"
              placeholder="Search students..."
              value={studentSearch}
              onChange={(e) =>
                setStudentSearch(
                  e.target.value
                )
              }
              className="bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 text-white outline-none lg:w-[350px]"
            />

          </div>

          <div className="grid gap-8">

            {filteredStudents.map((student) => (

              <div
                key={student.id}
                className="glass-effect rounded-[32px] p-10"
              >

                <div className="grid lg:grid-cols-2 gap-10">

                  <div>

                    <h3 className="text-3xl font-black gradient-text mb-8">
                      {student.name}
                    </h3>

                    <div className="space-y-4 text-lg">

                      <p>
                        <span className="font-bold">
                          Email:
                        </span>
                        {" "}
                        {student.email}
                      </p>

                      <p>
                        <span className="font-bold">
                          Phone:
                        </span>
                        {" "}
                        {student.phone}
                      </p>

                      <p>
                        <span className="font-bold">
                          Course:
                        </span>
                        {" "}
                        {student.course}
                      </p>

                    </div>

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold mb-4">
                      Student Message
                    </h3>

                    <p className="text-slate-400 leading-8 mb-8">
                      {student.message}
                    </p>

                    <button
                      onClick={() =>
                        handleDeleteStudent(
                          student.id
                        )
                      }
                      className="bg-red-500 hover:bg-red-600 transition px-6 py-3 rounded-xl font-bold"
                    >
                      Delete Enrollment
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}
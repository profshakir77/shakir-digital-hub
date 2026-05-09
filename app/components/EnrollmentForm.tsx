"use client";

import { useState } from "react";

import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../../lib/firebase";

export default function EnrollmentForm() {

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement
    >
  ) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      setLoading(true);

      await addDoc(
        collection(db, "students"),
        {
          ...formData,
          createdAt:
            serverTimestamp(),
        }
      );

      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        message: "",
      });

      setTimeout(() => {
        setSuccess(false);
      }, 4000);

    } catch (error) {

      console.log(error);

      alert(
        "Something went wrong"
      );

    }

    setLoading(false);
  };

  return (
    <section
      id="enroll"
      className="py-28 bg-slate-900 text-white relative overflow-hidden"
    >

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full"></div>

      <div className="container-custom relative z-10">

        <div className="max-w-5xl mx-auto glass-effect rounded-[40px] p-10 md:p-16">

          <div className="text-center mb-12">

            <span className="bg-blue-500/20 text-blue-400 px-5 py-2 rounded-full text-sm">
              Online Course Enrollment
            </span>

            <h2 className="text-5xl md:text-6xl font-black mt-8 mb-6">

              Start Your
              <span className="block gradient-text">
                Digital Journey
              </span>

            </h2>

            <p className="text-slate-400 text-xl leading-8 max-w-3xl mx-auto">

              Enroll in professional online IT courses and start building high-income digital skills today.

            </p>

          </div>

          {/* Success Message */}
          {success && (

            <div className="bg-green-500/20 border border-green-500 text-green-300 rounded-2xl p-5 mb-8 text-center font-bold">

              Enrollment submitted successfully!

            </div>

          )}

          <form
            onSubmit={handleSubmit}
            className="grid gap-6"
          >

            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-slate-900 border border-slate-700 focus:border-blue-500 transition rounded-2xl p-5 text-white outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-slate-900 border border-slate-700 focus:border-blue-500 transition rounded-2xl p-5 text-white outline-none"
              />

            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="text"
                name="phone"
                placeholder="Phone / WhatsApp Number"
                required
                value={formData.phone}
                onChange={handleChange}
                className="bg-slate-900 border border-slate-700 focus:border-blue-500 transition rounded-2xl p-5 text-white outline-none"
              />

              <input
                type="text"
                name="course"
                placeholder="Course Name"
                required
                value={formData.course}
                onChange={handleChange}
                className="bg-slate-900 border border-slate-700 focus:border-blue-500 transition rounded-2xl p-5 text-white outline-none"
              />

            </div>

            <textarea
              name="message"
              placeholder="Tell us about your goals..."
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="bg-slate-900 border border-slate-700 focus:border-blue-500 transition rounded-2xl p-5 text-white outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-600 hover:scale-[1.02] transition duration-300 py-5 rounded-2xl text-xl font-bold shadow-lg shadow-blue-500/30"
            >

              {loading
                ? "Submitting..."
                : "Submit Enrollment"}

            </button>

          </form>

        </div>

      </div>

    </section>
  );
}
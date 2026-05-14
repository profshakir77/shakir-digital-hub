"use client";

import {
  useState,
} from "react";

import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

interface Props {

  open: boolean;

  onClose: () => void;

  courseTitle: string;
}

export default function EnrollModal({
  open,
  onClose,
  courseTitle,
}: Props) {

  const [loading,
    setLoading] =
    useState(false);

  const [form,
    setForm] =
    useState({

      name: "",

      email: "",

      phone: "",
    });

  if (!open)
    return null;

  const handleSubmit =
    async (
      e: React.FormEvent
    ) => {

      e.preventDefault();

      try {

        setLoading(true);

        await addDoc(
          collection(
            db,
            "enrollments"
          ),
          {

            ...form,

            course:
              courseTitle,

            createdAt:
              serverTimestamp(),
          }
        );

        const message =
          `Assalamualaikum, New Enrollment Request:%0A%0A` +
          `Course: ${courseTitle}%0A` +
          `Name: ${form.name}%0A` +
          `Email: ${form.email}%0A` +
          `Phone: ${form.phone}`;

        window.open(
          `https://wa.me/923059494585?text=${message}`,
          "_blank"
        );

        alert(
          "Enrollment submitted successfully!"
        );

        onClose();

      } catch (error) {

        console.log(error);

        alert(
          "Something went wrong"
        );

      } finally {

        setLoading(false);
      }
    };

  return (
    <div className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-6">

      <div className="glass-effect rounded-[40px] p-10 w-full max-w-2xl relative">

        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-3xl text-slate-400 hover:text-white"
        >
          ×
        </button>

        <h2 className="text-5xl font-black mb-10">

          Enroll
          <span className="gradient-text block">
            Now
          </span>

        </h2>

        <form
          onSubmit={
            handleSubmit
          }
          className="space-y-6"
        >

          <input
            type="text"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name:
                  e.target.value,
              })
            }
            className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-6 py-5 outline-none focus:border-blue-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email:
                  e.target.value,
              })
            }
            className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-6 py-5 outline-none focus:border-blue-500"
          />

          <input
            type="text"
            placeholder="Phone Number"
            required
            value={form.phone}
            onChange={(e) =>
              setForm({
                ...form,
                phone:
                  e.target.value,
              })
            }
            className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-6 py-5 outline-none focus:border-blue-500"
          />

          <button
            disabled={loading}
            className="w-full bg-green-500 hover:bg-green-600 transition py-5 rounded-2xl text-xl font-bold"
          >

            {loading
              ? "Submitting..."
              : "Submit Enrollment"}

          </button>

        </form>

      </div>

    </div>
  );
}
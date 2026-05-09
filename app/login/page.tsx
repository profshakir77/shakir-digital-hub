"use client";

import { useState } from "react";

import {
  signInWithEmailAndPassword,
} from "firebase/auth";

import { useRouter } from "next/navigation";

import { auth } from "../../lib/firebase";

export default function LoginPage() {

  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleLogin = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      setLoading(true);

      await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      router.push("/admin");

    } catch (error) {

      console.log(error);

      alert(
        "Invalid email or password"
      );

    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6 relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="w-full max-w-xl glass-effect rounded-[40px] p-10 md:p-14 relative z-10">

        <div className="text-center mb-12">

          <span className="bg-blue-500/20 text-blue-400 px-5 py-2 rounded-full text-sm">
            Secure Admin Access
          </span>

          <h1 className="text-5xl md:text-6xl font-black mt-8 mb-6">

            Admin
            <span className="block gradient-text">
              Login
            </span>

          </h1>

          <p className="text-slate-400 text-lg leading-8">
            Login to manage courses and student enrollments.
          </p>

        </div>

        <form
          onSubmit={handleLogin}
          className="grid gap-6"
        >

          <input
            type="email"
            name="email"
            placeholder="Admin Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="bg-slate-900 border border-slate-700 focus:border-blue-500 transition rounded-2xl p-5 text-white outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
            className="bg-slate-900 border border-slate-700 focus:border-blue-500 transition rounded-2xl p-5 text-white outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 hover:scale-[1.02] transition duration-300 py-5 rounded-2xl text-xl font-bold shadow-lg shadow-blue-500/30"
          >

            {loading
              ? "Logging In..."
              : "Login"}

          </button>

        </form>

      </div>

    </div>
  );
}
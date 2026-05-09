import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">

      <div className="text-center max-w-3xl">

        <h1 className="text-8xl md:text-9xl font-black gradient-text mb-8">
          404
        </h1>

        <h2 className="text-4xl md:text-5xl font-black mb-6">
          Page Not Found
        </h2>

        <p className="text-slate-400 text-xl leading-8 mb-10">
          The page you are looking for does not exist or may have been removed.
        </p>

        <Link
          href="/"
          className="inline-block bg-blue-500 hover:bg-blue-600 hover:scale-105 transition duration-300 px-8 py-4 rounded-2xl font-bold text-lg"
        >
          Back To Homepage
        </Link>

      </div>

    </div>
  );
}
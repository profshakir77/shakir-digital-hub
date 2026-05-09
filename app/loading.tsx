export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white">

      {/* Spinner */}
      <div className="w-24 h-24 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-10"></div>

      {/* Brand */}
      <h1 className="text-5xl font-black gradient-text mb-4">
        Shakir Digital Hub
      </h1>

      <p className="text-slate-400 text-xl">
        Loading Experience...
      </p>

    </div>
  );
}
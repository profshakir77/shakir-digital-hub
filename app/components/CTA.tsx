export default function CTA() {
  return (
    <section className="py-28 bg-slate-950 text-white relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="container-custom relative z-10">

        <div className="glass-effect rounded-[40px] p-12 md:p-20 text-center border border-slate-800">

          <span className="bg-blue-500/20 text-blue-400 px-5 py-2 rounded-full text-sm">
            Start Your Digital Career
          </span>

          <h2 className="text-5xl md:text-7xl font-black leading-tight mt-8 mb-8">

            Learn Skills That
            <span className="block gradient-text">
              Generate Income
            </span>

          </h2>

          <p className="text-slate-400 text-xl leading-8 max-w-3xl mx-auto mb-12">

            Join Shakir Digital Hub and master modern digital skills like website development, freelancing, Shopify, SEO, graphic designing, and digital marketing.

          </p>

          <div className="flex flex-wrap justify-center gap-6">

            <a
              href="#courses"
              className="bg-blue-500 hover:bg-blue-600 hover:scale-105 transition duration-300 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-blue-500/30"
            >
              Explore Courses
            </a>

            <a
              href="https://wa.me/923059494585"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 hover:scale-105 transition duration-300 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-green-500/30"
            >
              WhatsApp Us
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}
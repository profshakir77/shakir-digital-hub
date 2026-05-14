export default function CTA() {
  return (
    <section className="py-28 bg-black text-white relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="container-custom relative z-10">

        <div className="glass-effect rounded-[50px] p-10 md:p-20 text-center overflow-hidden relative">

          {/* Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10"></div>

          <div className="relative z-10">

            <span className="bg-blue-500/20 text-blue-400 px-5 py-2 rounded-full text-sm">
              Start Learning Today
            </span>

            <h2 className="text-5xl md:text-7xl font-black mt-8 mb-8 leading-tight">

              Build Your
              <span className="block gradient-text">
                Digital Career
              </span>

            </h2>

            <p className="text-slate-400 text-xl leading-9 max-w-4xl mx-auto mb-12">

              Join students worldwide and master high-income digital skills including website development, graphic designing, freelancing, Shopify, SEO, and digital marketing.

            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-6">

              <a
                href="#enroll"
                className="bg-blue-500 hover:bg-blue-600 hover:scale-105 transition duration-300 px-10 py-5 rounded-2xl font-bold text-xl shadow-lg shadow-blue-500/30"
              >
                Enroll Now
              </a>

              <a
                href="https://wa.me/923059494585"
                target="_blank"
                className="border border-slate-600 hover:border-green-500 hover:text-green-400 hover:scale-105 transition duration-300 px-10 py-5 rounded-2xl font-bold text-xl"
              >
                WhatsApp Us
              </a>

            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">

              <div className="glass-effect rounded-3xl p-8">

                <div className="text-5xl mb-4">
                  🎓
                </div>

                <h3 className="text-5xl font-black gradient-text mb-3">
                  500+
                </h3>

                <p className="text-slate-400">
                  Students
                </p>

              </div>

              <div className="glass-effect rounded-3xl p-8">

                <div className="text-5xl mb-4">
                  📚
                </div>

                <h3 className="text-5xl font-black gradient-text mb-3">
                  20+
                </h3>

                <p className="text-slate-400">
                  Courses
                </p>

              </div>

              <div className="glass-effect rounded-3xl p-8">

                <div className="text-5xl mb-4">
                  🌍
                </div>

                <h3 className="text-5xl font-black gradient-text mb-3">
                  10+
                </h3>

                <p className="text-slate-400">
                  Countries
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
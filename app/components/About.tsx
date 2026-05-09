export default function About() {

  const features = [
    "Professional IT Courses",
    "Live Online Training",
    "Freelancing Guidance",
    "International Learning",
    "Modern Digital Skills",
    "Real Client Projects",
  ];

  return (
    <section className="relative overflow-hidden py-28 bg-slate-950 text-white">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="container-custom grid lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* Left Side */}
        <div>

          <span className="bg-blue-500/20 text-blue-400 px-5 py-2 rounded-full text-sm">
            About Shakir Digital Hub
          </span>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mt-8 mb-8">

            Learn Future Skills
            <span className="block gradient-text">
              From Industry Experts
            </span>

          </h2>

          <p className="text-slate-300 text-xl leading-9 mb-10">

            Shakir Digital Hub is a modern online learning platform helping students worldwide master website development, graphic designing, freelancing, Shopify, SEO, digital marketing, and high-income digital skills through practical online training.

          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-5">

            {features.map((item, index) => (

              <div
                key={index}
                className="glass-effect hover:border-blue-500 hover:-translate-y-2 transition duration-300 rounded-2xl p-5 font-semibold"
              >
                ✔ {item}
              </div>

            ))}

          </div>

        </div>

        {/* Right Side */}
        <div className="relative">

          {/* Main Card */}
          <div className="glass-effect rounded-[40px] p-10">

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-slate-900 rounded-3xl p-8 text-center hover:-translate-y-2 transition duration-300">

                <div className="text-5xl mb-4">
                  🎓
                </div>

                <h3 className="text-5xl font-black gradient-text mb-4">
                  500+
                </h3>

                <p className="text-slate-400">
                  Students
                </p>

              </div>

              <div className="bg-slate-900 rounded-3xl p-8 text-center hover:-translate-y-2 transition duration-300">

                <div className="text-5xl mb-4">
                  📚
                </div>

                <h3 className="text-5xl font-black gradient-text mb-4">
                  20+
                </h3>

                <p className="text-slate-400">
                  Courses
                </p>

              </div>

              <div className="bg-slate-900 rounded-3xl p-8 text-center hover:-translate-y-2 transition duration-300">

                <div className="text-5xl mb-4">
                  🌍
                </div>

                <h3 className="text-5xl font-black gradient-text mb-4">
                  10+
                </h3>

                <p className="text-slate-400">
                  Countries
                </p>

              </div>

              <div className="bg-slate-900 rounded-3xl p-8 text-center hover:-translate-y-2 transition duration-300">

                <div className="text-5xl mb-4">
                  💼
                </div>

                <h3 className="text-5xl font-black gradient-text mb-4">
                  100+
                </h3>

                <p className="text-slate-400">
                  Projects
                </p>

              </div>

            </div>

          </div>

          {/* Floating Card */}
          <div className="hidden lg:block absolute -bottom-10 -left-10 glass-effect rounded-3xl p-6 float-animation">

            <div className="text-5xl mb-4">
              🚀
            </div>

            <h3 className="text-2xl font-black gradient-text mb-2">
              Career Growth
            </h3>

            <p className="text-slate-400">
              Learn skills that generate income.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
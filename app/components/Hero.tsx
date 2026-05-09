export default function Hero() {

  const services = [
    "Website Development",
    "Graphic Designing",
    "Digital Marketing",
    "Freelancing Training",
    "Shopify Development",
    "POS Software",
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen pt-32 flex items-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white"
    >

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">

        <div className="h-full w-full bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      </div>

      <div className="container-custom grid lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* Left Side */}
        <div>

          <span className="bg-blue-500/20 text-blue-400 px-5 py-2 rounded-full text-sm">
            Online IT Courses & Digital Services
          </span>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mt-8 mb-8">

            Build Your
            <span className="block gradient-text">
              Digital Future
            </span>

          </h1>

          <p className="text-slate-300 text-xl leading-9 mb-10">

            Shakir Digital Hub helps students worldwide master website development, freelancing, digital marketing, graphic designing, Shopify, SEO, and modern high-income digital skills.

          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mb-12">

            <a
              href="#courses"
              className="bg-blue-500 hover:bg-blue-600 hover:scale-105 transition duration-300 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-blue-500/30"
            >
              Explore Courses
            </a>

            <a
              href="https://wa.me/923059494585"
              target="_blank"
              className="border border-slate-600 hover:border-green-500 hover:text-green-400 hover:scale-105 transition duration-300 px-8 py-4 rounded-2xl font-bold text-lg"
            >
              WhatsApp Us
            </a>

          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-4 mb-12">

            <div className="glass-effect px-5 py-3 rounded-2xl">
              ⭐ Professional Training
            </div>

            <div className="glass-effect px-5 py-3 rounded-2xl">
              🌍 Worldwide Students
            </div>

            <div className="glass-effect px-5 py-3 rounded-2xl">
              💼 Freelancing Support
            </div>

          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10">

            <div>
              <h3 className="text-4xl font-black gradient-text">
                500+
              </h3>

              <p className="text-slate-400">
                Students
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black gradient-text">
                20+
              </h3>

              <p className="text-slate-400">
                Courses
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black gradient-text">
                10+
              </h3>

              <p className="text-slate-400">
                Countries
              </p>
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="relative">

          {/* Main Card */}
          <div className="glass-effect rounded-[40px] p-10 float-animation">

            <h2 className="text-4xl font-black gradient-text mb-10">
              Our Expertise
            </h2>

            <div className="space-y-6">

              {services.map((item, index) => (

                <div
                  key={index}
                  className="bg-slate-950 border border-slate-800 hover:border-blue-500 hover:-translate-y-1 transition duration-300 rounded-2xl p-5 text-lg font-semibold"
                >
                  ✔ {item}
                </div>

              ))}

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
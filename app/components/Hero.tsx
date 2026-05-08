export default function Hero() {
  const services = [
    "Website Development",
    "Graphic Designing",
    "Digital Marketing",
    "POS Software",
    "Freelancing Training",
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950"
    >

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="container-custom grid lg:grid-cols-2 gap-16 items-center py-20 relative z-10">

        {/* Left Side */}
        <div>
          <span className="bg-blue-500/20 text-blue-400 px-5 py-2 rounded-full text-sm">
            Online Courses & Digital Services
          </span>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mt-8 mb-8">
            Build Your Digital Future With
            <span className="block text-blue-400">
              Shakir Digital Hub
            </span>
          </h1>

          <p className="text-slate-300 text-xl leading-8 mb-10">
            Professional online learning platform for web development,
            graphic designing, digital marketing, freelancing,
            and modern IT skills.
          </p>

          <div className="flex flex-wrap gap-5">
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
        </div>

        {/* Right Side */}
        <div className="bg-slate-900/80 backdrop-blur border border-slate-800 p-10 rounded-[40px] shadow-2xl">
          <h2 className="text-4xl font-black mb-10 text-blue-400">
            Our Expertise
          </h2>

          <div className="space-y-6">
            {services.map((item, index) => (
              <div
                key={index}
                className="bg-slate-950 border border-slate-800 hover:border-blue-500 transition rounded-2xl p-5 text-lg font-semibold"
              >
                ✔ {item}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
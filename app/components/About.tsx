export default function About() {
  return (
    <section id="about" className="py-28 bg-slate-950">
      <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <span className="bg-blue-500/20 text-blue-400 px-5 py-2 rounded-full text-sm">
            About Our Academy
          </span>

          <h2 className="text-5xl font-black leading-tight mt-8 mb-8">
            Empowering Students With
            <span className="block text-blue-400">
              Digital Skills
            </span>
          </h2>

          <p className="text-slate-300 text-xl leading-8 mb-8">
            Shakir Digital Hub is a modern online learning platform helping
            students, freelancers, and businesses succeed in the digital world.
          </p>

          <p className="text-slate-400 leading-8 text-lg">
            We provide practical skill-based training in web development,
            graphic designing, freelancing, digital marketing,
            Shopify, SEO, and modern business technologies.
          </p>
        </div>

        {/* Right */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-[40px] p-12 shadow-2xl">
          <h3 className="text-4xl font-black mb-10">
            Why Choose Us?
          </h3>

          <div className="space-y-6 text-xl">
            <div>✔ Live Online Classes</div>
            <div>✔ Practical Skill Training</div>
            <div>✔ Freelancing Guidance</div>
            <div>✔ Affordable Fees</div>
            <div>✔ International Students</div>
            <div>✔ Professional Mentorship</div>
          </div>
        </div>
      </div>
    </section>
  );
}
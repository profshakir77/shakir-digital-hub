const services = [
  "Website Development",
  "Graphic Designing",
  "Digital Marketing",
  "POS Software Installation",
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-slate-950">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black mb-6">
            Our Professional Services
          </h2>

          <p className="text-slate-400 text-xl max-w-3xl mx-auto">
            We provide high-quality digital services for startups,
            businesses, freelancers, and online brands worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 hover:border-blue-500 transition duration-300 rounded-3xl p-8 hover:-translate-y-2"
            >
              <div className="bg-blue-500/20 text-blue-400 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6">
                ✦
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {service}
              </h3>

              <p className="text-slate-400 leading-7">
                Professional digital solutions designed for business growth and online success.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default function Testimonials() {

  const testimonials = [
    {
      name: "Ali Raza",
      role: "Freelancer",

      message:
        "Amazing platform for learning freelancing and website development. Highly recommended!",
    },

    {
      name: "Fatima Noor",
      role: "Graphic Designer",

      message:
        "Professional instructors and practical training helped me start earning online.",
    },

    {
      name: "Ahmed Khan",
      role: "Web Developer",

      message:
        "Best online digital skills platform with modern courses and excellent support.",
    },
  ];

  return (
    <section className="py-28 bg-slate-900 text-white relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full"></div>

      <div className="container-custom relative z-10">

        <div className="text-center mb-20">

          <span className="bg-blue-500/20 text-blue-400 px-5 py-2 rounded-full text-sm">
            Student Success Stories
          </span>

          <h2 className="text-5xl md:text-6xl font-black mt-8 mb-6">

            What Our
            <span className="block gradient-text">
              Students Say
            </span>

          </h2>

          <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-8">
            Thousands of students are building successful digital careers with Shakir Digital Hub.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="glass-effect hover:border-blue-500 hover:-translate-y-3 transition duration-300 rounded-[32px] p-10"
            >

              <div className="flex items-center gap-2 mb-6 text-yellow-400 text-2xl">
                ⭐ ⭐ ⭐ ⭐ ⭐
              </div>

              <p className="text-slate-300 leading-8 mb-10">
                {item.message}
              </p>

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-xl font-black">
                  {item.name.charAt(0)}
                </div>

                <div>

                  <h3 className="text-2xl font-black gradient-text">
                    {item.name}
                  </h3>

                  <p className="text-slate-400 mt-1">
                    {item.role}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
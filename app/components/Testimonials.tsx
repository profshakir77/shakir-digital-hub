export default function Testimonials() {

  const testimonials = [
    {
      name: "Ali Hassan",
      role: "Frontend Developer",
      message:
        "Shakir Digital Hub completely changed my career. I learned web development and started freelancing internationally.",

      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
    },

    {
      name: "Ayesha Khan",
      role: "Graphic Designer",
      message:
        "The graphic designing course was extremely practical and professional. Highly recommended for beginners.",

      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
    },

    {
      name: "Usman Tariq",
      role: "Digital Marketer",
      message:
        "I learned SEO and digital marketing from Shakir Digital Hub and now work with international clients.",

      image:
        "https://randomuser.me/api/portraits/men/75.jpg",
    },
  ];

  return (
    <section className="py-28 bg-black text-white relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full"></div>

      <div className="container-custom relative z-10">

        {/* Heading */}
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

          <p className="text-slate-400 text-xl leading-8 max-w-3xl mx-auto">

            Thousands of students are building successful digital careers with Shakir Digital Hub.

          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map(
            (item, index) => (

              <div
                key={index}
                className="glass-effect hover:border-blue-500 hover:-translate-y-3 transition duration-300 rounded-[32px] p-10"
              >

                {/* User */}
                <div className="flex items-center gap-5 mb-8">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-blue-500"
                  />

                  <div>

                    <h3 className="text-2xl font-black">
                      {item.name}
                    </h3>

                    <p className="text-blue-400">
                      {item.role}
                    </p>

                  </div>

                </div>

                {/* Stars */}
                <div className="flex gap-1 text-2xl mb-6">

                  ⭐ ⭐ ⭐ ⭐ ⭐

                </div>

                {/* Message */}
                <p className="text-slate-400 leading-8 text-lg">

                  "{item.message}"

                </p>

              </div>

            )
          )}

        </div>

      </div>

    </section>
  );
}
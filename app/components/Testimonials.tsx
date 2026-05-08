const testimonials = [
  {
    name: "Ali Khan",
    review:
      "Excellent web development course with practical learning and professional guidance.",
  },

  {
    name: "Ayesha Noor",
    review:
      "Very affordable and professional digital marketing training. Highly recommended.",
  },

  {
    name: "Usman Tariq",
    review:
      "Best freelancing and graphic design training platform for beginners.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-slate-900">
      <div className="container-custom">

        <div className="text-center mb-20">
          <h2 className="text-5xl font-black mb-6">
            Student Reviews
          </h2>

          <p className="text-slate-400 text-xl">
            What our students say about Shakir Digital Hub
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-slate-950 border border-slate-800 hover:border-blue-500 transition rounded-[32px] p-8"
            >
              <div className="text-yellow-400 text-2xl mb-6">
                ★★★★★
              </div>

              <p className="text-slate-300 leading-8 mb-8 text-lg">
                {item.review}
              </p>

              <h3 className="text-2xl font-bold text-blue-400">
                {item.name}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
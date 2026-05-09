export default function Stats() {

  const stats = [
    {
      number: "500+",
      label: "Students Trained",
      icon: "🎓",
    },

    {
      number: "20+",
      label: "Professional Courses",
      icon: "📚",
    },

    {
      number: "10+",
      label: "Countries Reached",
      icon: "🌍",
    },

    {
      number: "100+",
      label: "Projects Completed",
      icon: "💼",
    },
  ];

  return (
    <section className="py-24 bg-black text-white">

      <div className="container-custom">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <div
              key={index}
              className="glass-effect hover:border-blue-500 hover:-translate-y-3 transition duration-300 rounded-[32px] p-10 text-center float-animation"
            >

              <div className="text-6xl mb-6">
                {item.icon}
              </div>

              <h2 className="text-6xl font-black gradient-text mb-4">
                {item.number}
              </h2>

              <p className="text-slate-400 text-lg">
                {item.label}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
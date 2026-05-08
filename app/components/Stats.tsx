export default function Stats() {
  const stats = [
    {
      number: "500+",
      title: "Students Trained",
    },

    {
      number: "20+",
      title: "Professional Courses",
    },

    {
      number: "10+",
      title: "Digital Services",
    },

    {
      number: "24/7",
      title: "Student Support",
    },
  ];

  return (
    <section className="py-24 bg-slate-950">
      <div className="container-custom">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-[32px] p-10 text-center hover:border-blue-500 transition"
            >
              <h2 className="text-5xl font-black text-blue-400 mb-4">
                {item.number}
              </h2>

              <p className="text-xl text-slate-300">
                {item.title}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
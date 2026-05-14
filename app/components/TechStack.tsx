export default function TechStack() {

  const technologies = [
    {
      name: "Next.js",
      icon: "⚛️",
    },

    {
      name: "React",
      icon: "💙",
    },

    {
      name: "Firebase",
      icon: "🔥",
    },

    {
      name: "Tailwind CSS",
      icon: "🎨",
    },

    {
      name: "TypeScript",
      icon: "🟦",
    },

    {
      name: "Shopify",
      icon: "🛒",
    },

    {
      name: "SEO",
      icon: "📈",
    },

    {
      name: "Figma",
      icon: "✏️",
    },
  ];

  return (
    <section className="py-28 bg-slate-900 text-white relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full"></div>

      <div className="container-custom relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">

          <span className="bg-blue-500/20 text-blue-400 px-5 py-2 rounded-full text-sm">
            Modern Technologies
          </span>

          <h2 className="text-5xl md:text-6xl font-black mt-8 mb-6">

            Tools &
            <span className="block gradient-text">
              Technologies
            </span>

          </h2>

          <p className="text-slate-400 text-xl leading-8 max-w-3xl mx-auto">

            Learn modern technologies and industry-standard tools used by professional developers, freelancers, and digital agencies worldwide.

          </p>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {technologies.map(
            (tech, index) => (

              <div
                key={index}
                className="glass-effect hover:border-blue-500 hover:-translate-y-3 transition duration-300 rounded-[32px] p-10 text-center"
              >

                {/* Icon */}
                <div className="text-6xl mb-6">

                  {tech.icon}

                </div>

                {/* Name */}
                <h3 className="text-2xl font-black">

                  {tech.name}

                </h3>

              </div>

            )
          )}

        </div>

      </div>

    </section>
  );
}
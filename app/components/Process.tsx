export default function Process() {

  const steps = [
    {
      number: "01",
      title:
        "Choose Your Course",

      description:
        "Explore professional online IT courses and select the skill you want to master.",
    },

    {
      number: "02",
      title:
        "Submit Enrollment",

      description:
        "Fill out the enrollment form or contact us directly on WhatsApp to get started.",
    },

    {
      number: "03",
      title:
        "Start Learning",

      description:
        "Attend online classes, complete projects, and gain practical digital skills.",
    },

    {
      number: "04",
      title:
        "Build Your Career",

      description:
        "Start freelancing, get clients, launch your business, or grow your digital career.",
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
            Simple Learning Process
          </span>

          <h2 className="text-5xl md:text-6xl font-black mt-8 mb-6">

            How It
            <span className="block gradient-text">
              Works
            </span>

          </h2>

          <p className="text-slate-400 text-xl leading-8 max-w-3xl mx-auto">

            Our learning system is designed to help students quickly build practical digital skills and start earning online.

          </p>

        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step, index) => (

            <div
              key={index}
              className="glass-effect hover:border-blue-500 hover:-translate-y-3 transition duration-300 rounded-[32px] p-10 relative overflow-hidden"
            >

              {/* Big Number */}
              <div className="absolute top-5 right-5 text-7xl font-black text-white/5">

                {step.number}

              </div>

              {/* Circle */}
              <div className="w-20 h-20 rounded-3xl bg-blue-500/20 flex items-center justify-center text-3xl font-black text-blue-400 mb-8">

                {step.number}

              </div>

              {/* Title */}
              <h3 className="text-3xl font-black mb-6">

                {step.title}

              </h3>

              {/* Description */}
              <p className="text-slate-400 leading-8 text-lg">

                {step.description}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
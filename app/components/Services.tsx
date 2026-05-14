export default function Services() {

  const services = [
    {
      icon: "💻",
      title:
        "Website Development",

      description:
        "Modern responsive websites using Next.js, React, Tailwind CSS, and Firebase.",
    },

    {
      icon: "🎨",
      title:
        "Graphic Designing",

      description:
        "Professional logo design, social media posts, branding, thumbnails, and UI design.",
    },

    {
      icon: "📈",
      title:
        "Digital Marketing",

      description:
        "SEO, Facebook ads, Google ads, content marketing, and business growth strategies.",
    },

    {
      icon: "🛒",
      title:
        "Shopify Development",

      description:
        "Complete Shopify store design, dropshipping setup, and ecommerce solutions.",
    },

    {
      icon: "💼",
      title:
        "Freelancing Training",

      description:
        "Learn Fiverr, Upwork, client hunting, proposal writing, and freelancing growth.",
    },

    {
      icon: "🖥️",
      title:
        "POS Software",

      description:
        "Business management systems, inventory software, and modern POS solutions.",
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
            Our Professional Services
          </span>

          <h2 className="text-5xl md:text-6xl font-black mt-8 mb-6">

            What We
            <span className="block gradient-text">
              Specialize In
            </span>

          </h2>

          <p className="text-slate-400 text-xl leading-8 max-w-3xl mx-auto">

            Professional digital services and online IT training designed for students, freelancers, startups, and businesses worldwide.

          </p>

        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <div
              key={index}
              className="glass-effect hover:border-blue-500 hover:-translate-y-3 transition duration-300 rounded-[32px] p-10"
            >

              {/* Icon */}
              <div className="w-24 h-24 rounded-3xl bg-blue-500/20 flex items-center justify-center text-5xl mb-8">

                {service.icon}

              </div>

              {/* Title */}
              <h3 className="text-3xl font-black mb-6">

                {service.title}

              </h3>

              {/* Description */}
              <p className="text-slate-400 leading-8 text-lg mb-8">

                {service.description}

              </p>

              {/* Button */}
              <a
                href="https://wa.me/923059494585"
                target="_blank"
                className="inline-block bg-blue-500 hover:bg-blue-600 hover:scale-105 transition duration-300 px-6 py-3 rounded-xl font-bold"
              >
                Learn More
              </a>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
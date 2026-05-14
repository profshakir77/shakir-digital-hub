export default function CourseCategories() {

  const categories = [
    {
      title:
        "Web Development",

      courses:
        "React, Next.js, Firebase",

      icon: "💻",
    },

    {
      title:
        "Graphic Designing",

      courses:
        "Photoshop, Illustrator, Canva",

      icon: "🎨",
    },

    {
      title:
        "Digital Marketing",

      courses:
        "SEO, Facebook Ads, Google Ads",

      icon: "📈",
    },

    {
      title:
        "Freelancing",

      courses:
        "Fiverr, Upwork, Client Hunting",

      icon: "💼",
    },

    {
      title:
        "Shopify",

      courses:
        "Store Design, Dropshipping",

      icon: "🛒",
    },

    {
      title:
        "Business Software",

      courses:
        "POS & Inventory Systems",

      icon: "🖥️",
    },
  ];

  return (
    <section className="py-28 bg-slate-950 text-white relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full"></div>

      <div className="container-custom relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">

          <span className="bg-blue-500/20 text-blue-400 px-5 py-2 rounded-full text-sm">
            Explore Categories
          </span>

          <h2 className="text-5xl md:text-6xl font-black mt-8 mb-6">

            Popular Course
            <span className="block gradient-text">
              Categories
            </span>

          </h2>

          <p className="text-slate-400 text-xl leading-8 max-w-3xl mx-auto">

            Choose from modern digital skills and professional online training programs designed for freelancers, students, and businesses.

          </p>

        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {categories.map(
            (category, index) => (

              <div
                key={index}
                className="glass-effect hover:border-blue-500 hover:-translate-y-3 transition duration-300 rounded-[32px] p-10"
              >

                {/* Icon */}
                <div className="w-24 h-24 rounded-3xl bg-blue-500/20 flex items-center justify-center text-5xl mb-8">

                  {category.icon}

                </div>

                {/* Title */}
                <h3 className="text-3xl font-black mb-5">

                  {category.title}

                </h3>

                {/* Courses */}
                <p className="text-slate-400 leading-8 text-lg mb-8">

                  {category.courses}

                </p>

                {/* Button */}
                <a
                  href="#courses"
                  className="inline-block bg-blue-500 hover:bg-blue-600 hover:scale-105 transition duration-300 px-6 py-3 rounded-xl font-bold"
                >
                  Explore Courses
                </a>

              </div>

            )
          )}

        </div>

      </div>

    </section>
  );
}
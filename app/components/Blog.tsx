const blogs = [
  {
    title: "How To Start Freelancing In Pakistan",
    description:
      "Learn how beginners can start freelancing and earn online using digital skills.",
  },

  {
    title: "Top Web Development Skills In 2025",
    description:
      "Discover the most in-demand web technologies and programming skills.",
  },

  {
    title: "Why Digital Marketing Is Important",
    description:
      "Understand how businesses grow online using SEO and digital marketing.",
  },
];

export default function Blog() {
  return (
    <section className="py-28 bg-slate-900">
      <div className="container-custom">

        <div className="text-center mb-20">
          <h2 className="text-5xl font-black mb-6">
            Latest Blog Articles
          </h2>

          <p className="text-slate-400 text-xl">
            SEO-optimized content for students and freelancers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-slate-950 border border-slate-800 hover:border-blue-500 transition rounded-[32px] overflow-hidden"
            >

              <div className="h-56 bg-gradient-to-br from-blue-500 to-cyan-500"></div>

              <div className="p-8">

                <h3 className="text-3xl font-black mb-6">
                  {blog.title}
                </h3>

                <p className="text-slate-400 leading-8 mb-8">
                  {blog.description}
                </p>

                <button className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-xl font-bold">
                  Read More
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 border-t border-slate-800 text-white">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="container-custom relative z-10">

        {/* Newsletter */}
        <div className="glass-effect rounded-[40px] p-10 md:p-16 mb-20 mt-20 text-center">

          <span className="bg-blue-500/20 text-blue-400 px-5 py-2 rounded-full text-sm">
            Join Our Community
          </span>

          <h2 className="text-5xl md:text-6xl font-black mt-8 mb-6">

            Stay Updated With
            <span className="block gradient-text">
              Latest Courses
            </span>

          </h2>

          <p className="text-slate-400 text-xl leading-8 max-w-3xl mx-auto mb-10">

            Get updates about new online courses, freelancing tips, and digital services.

          </p>

          <div className="max-w-2xl mx-auto flex flex-col md:flex-row gap-4">

            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-slate-900 border border-slate-700 focus:border-blue-500 transition rounded-2xl p-5 text-white outline-none"
            />

            <button className="bg-blue-500 hover:bg-blue-600 hover:scale-105 transition duration-300 px-8 py-5 rounded-2xl font-bold text-lg">
              Subscribe
            </button>

          </div>

        </div>

        {/* Main Footer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div>

            <h2 className="text-4xl font-black gradient-text mb-6">
              Shakir Digital Hub
            </h2>

            <p className="text-slate-400 leading-8 mb-8">

              Professional online IT courses and digital services helping students worldwide build successful digital careers.

            </p>

            <div className="flex gap-4">

              <a
                href="https://wa.me/923059494585"
                target="_blank"
                className="w-14 h-14 rounded-2xl bg-green-500 hover:bg-green-600 hover:scale-110 transition duration-300 flex items-center justify-center text-2xl"
              >
                💬
              </a>

              <a
                href="https://web.facebook.com/profile.php?id=61584067904240"
                target="_blank"
                className="w-14 h-14 rounded-2xl bg-blue-500 hover:bg-blue-600 hover:scale-110 transition duration-300 flex items-center justify-center text-2xl"
              >
                🌍
              </a>

            </div>

          </div>

          {/* Navigation */}
          <div>

            <h3 className="text-2xl font-bold mb-6">
              Navigation
            </h3>

            <div className="space-y-4 text-slate-400">

              <a
                href="#home"
                className="block hover:text-white transition"
              >
                Home
              </a>

              <a
                href="#courses"
                className="block hover:text-white transition"
              >
                Courses
              </a>

              <a
                href="#enroll"
                className="block hover:text-white transition"
              >
                Enroll
              </a>

              <a
                href="#contact"
                className="block hover:text-white transition"
              >
                Contact
              </a>

            </div>

          </div>

          {/* Services */}
          <div>

            <h3 className="text-2xl font-bold mb-6">
              Services
            </h3>

            <div className="space-y-4 text-slate-400">

              <p>
                Website Development
              </p>

              <p>
                Graphic Designing
              </p>

              <p>
                Digital Marketing
              </p>

              <p>
                Freelancing Training
              </p>

              <p>
                Shopify Development
              </p>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-2xl font-bold mb-6">
              Contact Info
            </h3>

            <div className="space-y-4 text-slate-400 leading-8">

              <p>
                📧 shakirdigitalhub@gmail.com
              </p>

              <p>
                📱 +92 305 9494585
              </p>

              <p>
                🌍 Worldwide Online Services
              </p>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500">

          <p>
            © 2025 Shakir Digital Hub. All Rights Reserved.
          </p>

          <p>
            Built with Next.js & Firebase 🚀
          </p>

        </div>

      </div>

    </footer>
  );
}
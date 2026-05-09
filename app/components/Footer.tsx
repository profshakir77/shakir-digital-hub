export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black border-t border-slate-800 text-white py-20">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full"></div>

      <div className="container-custom relative z-10">

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
                className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 transition flex items-center justify-center text-xl"
              >
                💬
              </a>

              <a
                href="https://web.facebook.com/profile.php?id=61584067904240"
                target="_blank"
                className="w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 transition flex items-center justify-center text-xl"
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
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500">

          <p>
            © 2025 Shakir Digital Hub. All Rights Reserved.
          </p>

          <p>
            Built with Next.js & Firebase
          </p>

        </div>

      </div>

    </footer>
  );
}
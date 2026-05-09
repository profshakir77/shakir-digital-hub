export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-black text-white relative overflow-hidden"
    >

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="container-custom relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">

          <span className="bg-blue-500/20 text-blue-400 px-5 py-2 rounded-full text-sm">
            Contact Shakir Digital Hub
          </span>

          <h2 className="text-5xl md:text-6xl font-black mt-8 mb-6">

            Let’s Build Your
            <span className="block gradient-text">
              Digital Career
            </span>

          </h2>

          <p className="text-slate-400 text-xl leading-8 max-w-3xl mx-auto">
            Contact us for professional online IT courses, freelancing training, website development, digital marketing, graphic designing, and business technology services worldwide.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Email */}
          <div className="glass-effect hover:border-blue-500 hover:-translate-y-3 transition duration-300 rounded-[32px] p-10">

            <div className="w-20 h-20 rounded-3xl bg-blue-500/20 flex items-center justify-center text-4xl mb-8">
              📧
            </div>

            <h3 className="text-3xl font-black mb-4">
              Email Address
            </h3>

            <p className="text-slate-400 leading-8 break-all">
              shakirdigitalhub@gmail.com
            </p>

          </div>

          {/* WhatsApp */}
          <div className="glass-effect hover:border-green-500 hover:-translate-y-3 transition duration-300 rounded-[32px] p-10">

            <div className="w-20 h-20 rounded-3xl bg-green-500/20 flex items-center justify-center text-4xl mb-8">
              📱
            </div>

            <h3 className="text-3xl font-black mb-4">
              Phone / WhatsApp
            </h3>

            <p className="text-slate-400 leading-8 mb-8">
              +92 305 9494585
            </p>

            <a
              href="https://wa.me/923059494585"
              target="_blank"
              className="inline-block bg-green-500 hover:bg-green-600 hover:scale-105 transition duration-300 px-6 py-3 rounded-xl font-bold"
            >
              Chat on WhatsApp
            </a>

          </div>

          {/* Facebook */}
          <div className="glass-effect hover:border-cyan-500 hover:-translate-y-3 transition duration-300 rounded-[32px] p-10">

            <div className="w-20 h-20 rounded-3xl bg-cyan-500/20 flex items-center justify-center text-4xl mb-8">
              🌍
            </div>

            <h3 className="text-3xl font-black mb-4">
              Facebook Page
            </h3>

            <p className="text-slate-400 leading-8 mb-8">
              Follow us for updates, online courses, freelancing tips, and digital services.
            </p>

            <a
              href="https://web.facebook.com/profile.php?id=61584067904240"
              target="_blank"
              className="inline-block bg-blue-500 hover:bg-blue-600 hover:scale-105 transition duration-300 px-6 py-3 rounded-xl font-bold"
            >
              Visit Facebook
            </a>

          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-20 glass-effect rounded-[40px] p-10 md:p-16 text-center">

          <h3 className="text-4xl md:text-5xl font-black mb-6">

            Ready To Start Your
            <span className="block gradient-text">
              Digital Journey?
            </span>

          </h3>

          <p className="text-slate-400 text-xl leading-8 max-w-3xl mx-auto mb-10">

            Join students worldwide and start learning high-income digital skills today.

          </p>

          <a
            href="#enroll"
            className="inline-block bg-blue-500 hover:bg-blue-600 hover:scale-105 transition duration-300 px-10 py-5 rounded-2xl font-bold text-xl shadow-lg shadow-blue-500/30"
          >
            Enroll Now
          </a>

        </div>

      </div>

    </section>
  );
}
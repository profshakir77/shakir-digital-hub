export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-black text-white"
    >

      <div className="container-custom">

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="glass-effect hover:border-blue-500 transition duration-300 rounded-[32px] p-10">

            <div className="text-6xl mb-6">
              📧
            </div>

            <h3 className="text-3xl font-black mb-4">
              Email Address
            </h3>

            <p className="text-slate-400 leading-8 break-all">
              shakirdigitalhub@gmail.com
            </p>

          </div>

          <div className="glass-effect hover:border-green-500 transition duration-300 rounded-[32px] p-10">

            <div className="text-6xl mb-6">
              📱
            </div>

            <h3 className="text-3xl font-black mb-4">
              Phone / WhatsApp
            </h3>

            <p className="text-slate-400 leading-8">
              +92 305 9494585
            </p>

            <a
              href="https://wa.me/923059494585"
              target="_blank"
              className="inline-block mt-6 bg-green-500 hover:bg-green-600 hover:scale-105 transition duration-300 px-6 py-3 rounded-xl font-bold"
            >
              Chat on WhatsApp
            </a>

          </div>

          <div className="glass-effect hover:border-blue-500 transition duration-300 rounded-[32px] p-10">

            <div className="text-6xl mb-6">
              🌍
            </div>

            <h3 className="text-3xl font-black mb-4">
              Facebook Page
            </h3>

            <p className="text-slate-400 leading-8 mb-6">
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

      </div>

    </section>
  );
}
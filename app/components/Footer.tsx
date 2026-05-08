import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-slate-800 py-10">
      <div className="container-custom grid md:grid-cols-2 gap-10 items-center">

        <div>
          <div className="flex items-center gap-4">

            <Image
              src="/images/logo.png"
              alt="Logo"
              width={60}
              height={60}
              className="rounded-full"
            />

            <div>
              <h3 className="text-3xl font-black text-blue-400">
                SHAKIR DIGITAL HUB
              </h3>

              <p className="text-slate-500">
                Digital Skills Academy
              </p>
            </div>

          </div>

          <p className="text-slate-500 mt-6 leading-7">
            Professional online IT courses and digital services
            for students, freelancers, and businesses worldwide.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 md:justify-end text-lg">

          <a
            href="https://web.facebook.com/profile.php?id=61584067904240"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            Facebook
          </a>

          <a
            href="https://wa.me/923059494585"
            target="_blank"
            className="hover:text-green-400 transition"
          >
            WhatsApp
          </a>

          <a
            href="mailto:shakirdigitalhub@gmail.com"
            className="hover:text-blue-400 transition"
          >
            Email
          </a>

        </div>
      </div>

      <div className="container-custom border-t border-slate-800 mt-10 pt-6 text-center text-slate-500">
        © 2025 Shakir Digital Hub — All Rights Reserved.
      </div>
    </footer>
  );
}
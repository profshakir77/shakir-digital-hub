export default function Brands() {

  const brands = [
    "Google",
    "Shopify",
    "Fiverr",
    "Upwork",
    "Meta",
    "YouTube",
  ];

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden border-y border-slate-800">

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5"></div>

      <div className="container-custom relative z-10">

        {/* Heading */}
        <div className="text-center mb-14">

          <p className="text-slate-400 text-lg tracking-[4px] uppercase">

            Technologies & Platforms We Work With

          </p>

        </div>

        {/* Brands */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">

          {brands.map((brand, index) => (

            <div
              key={index}
              className="glass-effect hover:border-blue-500 hover:scale-105 transition duration-300 rounded-[28px] p-8 text-center"
            >

              <h3 className="text-2xl font-black gradient-text">

                {brand}

              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
const faqs = [
  {
    question: "Are the courses online?",
    answer:
      "Yes, all courses are available online for national and international students.",
  },

  {
    question: "Do you provide certificates?",
    answer:
      "Yes, certificates are provided after successful course completion.",
  },

  {
    question: "Can beginners join?",
    answer:
      "Yes, our courses are beginner-friendly and practical.",
  },

  {
    question: "How can I contact support?",
    answer:
      "You can contact us via WhatsApp, Email, or Facebook page.",
  },
];

export default function Faq() {
  return (
    <section className="py-28 bg-slate-950">
      <div className="container-custom">

        <div className="text-center mb-20">
          <h2 className="text-5xl font-black mb-6">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-400 text-xl">
            Everything students need to know.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                {faq.question}
              </h3>

              <p className="text-slate-300 leading-8 text-lg">
                {faq.answer}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
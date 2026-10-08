const faqs = [
  {
    question: "Do I need a Pinterest account?",
    answer:
      "No. You can paste a publicly accessible Pinterest Pin URL without logging in.",
  },
  {
    question: "Is PinFetch free?",
    answer: "Yes. The basic downloader is free to use.",
  },
  {
    question: "Can I use it on my phone?",
    answer:
      "Yes. PinFetch is designed to work on mobile, tablet, and desktop devices.",
  },
];

const FAQ = () => {
  return (
    <section
      id="faq"
      className="border-t border-gray-100 bg-gray-50 px-4 py-20 sm:px-6"
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#E60023]">
            FAQ
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-10 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white px-6">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="cursor-pointer list-none font-medium">
                {faq.question}
              </summary>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

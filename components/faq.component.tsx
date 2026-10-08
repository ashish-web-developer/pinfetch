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
      className="border-t border-gray-200 bg-[#F7F7F5] px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-3xl">
        {/* Heading */}
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#E60023]">
            <span className="size-1.5 rounded-full bg-[#E60023]" />
            FAQ
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-gray-500">
            Everything you need to know about downloading Pinterest videos
            with PinFetch.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-gray-200 bg-white">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className={`group ${
                index !== 0 ? "border-t border-gray-200" : ""
              }`}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-5 py-5 text-left text-sm font-semibold text-gray-900 transition-colors hover:text-[#E60023] sm:px-6">
                <span>{faq.question}</span>

                <span className="relative flex size-7 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-all duration-200 group-open:border-red-200 group-open:bg-red-50 group-open:text-[#E60023]">
                  <span className="absolute h-px w-3 bg-current" />

                  <span className="absolute h-3 w-px bg-current transition-transform duration-200 group-open:rotate-90" />
                </span>
              </summary>

              <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                <p className="max-w-2xl text-sm leading-6 text-gray-500">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
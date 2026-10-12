import { SITE_NAME } from "@/constants/site.constant";

const faqs = [
  {
    question: "Do I need a Pinterest account?",
    answer:
      "No. You can paste a publicly accessible Pinterest Pin URL without logging in.",
  },
  {
    question: `Is ${SITE_NAME} free?`,
    answer: "Yes. The basic downloader is free to use.",
  },
  {
    question: "Can I use it on my phone?",
    answer: `Yes. ${SITE_NAME} is designed to work on mobile, tablet, and desktop devices.`,
  },
  {
    question: "What format are the videos saved in?",
    answer:
      "Videos are saved as MP4, which plays on virtually any phone, computer, or TV.",
  },
  {
    question: "Can I download videos from private Pins or boards?",
    answer: `No. ${SITE_NAME} only works with publicly accessible Pins. If a Pin needs a login to view, it can't be fetched.`,
  },
  {
    question: "Can I reuse the videos I download?",
    answer:
      "Videos belong to their original creators. Download them for personal use, and ask for permission before reposting or using them commercially.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const FAQ = () => {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-20 border-t border-gray-200 bg-[#F7F7F5] px-4 py-16 sm:px-6 sm:py-24"
    >
      {/* Structured data for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-3xl">
        {/* Heading */}
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-[11px] font-bold tracking-[0.14em] text-[#E60023] uppercase sm:text-xs sm:tracking-[0.18em]">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-[#E60023]"
            />
            FAQ
          </p>

          <h2
            id="faq-heading"
            className="mt-4 text-[1.75rem] leading-[1.1] font-bold tracking-[-0.04em] text-gray-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-gray-500">
            Everything you need to know about downloading Pinterest videos with
            {SITE_NAME}.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] sm:mt-12">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className={`group ${index !== 0 ? "border-t border-gray-200" : ""}`}
            >
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 text-left text-[15px] leading-snug font-semibold text-gray-900 transition-colors hover:text-[#E60023] focus:outline-none focus-visible:bg-red-50/60 focus-visible:text-[#E60023] sm:gap-6 sm:px-6 sm:py-5 sm:text-sm [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>

                <span
                  aria-hidden="true"
                  className="relative flex size-7 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-all duration-200 group-open:border-red-200 group-open:bg-red-50 group-open:text-[#E60023]"
                >
                  <span className="absolute h-px w-3 bg-current" />
                  <span className="absolute h-3 w-px bg-current transition-all duration-200 group-open:rotate-90 group-open:opacity-0" />
                </span>
              </summary>

              <div className="px-4 pr-14 pb-5 sm:px-6 sm:pr-16 sm:pb-6">
                <p className="max-w-2xl text-sm leading-6 text-gray-500">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex flex-col items-center gap-3 text-center sm:mt-10 sm:flex-row sm:justify-center sm:gap-4">
          <p className="text-sm text-gray-500">Ready to save a video?</p>

          <a
            href="#downloader"
            className="group inline-flex h-10 items-center gap-2 rounded-xl bg-[#E60023] px-4 text-[13px] font-semibold text-white shadow-[0_3px_10px_rgba(230,0,35,0.16)] transition-all duration-200 hover:-translate-y-px hover:bg-[#d50021] focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F7F5]"
          >
            Paste a link
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

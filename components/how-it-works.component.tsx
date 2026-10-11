const steps = [
  {
    number: "01",
    label: "COPY",
    title: "Grab a Pinterest Pin",
    description:
      "Find the video you want on Pinterest and copy its link from the Pin or share menu.",
  },
  {
    number: "02",
    label: "PASTE",
    title: "Drop the link into PinFetch",
    description:
      "Paste the copied URL into the downloader. No account, login, or extra steps.",
  },
  {
    number: "03",
    label: "SAVE",
    title: "Download your video",
    description:
      "We'll find the available video and give you a direct download option.",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="relative scroll-mt-20 overflow-hidden border-y border-gray-100 bg-white px-4 py-16 sm:px-6 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section intro */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end sm:gap-6">
          <div>
            <div className="mb-4 flex items-center gap-3 sm:mb-5">
              <span className="size-2 rounded-full bg-[#E60023]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-gray-400 sm:text-xs sm:tracking-[0.18em]">
                How it works
              </span>
            </div>

            <h2
              id="how-it-works-heading"
              className="max-w-2xl text-[2rem] font-bold leading-[1.08] tracking-[-0.045em] text-gray-950 sm:text-5xl sm:leading-[1.05]"
            >
              Three steps.
              <br />
              <span className="text-gray-300">One saved video.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-gray-500 sm:text-right">
            PinFetch keeps the process simple. No account. No unnecessary
            steps. Just paste and download.
          </p>
        </div>

        {/* Steps */}
        <ol className="mt-10 sm:mt-20">
          {steps.map((step, index) => (
            <li
              key={step.number}
              className="group relative border-t border-gray-200 py-7 last:border-b sm:py-12"
            >
              <div className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 sm:grid-cols-[120px_1fr_1.2fr] sm:items-center sm:gap-10">
                {/* Number */}
                <span
                  aria-hidden="true"
                  className="row-span-2 select-none self-start text-5xl font-black leading-none tracking-[-0.08em] text-gray-200 transition-colors duration-300 group-hover:text-red-100 sm:row-span-1 sm:self-center sm:text-8xl sm:text-gray-100 sm:group-hover:text-red-50"
                >
                  {step.number}
                </span>

                {/* Title */}
                <div className="min-w-0">
                  <div className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#E60023] sm:mb-2">
                    <span className="sr-only">Step {index + 1}: </span>
                    {step.label}
                  </div>

                  <h3 className="text-xl font-bold tracking-[-0.03em] text-gray-950 sm:text-3xl">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="col-start-2 flex items-center justify-between gap-6 sm:col-start-auto">
                  <p className="max-w-md text-sm leading-6 text-gray-500 sm:text-base">
                    {step.description}
                  </p>

                  {index < steps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="hidden size-10 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all duration-300 group-hover:border-red-200 group-hover:bg-red-50 group-hover:text-[#E60023] sm:flex"
                    >
                      →
                    </div>
                  )}
                </div>
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-[#E60023] transition-all duration-500 group-hover:w-full" />
            </li>
          ))}
        </ol>

        {/* CTA banner */}
        <div className="mt-10 flex flex-col gap-5 rounded-2xl bg-gray-950 p-6 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-5">
          <div>
            <p className="text-base font-semibold text-white sm:text-sm">
              Ready when you are.
            </p>

            <p className="mt-1 text-sm text-gray-400 sm:text-xs">
              Paste a Pinterest link and start downloading.
            </p>
          </div>

          <a
            href="#downloader"
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#E60023] px-5 text-sm font-semibold text-white transition hover:bg-[#d50021] focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 sm:h-10 sm:w-auto sm:px-4 sm:text-xs"
          >
            Start downloading
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
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
      className="relative overflow-hidden border-y border-gray-100 bg-white px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section intro */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="size-2 rounded-full bg-[#E60023]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                How it works
              </span>
            </div>

            <h2 className="max-w-2xl text-4xl font-bold leading-[1.05] tracking-[-0.045em] text-gray-950 sm:text-5xl">
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
        <div className="mt-20">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative border-t border-gray-200 py-10 sm:py-12"
            >
              <div className="grid gap-6 sm:grid-cols-[120px_1fr_1.2fr] sm:items-center sm:gap-10">
                {/* Number */}
                <div className="relative overflow-hidden">
                  <span className="block text-7xl font-black leading-none tracking-[-0.08em] text-gray-100 transition-colors duration-300 group-hover:text-red-50 sm:text-8xl">
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#E60023]">
                    {step.label}
                  </div>

                  <h3 className="text-2xl font-bold tracking-[-0.03em] text-gray-950 sm:text-3xl">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="flex items-center justify-between gap-6">
                  <p className="max-w-md text-sm leading-6 text-gray-500 sm:text-base">
                    {step.description}
                  </p>

                  {/* Arrow */}
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
            </div>
          ))}
        </div>

        {/* Bottom visual */}
        <div className="mt-12 flex items-center justify-between rounded-2xl bg-gray-950 px-6 py-5 sm:px-8">
          <div>
            <p className="text-sm font-semibold text-white">
              Ready when you are.
            </p>

            <p className="mt-1 text-xs text-gray-400">
              Paste a Pinterest link and start downloading.
            </p>
          </div>

          <a
            href="#downloader"
            className="inline-flex h-10 items-center gap-2 rounded-xl bg-[#E60023] px-4 text-xs font-semibold text-white transition hover:bg-[#d50021]"
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
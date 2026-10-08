const steps = [
  {
    number: "01",
    title: "Copy the link",
    description:
      "Open the Pinterest Pin and copy its URL from your browser or the share menu.",
  },
  {
    number: "02",
    title: "Paste it here",
    description:
      "Paste the Pinterest URL into the downloader above.",
  },
  {
    number: "03",
    title: "Download",
    description:
      "We'll process the link and provide the available video for download.",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="border-t border-gray-100 bg-gray-50 px-4 py-20 sm:px-6"
    >
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#E60023]">
            Simple process
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            How it works
          </h2>

          <p className="mt-3 text-gray-500">
            Get your Pinterest video in three simple steps.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-red-100 hover:shadow-lg hover:shadow-red-50"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-sm font-bold text-[#E60023] transition group-hover:bg-[#E60023] group-hover:text-white">
                {step.number}
              </span>

              <h3 className="mt-5 text-lg font-semibold">
                {step.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
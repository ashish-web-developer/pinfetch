import { Download, LockKeyhole, Smartphone } from "lucide-react";

const features = [
  {
    icon: Download,
    title: "Fast",
    description: "Paste, fetch, save. No unnecessary steps between you and the file.",
  },
  {
    icon: LockKeyhole,
    title: "Private",
    description: "No account, no login, and no credentials to hand over.",
  },
  {
    icon: Smartphone,
    title: "Everywhere",
    description: "Works the same on your phone, tablet, or desktop browser.",
  },
];

const Features = () => {
  return (
    <section
      aria-labelledby="features-heading"
      className="relative overflow-hidden bg-[#F7F7F5] px-4 py-16 text-gray-900 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Intro */}
        <div className="flex flex-col gap-4 border-b border-gray-200 pb-8 sm:flex-row sm:items-end sm:justify-between sm:gap-5 sm:pb-10">
          <div>
            <p className="mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.14em] text-gray-500 sm:text-xs sm:tracking-[0.18em]">
              <span aria-hidden="true" className="size-2 rounded-full bg-[#E60023]" />
              Built for simplicity
            </p>

            <h2
              id="features-heading"
              className="max-w-2xl text-[1.75rem] font-bold leading-[1.1] tracking-[-0.04em] sm:text-4xl sm:leading-tight"
            >
              Nothing gets in the way
              <span className="text-gray-400"> of your download.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-gray-500 sm:text-right">
            No complicated setup. No account. Just a simple way to save the
            videos you want.
          </p>
        </div>

        {/* Feature strip */}
        <ul className="grid sm:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isFirst = index === 0;

            return (
              <li
                key={feature.title}
                className={`group relative flex items-start gap-4 py-6 sm:flex-col sm:gap-0 sm:py-12 ${
                  isFirst ? "sm:pl-0 sm:pr-8" : "border-t border-gray-200 sm:border-l sm:border-t-0 sm:px-8"
                }`}
              >
                {/* Icon */}
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition-all duration-300 group-hover:border-red-200 group-hover:bg-red-50 group-hover:text-[#E60023]">
                  <Icon size={19} strokeWidth={1.7} aria-hidden="true" />
                </div>

                <div className="min-w-0">
                  {/* Title */}
                  <h3 className="flex items-baseline text-xl font-semibold tracking-[-0.03em] sm:mt-8 sm:text-2xl">
                    {feature.title}
                    <span aria-hidden="true" className="text-[#E60023]">
                      .
                    </span>
                  </h3>

                  {/* Description */}
                  <p className="mt-1.5 max-w-xs text-sm leading-6 text-gray-500 sm:mt-2">
                    {feature.description}
                  </p>
                </div>

                {/* Hover accent */}
                <div
                  aria-hidden="true"
                  className={`absolute bottom-0 h-px w-0 bg-[#E60023] transition-all duration-500 group-hover:w-16 ${
                    isFirst ? "left-0" : "left-0 sm:left-8"
                  }`}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Features;
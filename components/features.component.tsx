import {
  Download,
  LockKeyhole,
  Smartphone,
} from "lucide-react";

const features = [
  {
    icon: Download,
    title: "Fast",
    description: "No unnecessary steps.",
  },
  {
    icon: LockKeyhole,
    title: "Private",
    description: "No account or credentials.",
  },
  {
    icon: Smartphone,
    title: "Everywhere",
    description: "Mobile and desktop ready.",
  },
];

const Features = () => {
  return (
    <section className="relative overflow-hidden bg-[#F7F7F5] px-4 py-20 text-gray-900 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Intro */}
        <div className="flex flex-col gap-5 border-b border-gray-200 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-gray-500">
              <span className="size-2 rounded-full bg-[#E60023]" />
              Built for simplicity
            </p>

            <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-4xl">
              Nothing gets in the way
              <span className="text-gray-400">
                {" "}
                of your download.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-gray-500 sm:text-right">
            No complicated setup. No account. Just a simple way to save the
            videos you want.
          </p>
        </div>

        {/* Feature strip */}
        <div className="grid sm:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className={`group relative px-1 py-10 sm:px-8 sm:py-12 ${
                  index !== 0
                    ? "border-t border-gray-200 sm:border-l sm:border-t-0"
                    : ""
                }`}
              >
                {/* Icon */}
                <div className="flex size-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition-all duration-300 group-hover:border-red-200 group-hover:bg-red-50 group-hover:text-[#E60023]">
                  <Icon size={19} strokeWidth={1.7} />
                </div>

                {/* Title */}
                <div className="mt-8 flex items-baseline gap-2">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                    {feature.title}
                  </h3>

                  <span className="text-[#E60023]">.</span>
                </div>

                {/* Description */}
                <p className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </p>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-8 h-px w-0 bg-[#E60023] transition-all duration-500 group-hover:w-16" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
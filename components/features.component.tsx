import {
  Download,
  LockKeyhole,
  Smartphone,
} from "lucide-react";

const features = [
  {
    icon: Download,
    title: "Fast",
    description:
      "Get your download without unnecessary steps.",
  },
  {
    icon: LockKeyhole,
    title: "No Login",
    description:
      "No account or Pinterest credentials required.",
  },
  {
    icon: Smartphone,
    title: "Works Anywhere",
    description:
      "Designed for both mobile and desktop devices.",
  },
];

const Features = () => {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div key={feature.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-[#E60023]">
                  <Icon size={21} />
                </div>

                <h3 className="mt-4 font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
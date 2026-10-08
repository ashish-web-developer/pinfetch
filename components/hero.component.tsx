// components
import Downloader from "@/components/downloader.component";

const Hero = () => {
  return (
    <section className="px-4 pt-20 pb-24 sm:px-6 sm:pt-28">
      <div className="mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-medium text-[#E60023]">
          <span className="bg-primary h-2 w-2 rounded-full" />
          Free Pinterest Video Downloader
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Download Pinterest
          <span className="text-primary block">videos in seconds.</span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
          Download publicly available Pinterest videos quickly and easily. No
          account or registration required.
        </p>

        {/* Downloader */}
        <Downloader />

        {/* Benefits */}
        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-500">
          <span>✓ Free to use</span>
          <span>✓ No registration</span>
          <span>✓ Fast processing</span>
          <span>✓ Mobile friendly</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import Downloader from "@/components/downloader.component";

const Hero = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-16 sm:px-6 sm:pb-32 sm:pt-20">
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-[-220px] size-[620px] -translate-x-1/2 rounded-full bg-red-50 blur-3xl" />

        <div className="absolute left-[-180px] top-[280px] size-[360px] rounded-full border border-gray-100" />

        <div className="absolute right-[-180px] top-[120px] size-[360px] rounded-full border border-gray-100" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Top label */}
        <div className="flex items-center gap-3">
          <span className="size-2 rounded-full bg-[#E60023]" />

          <span className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
            Pinterest Video Downloader
          </span>

          <span className="h-px w-10 bg-gray-200" />

          <span className="text-xs font-medium text-gray-400">
            PinFetch
          </span>
        </div>

        <div className="mt-12 grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left */}
          <div>
            <h1 className="max-w-xl text-5xl font-bold leading-[1] tracking-[-0.055em] text-gray-950 sm:text-6xl lg:text-[68px]">
              Download the videos
              <span className="block text-[#E60023]">
                you find on Pinterest.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-7 text-gray-500 sm:text-lg">
              Paste a Pinterest video link and save it directly to your
              device. Fast, simple, and without creating an account.
            </p>

            {/* Features */}
            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3">
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-green-500" />
                <span className="text-xs font-medium text-gray-500">
                  No sign-up
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-green-500" />
                <span className="text-xs font-medium text-gray-500">
                  Free
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-green-500" />
                <span className="text-xs font-medium text-gray-500">
                  Fast downloads
                </span>
              </div>
            </div>

            {/* Small supporting line */}
            <div className="mt-12 hidden border-t border-gray-200 pt-5 sm:block">
              <p className="text-xs leading-5 text-gray-400">
                Find a video you like on Pinterest?
                <span className="ml-1 font-medium text-gray-600">
                  Paste the link and you're ready to go.
                </span>
              </p>
            </div>
          </div>

          {/* Right */}
          <div id="downloader" className="relative">
            {/* Label */}
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                Download a video
              </span>

              <span className="flex items-center gap-2 text-xs text-gray-400">
                <span className="size-1.5 rounded-full bg-green-500" />
                Ready
              </span>
            </div>

            {/* Downloader */}
            <div className="relative rounded-[24px] border border-gray-200 bg-white p-2 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.22)]">
              <div className="rounded-[18px] bg-gray-50 p-5 sm:p-7">
                <Downloader />
              </div>
            </div>

            {/* Bottom details */}
            <div className="mt-4 flex items-center justify-between px-1">
              <span className="text-xs text-gray-400">
                No account required
              </span>

              <span className="text-xs font-medium text-gray-500">
                MP4
              </span>
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mt-20 border-t border-gray-200 pt-5 sm:mt-24">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300">
              PinFetch
            </span>

            <span className="text-xs text-gray-400">
              Simple by design.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
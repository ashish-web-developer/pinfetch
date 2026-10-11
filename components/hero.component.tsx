import Downloader from "@/components/downloader.component";

const Hero = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-10 sm:px-6 sm:pb-32 sm:pt-20">
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-[-160px] size-[360px] -translate-x-1/2 rounded-full bg-red-50 blur-3xl sm:top-[-220px] sm:size-[620px]" />

        <div className="absolute left-[-180px] top-[280px] hidden size-[360px] rounded-full border border-gray-100 sm:block" />

        <div className="absolute right-[-180px] top-[120px] hidden size-[360px] rounded-full border border-gray-100 sm:block" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Top label */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="size-2 shrink-0 rounded-full bg-[#E60023]" />

          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-gray-400 sm:text-xs sm:tracking-[0.18em]">
            Pinterest Video Downloader
          </span>

          <span className="hidden h-px w-10 bg-gray-200 sm:block" />

          <span className="hidden text-xs font-medium text-gray-400 sm:inline">
            PinFetch
          </span>
        </div>

        <div className="mt-8 grid grid-cols-1 items-center gap-10 sm:mt-12 sm:gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left */}
          <div className="min-w-0">
            <h1 className="max-w-xl text-[2.25rem] font-bold leading-[1.05] tracking-[-0.045em] text-gray-950 sm:text-5xl sm:tracking-[-0.055em] md:text-6xl lg:text-[68px] lg:leading-[1]">
              Download the videos
              <span className="block text-[#E60023]">
                you find on Pinterest.
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-gray-500 sm:mt-7 sm:text-lg">
              Paste a Pinterest video link and save it directly to your
              device. Fast, simple, and without creating an account.
            </p>

            {/* Features */}
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2.5 sm:mt-9 sm:gap-x-7 sm:gap-y-3">
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
          <div id="downloader" className="relative min-w-0 scroll-mt-24">
            {/* Label */}
            <div className="mb-3 flex items-center justify-between gap-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-gray-400 sm:text-xs sm:tracking-[0.18em]">
                Download a video
              </span>

              <span className="flex shrink-0 items-center gap-2 text-xs text-gray-400">
                <span className="size-1.5 rounded-full bg-green-500" />
                Ready
              </span>
            </div>

            {/* Downloader */}
            <div className="relative rounded-[20px] border border-gray-200 bg-white p-1.5 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.22)] sm:rounded-[24px] sm:p-2">
              <div className="rounded-[14px] bg-gray-50 p-4 sm:rounded-[18px] sm:p-7">
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
        <div className="mt-14 border-t border-gray-200 pt-5 sm:mt-24">
          <div className="flex items-center justify-between gap-3">
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
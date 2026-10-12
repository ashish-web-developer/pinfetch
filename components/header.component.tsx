import Image from "next/image";
import Link from "next/link";

// constants
import { SITE_NAME, SITE_TITLE } from "@/constants/site.constant";

const Header = () => {
  return (
    <header className="relative z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 sm:h-16">
        {/* Brand */}
        <Link
          href="/"
          aria-label={SITE_TITLE}
          className="group flex min-w-0 items-center gap-2.5 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-red-200"
        >
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-[0_4px_18px_rgba(0,0,0,0.06)] ring-1 ring-gray-100">
            <Image
              src="/logo.png"
              alt={SITE_NAME}
              width={42}
              height={42}
              priority
              className="size-9 object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Show a compact name on mobile, full lockup from sm up */}
          <span className="truncate text-[15px] font-bold tracking-tight text-gray-950 sm:hidden">
            {SITE_NAME}
          </span>

          <div className="hidden sm:block">
            <div className="text-[15px] font-bold tracking-tight text-gray-950">
              {SITE_NAME}
            </div>

            <div className="mt-1 text-[9px] font-semibold tracking-[0.14em] text-gray-400 uppercase">
              Pinterest Downloader
            </div>
          </div>
        </Link>

        {/* Navigation */}
        <nav
          aria-label="Main navigation"
          className="flex shrink-0 items-center gap-1 rounded-2xl border border-gray-200/80 bg-white/80 p-1 shadow-[0_4px_20px_rgba(0,0,0,0.04)] backdrop-blur-md sm:p-1.5"
        >
          <Link
            href="#how-it-works"
            className="hidden rounded-xl px-3.5 py-2 text-[13px] font-medium text-gray-500 transition-all duration-200 hover:bg-gray-50 hover:text-gray-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-200 md:inline-flex"
          >
            How it works
          </Link>

          <Link
            href="#faq"
            className="hidden rounded-xl px-3.5 py-2 text-[13px] font-medium text-gray-500 transition-all duration-200 hover:bg-gray-50 hover:text-gray-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-200 md:inline-flex"
          >
            FAQ
          </Link>

          <Link
            href="#downloader"
            className="group inline-flex h-9 items-center gap-1.5 rounded-xl bg-primary px-3.5 text-[13px] font-semibold text-white shadow-[0_3px_10px_rgba(230,0,35,0.16)] transition-all duration-200 hover:-translate-y-px hover:bg-[#d50021] hover:shadow-[0_5px_14px_rgba(230,0,35,0.22)] focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300 focus-visible:ring-offset-2 sm:px-4 md:ml-1"
          >
            Download
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            >
              →
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

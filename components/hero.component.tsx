"use client";

import { useState } from "react";
import { ArrowRight, Link as LinkIcon, Loader2 } from "lucide-react";

const Hero = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    if (!url.trim()) {
      return;
    }

    setLoading(true);

    // API integration will go here later.
    console.log("Pinterest URL:", url);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="px-4 pb-24 pt-20 sm:px-6 sm:pt-28">
      <div className="mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-medium text-[#E60023]">
          <span className="h-2 w-2 rounded-full bg-[#E60023]" />
          Free Pinterest Video Downloader
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Download Pinterest
          <span className="block text-[#E60023]">videos in seconds.</span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
          Download publicly available Pinterest videos quickly and easily. No
          account or registration required.
        </p>

        {/* Downloader */}
        <div className="mx-auto mt-10 max-w-2xl">
          <div className="flex flex-col gap-2 rounded-2xl border border-gray-200 bg-white p-2 shadow-lg shadow-gray-100 sm:flex-row">
            <div className="relative flex-1">
              <LinkIcon
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="url"
                value={url}
                onChange={(event) => setUrl(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleDownload();
                  }
                }}
                placeholder="Paste Pinterest URL here..."
                className="h-12 w-full rounded-xl pl-11 pr-4 text-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-red-100"
              />
            </div>

            <button
              type="button"
              onClick={handleDownload}
              disabled={loading}
              className="flex h-12 items-center justify-center gap-2 rounded-xl bg-[#E60023] px-8 text-sm font-semibold text-white transition hover:bg-[#cc001f] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 size={17} className="animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  Download
                  <ArrowRight size={17} />
                </>
              )}
            </button>
          </div>

          <p className="mt-4 text-xs text-gray-400">
            Only download content you have permission to use.
          </p>
        </div>

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

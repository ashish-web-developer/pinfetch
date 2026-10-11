"use client";

import { useState } from "react";
import type { FC, FormEvent } from "react";
import { ArrowRight, Download, Link as LinkIcon, Loader2 } from "lucide-react";

const buttonClass =
  "flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#E60023] text-sm font-semibold text-white transition-colors hover:bg-[#d50021] focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

const Downloader: FC = () => {
  const [url, setUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const reset = () => {
    setVideoUrl(null);
    setError("");
    setUrl("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!url.trim() || loading) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/pinterest/fetch-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to fetch video");
      }

      setVideoUrl(data.url);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  if (videoUrl) {
    return (
      <div className="w-full">
        <video
          src={videoUrl}
          controls
          playsInline
          preload="metadata"
          className="max-h-[420px] w-full rounded-xl bg-black object-contain"
        />

        <a
          href={`/api/pinterest/download?url=${encodeURIComponent(videoUrl)}`}
          download
          className={`${buttonClass} mt-3`}
        >
          <Download size={17} aria-hidden="true" />
          Download video
        </a>

        <button
          type="button"
          onClick={reset}
          className="mt-3 w-full text-center text-xs font-medium text-gray-400 transition-colors hover:text-gray-700"
        >
          Download another video
        </button>
      </div>
    );
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} noValidate>
        <div className="relative">
          <LinkIcon
            size={17}
            aria-hidden="true"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="url"
            inputMode="url"
            autoComplete="off"
            aria-label="Pinterest video URL"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            placeholder="Paste Pinterest URL..."
            disabled={loading}
            className="h-14 w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 text-base text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-200 focus:ring-4 focus:ring-red-50 disabled:opacity-60 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          disabled={!url.trim() || loading}
          className={`${buttonClass} mt-3`}
        >
          {loading ? (
            <>
              <Loader2 size={17} className="animate-spin" aria-hidden="true" />
              Finding video...
            </>
          ) : (
            <>
              Get video
              <ArrowRight size={17} aria-hidden="true" />
            </>
          )}
        </button>
      </form>

      {error && (
        <p
          role="alert"
          className="mt-3 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600"
        >
          {error}
        </p>
      )}

      <p className="mt-4 text-center text-[11px] leading-5 text-gray-400">
        Only download content you have permission to use.
      </p>
    </div>
  );
};

export default Downloader;
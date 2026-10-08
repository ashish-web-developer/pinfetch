"use client";

import { useState } from "react";
import type { FC } from "react";
import {
  LinkIcon,
  Loader2,
  ArrowRight,
  Download,
  X,
  Check,
} from "lucide-react";

const Downloader: FC = () => {
  const [url, setUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDownload = async () => {
    if (!url.trim() || loading) return;

    setLoading(true);
    setError("");
    setVideoUrl(null);

    try {
      const response = await fetch("/api/pinterest/fetch-url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: url.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to fetch video");
      }

      setVideoUrl(data.url);
    } catch (error) {
      console.error(error);

      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const clearVideo = () => {
    setVideoUrl(null);
    setError("");
  };

  return (
    <div id="downloader" className="w-full">
      {!videoUrl ? (
        <>
          {/* Input card */}
          <div className="rounded-[22px] border border-gray-200 bg-white p-2 shadow-[0_15px_50px_-20px_rgba(0,0,0,0.18)]">
            <div className="rounded-[17px] bg-gray-50 p-4 sm:p-5">
              {/* Input */}
              <div className="relative">
                <LinkIcon
                  size={17}
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
                  placeholder="Paste Pinterest URL..."
                  disabled={loading}
                  className="h-14 w-full rounded-xl border border-gray-200 bg-white pr-4 pl-11 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-200 focus:ring-4 focus:ring-red-50 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              {/* Action */}
              <button
                type="button"
                onClick={handleDownload}
                disabled={!url.trim() || loading}
                className="mt-3 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#E60023] text-sm font-semibold text-white shadow-[0_5px_14px_rgba(230,0,35,0.15)] transition-all hover:-translate-y-px hover:bg-[#d50021] hover:shadow-[0_7px_18px_rgba(230,0,35,0.2)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 size={17} className="animate-spin" />
                    Finding video...
                  </>
                ) : (
                  <>
                    Get video
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </>
                )}
              </button>
            </div>

            {/* Status */}
            <div className="flex items-center justify-center gap-2 px-2 py-3">
              <span className="size-1.5 rounded-full bg-green-500" />
              <span className="text-[11px] font-medium text-gray-400">
                No account required
              </span>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="mt-3 flex items-start gap-2 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
              <span className="mt-0.5">!</span>
              <span>{error}</span>
            </div>
          )}
        </>
      ) : (
        /* Video ready state */
        <div className="overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_15px_50px_-20px_rgba(0,0,0,0.18)]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3.5 sm:px-5">
            <div className="flex items-center gap-2.5">
              <div className="flex size-8 items-center justify-center rounded-lg bg-green-50">
                <Check size={16} className="text-green-600" />
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Video ready
                </p>
                <p className="text-[11px] text-gray-400">
                  Your video is ready to save
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={clearVideo}
              aria-label="Remove video"
              className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-50 hover:text-gray-700"
            >
              <X size={17} />
            </button>
          </div>

          {/* Video */}
          <div className="bg-black">
            <video
              src={videoUrl}
              controls
              playsInline
              preload="metadata"
              className="mx-auto max-h-[420px] w-full object-contain"
            />
          </div>

          {/* Actions */}
          <div className="p-4 sm:p-5">
            <a
              href={`/api/pinterest/download?url=${encodeURIComponent(videoUrl)}`}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#E60023] text-sm font-semibold text-white shadow-[0_5px_14px_rgba(230,0,35,0.15)] transition-all hover:-translate-y-px hover:bg-[#d50021] hover:shadow-[0_7px_18px_rgba(230,0,35,0.2)]"
            >
              <Download size={17} />
              Download video
            </a>

            <button
              type="button"
              onClick={clearVideo}
              className="mt-3 w-full text-center text-xs font-medium text-gray-400 transition hover:text-gray-700"
            >
              Download another video
            </button>
          </div>
        </div>
      )}

      <p className="mt-4 text-center text-[11px] leading-5 text-gray-400">
        Only download content you have permission to use.
      </p>
    </div>
  );
};

export default Downloader;
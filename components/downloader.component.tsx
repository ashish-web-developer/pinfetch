"use client";

import { useState } from "react";
import type { FC } from "react";
import { LinkIcon, Loader2, ArrowRight, Download, X } from "lucide-react";

const Downloader: FC = () => {
  const [url, setUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDownload = async () => {
    if (!url.trim()) return;

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
    <div className="mx-auto mt-10 max-w-2xl">
      {/* URL Input */}
      <div className="flex flex-col gap-2 rounded-xl border border-gray-300 bg-white p-2 sm:flex-row">
        <div className="relative flex-1">
          <LinkIcon
            size={18}
            className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-600"
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
            className="h-12 w-full rounded-xl pr-4 pl-11 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-red-100"
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
              Get Video
              <ArrowRight size={17} />
            </>
          )}
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {/* Video Preview */}
      {videoUrl && (
        <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                Video ready
              </h3>
              <p className="text-xs text-gray-500">
                Preview your Pinterest video before downloading.
              </p>
            </div>

            <button
              type="button"
              onClick={clearVideo}
              className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
              aria-label="Remove video"
            >
              <X size={18} />
            </button>
          </div>

          <div className="bg-black">
            <video
              src={videoUrl}
              controls
              playsInline
              preload="metadata"
              className="mx-auto max-h-150 w-full object-contain"
            />
          </div>

          <div className="p-4">
            <a
              href={`/api/pinterest/download?url=${encodeURIComponent(videoUrl)}`}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#E60023] text-sm font-semibold text-white transition hover:bg-[#cc001f] active:scale-[0.98]"
            >
              <Download size={17} />
              Download Video
            </a>
          </div>
        </div>
      )}

      <p className="mt-4 text-xs text-gray-400">
        Only download content you have permission to use.
      </p>
    </div>
  );
};

export default Downloader;

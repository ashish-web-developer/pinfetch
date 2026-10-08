import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url");

  if (!url) {
    return new Response("Missing video URL", {
      status: 400,
    });
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      return new Response("Failed to fetch video", {
        status: response.status,
      });
    }

    const contentType =
      response.headers.get("content-type") || "video/mp4";

    return new Response(response.body, {
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": 'attachment; filename="pinterest-video.mp4"',
      },
    });
  } catch (error) {
    console.error("Download error:", error);

    return new Response("Failed to download video", {
      status: 500,
    });
  }
}
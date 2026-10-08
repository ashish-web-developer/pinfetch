import { NextRequest, NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    // 1. Validate input
    if (!url || typeof url !== "string") {
      return NextResponse.json(
        { error: "Pinterest URL is required" },
        { status: 400 },
      );
    }

    // 2. Validate Pinterest domain
    const pinterest_url = new URL(url);

    const is_pinterest =
      pinterest_url.hostname === "pinterest.com" ||
      pinterest_url.hostname.endsWith(".pinterest.com") ||
      pinterest_url.hostname === "pin.it";

    if (!is_pinterest) {
      return NextResponse.json(
        { error: "Please enter a valid Pinterest URL" },
        { status: 400 },
      );
    }

    // 3. Fetch Pinterest page
    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/140 Safari/537.36",
      },
      redirect: "follow",
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Unable to access Pinterest page" },
        { status: 502 },
      );
    }
    const html = await response.text();
    const $ = cheerio.load(html);
    const video = $("video").first();
    console.log("value of html",$);
    console.log("value of video", video);
    if (!video.length) {
      return NextResponse.json(
        {
          success: false,
          error: "No video element found",
        },
        { status: 404 },
      );
    }

    // 7. Get video src
    let video_src = video.attr("src");
    console.log("value of video src", video_src);
    if (!video_src) {
      return NextResponse.json(
        {
          success: false,
          error: "Video element found, but no source was found",
        },
        { status: 404 },
      );
    }
    video_src = video_src.replace("/hls/", "/720p/").replace(".m3u8", ".mp4");
    return NextResponse.json({
      success: true,
      message: "Pinterest page fetched successfully",
      url: video_src,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}

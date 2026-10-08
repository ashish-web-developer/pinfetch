import { NextRequest, NextResponse } from "next/server";

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
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
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

    console.log("STATUS:", response.status);
    console.log("CONTENT TYPE:", response.headers.get("content-type"));
    console.log("HTML LENGTH:", html.length);
    console.log("HAS M3U8:", html.includes(".m3u8"));

    // 4. Extract M3U8 URL from Pinterest HTML
    const m3u8Matches = [
      ...html.matchAll(/https?:\\?\/\\?\/[^"'\\\s]+?\.m3u8[^"'\\\s]*/g),
    ].map((match) => match[0].replace(/\\u002F/g, "/").replace(/\\\//g, "/"));

    console.log("M3U8 URLs:", m3u8Matches);

    if (!m3u8Matches.length) {
      return NextResponse.json(
        {
          success: false,
          error: "No video source found",
        },
        { status: 404 },
      );
    }

    // 5. Get the first M3U8 URL
    const m3u8_url = m3u8Matches[0];

    console.log("M3U8 URL:", m3u8_url);

    // 6. Try converting HLS URL to MP4
    const mp4_url = m3u8_url
      .replace("/hls/", "/720p/")
      .replace(".m3u8", ".mp4");

    console.log("MP4 URL:", mp4_url);

    return NextResponse.json({
      success: true,
      message: "Pinterest video found successfully",
      m3u8_url,
      url: mp4_url,
    });
  } catch (error) {
    console.error("Pinterest API error:", error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}

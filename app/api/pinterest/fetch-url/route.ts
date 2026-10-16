import { NextRequest, NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    if (!url || typeof url !== "string") {
      return NextResponse.json({ error: "Pinterest URL is required" }, { status: 400 });
    }

    // Handle pin.it short links by resolving them first if needed, 
    // or let fetch follow redirects.
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"
      },
      redirect: "follow",
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Unable to access Pinterest page" }, { status: 502 });
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    let videoUrl = null;

    // Method 1: Check OpenGraph meta tags (Pinterest sometimes puts direct video meta tags)
    const ogVideo = $('meta[property="og:video"]').attr("content") || 
                    $('meta[property="og:video:secure_url"]').attr("content");
    if (ogVideo) {
      videoUrl = ogVideo;
    }

    // Method 2: Parse Pinterest's initial state JSON script tags
    if (!videoUrl) {
      $("script").each((_, element) => {
        const scriptContent = $(element).html();
        if (scriptContent && scriptContent.includes("video_url")) {
          try {
            // Search for direct mp4 links inside the script JSON blobs
            const match = scriptContent.match(/"url"\s*:\s*"(https:\/\/[^"]+\.mp4[^"]*)"/);
            if (match && match[1]) {
              videoUrl = JSON.parse(`"${match[1]}"`);
              return false; // break loop
            }
          } catch (e) {
            // Ignore parsing errors for unrelated scripts
          }
        }
      });
    }

    // Method 3: Broad fallback regex for any direct .mp4 URL in the HTML
    if (!videoUrl) {
      const mp4Matches = [...html.matchAll(/https?:\/\/[^"'\s]+\.mp4[^"'\s]*/g)]
        .map(m => m[0].replace(/\\u002F/g, "/").replace(/\\\//g, "/"));
      
      if (mp4Matches.length > 0) {
        // Filter out low-res thumbnails or UI asset videos if necessary
        videoUrl = mp4Matches[0];
      }
    }

    if (!videoUrl) {
      return NextResponse.json(
        { success: false, error: "No video source found. The pin might be an image or private." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Pinterest video found successfully",
      url: videoUrl,
    });

  } catch (error) {
    console.error("Pinterest API error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
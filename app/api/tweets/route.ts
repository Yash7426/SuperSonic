import { NextResponse } from "next/server";
import axios from "axios";
import * as cheerio from "cheerio";

const NITTER_INSTANCE = "https://nitter.1d4.us"; // Try a different instance

const fetchFromNitter = async (query: string) => {
  try {
    const response = await axios.get(
      `${NITTER_INSTANCE}/search?f=tweets&q=${encodeURIComponent(query)}`,
      { 
        headers: { 
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
          "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
          "Referer": `${NITTER_INSTANCE}/`
        } 
      }
    );

    const $ = cheerio.load(response.data);
    console.log("HTML snippet:", $.html().slice(0, 1000));
    console.log("Found timeline items:", $(".timeline-item").length);
    
    const tweets: any[] = [];
    $(".timeline-item").each((_, element) => {
      const user = $(element).find(".fullname").text().trim();
      const content = $(element).find(".tweet-content").text().trim();
      const timestamp = $(element).find("a.tweet-date").attr("title");
      console.log("Tweet found:", user, content);
      if (user && content) {
        tweets.push({ user, content, timestamp });
      }
    });

    return tweets;
  } catch (error: any) {
    console.error("Error fetching Nitter data:", error.message);
    throw new Error("Nitter API unavailable");
  }
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q") || "Bitcoin";

  try {
    const tweets = await fetchFromNitter(query);
    return NextResponse.json(tweets);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch tweets from Nitter" },
      { status: 500 }
    );
  }
}

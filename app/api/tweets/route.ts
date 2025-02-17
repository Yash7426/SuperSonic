import { NextResponse } from "next/server";
import axios from "axios";

const fetchFromNitter = async (query: string) => {
  try {
    const response = await axios.get(
      `https://nitter.net/search?f=tweets&q=${encodeURIComponent(query)}`
    );

    console.log(response);
    // return response.data.items.map((tweet: any) => ({
    //   user: tweet.author,
    //   content: tweet.title,
    //   timestamp: tweet.published,
    // }));
  } catch (error) {
    console.log("object",error);
    throw new Error("Nitter API unavailable");
  }
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q") || "Bitcoin";

  try {
    const tweets = await fetchFromNitter(query);
    return NextResponse.json(tweets);
  } catch {
    return NextResponse.json(
      { error: "Both Nitter & Twitter APIs failed" },
      { status: 500 }
    );
  }
}

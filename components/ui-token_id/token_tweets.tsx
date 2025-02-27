"use client";
import Script from "next/script";

interface Tweet {
  user: string;
  content: string;
  timestamp: string;
}

interface LatestTweetsProps {
  query: string;
}

const LatestTweets = ({ query }: LatestTweetsProps) => {

  if(query.toLowerCase()=="sonic") query = "SonicLabs";

  return (
    <>
      <Script src="https://platform.twitter.com/widgets.js" />
      <a
        data-height="243"
        className="twitter-timeline"
        href={`https://twitter.com/${query.toUpperCase()}`}
      >
        Tweets by {query}
      </a>
    </>
  );
};

export default LatestTweets;

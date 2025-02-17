"use client";
import { useEffect, useState } from "react";
import Script from "next/script";
import axios from "axios";

interface Tweet {
  user: string;
  content: string;
  timestamp: string;
}

interface LatestTweetsProps {
  query: string;
}

const LatestTweets = ({ query }: LatestTweetsProps) => {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!query) return;

    const fetchTweets = async () => {
      try {
        const response = await axios.get(`/api/tweets?q=${query}`);
        setTweets(response.data);
      } catch (error) {
        setError("Failed to load tweets.");
      } finally {
        setLoading(false);
      }
    };

    fetchTweets();
  }, [query]);

  return (
    <>
      <Script
        src="https://platform.twitter.com/widgets.js"
      />
      <a
        data-height="243"
        className="twitter-timeline"
        href="https://twitter.com/XDevelopers?ref_src=twsrc%5Etfw"
      >
        Tweets by XDevelopers
      </a>
    </>
  );
};

export default LatestTweets;

"use client";
import { useEffect, useState } from "react";
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
    <div className="p-4 bg-gray-900 text-white rounded-lg border border-gray-700">
      <h2 className="text-lg font-semibold">Latest Tweets on {query}</h2>
      {loading ? (
        <p>Loading tweets...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <ul className="mt-2 space-y-2">
          {tweets.map((tweet, index) => (
            <li key={index} className="text-sm border-b border-gray-700 pb-2">
              <span className="text-blue-400">{tweet.user}</span>: {tweet.content}
              <p className="text-xs text-gray-500">{tweet.timestamp}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LatestTweets;

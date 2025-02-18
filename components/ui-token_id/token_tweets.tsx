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
  return (
    <>
      <Script src="https://platform.twitter.com/widgets.js" />
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

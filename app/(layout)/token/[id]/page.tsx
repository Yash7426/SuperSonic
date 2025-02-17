"use client";

import React from "react";
import { useParams } from "next/navigation";
import Flow from "@/components/ui-graph-component/homeGraph";
import CandlestickChart from "@/components/ui-token_id/token_chart";
import LatestTweets from "@/components/ui-token_id/token_tweets";
import SentimentMeter from "@/components/ui-token_id/token_sentiment";
import TokenDetails from "@/components/ui-token_id/token_details";

const Page = () => {
  const { id }: { id: string } = useParams(); // Get the dynamic route parameter

  const t = {
    name: "Bitcoin",
    logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
    price: 48250.75,
    priceChange: -1.2,
    volume: 2560000000,
    profitPerToken: 320.5,
    bestBuy: "Binance",
    bestSell: "Coinbase",
  };

  // fetch coin data here by api call

  console.log("Token ID:", id);

  return (
    <div className="w-[90%] mx-auto my-4 rounded-lg flex items-center gap-x-4 flex-col md:flex-row">
      <div className="flex flex-col gap-y-4 items-center">
        <TokenDetails {...t} />
        <div className="mt-6">
          <CandlestickChart coinId={id} />
        </div>
        <div className="flex flex-col">
          {/* <div className="flex justify-center">
        <SentimentMeter value={43} />
      </div> */}
          {/* <div className="mt-6">
        <LatestTweets query={id} />
      </div> */}
        </div>
      </div>
    </div>
  );
};

export default Page;

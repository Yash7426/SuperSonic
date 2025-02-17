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
    bestBuyPrice: 92.0876,
    bestSellPrice: 92.0876,
  };

  // fetch coin data here by api call

  console.log("Token ID:", id);

  return (
    <div className="mx-4 md:mx-8 my-2 rounded-lg flex gap-x-4 flex-col xl:flex-row">
      <div className="w-full xl:w-[70%] flex flex-col items-center">
        <TokenDetails {...t} />
        <div className="border border-[#E4E4E4] rounded-md p-4 w-full">
          <CandlestickChart coinId={id} />
        </div>
        <div className="py-1 w-full flex flex-col xl:flex-row justify-center items-center xl:gap-x-4">
          <div className="w-full xl:w-[48%]">
            <SentimentMeter value={0.3} />
          </div>
          <div className="w-full xl:w-[48%]">
            <LatestTweets query={id} />
          </div>
        </div>
      </div>
      <div className="w-full xl:w-[30%] flex flex-col items-center">
        {/* <TokenDetails {...t} />
        <div className=" p-4 w-full">
          <CandlestickChart coinId={id} />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center">
            <SentimentMeter value={43} />
          </div>
          <div className="mt-6">
            <LatestTweets query={id} />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Page;

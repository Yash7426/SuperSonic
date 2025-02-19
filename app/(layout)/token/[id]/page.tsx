"use client";

import React from "react";
import { useParams } from "next/navigation";
import CandlestickChart from "@/components/ui-token_id/token_chart";
import LatestTweets from "@/components/ui-token_id/token_tweets";
import SentimentMeter from "@/components/ui-token_id/token_sentiment";
import TokenDetails from "@/components/ui-token_id/token_details";
import TradeChatTabs from "@/components/ui-token_id/token_trade";

const Page = () => {
  const { id }: { id: string } = useParams();

  // correct code
  // const [tokenData, setTokenData] = useState<any>(null);
  // const [score,setScore] = useState<number>(0);
  // const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   const fetchTokenData = async () => {
  //     try {
  //       const response = await fetch("https://sonic-s449.onrender.com/sentiment", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ coin: id.toLowerCase(), time: 2, query: [] }),
  //       });

  //       const data = await response.json();
  //       setTokenData({
  //         name: id,
  //         // take logo from coins map
  //         logo: `https://cryptologos.cc/logos/bitcoin-btc-logo.png`,
  //         price: data.result.buy_price,
  //         priceChange: data.result.change_per,
  //         volume: data.result.dex.dex_1.current_price,
  //         profitPerToken: data.result.change_val,
  //         bestBuy: data.result.buying_dex,
  //         bestSell: data.result.selling_dex,
  //         bestBuyPrice: data.result.buy_price,
  //         bestSellPrice: data.result.sell_price,
  //       });
  //       setScore(data.result.score)
  //     } catch (error) {
  //       console.error("Error fetching token data:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchTokenData();
  // }, [id]);

  // if (loading) return <p>Loading...</p>;
  // if (!tokenData) return <p>Failed to fetch data</p>;

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

  return (
    <div className="mx-4 md:mx-8 my-2 rounded-lg flex gap-x-4 flex-col xl:flex-row h-screen overflow-y-scroll">
      <div className="w-[65%] lg:w-[70%] flex flex-col items-center">
        <TokenDetails {...t} />
        <div className="border border-[#E4E4E4] rounded-md p-4 w-full">
          <CandlestickChart coinId={id} />
        </div>
        <div className="py-1 w-full flex flex-col gap-y-2 xl:flex-row justify-center items-center xl:gap-x-4">
          <div className="w-full xl:w-[48%]">
            <SentimentMeter value={1} />
          </div>
          <div className="w-full xl:w-[48%]">
            <LatestTweets query={id} />
          </div>
        </div>
      </div>
      <div className="w-[30%]">
        <TradeChatTabs />
      </div>
    </div>
  );
};

export default Page;

"use client";

import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import CandlestickChart from "@/components/ui-token_id/token_chart";
import LatestTweets from "@/components/ui-token_id/token_tweets";
import SentimentMeter from "@/components/ui-token_id/token_sentiment";
import TokenDetails from "@/components/ui-token_id/token_details";
import TradeChatTabs from "@/components/ui-token_id/token_trade";
import { Skeleton } from "@/components/ui/skeleton";
import { Tweets } from "@/components/ui-token/token-header";

interface coin_val {
  name: string;
  tenmin: number;
  oneday: number;
  logo:string;
}

const dummyData: coin_val[] = [
  {
    name: "bitcoin",
    tenmin: 3,
    oneday: 4,
    logo : "https://cryptologos.cc/logos/bitcoin-btc-logo.png"
  },
  {
    name: "ethereum",
    tenmin: 1,
    oneday: 2,
    logo:"https://cryptologos.cc/logos/ethereum-eth-logo.png"
  },
  {
    name: "solana",
    tenmin: 5,
    oneday: 6,
    logo:"https://cryptologos.cc/logos/solana-sol-logo.png"
  },
  {
    name: "sonic",
    tenmin: 0,
    oneday: 0,
    logo:"/images/sonic-logo.svg"
  },
  {
    name: "dogecoin",
    tenmin: 0,
    oneday: 0,
    logo :"https://cryptologos.cc/logos/dogecoin-doge-logo.png'"
  },
];
function cleanTokenParam(param: string): string {
  const decoded = decodeURIComponent(param);
  return decoded.startsWith("Sonic") ? "sonic" : decoded;
}

const Page = () => {
  let { id }: { id: string } = useParams();
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);


  id = cleanTokenParam(id)

  const searchParams = useSearchParams();
  const time = searchParams.get("t");

  const getTenMinPrediction = (coinName: string): number | null => {
    const coin = dummyData.find((c) => c.name === coinName);
    return coin ? coin.tenmin : 0;
  };
  const getOneDayPrediction = (coinName: string): number | null => {
    const coin = dummyData.find((c) => c.name === coinName);
    return coin ? coin.oneday : 0;
  };
  const getLogo = (coinName: string): string => {
    const coin = dummyData.find((c) => c.name === coinName.toLowerCase());
    return coin ? coin.logo : "https://cryptologos.cc/logos/bitcoin-btc-logo.png";
  };
  const [predictions, setPredictions] = useState<{
    after10min: number | null;
    after24h: number | null;
  }>({
    after10min: null,
    after24h: null,
  });

  useEffect(() => {
    const fetchPredictions = async () => {
      try {
        const val1 = getTenMinPrediction(id.toLowerCase());
        const val2 = getOneDayPrediction(id.toLowerCase());
        if (val1 == 0 || val2 == 0) return;

        const response10min = await fetch(
          `https://allora-api.testnet.allora.network/emissions/v7/latest_network_inferences/${val1}`
        );
        const data10min = await response10min.json();

        const response24h = await fetch(
          `https://allora-api.testnet.allora.network/emissions/v7/latest_network_inferences/${val2}`
        );
        const data24h = await response24h.json();

        setPredictions({
          after10min: data10min?.network_inferences?.combined_value
            ? Number(data10min.network_inferences.combined_value)
            : null,
          after24h: data24h?.network_inferences?.combined_value
            ? Number(data24h.network_inferences.combined_value)
            : null,
        });
      } catch (error) {
        console.error("Error fetching predictions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPredictions();
  }, [id]);

  // correct code
  const [tokenData, setTokenData] = useState<any>(null);
  const [score,setScore] = useState<number>(0);

  function getDex(dex:string){
    if(dex=="dex_1") return "Uniswap";
    if(dex=="dex_2") return "Raydium";
    if(dex=="dex_3") return "PancakeSwap";
    return "Uniswap";
  }

  useEffect(() => {
    const fetchTokenData = async () => {
      try {
        const response = await fetch("https://sonic-s449.onrender.com/sentiment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ coin: id.toLowerCase(), time: time, query: Tweets }),
        });

        const data = await response.json();
        setTokenData({
          name: id,
          // take logo from coins map
          logo: getLogo(id),
          price: data.result.buy_price,
          priceChange: data.result.change_per,
          volume: data.result.dex.dex_1.current_price,
          profitPerToken: data.result.change_val,
          bestBuy: getDex(data.result.buying_dex),
          bestSell: getDex(data.result.selling_dex),
          bestBuyPrice: data.result.buy_price,
          bestSellPrice: data.result.sell_price,
        });
        setScore(data.result.score)
      } catch (error) {
        console.error("Error fetching token data:", error);
      } finally {
        setLoading2(false);
      }
    };

    fetchTokenData();
  }, [id]);


  // const t = {
  //   name: "Bitcoin",
  //   logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
  //   price: 48250.75,
  //   priceChange: -1.2,
  //   volume: 2560000000,
  //   profitPerToken: 320.5,
  //   bestBuy: "Binance",
  //   bestSell: "Coinbase",
  //   bestBuyPrice: 92.0876,
  //   bestSellPrice: 92.0876,
  // };

  console.log("object",tokenData);
  if (loading  || loading2)
    return (
      <div className="flex flex-col space-y-3 h-[50vh] w-[50%] items-center justify-center mx-auto">
        <Skeleton className="h-full w-full rounded-xl" />
        <div className="space-y-2 w-full">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
    );
  if (!tokenData) return <p>Failed to fetch data</p>;

  return (
    <div className="mx-4 md:mx-8 my-2 rounded-lg flex gap-x-4 flex-col xl:flex-row h-screen overflow-y-scroll">
      <div className="w-[65%] lg:w-[70%] flex flex-col items-center">
        <TokenDetails {...tokenData} {...predictions} />
        <div className="border border-[#E4E4E4] rounded-md p-4 w-full">
          {/* <CandlestickChart coinId={id} /> */}
        </div>
        <div className="py-1 w-full flex flex-col gap-y-2 xl:flex-row justify-center items-center xl:gap-x-4">
          <div className="w-full xl:w-[48%]">
            <SentimentMeter value={score} />
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

"use client";
import { MoveRight } from "lucide-react";
import TokenCard from "./token";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";

type Token = {
  name: string;
  logo: string;
  price: number;
  volume: number;
};

export const Tweets: string[] = [
  "#Bitcoin Finally dumped to  $91,000 ! As promised, I want to change someone's life and send 1 $BTC (~$91,000) to one person by tomorrow. Just like, retweet and comment 'done'.  Random winner in 15 hrs",
  "If Bitcoin hits $110,000 by next week: I will give 0.1 $BTC to someone who commented under this post.",
  "JUST IN: Ethereum falls 4.5% after Bybit confirms $1.4 billion $ETH hack.",
  "Ethereum, an exchange was just hacked for $1.4 BILLION DOLLARS of ETH. This could be very bullish. Historically some criminals hold forever instead of selling, because they don't want to get caught. A coin that can't be sold can't move price down.",
  "Sonic : Speed Redefined 🚀 Outpacing all the heavyweights, Sonic has emerged as the leader with stunning performance with a groundbreaking 369,825 tx/s and an explosive 676.63% growth since February 4@SonicLabs is rewriting the rules of blockchain speed and scalability. 🌐👉 Ready to experience the future of blockchain?#Sonic #Layer1 #Speed",
  ".@SonicLabs is a groundbreaking Layer-1 blockchain platform set to transform the DeFi landscape. 💥What makes Sonic Network special? It sets a new standard for L1s, with 10,000 TPS and sub-second finality.",
  "Buy #Dogecoin $DOGE now & hold for 6 months. Thank me later",
  "Dogecoin $DOGE to $4.20 is inevitable",
  "$SOL has been in a free fall since the last 2 days.The main reason behind this drastic fall is $2.5B unlock coming in march which is making the sentiment bearish. The major support for solana are marked in red.First support is around $155, if it breaks the next stop is around $133, but if I talk about the macro trend, its still bullish for long term. Adding on these supports would be viable,."
];


const TokenHeader: React.FC = () => {
  // const fakeTokens: Token[] = [
  //   {
  //     name: "Bitcoin",
  //     logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
  //     price: 48250.75,
  //     volume: 2560000000,
  //   },
  //   {
  //     name: "Ethereum",
  //     logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
  //     price: 3150.25,

  //     volume: 1980000000,
  //   },
  //   {
  //     name: "Solana",
  //     logo: "https://cryptologos.cc/logos/solana-sol-logo.png",
  //     price: 145.6,
  //     volume: 980000000,
  //   },
  //   {
  //     name: "Sonic",
  //     logo: "https://cryptologos.cc/logos/cardano-ada-logo.png",
  //     price: 0.58,
  //     volume: 450000000,
  //   },
  //   {
  //     name: "Dogecoin",
  //     logo: "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
  //     price: 0.087,
  //     volume: 780000000,
  //   },
  //   {
  //     name: "Polygon",
  //     logo: "https://cryptologos.cc/logos/polygon-matic-logo.png",
  //     price: 1.12,
  //     volume: 620000000,
  //   },
  // ];

  // correct code
  const [tokens, setTokens] = useState<Token[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  
  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const trendingResponse = await fetch(
          "https://sonic-csxw.onrender.com/trending_coin",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ query: Tweets }),
          }
        );
        console.log(trendingResponse);
        const responseData = await trendingResponse.json();
        const trendingCoins: string[] = responseData.result?.cryptocurrencies || [];

        console.log(trendingCoins);

        const coinDataPromises = trendingCoins.map(async (coin: string) => {
          if(coin.toLowerCase()=="sonic") coin="sonic-3"
          const coingeckoResponse = await fetch(
            `https://api.coingecko.com/api/v3/coins/${coin.toLowerCase()}`
          );
          const coinData = await coingeckoResponse.json();
          return {
            name: coinData.name,
            logo: coinData.image?.large || "",
            price: coinData.market_data?.current_price?.usd || 0,
            volume: coinData.market_data?.total_volume?.usd || 0,
          } as Token;
        });

        const resolvedTokens = await Promise.all(coinDataPromises);
        setTokens(resolvedTokens);
      } catch (error) {
        // console.error("Error fetching tokens:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingCoins();
  }, []);
  if (loading)
    return (
      <div className="flex flex-col space-y-3 h-[50vh] w-[50%] items-center justify-center mx-auto">
        <Skeleton className="h-full w-full rounded-xl" />
        <div className="space-y-2 w-full">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
    );
  return (
    <div className="w-[90%] mx-auto my-4 rounded-lg">
      <h2 className="text-3xl my-4 font-marvin">TOKENS</h2>
      <hr className="border-[#E4E4E4] w-[90%] pb-4" />
      <h2 className="text-xl my-4 font-bold text-[#2D2D2D]">Search</h2>
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search Tokens"
          className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-[#ffffff] focus:border-[#8902F4]"
        />
        <MoveRight
          color="white"
          className="absolute top-0 bottom-0 w-8 h-8 my-auto text-gray-400 right-4 border bg-[#8902F4] rounded-full p-1"
        />
      </div>
      <h2 className="text-xl my-8 font-bold text-[#2D2D2D]">Trending Tokens</h2>
      {/* Correct code */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-6 max-w-7xl mx-auto">
        {loading ? (
          <p>Loading...</p>
        ) : (
          tokens.map((token, index) => <TokenCard key={index} {...token} />)
        )}
      </div> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-6 max-w-7xl mx-auto">
        {tokens.map((token, ind) => {
          return <TokenCard key={ind} {...token} />;
        })}
      </div>
    </div>
  );
};

export default TokenHeader;

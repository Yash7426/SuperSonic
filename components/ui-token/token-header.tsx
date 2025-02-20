"use client";
import { MoveRight } from "lucide-react";
import TokenCard from "./token";

type Token = {
  name: string;
  logo: string;
  price: number;
  volume: number;
};

const TokenHeader: React.FC = () => {
  const fakeTokens: Token[] = [
    {
      name: "Bitcoin",
      logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
      price: 48250.75,
      volume: 2560000000,
    },
    {
      name: "Ethereum",
      logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
      price: 3150.25,

      volume: 1980000000,
    },
    {
      name: "Solana",
      logo: "https://cryptologos.cc/logos/solana-sol-logo.png",
      price: 145.6,
      volume: 980000000,
    },
    {
      name: "Sonic",
      logo: "https://cryptologos.cc/logos/cardano-ada-logo.png",
      price: 0.58,
      volume: 450000000,
    },
    {
      name: "Dogecoin",
      logo: "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
      price: 0.087,
      volume: 780000000,
    },
    {
      name: "Polygon",
      logo: "https://cryptologos.cc/logos/polygon-matic-logo.png",
      price: 1.12,
      volume: 620000000,
    },
  ];

  // correct code
  // const [tokens, setTokens] = useState<Token[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);

  // const Tweets: string[] = [
  //   "Is the crypto rally over, or is the biggest move still ahead⁉️🤔👨🏻‍🏫 @MooninPapabreaks down $BTC, $ETH, stablecoin dominance & altcoin trends—plus, why a short squeeze could be coming. Don’t miss this alpha-packed analysis",
  // ];

  // useEffect(() => {
  //   const fetchTrendingCoins = async () => {
  //     try {
  //       const trendingResponse = await fetch(
  //         "https://sonic-s449.onrender.com/trending_coin",
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({ query: Tweets }),
  //         }
  //       );
  //       console.log(trendingResponse);
  //       const responseData = await trendingResponse.json();
  //       const trendingCoins: string[] = responseData.result?.cryptocurrencies || [];

  //       console.log(trendingCoins);

  //       const coinDataPromises = trendingCoins.map(async (coin: string) => {
  //         const coingeckoResponse = await fetch(
  //           `https://api.coingecko.com/api/v3/coins/${coin.toLowerCase()}`
  //         );
  //         const coinData = await coingeckoResponse.json();
  //         return {
  //           name: coinData.name,
  //           logo: coinData.image?.large || "",
  //           price: coinData.market_data?.current_price?.usd || 0,
  //           volume: coinData.market_data?.total_volume?.usd || 0,
  //         } as Token;
  //       });

  //       const resolvedTokens = await Promise.all(coinDataPromises);
  //       setTokens(resolvedTokens);
  //     } catch (error) {
  //       console.error("Error fetching tokens:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchTrendingCoins();
  // }, []);

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
        {fakeTokens.map((token, ind) => {
          return <TokenCard key={ind} {...token} />;
        })}
      </div>
    </div>
  );
};

export default TokenHeader;

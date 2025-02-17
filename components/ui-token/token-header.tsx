import { MoveRight } from "lucide-react";
import TokenCard from "./token";

const TokenHeader: React.FC = () => {
    const fakeTokens: TokenCardProps[] = [
        {
          name: "Bitcoin",
          logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
          price: 48250.75,
          priceChange: -1.2,
          volume: 2560000000,
          profitPerToken: 320.5,
          bestBuy: "Binance",
          bestSell: "Coinbase",
        },
        {
          name: "Ethereum",
          logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
          price: 3150.25,
          priceChange: 2.8,
          volume: 1980000000,
          profitPerToken: 150.2,
          bestBuy: "Kraken",
          bestSell: "Binance",
        },
        {
          name: "Solana",
          logo: "https://cryptologos.cc/logos/solana-sol-logo.png",
          price: 145.6,
          priceChange: 4.3,
          volume: 980000000,
          profitPerToken: 12.75,
          bestBuy: "FTX",
          bestSell: "Binance",
        },
        {
          name: "Cardano",
          logo: "https://cryptologos.cc/logos/cardano-ada-logo.png",
          price: 0.58,
          priceChange: -0.5,
          volume: 450000000,
          profitPerToken: 0.12,
          bestBuy: "Coinbase",
          bestSell: "Kraken",
        },
        {
          name: "Dogecoin",
          logo: "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
          price: 0.087,
          priceChange: 3.2,
          volume: 780000000,
          profitPerToken: 0.005,
          bestBuy: "Binance",
          bestSell: "KuCoin",
        },
        {
          name: "Polygon",
          logo: "https://cryptologos.cc/logos/polygon-matic-logo.png",
          price: 1.12,
          priceChange: 1.8,
          volume: 620000000,
          profitPerToken: 0.18,
          bestBuy: "Kraken",
          bestSell: "Coinbase",
        },
      ];
      
  return (
    <div className="w-[90%] mx-auto my-4 rounded-lg ">
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
        <MoveRight color="white" className="absolute top-0 bottom-0 w-8 h-8 my-auto text-gray-400 right-4 border bg-[#8902F4] rounded-full p-1" />
      </div>
      <h2 className="text-xl my-8 font-bold text-[#2D2D2D]">Trending Tokens</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-6 max-w-7xl mx-auto">
        {fakeTokens.map((token,index)=>{
            return(
                <TokenCard key={index} {...token} />
            )
        })}
      </div>
    </div>
  );
};

export default TokenHeader;

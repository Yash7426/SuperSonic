import { MoveRight } from "lucide-react";
import StakeCard from "./stake-token";

const StakeHeader: React.FC = () => {
    const stakeTokens: StakeCardProps[] = [
        {
          icon: "/images/bitcoin-logo.svg",
          name: "SONIC STAKE",
          symbol: "sSol",
          change: "+14.61%",
        },
        {
          icon: "/images/bitcoin-logo.svg",
          name: "LIGHTNING COIN",
          symbol: "LTC",
          change: "-3.25%",
        },
        {
          icon: "/images/bitcoin-logo.svg",
          name: "MOON TOKEN",
          symbol: "MOON",
          change: "+7.89%",
        },
        {
          icon: "/images/bitcoin-logo.svg",
          name: "DIAMOND HANDS",
          symbol: "DMD",
          change: "+2.45%",
        },
      ];
      
      
  return (
    <div className="w-[90%] mx-auto my-4 rounded-lg ">
      <h2 className="text-3xl my-4 font-marvin">LIQUIDITY TOKENS</h2>
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
      <h2 className="text-xl my-8 font-bold text-[#2D2D2D]">Tokens</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-6 max-w-7xl mx-auto">
        {stakeTokens.map((token,index)=>{
            return(
                <StakeCard key={index} {...token} />
            )
        })}
      </div>
    </div>
  );
};

export default StakeHeader;

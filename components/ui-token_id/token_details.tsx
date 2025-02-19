"use client";
import Image from "next/image";

const TokenDetails = ({
  name,
  logo,
  price,
  priceChange,
  volume,
  profitPerToken,
  bestBuy,
  bestSell,
  bestBuyPrice,
  bestSellPrice
}: TokenCardProps) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center border-b border-[#E4E4E4] pb-2">
        <div className="flex items-center gap-2">
          <Image src={logo} alt={name} width={100} height={100} className="w-4 h-4 md:w-10 md:h-10 rounded-full"/>
          <span className="text-md md:text-2xl font-marvin">{name.toUpperCase()}</span>
          {priceChange && <span className={`text-xs md:text-sm font-semibold ${priceChange >= 0 ? "text-green-500" : "text-red-500"}`}>
            ({priceChange.toFixed(2)}%)
          </span>}
          <span className="text-purple-500 text-lg">★</span>
        </div>
        <span className="text-xs md:text-xl font-bold">${price.toFixed(4)}</span>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-2 py-2">
        <div className="w-full">
          <h3 className=" font-marvin sm:pl-4">BEST BUY</h3>
          <div className="flex flex-row justify-between items-center border border-[#E4E4E4] py-2 px-4 rounded-xl my-1">
            <span className="font-semibold text-[#2D2D2D]">{bestBuy}</span>
            {bestBuyPrice && <span className="font-semibold text-[#2D2D2D]">${bestBuyPrice.toFixed(4)}</span>}
          </div>
        </div>
        <div className="w-full">
          <h3 className=" font-marvin sm:pl-4">BEST SELL</h3>
          <div className="flex flex-row justify-between items-center border border-[#E4E4E4] py-2 px-4 rounded-xl my-1">
            <span className="font-semibold text-[#2D2D2D]">{bestSell}</span>
            {bestSellPrice && <span className="font-semibold text-[#2D2D2D]">${bestSellPrice.toFixed(4)}</span>}
          </div>
        </div>

        <div className="w-full">
          <h3 className=" font-marvin sm:pl-4">TOTAL PROFIT PER TOKEN <br /> </h3>
          <div className="border border-[#E4E4E4] py-2 px-4 rounded-xl my-1">
            {profitPerToken && <span className="font-bold text-[#007E15]">${profitPerToken.toFixed(4)}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenDetails;

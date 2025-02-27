"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

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
  bestSellPrice,
  after10min,
  after24h,
}: TokenCardProps) => {
  const [selectedTime, setSelectedTime] = useState<"10min" | "1day">("10min");
  const [isOpen, setIsOpen] = useState(false);
  const alloraPrice = selectedTime === "10min" ? after10min : after24h;
  return (
    <div className="w-full">
      <div className="flex justify-between items-center border-b border-[#E4E4E4] pb-2">
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt={name}
            width={100}
            height={100}
            className="w-4 h-4 md:w-10 md:h-10 rounded-full"
          />
          <span className="text-md md:text-2xl font-marvin">
            {name.toUpperCase()}
          </span>
          {priceChange && (
            <span
              className={`text-xs md:text-sm font-semibold ${
                priceChange >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              ({priceChange.toFixed(2)}%)
            </span>
          )}
          <span className="text-purple-500 text-lg">★</span>
        </div>
        <span className="text-xs md:text-xl font-bold">
          ${price.toFixed(4)}
        </span>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-2 py-2">
        <div className="w-full">
          <h3 className=" font-marvin sm:pl-4">BEST BUY</h3>
          <div className="flex flex-row justify-between items-center border border-[#E4E4E4] py-2 px-4 rounded-xl my-1">
            <span className="font-semibold text-[#2D2D2D]">{bestBuy}</span>
            {bestBuyPrice && (
              <span className="font-semibold text-[#2D2D2D]">
                ${bestBuyPrice.toFixed(4)}
              </span>
            )}
          </div>
        </div>
        <div className="w-full">
          <h3 className="font-marvin sm:pl-4">CUSTOMISED BEST SELL</h3>
          <div className="flex flex-row justify-between items-center border border-[#E4E4E4] py-2 px-4 rounded-xl my-1">
            <span className="font-semibold text-[#2D2D2D]">{bestSell}</span>
            {bestSellPrice && (
              <span className="font-semibold text-[#2D2D2D]">
                ${bestSellPrice.toFixed(4)}
              </span>
            )}
          </div>
        </div>

        {alloraPrice && (
          <div className="w-full">
            <div className="flex flex-row justify-between items-end">
              <h3 className="font-marvin sm:pl-4">BEST SELL</h3>
              <h3 className="text-xs">
                powered by{" "}
                <Image
                  src={"/images/allora.svg"}
                  alt={"Allora"}
                  width={60}
                  height={40}
                  className="inline"
                />{" "}
              </h3>
            </div>

            <div className="relative w-full">
              <div className="flex items-center justify-between w-full border border-[#E4E4E4] py-1 px-4 rounded-xl my-1">
                <span className="font-semibold text-[#2D2D2D]">
                  ${alloraPrice.toFixed(4)}
                </span>
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center gap-2 bg-gray-200 px-3 py-[6px] rounded-md cursor-pointer"
                >
                  <span className="text-sm font-medium">
                    {selectedTime === "10min" ? "10 min" : "1 day"}
                  </span>
                  {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </div>

              {isOpen && (
                <div className="absolute right-0 z-[50] w-32 bg-white border rounded-lg shadow-md">
                  <button
                    onClick={() => {
                      setSelectedTime("10min");
                      setIsOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 border-b"
                  >
                    10 min
                  </button>
                  <button
                    onClick={() => {
                      setSelectedTime("1day");
                      setIsOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    1 day
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="w-full">
          <h3 className=" font-marvin sm:pl-4">
            TOTAL PROFIT PER TOKEN <br />{" "}
          </h3>
          <div className="border border-[#E4E4E4] py-2 px-4 rounded-xl my-1">
            {profitPerToken && (
             <span
                className={`font-bold pt-[2px] ${
                  profitPerToken >= 0 ? "text-[#02F42A]" : "text-red-500"
                }`}
              >
                {profitPerToken >= 0 ? "+" : ""}
                {profitPerToken.toFixed(2)}%
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenDetails;

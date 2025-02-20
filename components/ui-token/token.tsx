"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import TokenModal from "./token-modal";

const TokenCard: React.FC<TokenCardProps> = ({ name, logo, price, volume }) => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleModalOpen = () => {
    setIsOpen(true);
  };
  const handleModalClose = () => {
    setIsOpen(false);
  };
  return (
    <div
      onClick={() => {
        handleModalOpen();
      }}
      className="cursor-pointer rounded-lg border-[1px] border-[#E4E4E4]"
    >
      <TokenModal
        coin={name}
        logo={logo}
        isOpen={isOpen}
        onClose={handleModalClose}
      />
      <div className="flex px-4 py-2 items-center gap-2">
        <Image
          src={logo}
          alt={name}
          width={100}
          height={100}
          className="rounded-full h-8 w-8"
        />

        <div className="flex flex-col justify-center gap-y-[2px] w-full">
          <div className="flex justify-between w-full">
            <h2 className="font-bold text-lg font-marvin">
              {name}
              <span className="pl-1 text-purple-500">⭐</span>
            </h2>
            <span className="text-[#1D1D1D] text-sm cursor-pointer pt-1">
              24hr Volume
            </span>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-[2px] content-center">
              <span className="text-black font-semibold">
                ${price.toFixed(4)}
              </span>
              {/* <span
                className={`text-sm pt-[2px] ${
                  priceChange >= 0 ? "text-[#02F42A]" : "text-red-500"
                }`}
              >
                ({priceChange >= 0 ? "+" : ""}
                {priceChange.toFixed(2)}%)
              </span> */}
            </div>
            <span className="font-bold">${volume.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Profit Section */}
      {/* <div className="bg-[#8902F4] px-4 py-2 text-white flex justify-between">
        <span className="font-semibold">Profit per token:</span>
        <span className="font-bold">${profitPerToken.toFixed(4)}</span>
      </div> */}

      {/* Best Buy & Sell */}
      {/* <div className="flex px-4 py-2 justify-between text-sm">
        <p>
          Best Buy: <span className="font-bold">{bestBuy}</span>
        </p>
        <p>
          Best Sell: <span className="font-bold">{bestSell}</span>
        </p>
      </div> */}
    </div>
  );
};

export default TokenCard;

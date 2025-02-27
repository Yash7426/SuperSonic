"use client";
import Image from "next/image";
import React from "react";

const StakeCard: React.FC<StakeCardProps> = ({
  name,
  change,
  icon,
  symbol,
}) => {
  return (
    <div
      className="cursor-pointer rounded-lg border-[1px] border-[#E4E4E4]"
    >
      <div className="flex px-4 py-2 items-center gap-2">
        <Image
          src={icon}
          alt={name}
          width={100}
          height={100}
          className="rounded-full h-8 w-8"
        />
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col justify-center gap-y-[2px] w-full">
            <div className="flex justify-between w-full">
              <h2 className="font-bold text-lg font-marvin">
                {name}
                <span className="pl-1 text-purple-500">⭐</span>
              </h2>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[2px] content-center">
                <span className="text-black font-semibold">({symbol})</span>
              </div>
            </div>
          </div>
          <div className="font-bold">({change})</div>
        </div>
      </div>
    </div>
  );
};

export default StakeCard;

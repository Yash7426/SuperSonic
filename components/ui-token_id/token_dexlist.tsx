"use client";
import { Dispatch, SetStateAction, useState } from "react";

const SelectDropdown = ({
  selectedValue,
  setSelectedValue,
}: {
  selectedValue: string;
  setSelectedValue: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="w-full mx-auto">
      <label
        htmlFor="dex"
        className="pl-3 block text-sm font-medium text-[#918e8e]"
      >
        Select an option
      </label>
      <select
        name="dex"
        id="dex"
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
        className="mt-1 block w-full text-[#2D2D2D] py-2 px-4 border text-md border-gray-300 bg-white rounded-md focus:outline-none"
      >
        <option value="uniswap">Uniswap</option>
        <option value="pancakeswap">PancakeSwap</option>
        <option value="raydium">Raydium</option>
        <option value="debridge">DeBridge</option>
      </select>
    </div>
  );
};

export default SelectDropdown;

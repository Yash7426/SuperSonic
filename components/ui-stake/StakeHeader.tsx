"use client"
import { useState } from "react";
import { MoveRight } from "lucide-react";
import StakeCard from "./stake-token";
import { ethers, BrowserProvider, Contract } from "ethers";
import { abi, address } from "@/contracts_abi/Staking.json";
import { toast } from "sonner";
import { abi1, address1 } from "@/contracts_abi/Staking1.json";

const StakeHeader: React.FC = () => {
  const stakeTokens = [
    {
      icon: "https://assets.coingecko.com/coins/images/52937/standard/token-beets-staked-sonic.png?1734712659",
      name: "Beets Staked Sonic",
      symbol: "stS",
      change: "+18.1%",
    },
    {
      icon: "https://assets.coingecko.com/coins/images/53773/standard/os-256x256.png?1737271726",
      name: "Origin Sonic",
      symbol: "OS",
      change: "+48.4%",
    }
  ];

  const [selectedToken, setSelectedToken] = useState<string | null>(null);
  const [amount, setAmount] = useState("");

  const handleSelectToken = (name: string) => {
    setSelectedToken(name);
  };

  function listenForTransactionMined(transactionResponse: any, provider: any) {
    return new Promise((resolve) => {
      provider.once(transactionResponse.hash, (transactionReceipt: any) => {
        resolve(transactionReceipt);
      });
    });
  }

  async function enter() {
    try {
      if (window.ethereum) {
        const provider = new BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const contract = new Contract(address, abi, signer);

        const toastId = toast.loading("Staking in progress...");
        
        const transactionResponse = await contract.stake({
          value: ethers.parseEther(amount),
        });

        await listenForTransactionMined(transactionResponse, provider);
        
        toast.success("Successfully staked token.", { id: toastId });
        setAmount("0");
        setSelectedToken(null);
      }
    } catch (e) {
      console.error(e);
      toast.error("Staking failed.");
    }
  }

  async function enter1() {
    try {
      if (window.ethereum) {
        const provider = new BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const contract = new Contract(address1, abi1, signer);

        const toastId = toast.loading("Staking in progress...");
        
        const transactionResponse = await contract.stake({
          value: ethers.parseEther(amount),
        });

        await listenForTransactionMined(transactionResponse, provider);
        
        toast.success("Successfully staked token.", { id: toastId });
        setAmount("0");
        setSelectedToken(null);
      }
    } catch (e) {
      console.error(e);
      toast.error("Staking failed.");
    }
  }

  const handleStake = () => {
    if (selectedToken && amount) {
      if(selectedToken==="Beets Staked Sonic"){
        enter()
      }
      else if(selectedToken=="Origin Sonic"){
        enter1()
      }
    } 
  };

  return (
    <div className="w-[90%] mx-auto my-4 rounded-lg">
      <h2 className="text-3xl my-4 font-marvin">LIQUIDITY TOKENS</h2>
      <hr className="border-[#E4E4E4] w-[90%] pb-4" />
      <h2 className="text-xl my-4 font-bold text-[#2D2D2D]">Search</h2>
      <div className="relative">
        <input
          type="text"
          placeholder="Search Tokens"
          className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-[#ffffff] focus:border-[#8902F4]"
        />
        <MoveRight color="white" className="absolute top-0 bottom-0 w-8 h-8 my-auto text-gray-400 right-4 border bg-[#8902F4] rounded-full p-1" />
      </div>
      <h2 className="text-xl my-8 font-bold text-[#2D2D2D]">Tokens</h2>
      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full py-3 px-4 mb-4 text-gray-500 border rounded-md outline-none bg-[#ffffff] focus:border-[#8902F4]"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-6 max-w-7xl mx-auto">
        {stakeTokens.map((token, index) => (
          <div
            key={index}
            onClick={() => handleSelectToken(token.name)}
            className={`cursor-pointer rounded-lg ${selectedToken === token.name ? "border border-[#8902F4]" : "border"}`}
          >
            <StakeCard {...token} />
          </div>
        ))}
      </div>
      <button
        onClick={handleStake}
        className="w-full mt-6 py-3 bg-[#8902F4] text-white font-bold rounded-md hover:bg-[#6a01c3]"
      >
        Stake
      </button>
    </div>
  );
};

export default StakeHeader;

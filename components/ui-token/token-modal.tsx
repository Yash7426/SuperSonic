"use client";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { toNumber } from "ethers";

type CustomModalProps = {
  isOpen: boolean;
  onClose: (open: boolean) => void;
  coin: string;
  logo: string;
};

const TokenModal: React.FC<CustomModalProps> = ({
  isOpen,
  onClose,
  coin,
  logo,
}) => {
    const [time,setTime] = useState<string>("");
    const router = useRouter()
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50" />
        <Dialog.Content className="outline-none fixed h-[38vh] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-lg shadow-lg w-[500px] max-w-[90%] z-50">
          <Dialog.Title className=" flex items-center justify-center gap-x-4 font-bold mb-2 text-gray-800">
            <Image
              src={logo}
              alt={coin}
              width={100}
              height={100}
              className="rounded-full h-8 w-8 md:h-16 md:w-16"
            />
            <span className="font-bold text-4xl font-marvin">{coin}</span>
          </Dialog.Title>
          <hr className="border-[#D9D9D9] w-full my-4" />
          <div className="mt-6 md:mt-8 flex flex-col justify-center items-center">
            <span className="text-[#1D1D1D] text-md">Enter the preferred time period</span>
            <input
              type="number"
              value={time}
              min={0}
              onChange={(e) => setTime(e.target.value)}
              placeholder="Enter time (in days)"
              className="mt-2 p-2 border border-gray-300 rounded-md w-full focus:outline-none"
            />
            <Button
              onClick={() => {
                if(time !="" && toNumber(time)>0)
                    router.push(`/token/${coin}?t=${time}`)
              }}
              className="bg-[#8902F4] cursor-pointer mt-6 w-[50%] rounded-md py-2 font-bold hover:bg-purple-700"
            >
              View Token
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default TokenModal;

"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import SelectDropdown from "./token_dexlist";
import { DEFAULT_CHAT_MODEL } from "@/lib/ai/models";
import { generateUUID } from "@/lib/utils";
import { DataStreamHandler } from "@/components/data-stream-handler";
import { TokenChat } from "./token_chat";
import CustomModal from "../ui-modal-component/customModal";
import { useParams } from "next/navigation";

export default function TradeChatTabs() {
  const { id: coinId }: { id: string } = useParams();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isModalOpen2, setIsModalOpen2] = useState<boolean>(false);
  const [isModalOpen3, setIsModalOpen3] = useState<boolean>(false);

  const [action, setAction] = useState<string>("");
  const [selectedValue, setSelectedValue] = useState<string>("uniswap");
  const [selectedValue2, setSelectedValue2] = useState<string>("uniswap");
  

  const SetModalOpen = (act: string) => {
    setIsModalOpen(true);
    setAction(act);
  };
  const SetModalOpen2 = (act: string) => {
    setIsModalOpen2(true);
    setAction(act);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleModalClose2 = () => {
    setIsModalOpen2(false);
  };
  const SetModalOpen3 = (act: string) => {
    setIsModalOpen3(true);
    setAction(act);
  };

  const handleModalClose3 = () => {
    setIsModalOpen3(false);
  };
  const [activeTab, setActiveTab] = useState<"trade" | "chat">("trade");
  const id = generateUUID();
  return (
    <div className="bg-[#000000] fixed top-0 right-0 min-w-64 z-40 max-w-3xl w-[25%] border p-2 border-[#2D2D2D] rounded-l-lg  min-h-screen flex flex-col items-center justify-start">
      {/* Tabs */}
      <div className="text-[#FFFFFF] flex w-full">
        <Button
          className={`cursor-pointer font-marvin w-[50%] text-center py-[26px] text-md ${
            activeTab === "trade"
              ? "bg-[#8902F4] hover:bg-[#8902F4]"
              : "bg-transparent hover:bg-transparent"
          }`}
          onClick={() => setActiveTab("trade")}
        >
          TRADE
        </Button>
        <Button
          className={`cursor-pointer font-marvin w-[50%] text-center py-[26px] text-md ${
            activeTab === "chat"
              ? "bg-[#8902F4] hover:bg-[#8902F4]"
              : "bg-transparent hover:bg-transparent"
          }`}
          onClick={() => setActiveTab("chat")}
        >
          CHAT
        </Button>
      </div>
      <CustomModal
        dex={selectedValue.toLowerCase()}
        coin={coinId}
        action={action}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
      <CustomModal
        dex={selectedValue2.toLowerCase()}
        coin={coinId}
        action={action}
        isOpen={isModalOpen2}
        onClose={handleModalClose2}
      />
      <CustomModal
        dex={"debridge"}
        coin={coinId}
        action={action}
        isOpen={isModalOpen3}
        onClose={handleModalClose3}
      />
      {activeTab === "trade" ? (
        <div className="text-[#FFFFFF] mt-8 w-full max-w-sm space-y-6">
          <div>
            <h2 className="text-xl pl-2 font-marvin mb-2">SELL</h2>
            <SelectDropdown
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
            />
            <Button
              onClick={() => {
                SetModalOpen("Sell");
              }}
              className="bg-[#8902F4] cursor-pointer mt-2 w-full rounded-md py-2 font-bold hover:bg-purple-700"
            >
              SELL
            </Button>
          </div>
          <hr className="w-[90%] mx-auto border-[#2D2D2D]" />
          <div>
            <h2 className="text-xl pl-2 font-marvin mb-2">BUY</h2>
            <SelectDropdown
              selectedValue={selectedValue2}
              setSelectedValue={setSelectedValue2}
            />
            <Button
              onClick={() => {
                SetModalOpen2("Buy");
              }}
              className="bg-[#8902F4] cursor-pointer mt-2 w-full rounded-md py-2 font-bold hover:bg-purple-700"
            >
              BUY
            </Button>
          </div>
          <hr className="w-[90%] mx-auto border-[#2D2D2D]" />

          <div>
            <div className="flex items-center justify-between mb-2 text-sm">
              <span className="font-marvin text-lg pl-2">SWAP</span>
              <div className="pr-2">
                <span className="text-gray-400 text-xs">powered by </span>
                <span className="text-[#FFFFFF] font-bold text-lg">
                  deBridge
                </span>
              </div>
            </div>
            <Button
              onClick={() => {
                SetModalOpen3("Swap");
              }}
              className="bg-[#8902F4] cursor-pointer mt-2 w-full rounded-md py-2 font-bold hover:bg-purple-700"
            >
              SWAP
            </Button>
          </div>
        </div>
      ) : (
        // CHAT TAB
        <div className="mt-8 w-full max-w-sm">
          <>
            <TokenChat
              key={id}
              id={id}
              initialMessages={[]}
              selectedChatModel={DEFAULT_CHAT_MODEL}
              selectedVisibilityType="private"
              isReadonly={false}
            />
            <DataStreamHandler id={id} />
          </>
        </div>
      )}
    </div>
  );
}

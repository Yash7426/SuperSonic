import Image from "next/image";

const PortfolioCard: React.FC<PortfolioProps> = ({
  walletId,
  joinedDate,
  tokens,
  transactions,
  swaps,
}) => {
  return (
    <div className="w-[100%] mx-auto my-4 rounded-lg  ">
      {/* User Info */}
      <h2 className="text-xl font-marvin">PORTFOLIO</h2>
      <hr className="border-[#E4E4E4] w-[90%]" />
      <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg my-6">
        <div className="w-6 h-6 md:h-12 md:w-12 bg-black rounded-full" />
        <div className="w-[90%]">
          <p className="font-mono text-sm font-bold truncate overflow-hidden whitespace-nowrap">{walletId}</p>
          <p className="text-[#2D2D2D] text-xs">Joined on {joinedDate}</p>
        </div>
      </div>

      {/* Tokens */}
      <div className="mt-4 border border-gray-200 rounded-lg p-4">
        <h3 className="font-semibold flex items-center gap-2 border-b-[1px] pb-2 border-[#E4E4E4]">
          <Image
            src={"/images/poker_chip.svg"}
            alt="token"
            width={100}
            height={100}
            className="h-6 w-6 rounded-full"
          />
          Tokens{" "}
          <span className="ml-auto font-bold">
            ${tokens.reduce((sum, t) => sum + t.value, 0).toFixed(2)} USD
          </span>
        </h3>
        <div className="flex items-center gap-y-2 flex-col my-3">
          {tokens.map((token, index) => (
            <div
              key={index}
              className="flex font-bold justify-between items-center bg-[#EFEFEF] py-[6px] px-4 rounded-xl w-full"
            >
              <div className="flex items-center gap-2">
                <Image
                  src={token.logo}
                  alt={token.name}
                  width={28}
                  height={28}
                  className="h-4 w-4 md:h-8 md:w-8"
                />
                <span>{token.name}</span>
              </div>
              <div className="text-right w-[50%] md:w-[30%] flex items-center justify-between">
                <p className="text-sm">{token.amount} Tokens</p>
                <p className="text-sm font-semibold">
                  ${token.value.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Transactions */}
      <div className="mt-4 border border-gray-200 rounded-lg p-4">
        <h3 className="font-semibold flex items-center gap-2 border-b-[1px] pb-2 border-[#E4E4E4]">
          <Image
            src={"/images/transac.svg"}
            alt="token"
            width={100}
            height={100}
            className="h-6 w-6 rounded-full"
          />
          Transactions
        </h3>
        <h3 className="font-semibold text-sm py-4 text-[#2D2D2D]">
          Buy & Sell
        </h3>
        <div className="flex items-center gap-y-2 flex-col">
          {transactions.map((tx, index) => (
            <div
              key={index}
              className="flex font-bold text-sm justify-between items-center bg-[#EFEFEF] py-[6px] px-4 rounded-xl w-full"
            >
              <div className="flex items-center gap-2">
                <Image
                  src={tx.token.logo}
                  alt={tx.token.name}
                  width={28}
                  height={28}
                  className="h-4 w-4 md:h-8 md:w-8"
                />
                <span className="font-bold">{tx.token.name}</span>
              </div>
              <div className="flex justify-around w-[90%] md:w-[70%] xl:w-[60%] text-xs md:text-sm">
                <p className="">{tx.type}</p>
                <p className="">{tx.token.amount} Tokens</p>
                <p className="">${tx.token.value.toFixed(2)}</p>
                <p className="">{tx.date}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="font-semibold text-sm py-4 text-[#2D2D2D] flex items-center gap-2">
          <Image
            src={"/images/swap_horiz.svg"}
            alt="token"
            width={100}
            height={100}
            className="h-6 w-6 rounded-full"
          />{" "}
          Swap
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {swaps.map((swap, index) => (
            <div
              key={index}
              className="flex border-[1px] border-[#D4D4D4] flex-col items-center bg-[#EFEFEF] rounded-lg px-4 py-2 w-full"
            >
              <div className="flex justify-between items-center w-full">
                <div className="flex justify-center items-center gap-2">
                  <Image
                    src={swap.fromToken.logo}
                    alt={swap.fromToken.name}
                    width={32}
                    height={32}
                    className="h-6 w-6 md:h-8 md:w-8 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-bold">{swap.fromToken.name}</p>
                    <p className="text-sm font-bold">
                      {swap.fromToken.amount}
                    </p>
                    <p className="text-gray-600 text-xs">
                      ${swap.fromToken.value}
                    </p>
                  </div>
                </div>
                <Image
                  src={"/images/swap_horiz.svg"}
                  alt="token"
                  width={100}
                  height={100}
                  className="h-6 w-6 rounded-full"
                />
                <div className="flex items-center gap-2">
                  <Image
                    src={swap.toToken.logo}
                    alt={swap.toToken.name}
                    width={32}
                    height={32}
                    className="h-6 w-6 md:h-8 md:w-8 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-bold">{swap.toToken.name}</p>
                    <p className="text-sm font-bold">
                      {swap.toToken.amount} 
                    </p>
                    <p className="text-gray-600 text-xs">
                      ${swap.toToken.value}
                    </p>
                  </div>
                </div>
              </div>
              <p className="font-semibold">{swap.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Swap */}
    </div>
  );
};

export default PortfolioCard;

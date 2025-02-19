"use client";
import { useEffect, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    deBridge?: {
      widget: (options: Record<string, any>) => void;
    };
  }
}

type DeBridgeWidgetProps = {
  coin: string;
  action: string;
};

export default function DeBridgeWidget({ coin, action }: DeBridgeWidgetProps) {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  console.log(coin, action);
  useEffect(() => {
    if (isScriptLoaded && window.deBridge) {
      window.deBridge.widget({
        v: "1",
        element: "debridgeWidget",
        title: "",
        description: "",
        width: "450",
        height: "636",
        r: null,
        supportedChains: JSON.stringify({
          inputChains: { 1: "all", 10: "all", 56: "all", 137: "all" },
          outputChains: { 1: "all", 10: "all", 56: "all", 137: "all" },
        }),
        inputChain: 1,
        outputChain: 146,
        inputCurrency: coin,
        outputCurrency: coin,
        address: "",
        showSwapTransfer: action === "swap",
        amount: "",
        outputAmount: "",
        lang: "en",
        mode: "deswap",
        theme: "dark",
      });
    }
  }, [isScriptLoaded, coin, action]);

  return (
    <>
      <Script
        src="https://app.debridge.finance/assets/scripts/widget.js"
        strategy="lazyOnload"
        onLoad={() => setIsScriptLoaded(true)}
      />
      <div id="debridgeWidget"></div>
    </>
  );
}

import { useEffect, useRef } from "react";

// Define the deBridge type on the window object
declare global {
  interface Window {
    deBridge?: {
      widget: (options: {
        v: string;
        element: string;
        width: string;
        height: string;
        inputChain: number;
        outputChain: number;
        mode: string;
        theme: string;
        supportedChains:object;
      }) => void;
    };
  }
}


export default function DeBridgeWidget() {
  const isScriptLoaded = useRef<boolean>(false);

  useEffect(() => {
    if (!isScriptLoaded.current) {
      isScriptLoaded.current = true;

      const script = document.createElement("script");
      script.src = "https://app.debridge.finance/assets/scripts/widget.js";
      script.async = true;

      script.onload = () => {
        if (window.deBridge) {
          window.deBridge.widget({
            v: "1",
            element: "debridgeWidget",
            width: "450",
            height:"100%",
            inputChain: 146,
            outputChain: 1,
            mode: "deswap",
            theme: "dark",

            supportedChains: {
              inputChains: {
                1: "all",
                10: "all",
                56: "all",
                100: "all",
                137: "all",
                146: "all", // Sonic
                250: "all",
                388: "all",
                998: "all",
                1088: "all",
                1514: "all",
                2741: "all",
                4158: "all",
                7171: "all",
                8453: "all",
                42161: "all",
                43114: "all",
                59144: "all",
                80094: "all",
                7565164: "all",
                245022934: "all",
              },
              outputChains: {
                1: "all",
                10: "all",
                56: "all",
                100: "all",
                137: "all",
                146: "all", // Sonic
                250: "all",
                388: "all",
                998: "all",
                1088: "all",
                1514: "all",
                2741: "all",
                4158: "all",
                7171: "all",
                8453: "all",
                42161: "all",
                43114: "all",
                59144: "all",
                80094: "all",
                7565164: "all",
                245022934: "all",
              }
            }
            
          });
        }
      };

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return <div id="debridgeWidget" className="h-[100%]"></div>;
}
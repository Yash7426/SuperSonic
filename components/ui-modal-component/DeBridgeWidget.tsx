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
            inputChain: 1,
            outputChain: 146,
            mode: "deswap",
            theme: "dark",
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
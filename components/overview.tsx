import { motion } from "framer-motion";
import Link from "next/link";
import { MessageIcon, VercelIcon } from "./icons";
import Image from "next/image";

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-3xl mx-auto md:mt-20"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="rounded-xl p-6 flex flex-col gap-8 leading-relaxed text-center max-w-xl">
        <p className="flex flex-row justify-center gap-4 items-center">
          <Image src="/images/sonic-logo.svg" alt="" height={300} width={300} />
        </p>
        <p>
          SuperSonic unites a lightning-fast collective of AI-driven DeFi agents
          on the Sonic blockchain to pinpoint and execute arbitrage
          opportunities with unmatched speed and precision.
        </p>
      </div>
    </motion.div>
  );
};

import React from "react";
import FlowWithProvider from "../ui-graph-component/homeGraph";
import { useTransform, type MotionValue, motion } from "framer-motion";

interface AboutProps {
  scrollYProgress: MotionValue<number>;
}

const About: React.FC<AboutProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.div
      // style={{ scale, rotate }}
      className="h-screen bg-white flex pb-[2vh] pt-[8vh] px-[5vw] gap-6"
    >
      <div className="w-[35%]">
        <h1 className="font-marvin text-[80px]">About Us</h1>
        <div className="text-[16px] font-semibold">
          At SUPERSONIC, we revolutionize decentralized finance with AI-powered
          predictive arbitrage. By integrating advanced AI analytics, social
          sentiment tracking, and high-speed execution on the Sonic blockchain,
          we ensure seamless, efficient, and fully decentralized
          trading—eliminating middlemen and maximizing returns.
        </div>
      </div>
      <div className="w-full h-full">
        <FlowWithProvider />
      </div>
    </motion.div>
  );
};

export default About;

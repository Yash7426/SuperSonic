import React from "react";
import Butn from "./butn";
import { useTransform, type MotionValue, motion } from "framer-motion";
import Login from "../ui-login/login";

interface CtaProps {
  scrollYProgress: MotionValue<number>;
}

const Cta: React.FC<CtaProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.div
      // style={{ scale, rotate }}
      className="h-[120vh] bg-[#111111] flex flex-col items-center justify-center gap-[6vh]"
    >
      <div className="font-marvin text-[100px] text-white text-center pt-[3vh] flex flex-col items-center leading-[120px]">
        <h1 className="flex flex-row">
          Trade smarter<span className="text-[#8902F4]">.</span>
        </h1>
        <h1 className="flex flex-row">
          Move faster<span className="text-[#8902F4]">.</span>
        </h1>
        <h1 className="flex flex-row">
          Stay ahead<span className="text-[#8902F4]">.</span>
        </h1>
      </div>
      <Butn />
    </motion.div>
  );
};

export default Cta;

import { motion, useTransform, type MotionValue } from "framer-motion";
import React from "react";

interface BigProps {
  scrollYProgress: MotionValue<number>;
}

const Big: React.FC<BigProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.div
      // style={{ scale, rotate }}
      className="h-[120vh] bg-[#111111] text-white text-[100px] leading-[110px] flex font-marvin justify-center text-center items-center"
    >
      <h1 className="w-[60%]">
        The Future Belongs to Those Who Predict It{" "}
        <span className="text-[#8902F4]">First.</span>
      </h1>
    </motion.div>
  );
};

export default Big;

import { useTransform, type MotionValue, motion } from "framer-motion";
import React from "react";
import Image from "next/image";

interface FooterProps {
  scrollYProgress: MotionValue<number>;
}

const Footer: React.FC<FooterProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.div
      // style={{ scale, rotate }}
      className="h-[100vh] text-[200px] flex justify-center flex-col items-center font-marvin"
    >
      <div className="flex flex-row items-center gap-2">

      <Image
        src={"/images/logo.svg"}
        alt="."
        width={250}
        height={250}
      />
      uper
      {/* <Image
        src={"/images/logo.svg"}
        alt="."
        width={250}
        height={250}
      /> */}
      onic
      </div>
      <div className="font-marvin text-[20px] align-baseline">@SUPERSONIC 2025</div>
    </motion.div>
  );
};

export default Footer;

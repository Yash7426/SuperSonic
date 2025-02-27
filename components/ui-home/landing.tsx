import React from "react";
import HomeNav from "./homeNav";
import LandingSec from "./landingSec";
import { useTransform, motion, type MotionValue } from "framer-motion";

interface LandingProps {
  scrollYProgress: MotionValue<number>;
}

const Landing: React.FC<LandingProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.div
      // style={{ scale, rotate }}
      className="sticky top-0 bg-white h-screen flex flex-col gap-[20vh]"
    >
      <HomeNav />
      <LandingSec />
    </motion.div>
  );
};

export default Landing;

import { useTransform, MotionValue, motion } from "framer-motion";
import React from "react";

interface FooterProps {
  scrollYProgress: MotionValue<number>;
}

const Footer: React.FC<FooterProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.div
      // style={{ scale, rotate }}
      className="h-[100vh] text-[300px] flex justify-center items-center font-marvin"
    >
      SuperSonic
    </motion.div>
  );
};

export default Footer;

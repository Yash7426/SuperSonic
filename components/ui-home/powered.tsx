import React from "react";
import Image from "next/image";
import { useTransform, motion, MotionValue } from "framer-motion";

interface PoweredProps {
  scrollYProgress: MotionValue<number>;
}

const Powered: React.FC<PoweredProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.div
    //   style={{ scale, rotate }}
      className="h-[35vh] bg-white flex flex-col justify-top gap-10"
    >
      <div className="font-marvin text-[40px] text-black text-center">
        Powered By
      </div>
      <div className="flex flex-row justify-between px-10">
        {[
          { src: "/images/dora.svg", alt: "DoraHacks" },
          { src: "/images/anon.svg", alt: "Anon" },
          { src: "/images/allora.svg", alt: "Allora" },
          { src: "/images/debridge.svg", alt: "Debridge" },
          { src: "/images/zerebro.svg", alt: "Zerebro" },
          { src: "/images/dwflabs.svg", alt: "DWF Labs" },
        ].map(({ src, alt }) => (
          <Image key={alt} src={src} alt={alt} width={160} height={100} />
        ))}
      </div>
    </motion.div>
  );
};

export default Powered;

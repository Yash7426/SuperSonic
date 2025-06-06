import React from "react";
import TeamCard from "./team-card";
import { useTransform, type MotionValue, motion } from "framer-motion";

interface TeamProps {
  scrollYProgress: MotionValue<number>;
}

const Team: React.FC<TeamProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.div
      // style={{ scale, rotate }}
      className="h-[110vh] bg-white flex flex-col gap-[15vh] py-[10vh] px-[10vh]"
    >
      <div className="font-marvin text-[80px]">Team Members</div>
      <div className="flex gap-[8vh] flex-col">
        <div className="text-[16px] w-[40%]">
          We are a passionate team of blockchain enthusiasts, AI engineers, and Web developers committed to transforming decentralized trading. Our mission is to empower traders with AI-driven insights, eliminate inefficiencies in decentralized markets, and push the boundaries of financial technology.
        </div>
        <div className="flex flex-row justify-between">
          <TeamCard name="Dheeraj Pareek" posi="Blockchain Developer" img="aviral" />
          <TeamCard name="Shubham Roy" posi="Web Developer" img="mayank" />
          <TeamCard name="Darsh Baxi" posi="AI Developer" img="darsh" />
          <TeamCard name="Aviral Hatwal" posi="Blockchain Developer" img="kudnar" />
          <TeamCard name="Yash Agarwal" posi="Web Developer" img="yash" />
        </div>
      </div>
    </motion.div>
  );
};

export default Team;

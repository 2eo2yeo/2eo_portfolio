import React from "react";
import { motion, Variants } from "framer-motion";

const marqueeVariants: Variants = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 20,
      ease: "linear",
    },
  },
};

interface MarqueeProps {
  name: string;
}
const MarqueeLink: React.FC<MarqueeProps> = ({name}) => {



  return (
    <div className="w-screen max-w-full h-[52px] overflow-hidden relative border-b border-t">
      <motion.div
        className="absolute whitespace-nowrap"
        variants={marqueeVariants}
        animate="animate"
      >
        <h1 className="my-5 text-5xl uppercase font-[Antonio] stroke-text">
               {`${name}  `.repeat(10)}
        </h1>
      </motion.div>
    </div>
  );
};

export default MarqueeLink;

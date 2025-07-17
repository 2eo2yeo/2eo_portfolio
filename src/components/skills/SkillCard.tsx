import React from 'react';
import { motion } from 'framer-motion';

interface SkillItem {
  name: string;
  description: string;
  link: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const SkillCard: React.FC<{ item: SkillItem }> = ({ item }) => {
  return (
    <motion.div
      className="group perspective-[1000px] w-32 h-32"
      variants={cardVariants}
    >
      <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* 카드 앞면 */}
        <div className="skill-card absolute inset-0 [backface-visibility:hidden] flex justify-center items-center">
          <img src={item.link} alt={item.name} className="w-20 h-20" />
        </div>
        {/* 카드 뒷면 */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-white text-sm text-center rounded-2xl border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.3)] [transform:rotateY(180deg)] [backface-visibility:hidden] p-3">
          {item.name}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;

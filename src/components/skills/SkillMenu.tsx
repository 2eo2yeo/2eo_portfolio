import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';

interface SkillItem {
  name: string;
  description: string;
  link: string;
}

interface Props {
  category: string;
  items: SkillItem[];
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const SkillMenu: React.FC<Props> = ({ category, items }) => {
  return (
    <div className="py-3 px-3 text-center flex flex-col">
      <span className="my-5 text-xl px-4 py-1 rounded-full text-white font-semibold">
        {category}
      </span>

      <motion.div
        className="grid grid-cols-2 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {items.map((item, idx) => (
          <SkillCard key={idx} item={item} />
        ))}
      </motion.div>
    </div>
  );
};

export default SkillMenu;

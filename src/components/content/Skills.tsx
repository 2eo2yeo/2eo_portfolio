import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

interface SkillItem {
  name: string;
  description: string;
  link: string;
}

type SkillList = Record<string, SkillItem[]>;

// ✅ variants 정의
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Skills: React.FC = () => {
  const [skillList, setSkillList] = useState<SkillList>({});

  useEffect(() => {
    axios("/data/skill_list.json")
      .then((res) => setSkillList(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className='flex justify-center'>
      {Object.entries(skillList).map(([category, items]) => (
        <div
          key={category}
          className="py-3 px-3 text-center flex items-center flex-col"
        >
          <span className="my-5 glass-label text-xl px-4 py-1 rounded-full text-white font-semibold">
            {category}
          </span>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {items.map((item, idx) => (
              <motion.div
                key={idx}
                className="group [perspective:1000px] w-32 h-32"
                variants={cardVariants}
              >
                <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* 앞면 */}
                  <div className="skill-card absolute inset-0 [backface-visibility:hidden]">
                    <img
                      src={item.link}
                      alt={item.name}
                      className="w-20 h-20"
                    />
                  </div>
                  {/* 뒷면 */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-white text-sm text-center rounded-2xl border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.3)] [transform:rotateY(180deg)] [backface-visibility:hidden] p-3">
                    {item.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Skills;

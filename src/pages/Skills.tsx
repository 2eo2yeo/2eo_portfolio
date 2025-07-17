import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SkillMenu from '../components/skills/SkillMenu';

interface SkillItem {
  name: string;
  description: string;
  link: string;
}

type SkillList = Record<string, SkillItem[]>;

const Skills: React.FC = () => {
  const [skillList, setSkillList] = useState<SkillList>({});

  useEffect(() => {
    axios("/data/skill_list.json")
      .then((res) => setSkillList(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex justify-center gap-5 flex-wrap">
      {Object.entries(skillList).map(([category, items]) => (
        <SkillMenu key={category} category={category} items={items} />
      ))}
    </div>
  );
};

export default Skills;
  
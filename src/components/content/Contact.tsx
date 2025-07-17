import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface LinkItem {
  name: string;
  icon: string;
  link: string;
}

const Contact: React.FC = () => {
  const [linkList, setLinkList] = useState<LinkItem[]>([]);

  useEffect(() => {
    axios('data/link_icons.json')
      .then((res) => setLinkList(res.data))
      .catch((err) => console.error(err))
  }, []);


  return (
    <div className="flex gap-5">
      {linkList.map(({ name, icon, link }) => (
        <a
          key={name}
          href={link}
          target="_blank"
          className="w-13 h-13 flex items-center justify-center rounded-full border-2 border-white cursor-pointer"
        >
          <img src={icon} className="w-8 h-8" />
        </a>
      ))}
    </div>
  );
};

export default Contact;

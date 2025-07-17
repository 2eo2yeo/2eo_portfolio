import React, { useState } from 'react';
import { Menu } from '@interfaces/common';
import MenuItem from './MenuItem';
import { motion } from "framer-motion";

interface MenuListProps {
  menuList: Menu[];
}

const MenuList: React.FC<MenuListProps> = ({ menuList }) => {
  const [selected, setSelected] = useState<string>('Home');

  const handleClick = (name: string) => {
    setSelected(name);
  };

  return (
    <nav>
      <ul className="relative flex border-2 border-[#34363A] rounded-full bg-[#010205]/80 px-1 py-1">
        {menuList.map((menu, index) => {
          const isSelected = menu.name === selected;

          return (
            <li key={index} className="relative">
              {isSelected && (
                <motion.div
                  layoutId="menu-pill"
                  className="absolute inset-0 m-1 rounded-full bg-white/20 z-0"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}

              <div className="relative z-10">
                <MenuItem
                  href={menu.href}
                  name={menu.name}
                  click={handleClick}
                  style={
                    isSelected
                      ? 'px-7 py-3 m-1 text-l text-white rounded-full'
                      : 'px-7 py-3 m-1 text-l text-white'
                  }
                />
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MenuList;

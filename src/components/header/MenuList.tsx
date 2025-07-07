import React, { useState } from 'react';
import { Menu } from '@interfaces/common';
import MenuItem from './MenuItem';

interface MenuListProps {
    menuList: Menu[];
}

const MenuList: React.FC<MenuListProps> = ({ menuList }) => {


    const [selected, setSelected] = useState<string>('Home');

    const handleClick = (name: string) => {
        setSelected(name);
    }


    return (
       <nav>
      <ul className="flex border-2 border-[#34363A] rounded-full bg-[#010205]/60">
                {menuList.map((menu, index) => (
                    <li key={index}>
                        <MenuItem
                            href={menu.href}
                            name={menu.name}
                            click={handleClick}
                            style={
                                menu.name === selected
                                    ? 'px-7 py-3 m-1 text-l bg-white/20 text-white rounded-full'
                                    : 'px-7 py-3 m-1 text-l text-white'
                            }
                        />
                    </li>
                ))}
            </ul>
        </nav>
    );
} 

export default MenuList;


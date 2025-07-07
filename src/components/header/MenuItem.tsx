import React from 'react';

interface MenuProps {
    href: string;
    name: string;
    style?: string;
    click: (name: string) => void;
}

const MenuItem: React.FC<MenuProps> = ({ href, name, click, style }) => {

    return (
         <a  className={`inline-block ${style}`}
            href={href}
            onClick={()=> { click(name) }}>{name}</a>
    );
}

export default MenuItem;
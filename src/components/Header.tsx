import React from 'react';

const Header: React.FC<React.PropsWithChildren> = ({children}) => {
    return (
        <header className="header">
            {children}
        </header>
    );
}

export default Header;
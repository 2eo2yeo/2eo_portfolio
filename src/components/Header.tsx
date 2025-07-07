import React from 'react';

const Header: React.FC<React.PropsWithChildren> = ({children}) => {
    return (
        <header className="flex justify-center fixed top-2 w-full z-100">
            {children}
        </header>
    );
}

export default Header;
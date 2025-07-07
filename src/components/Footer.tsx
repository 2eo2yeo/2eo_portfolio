import React from 'react';

const Footer: React.FC<React.PropsWithChildren> = ({children}) => {
    return (
        <footer className="section">
            {children}
        </footer>
    );
}

export default Footer;

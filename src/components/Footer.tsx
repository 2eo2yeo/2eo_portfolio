import React from 'react';

const Footer: React.FC<React.PropsWithChildren> = ({children}) => {
    return (
        <footer id="contact" className="section">
            {children}
        </footer>
    );
}

export default Footer;

import React from 'react';


interface SectionWrapProps {    
    id: string,
    title: string,
    description: string,
    children:React.ReactNode,
     className?: string;
    
}

const SectionWrap: React.FC<SectionWrapProps> = ({id, title, description, children, className}) => {

    return (
        <section id={id} className="p-16 text-center max-w-[1200px] mx-auto">
            <h2 className="text-3xl text-white">{title}</h2>
            <p className='text-lg'>{description}</p>
            {children}            
        </section>
    );
}

export default SectionWrap;
import { useEffect } from 'react';
import Lenis from 'lenis'

interface SectionWrapProps {
    id: string,
    title: string,
    description: string,
    children: React.ReactNode,

}

const SectionWrap: React.FC<SectionWrapProps> = ({ id, title, description, children }) => {

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const lenis = new Lenis();
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }, []);




    return (
        <section
            id={id}
            className={`
    relative isolate z-10 w-full
    ${id === 'about' ? 'h-screen bg-gradient-to-b from-[#2c2c2e]/100 via-[#2c2c2e]/90 to-[#2c2c2e]/70' : ''}
    ${id === 'skills' ? 'h-screen bg-gradient-to-b from-[#2c2c2e]/70 to-[#2c2c2e]/30' : ''}
    ${id === 'project' ? 'bg-gradient-to-b from-[#2c2c2e]/30 to-[#2c2c2e]/[whatever]' : ''}
  `}
        >
            {/* 내부 콘텐츠 영역 */}
            <div className="pt-25 max-w-[1200px] mx-auto relative z-10 ">
                <div className="py-10 text-6xl text-outline text-center">
                    {title}
                </div>
                <p className="text-lg text-white text-center">{description}</p>
                {children}
            </div>
        </section>
    );
}

export default SectionWrap;
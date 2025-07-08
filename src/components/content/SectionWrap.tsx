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
            className={`relative isolate z-10 w-full rounded-t-2xl ${id === 'about' ? ' h-screen bg-[#38383A]' : ''
                }`}
        >
            {/* 내부 콘텐츠 영역 */}
            <div className="p-5 max-w-[1200px] mx-auto relative z-10">
                <h2 className="py-15 text-6xl text-white font-bold ">
                    <span className='highlight'>{title}</span>
                    </h2>
                <p className="text-lg text-white">{description}</p>
                {children}
            </div>
        </section>
    );
}

export default SectionWrap;
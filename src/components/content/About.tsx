import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import axios from 'axios';


interface IntroduceItem {
    summary: string;
    long: string;
    icon: string;
}

/* 소개 애니메이션 */
const transition = {
    duration: 1.5
};

const About: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [introduce, setIntroduce] = useState<IntroduceItem[]>([]);

    useEffect(() => {
        axios("/data/introduce.json")
            .then((res) => setIntroduce(res.data))
            .catch((error) => { console.log(error) });
    }, []);

    const handleToggle = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    return (
        <div className='flex flex-col justify-center gap-5 text-white '>
            <div>
                <p className='text-5xl py-10'>
                    안녕하세요 <br />
                    정서령 입니다.
                </p>
                <div>
                    <div className="my-10 p-0 flex items-center text-center w-full gap-3">
                        {introduce.map((item, idx) => (
                            <motion.div
                                key={idx}
                                layout
                                transition={transition}
                                onClick={() => handleToggle(idx)}
                                className="flex-1 min-w-[300px] bg-white/30 p-5 overflow-hidden max-w-[400px] cursor-pointer rounded-xl shadow-xl"
                            >
                                <motion.div layout="position" transition={transition}>
                                    <img src={item.icon} className="block mx-auto w-30 h-30" />
                                    <p className="text-[25px] font-semibold !text-[var(--color-yellowgreen)] text-center pb-5">
                                        {item.summary}
                                    </p>

                                    {openIndex === idx ? (
                                        <p className="text-[20px] text-gray-200 mt-2 text-center whitespace-pre-wrap">
                                            {item.long}
                                        </p>
                                    ) : (
                                        <p className="text-m text-white text-center italic opacity-70 animate-pulse">
                                            클릭하여 상세보기!
                                        </p>
                                    )}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
            <p>
                email copy
            </p>
        </div>
    );
};

export default About;
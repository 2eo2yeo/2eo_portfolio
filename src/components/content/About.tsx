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
            .then((res) => {
                setIntroduce(res.data)
            })
            .catch((error) => { console.log(error) });
    }, []);

    const handleToggle = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    return (
        <div className='flex flex-col gap-5 text-white'>
            <div>
                <p className='text-5xl'>
                    안녕하세요 <br />
                    정서령 입니다.
                </p>

                <div className="my-10 p-0 flex items-center text-center gap-3 flex-wrap">
                    {introduce.map((item, idx) => (
                        <motion.div
                            key={idx}
                            layout="position"
                            transition={transition}
                            onClick={() => handleToggle(idx)}
                            className="bg-white/30 p-5 overflow-hidden w-[350px] cursor-pointer rounded-xl shadow-xl"
                        >
                            <motion.div layout="position" transition={transition}>
                                <img src={item.icon} className="block mx-auto w-30 h-30" />
                                <p className="text-[25px] font-semibold !text-[var(--color-yellowgreen)] text-center pb-5">
                                    {item.summary}
                                </p>

                                {openIndex === idx ? (
                                    <p className="text-[18px] text-gray-200 mt-2 text-center whitespace-pre-wrap">
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
    );
};

export default About;
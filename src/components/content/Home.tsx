import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

import { Logo } from '@interfaces/common';
import Contact from './Contact';
import down from '../../assets/down.svg'

interface HomeProps {
  logo: Logo;
}

const Home: React.FC<HomeProps> = ({ logo }) => {

    const container = useRef<HTMLDivElement | null>(null);
    
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end start']
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"])


  return (
    <div className='h-screen overflow-hidden'>

   
    <motion.div ref={container} style={{y}} className='relative h-full'>
       <section className="flex px-30 pt-30 z-0">
        <div className="w-1/2 flex justify-center items-center">
          <div className='flex gap-10 flex-col'>
            <div>
              <p className="text-3xl">Front-End Developer</p>
              <div className="text-7xl text-outline">{logo.name}</div>

            </div>
            <Contact />
            {/* 아래 화살표 */}
            <div className='flex justify-center items-center animate-fadeDown pt-20 '>
              <img className='w-15 h-12 ' src={down} />
            </div>
          </div>

        </div>
        {/* 프사 */}
        <div className="w-1/2 flex justify-end items-center ">
          <div className="relative w-[800px]">
            <img
              src={logo.img}
              alt="portfolio"
              className="w-full h-auto z-0"
            />


          </div>
        </div>
      </section>
      </motion.div>
       </div>
  );
}

export default Home; 
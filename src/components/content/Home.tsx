import React from 'react';
import { Logo } from '@interfaces/common';
import Contact from './Contact';
import down from '../../assets/down.svg'

interface HomeProps {
  logo: Logo;
}

const Home: React.FC<HomeProps> = ({ logo }) => {
  return (
      <section className="flex px-30 pt-30 z-0">
        <div className="w-1/2 flex justify-center items-center">
          <div className='flex gap-10 flex-col'>
            <div>
              <p className="text-3xl text-[var(--color-yellowgreen)]">Front-End Developer</p>
              <p className="text-7xl">{logo.name}</p>

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
            {/* 프사 호버 */}
            <div className="absolute inset-0 group flex items-center justify-center">
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-0"></div>
              <p className="text-white text-3xl font-bold text-center z-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-3 transition-all duration-500">
                안녕하세요! <br />
                정서령입니다
              </p>
            </div>

          </div>
        </div>
      </section>
  );
}

export default Home; 
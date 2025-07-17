import React, { useState, useEffect } from "react";
import axios from "axios";
import IntroduceCardList from "../components/about/IntroduceCardList";
import { motion } from "framer-motion";
import MarqueeLink from "@components/about/MarqueeLink";


interface IntroduceItem {
  summary: string;
  long: string;
  icon: string;
}

const transition = { duration: 1.5 };

const About: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [introduce, setIntroduce] = useState<IntroduceItem[]>([]);

  useEffect(() => {
    axios("/data/introduce.json")
      .then((res) => setIntroduce(res.data))
      .catch((error) => console.log(error));
  }, []);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };


    const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      
      alert('복사 성공!');
    } catch (error) {
      alert('복사 실패!');
    }
  };

  return (
    <div className="flex flex-col justify-center gap-5 text-white italic text-center">
      <IntroduceCardList
        items={introduce}
        openIndex={openIndex}
        onToggle={handleToggle}
        transition={transition}
      />
   <div className="perspective-[1000px] mt-20 flex flex-col gap-10">
 <a
  className="text-5xl inline-block [transform-style:preserve-3d] [transform-origin:center] hover:[transform:rotateY(180deg)] hover:text-[var(--color-yellowgreen)]"
  onClick={() => handleCopyClipBoard("2eo2yeo@gmail.com")}
>
  COPY E-MAIL.
</a>
 <a
  className="text-6xl inline-block [transform-style:preserve-3d] [transform-origin:center] hover:[transform:rotateY(180deg)] hover:text-[var(--color-yellowgreen)]"
   href="https://github.com/2eo2yeo"
  target="_blank"
>
  🔗 GO TO 2EO GitHub.
</a>

</div>

    </div>
  );
};

export default About;

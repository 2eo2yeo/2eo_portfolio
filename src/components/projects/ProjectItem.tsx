// components/ProjectHoverItem.tsx
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight, FiGithub } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";

interface LinkProps {
  heading: string;
  subheading: string;
  imgSrc: string;
  type: string;
  href: string;
  onClick?: () => void;
}

const ProjectHoverItem: React.FC<LinkProps> = ({
  heading,
  imgSrc,
  subheading,
  type,
  href,
  onClick,
}) => {
  const ref = useRef<HTMLDivElement | null>(null); 

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-[var(--color-yellowgreen)] md:py-8 cursor-pointer"
    >
      {/* 텍스트 영역 */}
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-white transition-colors duration-500 group-hover:text-[var(--color-yellowgreen)] md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              key={i}
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
            >
              {l}
            </motion.span>
          ))}
        </motion.span>

        <span className="relative z-10 mt-2 block text-base text-white transition-colors duration-500 group-hover:text-[var(--color-yellowgreen)]">
          {subheading} · {type}
        </span>

        {/* 깃허브 링크 */}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 p-2 text-white hover:text-[var(--color-yellowgreen)] inline-block mt-2"
        >
          <FiGithub className="text-4xl" />
        </a>
      </div>

      {/* 이미지 */}
      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Preview for ${heading}`}
      />

      {/* 화살표 */}
      <motion.div
        variants={{
          initial: { x: "25%", opacity: 0 },
          whileHover: { x: "0%", opacity: 1 },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-[var(--color-yellowgreen)]" />
      </motion.div>
    </motion.div>
  );
};

export default ProjectHoverItem;

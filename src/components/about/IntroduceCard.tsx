import { motion } from "framer-motion";

interface Props {
  item: {
    summary: string;
    long: string;
    icon: string;
  };
  isOpen: boolean;
  onClick: () => void;
  transition: any;
}

const IntroduceCard: React.FC<Props> = ({ item, isOpen, onClick, transition }) => {
  return (
    <motion.div
      layout
      transition={transition}
      onClick={onClick}
      className="flex-1 min-w-[300px] bg-white/30 p-5 overflow-hidden max-w-[400px] cursor-pointer rounded-xl shadow-xl"
    >
      <motion.div layout="position" transition={transition}>
        <img src={item.icon} className="block mx-auto w-30 h-30" />
        <p className="text-[25px] font-semibold !text-[var(--color-yellowgreen)] text-center pb-5">
          {item.summary}
        </p>

        {isOpen ? (
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
  );
};

export default IntroduceCard;

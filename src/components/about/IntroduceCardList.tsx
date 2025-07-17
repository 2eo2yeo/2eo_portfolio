import IntroduceCard from "./IntroduceCard";

interface Props {
  items: {
    summary: string;
    long: string;
    icon: string;
  }[];
  openIndex: number | null;
  onToggle: (index: number) => void;
  transition: any;
}

const IntroduceCardList: React.FC<Props> = ({ items, openIndex, onToggle, transition }) => {
  return (
    <div className="my-10 p-0 flex items-center text-center w-full gap-3 flex-wrap justify-center">
      {items.map((item, idx) => (
        <IntroduceCard
          key={idx}
          item={item}
          isOpen={openIndex === idx}
          onClick={() => onToggle(idx)}
          transition={transition}
        />
      ))}
    </div>
  );
};

export default IntroduceCardList;

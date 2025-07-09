import { useEffect, useState } from 'react';

interface ScrollSpyProps {
  items: {
    no: number;
    name: string;
  }[];
}

const ScrollSpy: React.FC<ScrollSpyProps> = ({ items }) => {
  const [activeId, setActiveId] = useState<number | null>(1);

  useEffect(() => {
    const handleScroll = () => {
      for (const item of items) {
        const el = document.getElementById(`${item.no}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActiveId(item.no);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  return (
    <aside className="sticky top-[30%] self-start w-40 text-white">
  {items.map((item) => (
    <div
      key={item.no}
      className={`flex items-center gap-3 pl-4 py-2 transition-all duration-300 border-l-2 
        ${activeId === item.no ? 'border-yellow-400' : 'border-white/20'}
      `}
    >
      <a
        href={`#${item.no}`}
        onClick={(e) => {
          e.preventDefault();
          const target = document.getElementById(`${item.no}`);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setActiveId(item.no);
          }
        }}
        className={`block text-sm font-medium transition-all duration-300 ${
          activeId === item.no ? 'text-yellow-400' : 'text-white/50'
        }`}
      >
        {item.name}
      </a>
    </div>
  ))}
</aside>
  );
};

export default ScrollSpy;

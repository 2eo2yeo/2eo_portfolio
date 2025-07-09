import React from 'react';
import ScrollSpy from './ScrollSpy';

const ProjectList: React.FC = () => {
  const projectList = [
    { no: 1, name: 'Portfolio', img: '/images/projects/jinair.png', github: '', description:'팀프로젝트'},
    { no: 2, name: 'Jinair', img: '/images/projects/jinair.png', github: '', description:'' },
    { no: 3, name: 'Beauty of Joseon', img: '/images/projects/jinair.png', github: '',description:'' },
    { no: 4, name: 'Kurly', img: '/images/projects/jinair.png', github: '',description:'' },
  ];

  return (
    <div className="flex px-10 my-20">
      {/* 플젝 목차 */}
      <div className="w-1/5">
      <ScrollSpy items={projectList} />
      </div>

      {/*프로젝트 카드 */}
     <ul className="w-4/5 space-y-24">
  {projectList.map((item) => (
    <li key={item.no} id={`${item.no}`}>
      <div className="relative group  flex w-4/5 h-[450px] rounded-4xl overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.5)]">
<div
    className="
      flex-1 bg-cover bg-center 
      transition-transform duration-500 ease-in-out
      group-hover:scale-105
    "
    style={{ backgroundImage: `url(${item.img})` }}
  />

        {/* 설명 오버레이 */}
<div className="
  absolute bottom-0 left-0 w-full h-2/5
  bg-black text-white p-6
  transition-all duration-500 ease-in-out
  flex flex-col items-end justify-center
">
  <p className="text-lg">{item.name}</p>
  <p>{item.description}</p>
  <div>{/* GitHub 아이콘 등 */}</div>
</div>
      </div>
    </li>
  ))}
</ul>

    </div>
  );
};

export default ProjectList;

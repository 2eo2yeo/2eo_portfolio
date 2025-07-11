import React from 'react';
import ScrollSpy from './ScrollSpy';

const ProjectList: React.FC = () => {
  const projectList = [
    { no: 1, name: 'Portfolio', img: '/images/projects/jinair.png', github: '', description: '개인 / 포트폴리오' },
    { no: 2, name: 'Jinair', img: '/images/projects/jinair.png', github: '', description: '팀 / ' },
    { no: 3, name: 'Beauty of Joseon', img: '/images/projects/jinair.png', github: '', description: '' },
    { no: 4, name: 'Kurly', img: '/images/projects/jinair.png', github: '', description: '' },
  ];

  return (

    <>
    <div className="flex my-20 px-30">
      {/* 스크롤 */}
      <div className="w-1/6">
        <ScrollSpy items={projectList} />
      </div>
<ul className="space-y-20">
  {projectList.map((item) => (
    <li key={item.no} id={`${item.no}`}>
      <div className="max-w-[650px] w-full
       flex flex-row items-center gap-8 group rounded-xl skill-card-black ml-2">
        
        {/* 이미지 */}
       <div className="relative w-[350px] h-[300px] overflow-hidden shadow-md group  rounded-l-xl">
  <img
    src="/images/projects/jinair.png"
    alt="Portfolio"
    className="
           w-full h-full object-cover
      grayscale-100 group-hover:scale-110
      transition-transform duration-500 ease-in-out
    "
  />
</div>

        {/* 텍스트 */}
        <div className="flex-1 text-left text-white flex flex-col gap-4 text-right px-10">
          <h3 className="text-3xl font-bold">{item.name}</h3>
          <p className="text-md text-gray-400">{item.description}</p>
          <p className="text-sm text-gray-400"></p>
          <div className="flex gap-4 mt-4">
            <a href={item.github} className="text-sm text-blue-400 hover:underline">GitHub ↗</a>
            <a href="#" className="text-sm text-blue-400 hover:underline">More ↗</a>
          </div>
        </div>

        
      </div>
    </li>
  ))}

</ul>

    </div>



</>
  );
};

export default ProjectList;

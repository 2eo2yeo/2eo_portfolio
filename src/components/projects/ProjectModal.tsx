import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


interface ProjectDetailProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
}

interface ProjectDetailData {
  korname: string;
  period: string;
  goal: string;
  stack: string[];
  process: string;
  role: string;
  result: string[];
  steps: {
    img: string;
    desc: string;
  }[];
}

// 라벨 매핑
const fieldLabels: Record<string, string> = {
  goal: "목표",
  process: "진행 과정",
  role: "담당 역할",
  result: "구현 기술",
  period: "기간",
  stack: "사용 기술",
};

const ProjectDetail: React.FC<ProjectDetailProps> = ({ id, isOpen, onClose }) => {
  const [detail, setDetail] = useState<ProjectDetailData | null>(null);





  useEffect(() => {
    if (!id) return;
    axios("data/project_detail.json")
      .then((res) => setDetail(res.data[id]))
      .catch((err) => console.error(err));
  }, [id]);




  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4"
      className="bg-[#38383A] w-full max-w-5xl max-h-[80vh] rounded-xl text-white flex flex-col"

    >
      {detail && (

        <>
          {/* 제목 */}
          <div className="px-6 py-5 border-b border-white flex justify-between items-center">
            <h2 className="text-xl font-bold">{detail.korname}</h2>
            <button onClick={onClose} className="text-2xl cursor-pointer">✕</button>
          </div>

          <div data-lenis-prevent-wheel
            className="h-[calc(90vh-64px)] overflow-y-scroll p-5 scroll-area"
            tabIndex={0}
          >



            <div className="flex flex-wrap gap-2 my-2 mb-5">
              {detail.stack.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-[var(--color-yellowgreen)] rounded text-sm text-black"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* 정보 출력 */}
            <ul className="!list-disc !pl-5 space-y-3">
              <li>
                <h2 className="text-xl">{fieldLabels.goal}</h2>
                <p>{detail.goal}</p>
              </li>
              {detail.role && (
                <li>
                  <h2 className="text-xl">{fieldLabels.role}</h2>
                  <p>{detail.role}</p>
                </li>
              )}
              <li>
                <h2 className="text-xl">{fieldLabels.result}</h2>
                <p className="whitespace-pre-line"> {/* 줄바꿈 */}
                  {detail.result.join('\n')}
                </p>
              </li>
            </ul>

            <div className="my-15 relative max-w-[700px] h-[400px] mx-auto">
              <Slider
                arrows={true}
                infinite={true}
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                className="w-full mx-auto"
              >
                {detail.steps.map((step, i) => (
                <div key={i} className="h-[400px] flex items-center justify-center">
      <img
        src={step.img}
        alt={step.desc}
        className="block mx-auto max-h-full object-contain"
      />
      <p className="text-center mt-2 py-5">[{step.desc}]</p>
    </div>
                ))}
              </Slider>
            </div>


          </div>

        </>
      )}
    </Modal>
  );

}

export default ProjectDetail;

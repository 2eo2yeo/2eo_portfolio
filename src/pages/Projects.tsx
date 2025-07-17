
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectItem from "../components/projects/ProjectItem";
import ProjectModal from "../components/projects/ProjectModal";

interface Project {
  id: string;
  name: string;
  img: string;
  source: string;
  description: string;
  type: string;
  skills: string[];
}

const ProjectHoverMenu: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    axios("data/project_list.json")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  }, []);

  const openModal = (id: string) => {
    setSelectedId(id);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedId(null);
    setModalIsOpen(false);
  };

  return (
    <>
    {/* 모달창 */}
      {selectedId && (
        <ProjectModal
          id={selectedId}
          isOpen={modalIsOpen}
          onClose={closeModal}
        />
      )}
    
      <section className="p-4 md:p-8">
        <div className="mx-auto max-w-5xl">
          {projects.map((project) => (
            <ProjectItem
              key={project.id}
              heading={project.name}
              subheading={project.description}
              type={project.type}
              imgSrc={project.img}
              href={project.source}
              onClick={() => openModal(project.id)}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectHoverMenu;

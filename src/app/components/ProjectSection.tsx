import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio WebSite",
    descrption: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "",
    descrption: "",
    image: "",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "",
    descrption: "",
    image: "",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "",
    descrption: "",
    image: "",
    tag: ["All", "Web"],
  },
  {
    id: 5,
    title: "",
    descrption: "",
    image: "",
    tag: ["All", "Web"],
  },
];

const ProjectSection = () => {
  return (
    <>
      <h2 className="text-white text-center text-4xl font-bold mt-4">My Projects</h2>
      <div>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.descrption}
            imgUrl={project.image}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;

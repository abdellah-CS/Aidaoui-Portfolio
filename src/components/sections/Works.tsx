import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const ProjectCard: React.FC<{ index: number; toggle: string }> = ({
  index,
}) => {
  const project = projects[index];

  if (!project) {
    return null;
  }

  const { name, description, techs, image } = project;

  return (
    <Link to={`/projects/${name}`} className="w-auto">
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          glareEnable
          tiltEnable
          tiltMaxAngleX={30}
          tiltMaxAngleY={30}
          glareColor="#aaa6c3"
        >
          <div className="bg-tertiary w-full rounded-2xl sm:w-[300px]">
            <div className="relative h-[175px] w-full">
              <img
                src={image}
                alt={name}
                className="h-full w-full rounded-t-xl object-cover"
              />
             
            </div>
            <div className="m-5">
              <div className="w-full flex align-center flex-wrap gap-2 my-3">
                {techs.map((tech, index) => (
                  <div
                    key={index}
                    className="text-xs font-medium text-primary bg-white py-1 px-3 rounded-xl"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <h3 className="text-[24px] font-semibold text-white">{name}</h3>
              <p className="text-secondary mt-2 text-[14px]">{description}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2"></div>
          </div>
        </Tilt>
      </motion.div>
    </Link>
  );
};

const Works = () => {
  const [toggle] = useState("All");
  // const filteredProjects =
  // toggle === "All"
  //   ? projects
  //   : projects.filter((project) => project.category === toggle);
    
  return (
    <div className="sm:px-16">
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
      {projects.map((_, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            toggle={toggle}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "projects");

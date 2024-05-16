import React from "react";
import { TProject } from "../../types/index";
import { styles } from "../../constants/styles";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router-dom";

interface ProjectProps {
  project: TProject;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className={`${styles.padding} h-full overflow-hidden sm:px-60 relative z-0 mx-auto max-w-7xl relative bottom-16`}>
      <div>
        <img className="opacity-85 w-100" style={{borderBottomLeftRadius: "30px", borderBottomRightRadius: "30px", width: "100%"}} src={project.image} alt="project" />
      </div>
      <h2 className="text-[38px] font-semibold tracking-wider text-white pt-9 pb-3 border-b-2 border-solid border-white">{project.name}</h2>
      <div className="my-8 grid grid-cols-1 sm:grid-cols-2 gap-8 flex justify-between sm:block">
        <div className="pr-2 sm:pr-0">
        <table className="table-auto w-full">
          <tbody>
            <tr className="h-16">
              <td><h3 className="text-[26px] font-semibold mb-2">Category</h3></td>
              <td><p className="text-lg text-secondary">{project.category}</p></td>
            </tr>
            <tr className="h-16">
              <td><h3 className="text-[26px] font-semibold mb-2">Techs</h3></td>
              <td>
                {project.techs.map((tech, index) => (
                <ul>
                  <li><p className="text-lg text-secondary" key={index}>{tech}</p></li>
                </ul>
                ))}
              </td>
            </tr>
            <tr className="h-16">
              <td><h3 className="text-[26px] font-semibold mb-2">Client</h3></td>
              <td><p className="text-lg text-secondary">{project.client}</p></td>
            </tr>
          </tbody>
        </table>
          
        </div>
        <div className="project-description pr-2  sm:pr-0">
          <p className="text-lg leading-7 text-secondary">{project.description}</p>
          {project.websiteLink && (
            <Link to={project.websiteLink} className="relative before:absolute mt-5 w-fit before:bottom-0 before:left-0 text-[20px] font-medium before:w-0 before:h-0.5 before:bg-white before:transition-width before:duration-300 tracking-wider before:ease-in-out before:content-[''] block hover:before:w-full">
              <ArrowForwardIcon />
              <span> Visit the website</span>
            </Link>
          )}
          {project.sourceCodeLink && (
            <Link to={project.sourceCodeLink} className="relative before:absolute mt-3 w-fit before:bottom-0 before:left-0 text-[20px] font-medium before:w-0 before:h-0.5 before:bg-white before:transition-width before:duration-300 tracking-wider before:ease-in-out before:content-[''] block hover:before:w-full">
              <ArrowForwardIcon />
              <span> Explore Source Code</span>
            </Link>
          )}
        </div>
      </div>
      <div>
      {project.websiteImages && project.websiteImages.length > 0 && project.websiteImages.map((image, index) => (
        <img key={index} className="rounded-xl my-20" src={image} alt={`project-${index}`} />
      ))}
      </div>
    </div>
  );
};


export default Project;

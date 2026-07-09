import "./Projects.css";

import hero10 from "../../assets/images/hero10.jpg";
import hero11 from "../../assets/images/hero11.jpg";
import hero12 from "../../assets/images/hero12.jpg";
import hero13 from "../../assets/images/hero13.jpg";

import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    image: hero10,
    category: "SOLAR ENERGY",
    title: "Maximizing Solar ROI",
  },
  {
    image: hero11,
    category: "Solar Energy",
    title: "Diversifying Your Solar",
  },
  {
    image: hero12,
    category: "Solar Energy",
    title: "Che Benefits of solar",
  },
  {
    image: hero13,
    category: "Solae Energy",
    title: "Shining a light",
  },
];

function Projects() {
  return (
    <section className="projects">

      <div className="projects-header">

        <span className="projects-tag">
          LATEST PROJECTS
        </span>

        <h2>
          Our Latest Projects
        </h2>

      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <img
              src={project.image}
              alt={project.title}
            />

            <div className="project-overlay">

              <span>{project.category}</span>

              <h3>{project.title}</h3>

              <button>
                <FiArrowUpRight />
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;
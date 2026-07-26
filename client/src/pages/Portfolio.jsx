import "./Portfolio.css";

import hero10 from "../assets/images/hero10.jpg";
import hero11 from "../assets/images/hero11.jpg";
import hero12 from "../assets/images/hero12.jpg";
import hero13 from "../assets/images/hero13.jpg";

import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    image: hero10,
    category: "SOLAR ENERGY",
    title: "Maximizing Solar ROI",
  },
  {
    image: hero11,
    category: "SOLAR ENERGY",
    title: "Diversifying Your Solar",
  },
  {
    image: hero12,
    category: "SOLAR ENERGY",
    title: "The Benefits of Solar",
  },
  {
    image: hero13,
    category: "SOLAR ENERGY",
    title: "Shining a Light",
  },
];

function Portfolio() {
  return (
    <div className="portfolio-page">

      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="portfolio-hero-overlay">
          <span>OUR PORTFOLIO</span>

          <h1>Our Projects</h1>

          <p>Home / Portfolio</p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section">

        <div className="portfolio-header">

          <span className="portfolio-tag">
            OUR LATEST WORK
          </span>

          <h2>
            Explore Our Projects
          </h2>

          <p>
            Discover our renewable energy projects designed to
            create clean, efficient and sustainable energy solutions.
          </p>

        </div>

        <div className="portfolio-grid">

          {projects.map((project, index) => (

            <div
              className="portfolio-card"
              key={index}
            >

              <img
                src={project.image}
                alt={project.title}
              />

              <div className="portfolio-overlay">

                <div>
                  <span>{project.category}</span>

                  <h3>{project.title}</h3>
                </div>

                <button>
                  <FiArrowUpRight />
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

export default Portfolio;
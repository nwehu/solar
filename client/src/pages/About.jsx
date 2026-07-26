import "./About.css";

import hero4 from "../assets/images/hero4.jpg";
import hero5 from "../assets/images/hero5.jpg";
import hero6 from "../assets/images/hero6.jpg";

import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

function About() {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay">
          <span>ABOUT US</span>
          <h1>Powering a Sustainable Future</h1>
          <p>Home / About</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-intro">

        <div className="about-intro-image">
          <img src={hero4} alt="Solar energy project" />
        </div>

        <div className="about-intro-content">

          <span className="about-tag">
            WHO WE ARE
          </span>

          <h2>
            Clean Energy for a Better Tomorrow
          </h2>

          <p>
            We provide reliable and sustainable renewable energy
            solutions for homes, businesses and communities.
          </p>

          <p>
            Our goal is to make clean energy more accessible while
            helping our customers reduce energy costs and build a
            greener future.
          </p>

          <div className="about-features">

            <div>
              <FiCheckCircle />
              <span>Reliable Energy Solutions</span>
            </div>

            <div>
              <FiCheckCircle />
              <span>Professional Installation</span>
            </div>

            <div>
              <FiCheckCircle />
              <span>Sustainable Technology</span>
            </div>

            <div>
              <FiCheckCircle />
              <span>Customer-Focused Service</span>
            </div>

          </div>

          <button className="about-button">
            Learn More
            <FiArrowRight />
          </button>

        </div>

      </section>

      {/* Why Choose Us */}
      <section className="why-us">

        <div className="why-us-content">

          <span className="about-tag">
            WHY CHOOSE US
          </span>

          <h2>
            Building a Cleaner and Greener Future
          </h2>

          <p>
            We combine modern renewable energy technology with
            professional service to deliver efficient and
            sustainable energy solutions.
          </p>

          <div className="why-us-stats">

            <div>
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>

            <div>
              <h3>90%</h3>
              <p>Customer Satisfaction</p>
            </div>

            <div>
              <h3>10+</h3>
              <p>Years of Experience</p>
            </div>

          </div>

        </div>

        <div className="why-us-image">
          <img src={hero5} alt="Renewable energy" />
        </div>

      </section>

      {/* Mission Section */}
      <section className="mission-section">

        <div className="mission-image">
          <img src={hero6} alt="Clean energy" />
        </div>

        <div className="mission-content">

          <span className="about-tag">
            OUR MISSION
          </span>

          <h2>
            Making Renewable Energy Simple
          </h2>

          <p>
            We believe that switching to renewable energy should be
            simple, affordable and accessible to everyone.
          </p>

          <p>
            From solar installations to energy management, we focus
            on providing solutions that create long-term value for
            our customers and the environment.
          </p>

        </div>

      </section>

    </div>
  );
}

export default About;
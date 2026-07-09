import "./About.css";
import about1 from "../../assets/images/hero4.jpg";
import about2 from "../../assets/images/hero5.jpg";

import { FiPhoneCall } from "react-icons/fi";

function About() {
  return (
    <section className="about">

      <div className="about-left">

        <img
          src={about1}
          alt=""
          className="about-img1"
        />

        <img
          src={about2}
          alt=""
          className="about-img2"
        />

      </div>

      <div className="about-right">

        <span className="about-tag">
          GET TO KNOW US
        </span>

        <h2>
          Welcome To Sustainable
          <br />
          Energy Services
        </h2>

        <p className="about-desc">

          At Sustainable Energy Services, we are dedicated to
          providing innovative and eco-friendly solutions to meet
          your energy needs. We believe renewable energy plays an
          important role in creating a cleaner and greener future.

        </p>

        <h3 className="experience">

          We have 35+ years of experience in power supply and renewable energy solutions

        </h3>

        <div className="call-box">

          <div className="call-icon">
            <FiPhoneCall />
          </div>

          <div className="call-content">

            <span className="call-title">
              Have any question? Give us a call
            </span>

            <h4 className="number">
              +91 9876543210
            </h4>

          </div>

        </div>

        <button className="about-btn">
          Explore Now
          
        </button>

      </div>

    </section>
  );
}

export default About;
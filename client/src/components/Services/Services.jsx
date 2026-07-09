import "./Services.css";
import {
  FiArrowRight
} from "react-icons/fi";

import {
  GiSolarPower
} from "react-icons/gi";

import hero6 from "../../assets/images/hero6.jpg";
import hero7 from "../../assets/images/hero7.jpg";
import hero8 from "../../assets/images/hero8.jpg";
import hero9 from "../../assets/images/hero9.jpg";

const services = [
  {
    number: "01 SERVICE",
    title: "Wind Turbines",
    description:
      "Hybrid energy refers to the use of multiple renewable energy sources for efficient power generation.",
    image: hero6,
  },
  {
    number: "02 SERVICE",
    title: "Solar Panels",
    description:
      "Professional solar panel installation for residential and commercial buildings.",
    image: hero7,
  },
  {
    number: "03 SERVICE",
    title: "Hydropower Plants",
    description:
      "Reliable hydropower solutions designed to deliver clean and sustainable electricity.",
    image: hero8,
  },
  {
    number: "04 SERVICE",
    title: "Energy Storage",
    description:
      "Advanced battery storage systems that maximize renewable energy efficiency.",
    image: hero9,
  },
];

function Services() {
  return (
    <section className="services">

      <div className="service-header">

        <div>

          <span className="service-tag">
            SPECIALISE IN THE TRANSPORTATION
          </span>

          <h2>
            Sustainable Energy Services
          </h2>

        </div>

        

      </div>

      <div className="service-grid">

        {services.map((service, index) => (

          <div className="service-card" key={index}>

            <div className="service-content">

              <GiSolarPower className="service-icon" />

              <span className="service-number">
                {service.number}
              </span>

             <h3>{service.title}</h3>

              <p>{service.description}</p>

              <button className="arrow-btn">
                <FiArrowRight />
              </button>

            </div>

            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />

          </div>

        ))}

      </div>

    </section>
  );
}

export default Services;
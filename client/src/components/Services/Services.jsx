import { useEffect, useState } from "react";
import axios from "axios";
import "./Services.css";

import { FiArrowRight } from "react-icons/fi";
import { GiSolarPower } from "react-icons/gi";

import hero6 from "../../assets/images/hero6.jpg";
import hero7 from "../../assets/images/hero7.jpg";
import hero8 from "../../assets/images/hero8.jpg";
import hero9 from "../../assets/images/hero9.jpg";

// Map image names from MongoDB to imported images
const imageMap = {
  "hero6.jpg": hero6,
  "hero7.jpg": hero7,
  "hero8.jpg": hero8,
  "hero9.jpg": hero9,
};

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/services");

      // Keep only services that have the new structure
      const filteredServices = res.data.services.filter(
        (service) => service.number && service.image
      );

      setServices(filteredServices);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="services">
      <div className="service-header">
        <div>
          <span className="service-tag">
            SPECIALISE IN THE TRANSPORTATION
          </span>

          <h2>Sustainable Energy Services</h2>
        </div>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <div className="service-card" key={service._id}>
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
              src={imageMap[service.image]}
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
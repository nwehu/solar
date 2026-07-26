import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import api from "../api/axios";

import hero6 from "../assets/images/hero6.jpg";
import hero7 from "../assets/images/hero7.jpg";
import hero8 from "../assets/images/hero8.jpg";
import hero9 from "../assets/images/hero9.jpg";

import "./ServicesPage.css";

// Match the image names stored in MongoDB
const imageMap = {
  "hero6.jpg": hero6,
  "hero7.jpg": hero7,
  "hero8.jpg": hero8,
  "hero9.jpg": hero9,

  // In case you already have these values in MongoDB
  "hero6.png": hero6,
  "hero7.png": hero7,
  "hero8.png": hero8,
  "hero9.png": hero9,
};

function ServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await api.get("/services");

      if (res.data.success) {
        setServices(res.data.services);
      }
    } catch (error) {
      console.error("Failed to fetch services:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      {/* ================= BANNER ================= */}
      <section className="services-banner">
        <div className="services-banner-overlay">
          <p>HOME / SERVICES</p>
          <h1>Our Services</h1>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="services-page">
        <div className="services-page-header">
          <span>SUSTAINABLE ENERGY SOLUTIONS</span>

          <h2>
            Reliable Energy Services
            <br />
            For a Better Future
          </h2>

          <p>
            We provide reliable and sustainable energy solutions designed
            for homes, businesses, and modern communities.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="services-loading">
            Loading services...
          </div>
        )}

        {/* No services */}
        {!loading && services.length === 0 && (
          <div className="no-services">
            <h3>No Services Available</h3>
            <p>Please add services from the admin panel.</p>
          </div>
        )}

        {/* Service Cards */}
        {!loading && services.length > 0 && (
          <div className="services-page-grid">
            {services.map((service) => (
              <div className="services-page-card" key={service._id}>
                
                {/* Image */}
                <div className="service-page-image">
                  {imageMap[service.image] ? (
                    <img
                      src={imageMap[service.image]}
                      alt={service.title}
                    />
                  ) : (
                    <div className="image-placeholder">
                      No Image
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="service-page-content">
                  <span className="service-page-number">
                    {service.number}
                  </span>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <button className="service-page-btn">
                    Learn More
                    <FiArrowRight />
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}

export default ServicesPage;
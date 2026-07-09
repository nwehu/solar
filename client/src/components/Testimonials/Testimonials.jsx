import "./Testimonials.css";

import { FaStar, FaQuoteRight } from "react-icons/fa";

import client1 from "../../assets/images/hero4.jpg";
import client2 from "../../assets/images/hero5.jpg";

const testimonials = [
  {
    image: client1,
    name: "John Anderson",
    role: "Solar Customer",
    review:
      "The team was highly professional from consultation to installation. Our energy bills have dropped significantly and the entire process was smooth.",
  },
  {
    image: client2,
    name: "Emily Johnson",
    role: "Business Owner",
    review:
      "Excellent service and outstanding support. The renewable energy solution exceeded our expectations and the installation was completed on time.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">

      <div className="testimonial-header">

        <span className="testimonial-tag">
          TESTIMONIALS
        </span>

        <h2>
          What Our Clients Say
        </h2>

      </div>

      <div className="testimonial-grid">

        {testimonials.map((item, index) => (

          <div className="testimonial-card" key={index}>

            <div className="quote-icon">
              <FaQuoteRight />
            </div>

            <p className="review">
              {item.review}
            </p>

            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <div className="client">

              <img
                src={item.image}
                alt={item.name}
              />

              <div>

                <h3>{item.name}</h3>

                <span>{item.role}</span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Testimonials;
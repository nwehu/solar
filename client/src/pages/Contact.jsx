import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import "./Contact.css"



function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setSuccess(data.message);

      setSuccess("✅ Thank you! Your message has been sent successfully.");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }
  };

  return (
    <>
      <Navbar />
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>Home / Contact</p>
      </div>

      <div className="contact-page">

  <div className="contact-info">

    <h2>Get In Touch</h2>

    <p>
      We'd love to hear from you. Contact our solar experts today.
    </p>

    <div className="info-item">
      <FaMapMarkerAlt className="icon" />
      <span>012 Brooklyn Street, New York, USA</span>
    </div>

    <div className="info-item">
      <FaPhoneAlt className="icon" />
      <span>+1 999 333 0000</span>
    </div>

    <div className="info-item">
      <FaEnvelope className="icon" />
      <span>needhelp@domain.com</span>
    </div>

    <div className="info-item">
      <FaClock className="icon" />
      <span>Mon - Sat : 9:00 AM - 6:00 PM</span>
    </div>

  </div>

  <div className="contact-form">
        <h1 className="contact-title">Contact Us</h1>

<p className="contact-subtitle">
  We'd love to hear from you. Send us your query and our team will contact you shortly.
</p>
{success && <p className="success-message">{success}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            
          />

          <button type="submit">Send Message</button>
        </form>

        </div>
      </div>
    </>
  );
}

export default Contact;
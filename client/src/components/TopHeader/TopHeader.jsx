import "./TopHeader.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FiPhoneCall, FiMail } from "react-icons/fi";

function TopHeader() {
  return (
    <div className="top-header">

      <div className="logo">
        <h2>SOLURIS</h2>
      </div>

      <div className="social-icons">
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
        <FaPinterestP />
      </div>

      <div className="contact-box">

        <div className="contact-item">
          <FiPhoneCall className="icon" />
          <div>
            <p>Call Agent</p>
            <h4>+91 9876543210</h4>
          </div>
        </div>

        <div className="contact-item">
          <FiMail className="icon" />
          <div>
            <p>Send Email</p>
            <h4>info@solaris.com</h4>
          </div>
        </div>

      </div>

    </div>
  );
}

export default TopHeader;
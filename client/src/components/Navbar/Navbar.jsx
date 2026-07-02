import "./Navbar.css";
import { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

function Navbar() {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <nav className={sticky ? "navbar sticky" : "navbar"}>

      <ul className="nav-links">

        <li>Home</li>
        <li>Pages</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>News</li>
        <li>Contact</li>

      </ul>

      <div className="nav-right">

        <span className="login">Login / Register</span>

        <FiShoppingCart className="cart"/>

        <button>GET A QUOTE</button>

      </div>

    </nav>

  );
}

export default Navbar;
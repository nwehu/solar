import "./Navbar.css";
import { useEffect, useState } from "react";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

function Navbar() {

  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      <div
  className="menu-icon"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? <FiX /> : <FiMenu />}
</div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>Home</li>
        <li>Pages</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>News</li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>

      </ul>

      <div className={menuOpen ? "nav-right active" : "nav-right"}>

        <span className="login">Login / Register</span>

        <FiShoppingCart className="cart"/>

        <button>GET A QUOTE</button>

      </div>

    </nav>

  );
}

export default Navbar;
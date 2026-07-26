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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu after clicking a link
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={sticky ? "navbar sticky" : "navbar"}>

      {/* Mobile Menu Button */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Navigation Links */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/about" onClick={closeMenu}>
            Pages
          </Link>
        </li>

        <li>
          <Link to="/services" onClick={closeMenu}>
            Services
          </Link>
        </li>

        <li>
          <Link to="/portfolio" onClick={closeMenu}>
            Portfolio
          </Link>
        </li>

        <li>
          <Link to="/news" onClick={closeMenu}>
            News
          </Link>
        </li>

        <li>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>

      </ul>

      {/* Right Side */}
      <div className={menuOpen ? "nav-right active" : "nav-right"}>

        <span className="login">
          Login / Register
        </span>

        <FiShoppingCart className="cart" />

        <button>
          GET A QUOTE
        </button>

      </div>

    </nav>
  );
}

export default Navbar;
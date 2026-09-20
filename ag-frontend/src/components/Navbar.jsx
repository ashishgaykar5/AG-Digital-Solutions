import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/Logonew.png";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <Link to="/" className="logo" onClick={closeMenu}>
        <img src={logo} alt="AG Logo" />
      </Link>


      {/* Mobile Menu Button */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>


      {/* Navigation */}
      <ul className={`nav-link ${menuOpen ? "active" : ""}`}>

        <li>
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/services" onClick={closeMenu}>
            Services
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </li>

        <li>
          <NavLink to="/register" onClick={closeMenu}>
            Register
          </NavLink>
        </li>

        <li>
          <NavLink to="/login" onClick={closeMenu}>
            Login
          </NavLink>
        </li>

        <li>
          <Link to="/profile">  Profile</Link>
        </li>


      </ul>

    </nav>
  );
}

export default Navbar;
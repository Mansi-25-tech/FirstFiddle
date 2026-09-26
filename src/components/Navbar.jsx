import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top">
      <div className="container-fluid">

        {/* LOGO */}
        <Link to="/" className="navbar-brand">
          <img
            src="https://pn-paul.netlify.app/image/ff-logo-02.png"
            alt="First Fiddle Logo"
            className="weblogo"
          />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#pn"
          aria-controls="pn"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAVIGATION */}
        <div className="collapse navbar-collapse" id="pn">
          <ul className="navbar-nav ms-auto text-center">

            <li className="nav-item">
              <NavLink
                to="/"
                end
                className="nav-link"
              >
                HOME
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                ABOUT
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/brand" className="nav-link">
                BRAND
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/ourteam" className="nav-link">
                OUR TEAM
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/press-release" className="nav-link">
                PRESS RELEASE
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                CONTACT
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/careers" className="nav-link">
                CARRERS
              </NavLink>
            </li>

            <li className="nav-item">
              <a
                href="#"
                className="nav-link"
              >
                FRANCHISE
              </a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
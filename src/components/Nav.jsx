import React, { useState } from "react";
import nav__logo from "../assets/scarehauslogo.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="row nav__row">
          <div className="nav__logo">
            <img src={nav__logo} alt="" className="nav__logo--img" />
          </div>
          <div className="nav__links">
            <li className="nav__link">
              <a href="/" className="nav__link--anchor link link__hover-effect">
                Home
              </a>
            </li>
            <li className="nav__link">
              <a
                href="/movies"
                className="nav__link--anchor link link__hover-effect"
              >
                Movies
              </a>
            </li>
            <li className="nav__link">
              <a href="/" className="nav__link--anchor link link__hover-effect">
                About
              </a>
            </li>
            <li className="nav__link nav__link--contact">
              <a href="/" className="nav__link--anchor">
                Contact
              </a>
            </li>
          </div>
          <button
            className="nav__hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`hamburger__bar ${menuOpen ? "open" : ""}`}></span>
            <span className={`hamburger__bar ${menuOpen ? "open" : ""}`}></span>
            <span className={`hamburger__bar ${menuOpen ? "open" : ""}`}></span>
          </button>
        </div>
        <div
          className={`nav__mobile--menu ${menuOpen ? "nav__mobile--open" : ""}`}
        >
          <li className="nav__mobile--link link__hover-effect">
            <a href="/" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li className="nav__mobile--link link__hover-effect">
            <a href="/movies" onClick={() => setMenuOpen(false)}>
              Movies
            </a>
          </li>
          <li className="nav__mobile--link link__hover-effect">
            <a href="/" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>
          <li className="nav__mobile--link link__hover-effect">
            <a href="/" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
        </div>
      </nav>
      <div className="section__divider"></div>
    </>
  );
};

export default Nav;

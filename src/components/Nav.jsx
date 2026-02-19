import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <>
      <nav>
        <div class="row nav__row">
          <div class="nav__logo">
            <div class="nav__logo--img"></div>
            <div class="nav__logo--title"></div>
          </div>
          <div class="nav__links">
            <li class="nav__link">
              <a href="#" class="nav__link--anchor link link__hover-effect">
                Home
              </a>
            </li>
            <li class="nav__link">
              <a href="#" class="nav__link--anchor link link__hover-effect">
                About
              </a>
            </li>
            <li class="nav__link">
              <a href="#" class="nav__link--anchor link link__hover-effect">
                Services
              </a>
            </li>
            <li class="nav__link nav__link--contact">
              <a href="#" class="nav__link--anchor nav__link--contact">
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;

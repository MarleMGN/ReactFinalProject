import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="section__divider"></div>
      <footer className="footer">
        <div className="footer__links">
          <a href="/" className="footer__link link__hover-effect">
            Home
          </a>
          <a href="/movies" className="footer__link link__hover-effect">
            Movies
          </a>
          <a href="/" className="footer__link link__hover-effect">
            About
          </a>
          <a href="/" className="footer__link link__hover-effect">
            Contact
          </a>
          <a href="/" className="footer__link link__hover-effect">
            Help
          </a>
        </div>

        <div className="footer__socials">
          <FontAwesomeIcon icon={["fab", "facebook"]} />
          <FontAwesomeIcon icon={["fab", "instagram"]} />
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
          <FontAwesomeIcon icon={["fab", "twitter"]} />
          <FontAwesomeIcon icon={["fab", "github"]} />
        </div>

        <p className="footer__copyright">
          Copyright © 2025 <a href="#">Scarehaus</a> All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;

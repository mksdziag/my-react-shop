import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <ul className="footer-nav__list is-flex">
          <li className="footer-nav__item">
            <Link to="/" className="footer-nav__link">
              Home
            </Link>
          </li>
          <li className="footer-nav__item">
            <Link to="/contact" className="footer-nav__link">
              Contact
            </Link>
          </li>
          <li className="footer-nav__item">
            <Link to="/my-account" className="footer-nav__link">
              My Account
            </Link>
          </li>
        </ul>
      </nav>
      <div className="column content has-text-centered">
        <p>
          <strong>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/mksdziag/my-react-shop"
            >
              My React Shop
            </a>
          </strong>{" "}
          by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://portfolio-mksdziag.netlify.com"
          >
            Mks Dziag
          </a>
          .
        </p>
        <p>
          Made with
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/facebook/react"
          >
            {" "}
            React
          </a>
          ,
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/reduxjs/redux"
          >
            {" "}
            Redux
          </a>
          ,
          <a target="_blank" rel="noopener noreferrer" href="https://bulma.io/">
            {" "}
            Bulma
          </a>
          . Photos from{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.jestesmodna.pl"
          >
            {" "}
            jestesmodna.pl
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

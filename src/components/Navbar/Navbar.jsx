import React from "react";
import Logo from "../../assets/logo.svg";
import geoTriangle from "../../assets/geo.svg"
import searchIcon from "../../assets/search.svg"
import { Link } from "react-router-dom";
import Demo from "../Menu/Menu";
import { navLinkGroup, navLinkGroup2 } from "../constants.ts";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="container">
      <nav>
        <div className="logo">
          <Link to={"/"}>
          <img src={Logo} alt="website-logo" />
          </Link>
        </div>
        <div className={`nav-links-group`}>
          <ul className={`nav-links`}>
            {navLinkGroup.map((link) => (
              <li className="nav-link-item">
                <Link to={"/singlePage"}>
                 {link}
                </Link>
              </li>
            ))}
          </ul>

          <ul className={`nav-links`}>
            {navLinkGroup2.map((link) => (
              <li className="nav-link-item">
                <Link to={"/singlePage"}>
                 {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Demo className={'nav-toggler'} />
        <div className="nav-info">
          <div className="nav-location">
            <img src={geoTriangle} alt="" />
            <p>Санкт-Петербург</p>
          </div>
          <div className="search-item">
            <img  src={searchIcon} alt="" />
            <button className="nav-btn">Войти</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

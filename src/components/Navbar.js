import React, { useState } from "react";
import logo from "../images/logo.png";
import { FaBars } from "react-icons/fa";
import pageLinks from "../links";
import socialLinks from "../links_social";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(true);
  
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="saigontours" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className={`${showLinks?'links-container show-container':'links-container'}`} >
          <ul className="links" >
            {pageLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.href}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {socialLinks.map((link) => {
            const { id, href, icon } = link;
            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;



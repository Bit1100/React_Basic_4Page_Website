import React from "react";
import { NavLink, Link } from "react-router-dom";

//sfc
const Navbar = () => {
  const [navLink, navItem] = ["nav-link", "nav-items-item"];
  return (
    <header className="nav">
      <div className="logo center">
        <Link className={navLink} to="/">
          BiT
        </Link>
      </div>
      <ul className="nav-items">
        <li className={navItem}>
          <NavLink exact className={navLink} to="/">
            Home
          </NavLink>
        </li>
        <li className={navItem}>
          <NavLink className={navLink} to="/blogs">
            Blogs
          </NavLink>
        </li>
        <li className={navItem}>
          <NavLink className={navLink} to="/about">
            About
          </NavLink>
        </li>
        <li className={navItem}>
          <NavLink className={navLink} to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;

import React from "react";
import { FaHome, FaSearch, FaHeart, FaUser } from "react-icons/fa";

const FooterNavbar2 = () => {
  return (
    <nav className="footer-navbar">
      <ul>
        <li>
          <a href="#">
            <FaHome />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FaSearch />
            <span>Search</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FaHeart />
            <span>Favorites</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FaUser />
            <span>Profile</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNavbar2;

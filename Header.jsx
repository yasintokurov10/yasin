import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      {" "}
      <nav>
        <div class="logo">
          <a href="#">Logo</a>
        </div>
        <ul class="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div class="burger">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
      </nav>
    </>
  );
};

export default Header;

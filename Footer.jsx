import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div class="footer-container">
          <p>&copy; 2023 Jane Doe. All rights reserved.</p>
          <div class="social-media">
            <a href="#">
              <i class="fab fa-facebook-f">FACEBOOK</i>
            </a>
            <a href="#">
              <i class="fab fa-twitter">TWITTER</i>
            </a>
            <a href="#">
              <i class="fab fa-instagram">INSTAGRAM</i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import React from 'react';
import logo from "../assets/warehouse.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa6';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo-footer" />
        </div>
        <div className="footer-links">
          <div className="footer-section">
            <h3>SELL A HOME</h3>
            <ul>
              <li><a href="#">Request an offer</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Reviews</a></li>
              <li><a href="#">Stories</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>BUY, RENT AND SELL</h3>
            <ul>
              <li><a href="#">Buy and sell properties</a></li>
              <li><a href="#">Rent home</a></li>
              <li><a href="#">Builder trade-up</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>ABOUT</h3>
            <ul>
              <li><a href="#">Company</a></li>
              <li><a href="#">How it works</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Investors</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>BUY A HOME</h3>
            <ul>
              <li><a href="#">Buy</a></li>
              <li><a href="#">Finance</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>TERMS & PRIVACY</h3>
            <ul>
              <li><a href="#">Trust & Safety</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>RESOURCES</h3>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Guides</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Help Center</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy;2024 Warehouse. All rights Reserved</p>
        <div className="social-icons">
          <FaFacebookF className="icon" />
          <FaInstagram className="icon" />
          <FaTwitter className="icon" />
          <FaLinkedin className="icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
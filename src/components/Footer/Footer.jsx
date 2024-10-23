import React from "react";
import facebook from '../../img/Facebook.svg';
import twitter from '../../img/Twitter.svg';
import instagram from '../../img/Instagram.svg';
import footer_logo from '../../img/footer_logo_svg.svg';

const Footer = () => {
  return (
    <footer>
      <div class="container">
        <div class="top_footer wow animate__animated animate__fadeInDown">
          <div class="block_logo_and_social_media">
            <img src={footer_logo} alt="logo" class="footer_logo" />
            <p>Social Media</p>
            <div class="socialls">
              <a href="#">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="#">
                <img src={twitter} alt="twitter" />
              </a>
              <a href="#">
                <img src={instagram} alt="instagram" />
              </a>
            </div>
          </div>
          <div class="nav">
            <p class="nav_title">SHOP</p>
            <ul class="nav_menu">
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Overview</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Releases</a>
              </li>
            </ul>
          </div>
          <div class="nav">
            <p class="nav_title">COMPANY</p>
            <ul class="nav_menu">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
          <div class="stay_up_to_date">
            <p class="stay_up_title">STAY UP TO DATE</p>
            <form action="#">
              <input
                type="email"
                name="#"
                id="#"
                placeholder="Enter your email"
              />
              <button type="submit">SUBMIT</button>
            </form>
          </div>
        </div>
        <div class="bottom_footer">
          <div class="line"></div>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

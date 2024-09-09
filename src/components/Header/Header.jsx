import React from "react";
import header_logo from '../../img/header_logo_svg.svg';
import basket from '../../img/basket.png';
import header_image from '../../img/header_image.png';
import background_pop from '../../img/background_popp.png';

const Header = () => {
  return (
    <header>
      <div class="container">
        <div class="header_block">
          <a href="#" class="logo"
            ><img src={header_logo} alt="Rivo"
          /></a>
          <ul class="nav_menu">
            <li><a href="#">HOME</a></li>
            <li><a href="#">SHOP</a></li>
            <li><a href="#">FEATURES</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>
          <div class="korz__login">
            <img src={basket} alt="basket" />
            <a href="#" class="login">LOGIN</a>
          </div>
        </div>
        <div class="header_content">
          <div class="left_block">
            <p class="title">Discover and Find Your Own Fashion!</p>
            <p class="title_content">
              Explore our curated collection of stylish clothing and accessories
              tailored to your unique taste.
            </p>
            <a href="#" class="link__explore">EXPLORE NOW</a>
          </div>
          <div class="right_block">
            <img src={header_image} alt="image" />
            <img class="popps" src={background_pop} alt="popps" />
            <img class="popps" src={background_pop} alt="popps" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
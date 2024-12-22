import "./../less/header.scss";
import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import  FaFacebookF  from "../images/faFacebookF";
import  FaInstagram  from "../images/FaInstagram";
import Logo from "../images/logo";



const Header = ({ siteTitle }) => (
  <header>
  <nav class="navbar navbar-expand-lg navbar-light bg-light desktop">
  <a className="brand" title="" href="/">  
             <Logo />
           </a>
<div className="contact-block">

  <a title="" href="tel:+5012262336">
  <i class="fa fa-phone" aria-hidden="true"></i>
   <span> TEL: +(501) 226 2336</span>
  </a>
</div>


  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a title="" class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      
      <li class="nav-item">
        <a title="" class="nav-link" href="/rooms">Our Rooms</a>
      </li>
      <li class="nav-item">
        <a title="" class="nav-link" href="/coming-soon/">Services</a>
      </li>
      <li class="nav-item">
        <a title="" class="nav-link" href="/restaurant-and-bar/">Dine In</a>
      </li>
      <li class="nav-item">
        <a title="" class="nav-link" href="/coming-soon/">Activities</a>
      </li>
      <li class="nav-item">
        <a title="" class="nav-link" href="/contact-us/">Contact Us</a>
      </li>
    </ul>
   
  </div>
  <div className="book-button">
    <a href="https://us2.cloudbeds.com/en/reservation/Ii3x4t?currency=usd" target="_blank">
      Book Now
    </a>
  </div>
</nav>

  </header>
)

export default Header

import "./../less/header.scss";
import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import  FaFacebookF  from "../images/faFacebookF";
import  FaInstagram  from "../images/FaInstagram";
import Logo from "../images/logo";



const Header = ({ siteTitle }) => (
  <header>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a className="brand" title="" href="/">  
             <Logo />
           </a>
<div className="contact-block">

  <a title="" href="tel:5016624626">
  <i class="fa fa-phone" aria-hidden="true"></i>
   <span> TEL: 501-662-4626</span>
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
      
      <li class="nav-item dropdown">
        <a title="" class="nav-link dropdown-toggle" href="/all-tours" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Our Tours
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a title="" class="dropdown-item" href="">View All Tours</a>
        <a title="" class="dropdown-item" href="">5-Mile Cave Kayaking</a>
        <a title="" class="dropdown-item" href="">Cave Tubing</a>
        <a title="" class="dropdown-item" href="">Jungle Zipline</a>
        <a title="" class="dropdown-item" href="">Jungle ATV</a>
        <a title="" class="dropdown-item" href="">Crystal Cave</a>
        <a title="" class="dropdown-item" href="">ATM Cave</a>
        <a title="" class="dropdown-item" href="">Xunantunich & Cahal Pech</a>
  
          
        </div> 
      </li>
      <li class="nav-item">
        <a title="" class="nav-link" href="">Pick Up & Drop Off</a>
      </li>
      <li class="nav-item">
        <a title="" class="nav-link" href="">About Us</a>
      </li>
      <li class="nav-item">
        <a title="" class="nav-link" href="">Contact Us</a>
      </li>
    </ul>
   
  </div>
  <div className="book-button">
    <a href="">
      Book Now
    </a>
  </div>
</nav>
  </header>
)

export default Header

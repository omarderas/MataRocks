import "./../less/header.scss";
import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import  FaFacebookF  from "../images/faFacebookF";
import  FaInstagram  from "../images/FaInstagram";
const MainLogo = "../images/mata-rock-logo.jpeg";



const Header = ({ siteTitle }) => (
  <header>
    <div className="top-bar">
       <div className="row">
          <div className="col-sm-4">
             <a href="" id="book"><span>Book Now</span></a>
          </div>
          <div className="col-sm-4">
             <a class="brand" title="Caves Branch Tour Guide Association" href="/">  <StaticImage src="../images/Mata-Rocks-Resort-barefoot.png" quality={60} formats={["auto", "webp", "avif"]} /></a>
          </div>
          <div className="col-sm-4">
          <a title="Call Caves Branch Tour Guide Association" href="tel:5016624626" id="phone">
          <span> <i class="fa fa-phone" aria-hidden="true"></i>
            Tel: +501 226 2336</span>
            </a>
          </div>
       </div>
    </div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light"> 
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a title="Caves Branch Tour Guide Association near San Ignacio" class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a title="About Caves Branch Tour Guide Association" class="nav-link" href="/about-us">About Us</a>
      </li>
      <li class="nav-item dropdown">
        <a title="" class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Rooms
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a title="" class="dropdown-item" href="">View All Rooms</a>
        <a href="" class="dropdown-item">Ocean Front View</a>
        <a href="" class="dropdown-item">Ocean View Pool Deck</a>
   
          
        </div> 
      </li>
      <li class="nav-item">
        <a title="" class="nav-link" href="">Services</a>
      </li>
      <li class="nav-item">
        <a title="" class="nav-link" href="">Restaurant</a>
      </li>
     
      <li class="nav-item">
        <a title="" class="nav-link" href="">Contact Us</a>
      </li>
    </ul>
   
  </div>

</nav>
  </header>
)

export default Header

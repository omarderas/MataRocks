import "./../less/header.scss";
import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"




const Header = () => {
  return (
  <header>
    <div className="top-bar">
       <div className="row">
          <div className="col-sm-4">
             <a href="" id="book"><span>Book Now</span></a>
          </div>
          <div className="col-sm-4">
             <a className="brand" title="" href="/">  
             
             <StaticImage alt="" src={`../images/Mata-Rocks-Resort-barefoot.png`} quality={60} formats={["auto", "webp", "avif"]} />
             </a>
          </div>
          <div className="col-sm-4">
          <a title="" href="tel:5012262336" id="phone">
          <span> <i className="fa fa-phone" aria-hidden="true"></i>
            Tel: +501 226 2336</span>
            </a>
          </div>
       </div>
    </div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a title="" className="nav-link" href="">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a title="" className="nav-link" href="">About Us</a>
      </li>
      <li className="nav-item dropdown">
        <a title="" className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Rooms
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <a title="" className="dropdown-item" href="">View All Rooms</a>
        <a href="" className="dropdown-item">Ocean Front View</a>
        <a href="" className="dropdown-item">Ocean View Pool Deck</a>
   
          
        </div> 
      </li>
      <li className="nav-item">
        <a title="" className="nav-link" href="">Services</a>
      </li>
      <li className="nav-item">
        <a title="" className="nav-link" href="">Restaurant</a>
      </li>
     
      <li className="nav-item">
        <a title="" className="nav-link" href="">Contact Us</a>
      </li>
    </ul>
   
  </div>

</nav>
  </header>
  );
}

export default Header;

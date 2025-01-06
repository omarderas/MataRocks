import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Row, Col, Carousel } from "react-bootstrap"
const slide1 = "../../../images/slide2.png"
const slide2 = "../../../images/mataRocks-hero.jpg"
const slide3 = "../../../images/slide3.png"
const slide4 = "../../../images/slide4.png"

function Hero() {
  return (
    <div className="hero-main">
        <div className='hero-absolute'>
        <div className="hero-carousel" >
                
                            <div id="demo" class="carousel slide" data-ride="carousel">


  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  
 
  <div class="carousel-inner">
    <div class="carousel-item active">
    <StaticImage src="../../../images/mataRocks-hero.jpg" />   
    </div>
    <div class="carousel-item">
    <StaticImage src="../../../images/slide2.png" /> 
    </div>
    <div class="carousel-item">
    <StaticImage src="../../../images/slide3.png" /> 
    </div>
    <div class="carousel-item">
     <StaticImage src="../../../images/slide4.png" /> 
    </div>
  </div>
  

  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>
	     </div>
          <div className='absolute-cont'>
              <p>Be Our Guests</p>
              <h1>Escape to Paradise At <br /><span>Mata Rocks Resort</span></h1>
              <span>Discover the ultimate oceanfront getaway on San Pedro Ambergris, Belize's tropical gem. Arrive by air or sea
                    and immerse yourself in relaxation and adventure. Click below to explore our resort and all the island
                    has to offer!
              </span>
          </div>
        </div>
      
    </div>
  )
}

export default Hero

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
                        <Carousel fade>
                                
                                    <Carousel.Item>
                                      <StaticImage src="../../../images/mataRocks-hero.jpg" />   
                                    </Carousel.Item>

                                    <Carousel.Item>
                                      <StaticImage src="../../../images/slide2.png" /> 
                                    </Carousel.Item>
                                    <Carousel.Item>
                                      <StaticImage src="../../../images/slide3.png" /> 
                                    </Carousel.Item>
                                    <Carousel.Item>
                                      <StaticImage src="../../../images/slide4.png" /> 
                                    </Carousel.Item>
                               

                            </Carousel> 
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

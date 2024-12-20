import React from 'react'
import {Tabs, Tab} from 'react-bootstrap-tabs';
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const headerImg = "../../../images/dineHeader.png";
const slide1 = "../../../images/spaghetti.png"
const slide2 = "../../../images/sub.png"
const slide3 = "../../../images/burger.png"
const slide4 = "../../../images/juice.png"
const slide5 = "../../../images/mojito.png"
const slide6 = "../../../images/greenJuice.png"

function Restaurant() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,

        responsive: [
            {
                breakpoint: 575, // For mobile devices (adjust as needed)
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768, // For mobile devices (adjust as needed)
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024, // For tablets or smaller screens
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
      };
  return (
    <div className='restaurant-main'>
     <div className="content-header">
        <div className="header-overlay"></div>
        <StaticImage
          src={headerImg}
          quality={60}
          formats={["auto", "webp", "avif"]}
        />
        <div className="header-cont">
          <h1>Dine with Us</h1>
        </div>
      </div>
      <div className='main-cont'>
      <div className='tours-slider'>
          <div className="slider-container">
                <Slider {...settings}>
                    <div className='tour-slide'>
                        <a href="/cave-tubing-in-belize/">
                            <div className='absolute-overlay'></div>
                            <StaticImage src={slide1} />
                            
                            <div className='absolute-desc'>
                                <span>
                                <h1>Cave Tubing</h1>
                                <p>Desserts</p>
                                </span>
                            </div>
                        </a>
                    </div>
                    <div className='tour-slide'>
                       <a href="/cave-kayaking-in-jaguar-paw/">
                       <div className='absolute-overlay'></div>
                         <StaticImage src={slide2} />
                         <div className='absolute-desc'>
                               <span>
                                <h1>Cave Tubing</h1>
                                <p>Desserts</p>
                                </span>
                            </div>
                       </a>
                    </div>
                    <div className='tour-slide'>
                       <a href="/cave-kayaking-in-jaguar-paw/">
                       <div className='absolute-overlay'></div>
                         <StaticImage src={slide5} />
                          <div className='absolute-desc'>
                               <span>
                                <h1>Cave Tubing</h1>
                                <p>Desserts</p>
                                </span>
                            </div>
                       </a>
                    </div>
                    <div className='tour-slide'>
                       <a href="/cave-kayaking-in-jaguar-paw/">
                       <div className='absolute-overlay'></div>
                         <StaticImage src={slide3} />
                         <div className='absolute-desc'>
                               <span>
                                <h1>Cave Tubing</h1>
                                <p>Desserts</p>
                                </span>
                            </div>
                       </a>
                    </div>
                    <div className='tour-slide'>
                       <a href="/cave-kayaking-in-jaguar-paw/">
                       <div className='absolute-overlay'></div>
                         <StaticImage src={slide4} />
                         <div className='absolute-desc'>
                               <span>
                                <h1>Cave Tubing</h1>
                                <p>Desserts</p>
                                </span>
                            </div>
                       </a>
                    </div>
                    </Slider>
              </div>
          </div>
          <div className='menu'>
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3" >
            <Tab eventKey="home" title="Home">
                Tab content for Home
            </Tab>
            <Tab eventKey="profile" title="Profile">
                Tab content for Profile
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
                Tab content for Contact
            </Tab>
            </Tabs>
          </div>
      </div>
    </div>
  )
}

export default Restaurant

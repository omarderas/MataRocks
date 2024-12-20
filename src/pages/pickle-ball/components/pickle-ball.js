import React from 'react'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
const headerImg = "../../../images/ballHeader.png";

function Pickle() {
  return (
    <div className='pickle-main'>
      <div className="content-header">
        <div className="header-overlay"></div>
        <StaticImage
          src={headerImg}
          quality={60}
          formats={["auto", "webp", "avif"]}
        />
        <div className="header-cont">
          <h1>Pickle Ball</h1>
        </div>
      </div>
      <div className='main-cont'>
         <h1>Experience San Pedro's Only Pickleball Court <br /><span>Only at Mata Rocks!</span></h1>
         <p>
         Craving some friendly competition under the Belizean sun? Mata Rocks Resort boasts the exclusive pickleball court in all of San Pedro. Gather your friends or family for a lively match, perfect your serve, and enjoy this exciting sport with stunning ocean views as your backdrop.
         </p>
         <a href="/coming-soon/" className="all-button">Contact Us</a>
      </div>
    </div>
  )
}

export default Pickle

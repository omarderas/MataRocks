import React from 'react'
import { StaticImage } from "gatsby-plugin-image";
const headerImg = "../../../images/contactHeader.png";

function Contact() {
  return (
    <div className='contact-main'>
         <div className="content-header">
        <div className="header-overlay"></div>
        <StaticImage
          src={headerImg}
          quality={60}
          formats={["auto", "webp", "avif"]}
        />
        <div className="header-cont">
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className='contact-cont'>
         <p>
         We’re here to make your stay unforgettable! Whether you have questions, need assistance with your booking, or want to plan the perfect getaway, our team is ready to help. Reach out to us anytime via phone or email, and we’ll respond promptly. <br />Your dream vacation at Mata Rocks Resort starts here!
         <br /><br />
       </p>
       <a href="tel:5012262336">Office: +(501) 226 2336</a>
       <a href="https://wa.link/givdq9" target="_blank">WhatsApp: +(501) 226 2336</a>
       <a href="email:reservations@matarock.com">Email: reservations@matarock.com</a>
        
      </div>
    </div>
  )
}

export default Contact

import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "./../less/footer.scss";

import  FaFacebookF  from "../images/faFacebookF";
import  FaInstagram  from "../images/FaInstagram";

const MainLogo = "../images/bhe-Logo.png";
     

function Footer() {
	return (
    <div className="footer">
        <div className="footer-wrapper">
        <div className="row">
            <div className="col-sm-4">
                <div className="footer-content">
                <a class="brand" title="Caves Branch Tour Guide Association" href="/">  <StaticImage src="../images/Mata-Rocks-Resort-barefoot.png" quality={60} formats={["auto", "webp", "avif"]} /></a>
               
                    <ul className="social">
                                <li>
                                   
                                    <a href="https://www.facebook.com/matarocksresort/" target="_blank">
                                    <FaFacebookF /></a>
                                    <a href="https://www.instagram.com/matarocksresort/" target="_blank"><FaInstagram /></a>
                                 
                                </li>
                            
                    </ul>
                </div>
            </div>

            <div className="col-sm-4 second">
                <div className="footer-content">
                    <h1>Reach Us</h1>
                    <p>
                        Tel:
                   
                     <a href="tel:5012262336"> +(501) 226 2336</a>
                    </p>
                    <p>
                        Email:
                    
                    <a href="mailto:bookings@matarocksresort.com"> bookings@matarocksresort.com</a>
                    </p>
                    <p>
                        Hours:
                   
                    <a href=""> Mon - Sun, 8:00am to 4:00pm CST</a>
                    </p>
                </div>
            </div>
            <div className="col-sm-4">
               <div className="footer-content">
               <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15186.426472875184!2d-87.9753892!3d17.9038387!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5c9b06febb2791%3A0x684ad7d1597b8b81!2sMata%20Rocks%20Resort!5e0!3m2!1sen!2sbz!4v1733772879537!5m2!1sen!2sbz" width="100%" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                       
                </div>
            </div>

        </div>
        <div className="footer-copyright">
            <p>Copyright © {new Date().getFullYear()} Mata Rocks Resort. All Rights Reserved. Belize.</p>
        </div>
        </div>
      {/*  <div className="footer-bottom-bg">

        </div>*/}
       
	</div>
    

    );
}

export default Footer;

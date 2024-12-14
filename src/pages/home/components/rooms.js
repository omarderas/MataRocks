import React from 'react'
import { Container, Button, Col } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import { StaticQuery, graphql, Link } from "gatsby"

function Rooms() {
  return (
    <div className='rooms-main'>
     {/*} <div className='head'>
        <p>Accomodations</p>
        <h1>Rooms / Suites</h1>
      </div>*/}
      <div className="gallery">
          
          <div className="image-gallery">
          
            <div className="photos">
       
            <Link  to="/">
              <div >
                 <div className="main-content">
                      <div className="data-wrapper">
                      
                          <div className="estate-type">
                              <div className="image-field">
                               <StaticImage alt="" src="../../../images/room1.jpg" quality={60} formats={["auto", "webp", "avif"]} />
              
                                
                                <div className="overlay">
                               
                                    
                                  <div className="content">
                                      <Container> 
                                      <div className="block">
                                             
                                      <div className="desc"> 
                                        <div className='desc-main'>
                                          <h2>Ocean Front Suite</h2>
                                          <p>$140USD/N</p>
                                        </div>
                                        <div className='secondary-cont'>
                                            <p>Room with two queen beds and direct pool deck access.<br />
                                               - 4 Guests <br />
                                               - Daily Cleaning< br/>
                                               - Room Service<br />
                                               - Housekeeping<br />
                                               - Wi-Fi<br />


                                            </p>
                                        </div>
                                        <a className='book-button'>
                                          Book
                                        </a>
                                       
                                        </div>       
                                         
                                     </div>
                                      </Container>
                                  </div>
                                  
                                  
                                  </div>


                              </div>
          
                          </div> 
                   

                      </div>
                      
                  </div> 
                
              </div>
              </Link>
              <Link  to="/">
              <div >
                 <div className="main-content">
                      <div className="data-wrapper">
                      
                          <div className="estate-type">
                              <div className="image-field">
                               <StaticImage alt="" src="../../../images/room2.jpg" quality={60} formats={["auto", "webp", "avif"]} />
              
                                
                                <div className="overlay">
                                <div className="overlay-2"></div>
                                      
                                  <div className="content">
                                      <Container> 
                                      <div className="block">
                                             
                                      <div className="desc"> 
                                      <div className='desc-main'>
                                          <h2>Ocean Suite Balcony</h2>
                                          <p>$175USD/N</p>
                                        </div>
                                     
                                        <div className='secondary-cont'>
                                            <p>Room with two queen beds and direct pool deck access.<br />
                                               - 4 Guests <br />
                                               - Daily Cleaning< br/>
                                               - Room Service<br />
                                               - Housekeeping<br />
                                               - Wi-Fi<br />


                                            </p>
                                        </div>
                                        <a className='book-button'>
                                          Book
                                        </a>
                                       
                                       
                                        </div>       
                                         
                                     </div>
                                      </Container>
                                  </div>
                                  
                                  
                                  </div>


                              </div>
          
                          </div> 
                   

                      </div>
                      
                  </div> 
                
              </div>
              </Link>
              <Link  to="/">
              <div >
                 <div className="main-content">
                      <div className="data-wrapper">
                      
                          <div className="estate-type">
                              <div className="image-field">
                               <StaticImage alt="" src="../../../images/room3.jpg" quality={60} formats={["auto", "webp", "avif"]} />
              
                                
                                <div className="overlay">
                                <div className="overlay-2"></div>
                                     
                                  <div className="content">
                                      <Container> 
                                      <div className="block">
                                             
                                      <div className="desc"> 
                                      <div className='desc-main'>
                                          <h2>Ocean Pool Deck</h2>
                                          <p>$180USD/N</p>
                                        </div>
                                     
                                        <div className='secondary-cont'>
                                            <p>Room with two queen beds and direct pool deck access.<br />
                                               - 4 Guests <br />
                                               - Daily Cleaning< br/>
                                               - Room Service<br />
                                               - Housekeeping<br />
                                               - Wi-Fi<br />


                                            </p>
                                        </div>
                                        <a className='book-button'>
                                          Book
                                        </a>
                                       
                                       
                                        </div>       
                                         
                                     </div>
                                      </Container>
                                  </div>
                                  
                                  
                                  </div>


                              </div>
          
                          </div> 
                   

                      </div>
                      
                  </div> 
                
              </div>
              </Link>
              <Link  to="/">
              <div >
                 <div className="main-content">
                      <div className="data-wrapper">
                      
                          <div className="estate-type">
                              <div className="image-field">
                               <StaticImage alt="" src="../../../images/room4.jpg" quality={60} formats={["auto", "webp", "avif"]} />
              
                                
                                <div className="overlay">
                                <div className="overlay-2"></div>
                                     
                                  <div className="content">
                                      <Container> 
                                      <div className="block">
                                             
                                      <div className="desc">
                                      <div className='desc-main'>
                                          <h2>Ocean View Balcony</h2>
                                          <p>$185USD/N</p>
                                        </div>
                                     
                                        <div className='secondary-cont'>
                                            <p>Room with two queen beds and direct pool deck access.<br />
                                               - 4 Guests <br />
                                               - Daily Cleaning< br/>
                                               - Room Service<br />
                                               - Housekeeping<br />
                                               - Wi-Fi<br />


                                            </p>
                                        </div>
                                        <a className='book-button'>
                                          Book
                                        </a>
                                       
                                       
                                        </div>       
                                         
                                     </div>
                                      </Container>
                                  </div>
                                  
                                  
                                  </div>


                              </div>
          
                          </div> 
                   

                      </div>
                      
                  </div> 
                
              </div>
              </Link>
             
              </div>
          
          </div>
         </div>
      <div className='row'>
       
        <a className="all-button" href="">
            View All Rooms
        </a>
      </div>
    </div>
  )
}

export default Rooms

import React, { useState } from 'react';
import { Container, Button, Col } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import tours1 from "../../../images/snorkel.jpg"
import tours2 from "../../../images/fishing.png"
import tours3 from "../../../images/diving.jpg"
import tours4 from "../../../images/tubing-new.jpg"
import "../../../less/animations.scss"

const Tours = () => {
  const [expandedImg, setExpandedImg] = useState(tours1);
  const [imgText, setImgText] = useState('');
  const [isZooming, setIsZooming] = useState(false);

  const handleImageClick = (imgSrc, altText) => {
    setExpandedImg(imgSrc);
    setImgText(altText);
    setIsZooming(true);

    setTimeout(() => {
      setIsZooming(false);
    }, 13000);
  };
  return (
    <div className='tours-main'>
       <iframe className='youtube-iframe' src="https://www.youtube.com/embed/pdzR0Tv8fcQ?autoplay=1&mute=1&loop=1&playlist=pdzR0Tv8fcQ&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       <div className='overlay'></div>
      <div className='absolute-content'>
         <h2>Feel the Thrill!</h2>
         <h1>Experience Belize with our <br /><span>Adventure Packages!</span></h1>
         <p>
         Home to renowned snorkeling and diving, historic Maya sites, and biodiverse natural wonders, <br />discover Belize with our certified tours and activities.</p>
     
         <div className="homeMain">

<div className="row two">
<a href="" className="column"  onMouseEnter={() => handleImageClick(tours1, 'Private Tours')}>
  <div className='absolute-content'>
    <h2>Price: $75 USD</h2>
    <h1>Snorkeling</h1>
    
    </div>
</a>
<a href="" className="column"  onMouseEnter={() => handleImageClick(tours2, 'Packages')}>
<div className='absolute-content'>
 <h2>Price: $75 USD</h2>
    <h1>Fishing</h1>
    
    </div>
</a>
<a href="" className="column"  onMouseEnter={() => handleImageClick(tours3, 'Shuttle Me')}>
<div className='absolute-content'>
<h2>Price: $66 USD</h2>
    <h1>Diving Blue Hole</h1>
    
    </div>
</a>
<a href="" className="column"  onMouseEnter={() => handleImageClick(tours4, 'Shuttle Me')}>
<div className='absolute-content'>
<h2>Price: $50 USD</h2>
    <h1>Cave Tubing</h1>
    
    </div>
</a>
</div>
{expandedImg && (
        <div
          className={`expanded-container ${isZooming ? "zoom-animation" : ""}`}
          style={{
            backgroundImage: `url(${expandedImg})`
          }}
        >
      
        </div>
      )}
 </div>
      </div>
    </div>
  )
}

export default Tours

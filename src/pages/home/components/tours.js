import React, { useState } from 'react';
import tours1 from "../../../images/snorkel.jpg";
import tours2 from "../../../images/fishing.png";
import tours3 from "../../../images/diving.jpg";
import tours4 from "../../../images/tubing-new.jpg";
import "../../../less/animations.scss";

const Tours = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [isZooming, setIsZooming] = useState(false);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    setIsZooming(true);

    setTimeout(() => {
      setIsZooming(false);
    }, 13000);
  };

  const images = [tours1, tours2, tours3, tours4];

  return (
    <div className="tours-main">
      <iframe
        className="youtube-iframe"
        src="https://www.youtube.com/embed/pdzR0Tv8fcQ?autoplay=1&mute=1&loop=1&playlist=pdzR0Tv8fcQ&controls=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="overlay"></div>
      <div className="absolute-content">
        <h2>Feel the Thrill!</h2>
        <h1>
          Experience Belize with our <br />
          <span>Adventure Packages!</span>
        </h1>
        <p>
          Home to renowned snorkeling and diving, historic Maya sites, and
          biodiverse natural wonders, <br />
          discover Belize with our certified tours and activities.
        </p>

        <div className="homeMain">
          <div className="row two">
            {images.map((imgSrc, index) => (
              <a
                href="#"
                className="column"
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
              >
                <div className="absolute-content">
                  <h2>Price: {index === 0 ? "$75 USD" : "$50 USD"}</h2>
                  <h1>
                    {index === 0
                      ? "Snorkeling"
                      : index === 1
                      ? "Fishing"
                      : index === 2
                      ? "Diving Blue Hole"
                      : "Cave Tubing"}
                  </h1>
                </div>
              </a>
            ))}
          </div>

          {/* Expanded Image Section */}
          <div className="expanded-container">
            {images.map((imgSrc, index) => (
              <div
                key={index}
                className={`background-image ${
                  index === hoveredIndex ? "active zoom-animation" : ""
                }`}
                style={{
                  backgroundImage: `url(${imgSrc})`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;
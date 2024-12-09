import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

function Rooms() {
  return (
    <div className='rooms-main'>
      <div className='head'>
        <p>Accomodations</p>
        <h1>Rooms / Suites</h1>
      </div>
      <div className='row'>
        <div className='col-sm-4'>
            <a href="">
              <StaticImage src="../../../images/room-1.png" quality={60} formats={["auto", "webp", "avif"]} />
              <div className='room-cont'>
                <h2>The Ocean Front Suite</h2>
                <ul class="room-specs">
                    <li>120M2</li>
                    <li>2 Beds</li>
                    <li>Ocean View</li>
                </ul>
                <p id="desc">
                Beautiful oceanfront junior suites with a balcony.
                Each sunlit suite is serenely outfitted with a relaxing king bed, private bath, private balcony and ocean view. The Suites also come equipped with a fully furnished kitchenette and a table and chairs to give you a little dining flexibility.
                </p>
                <span>
                    Room Details
                    <i class="fa fa-long-arrow-right"></i>
                </span>
              </div>
            </a>
        </div>
        <div className='col-sm-4'>
            <a href="">
              <StaticImage src="../../../images/room-2.png" quality={60} formats={["auto", "webp", "avif"]} />
              <div className='room-cont'>
                <h2>The Ocean View Pool Deck</h2>
                <ul class="room-specs">
                    <li>120M2</li>
                    <li>2 Beds</li>
                    <li>Ocean View</li>
                </ul>
                <p id="desc">
                Beautiful oceanfront junior suites with a balcony.
                Each sunlit suite is serenely outfitted with a relaxing king bed, private bath, private balcony and ocean view. The Suites also come equipped with a fully furnished kitchenette and a table and chairs to give you a little dining flexibility. 
                </p>
                <span>
                    Room Details
                    <i class="fa fa-long-arrow-right"></i>
                </span>
              </div>
            </a>
        </div>
        <div className='col-sm-4'>
            <a href="">
              <StaticImage src="../../../images/room-3.png" quality={60} formats={["auto", "webp", "avif"]} />
              <div className='room-cont'>
                <h2>The Ocean View Balcony</h2>
                <ul class="room-specs">
                    <li>120M2</li>
                    <li>2 Beds</li>
                    <li>Ocean View</li>
                </ul>
                <p id="desc">
                Beautiful oceanfront junior suites with a balcony.
                Each sunlit suite is serenely outfitted with a relaxing king bed, private bath, private balcony and ocean view. The Suites also come equipped with a fully furnished kitchenette and a table and chairs to give you a little dining flexibility. 
                </p>
                <span>
                    Room Details
                    <i class="fa fa-long-arrow-right"></i>
                </span>
              </div>
            </a>
        </div>
        <a class="all-button" href="">
            View All Rooms
        </a>
      </div>
    </div>
  )
}

export default Rooms

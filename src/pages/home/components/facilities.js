import React from 'react'

function Facilities() {
  return (
    <div className='facilities-main'>
         <div className='cont'>
            <div className='title'>
             <h2>Facilities</h2>
             <h1>Resort Facilities</h1>
             </div>
             <div className='row'>
                <div className='col-sm-4'>
                    <a href="">
                        <div className='cont-icon'>
                        <i class="fa fa-wifi"></i>
                        </div>
                        <div className='cont-desc'>
                             <h2><span>01 / </span>Wi-Fi Connection</h2>
                             <p>At check-in each guest will receive a Wifi Code free of charge.</p>
                        </div>
                    </a>
                </div>
                <div className='col-sm-4'>
                    <a href="">
                        <div className='cont-icon'>
                        <i class="fa fa-glass"></i>
                        </div>
                        <div className='cont-desc'>
                             <h2><span>02 / </span>Welcome Drink</h2>
                             <p>Upon arrival at reception all guests 18 and older will be offered our complimentary signature welcome drink. Guests 12-17 will be offered a complimentary water or juice.</p>
                        </div>
                    </a>
                </div>
                <div className='col-sm-4'>
                    <a href="">
                        <div className='cont-icon'>
                        <i class="fa fa-futbol-o"></i>
                        </div>
                        <div className='cont-desc'>
                             <h2><span>03 / </span>Swimming Pool</h2>
                             <p>Our newly renovated swimming pool is perfect for a dip on our hot San Pedro days!</p>
                        </div>
                    </a>
                </div>
             </div>
             <hr />
             <div className='row'>
                <div className='col-sm-4'>
                    <a href="">
                        <div className='cont-icon'>
                        <i class="fa fa-sun-o"></i>
                        </div>
                        <div className='cont-desc'>
                             <h2><span>04 / </span>Beachfront</h2>
                             <p>Mata Rocks is a beachfront property where guests will have private loungers and water access to use the kayaks and paddle boards.</p>
                        </div>
                    </a>
                </div>
                <div className='col-sm-4'>
                    <a href="">
                        <div className='cont-icon'>
                        <i class="fa fa-bookmark"></i> 
                        </div>
                        <div className='cont-desc'>
                             <h2><span>05 / </span>Laundry</h2>
                             <p>For an additional cost, guests can have their clothes laundered.</p>
                        </div>
                    </a>
                </div>
                <div className='col-sm-4'>
                    <a href="">
                        <div className='cont-icon'>
                        <i class="fa fa-umbrella"></i>  
                        </div>
                        <div className='cont-desc'>
                             <h2><span>06 / </span>Beach Loungers</h2>
                             <p>Beach loungers are available for guests use.</p>
                        </div>
                    </a>
                </div>
             </div>
         </div>
    </div>
  )
}

export default Facilities
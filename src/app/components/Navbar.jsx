import React from 'react'

const Navbar = () => {
    return (
        <>
            <header class="header-main">
                <div class="top-header container-fluid no-padding">
                    <div class="container">
                        <ul class="col-md-4 social no-bottom-margin pull-left">
                            <li><a href="#"><img src="/images/icon/fb-ic.png" alt="Facebook" /></a></li>	                            <li><a href="#"><img src="/images/icon/g+-ic.png" alt="Google pulse" /></a></li>
                            <li><a href="#"><img src="/images/icon/tumbler-ic.png" alt="Tumbler" /></a></li>
                            <li><a href="#"><img src="/images/icon/dribbble-ic.png" alt="dribbler" /></a></li>
                            <li><a href="#"><img src="/images/icon/tw-ic.png" alt="Twitter" /></a></li>
                        </ul>
                        <div class="col-md-8 pull-right top-menu">
                            <ul class="no-bottom-margin">
                                <li><a href="#">Enquiry</a></li>
                                <li><a href="#">Cancellation</a></li>
                                <li><a href="#">Booking Status</a></li>
                                <li><a href="#">Tariffs</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="middle-header container-fluid no-padding">
                    <div class="container">
                        <div class="col-md-4 logo-block pull-left">
                            <a href="#">
                                <img src="/images/logo.png" alt="Logo" />
                                <b>National Cab</b><span>Always there for you</span>
                            </a>
                        </div>
                        <div class="col-md-6 pull-right">
                            <div class="location">
                                <img src="/images/icon/location-ic.png" alt="Location" />
                                <p>A12 - Design Street,<span> Omaha, United States</span></p>
                            </div>
                            <div class="phone">
                                <img src="/images/icon/phone-ic.png" alt="phone" />
                                <p>Call Us Any Time:<span> +(01) 123 456 789</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <nav class="navbar ow-navigation">
                    <div class="container">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <div class="navbar-brand logo-block">
                                <a href="#">
                                    <img src="/images/logo.png" alt="Logo" />
                                    <b>National Cab</b><span>Always there for you</span>
                                </a>
                            </div>
                        </div>
                        <div id="navbar" class="navbar-collapse collapse">
                            <ul class="nav navbar-nav">
                                <li class="active dropdown">
                                    <a href="/"> Home</a>

                                </li>
                                <li><a href="/about-us">About Us</a></li>
                                <li><a href="/services">Our Services</a></li>
                                <li><a href="/blog">Blog</a></li>

                                <li><a href="/faq">Faq</a></li>
                                <li><a href="/online-booking">Pages</a></li>



                                <li><a href="/contact">Contact US</a></li>
                            </ul>
                        </div>
                        <a href="/online-booking">Book For A Ride</a>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar

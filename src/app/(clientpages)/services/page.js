import BookingForm from '@/app/components/BookingForm/BookingForm'
import React from 'react'

const page = () => {
    return (
        <>
            {/* banner */}
            <div id="page-banner" class="page-banner faq-banner container-fluid no-padding">
                <div class="page-heading">
                    <h3>Service</h3>
                    <ol class="breadcrumb">
                        <li><a href="/">Home</a></li>
                        <li class="active"><a href="services">Our Services</a></li>
                    </ol>
                </div>
            </div>

            {/* we do more */}
            <div class="container-fluid no-padding what-we-do">
                <div class="section-padding"></div>
                <div class="image-box">
                    <img src="/images/services/service-1.png" alt="service" />
                </div>

                <div class="container">
                    <div class="col-md-8 pull-right">
                        <div class="col-md-6 col-sm-6">
                            <div class="about">
                                <h3>Get To Know</h3>
                                <h2>Who We Are</h2>
                                <p>The mate was a mighty sailin man the Skipper brave and sure. Five passengers set sail.</p>
                                <p>Day for a three hour tour a three hour tour. These Happy Days are yours and mine Happy Days. Doin' it our way. Nothin's gonna turn us back now. Straight ahead and on the track. now. We're gonna </p>
                                <a href="#" title="Know More">Know More</a>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 no-right-padding">
                            <div class="more-than-you">
                                <h3>We Do More Than You Wish</h3>
                                <img src="/images/icon/title-separator.png" alt="title-separator" />
                                <ul>
                                    <li>Flying away on a wing and a prayer who could it be</li>
                                    <li>Sclemeel schlemazel hasenfeffer incorporated</li>
                                    <li>you sure to get a smile from seven stranded Isels</li>
                                    <li>lets make this as the most of this beautiful day</li>
                                    <li>These Happy Days are yours and mine Happy Days</li>
                                </ul>
                                <p>This is what we call the Muppet Show. Makin their way the only way they know how. That's just a little bit more than the law will allow Just two good.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section-padding"></div>
            </div>

            <BookingForm />

            {/* vehicles fleet */}
            <div id="vehicle-fleet" class="container-fluid no-padding vehicle-fleet">
                <div class="section-padding"></div>
                <div class="container">
                    <div class="section-header">
                        <h3>Vehicles In Our Fleet</h3>
                    </div>
                    <div class="vehicle-tabs">
                        <ul class="nav nav-tabs" role="tablist">
                            <li role="presentation" class="active"><a href="#luxury_cars" role="tab" data-toggle="tab">Luxury Cars</a></li>
                            <li role="presentation"><a href="#regular_rider" role="tab" data-toggle="tab">Regular Rider</a></li>
                            <li role="presentation"><a href="#airport_shuttle" role="tab" data-toggle="tab">Airport Shuttle</a></li>
                        </ul>
                        <div class="tab-content">
                            <div role="tabpanel" class="tab-pane fade in active" id="luxury_cars">
                                <div class="col-md-7 vehicle-slider no-padding">
                                    <div class="row">
                                        <div class="main-slider">
                                            <div id="slider-1" class="flexslider">
                                                <ul class="slides">
                                                    <li><img src="brentford\public\images\vehicles-fleet\item-1.jpg" alt="item-1" /></li>
                                                    <li><img src="/images/vehicles-fleet/item-2.jpg" alt="item-2" /></li>
                                                    <li><img src="/images/vehicles-fleet/item-3.jpg" alt="item-3" /></li>
                                                    <li><img src="/images/vehicles-fleet/item-1.jpg" alt="item-1" /></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="thumbnail-slider">
                                            <div id="carousel-1" class="flexslider">
                                                <ul class="slides">
                                                    <li><img src="/images/vehicles-fleet/thumb-item-1.jpg" alt="item-1" /></li>
                                                    <li><img src="/images/vehicles-fleet/thumb-item-1.jpg" alt="item-1" /></li>
                                                    <li><img src="/images/vehicles-fleet/thumb-item-1.jpg" alt="item-1" /></li>
                                                    <li><img src="/images/vehicles-fleet/thumb-item-1.jpg" alt="item-1" /></li>
                                                    <li><img src="/images/vehicles-fleet/thumb-item-1.jpg" alt="item-1" /></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-5 vehicle-detail">
                                    <ul class="nav nav-tabs" role="tablist">
                                        <li role="presentation" class="active"><a href="#cab_details-1" role="tab" data-toggle="tab">Cab Details</a></li>
                                        <li role="presentation"><a href="#customer_feedback-1" role="tab" data-toggle="tab"> Customer Feedback</a></li>
                                    </ul>
                                    <div class="tab-content">
                                        <div role="tabpanel" class="tab-pane active" id="cab_details-1">
                                            <div class="tabe-content">
                                                <h3>Passenger Capacity <span>4 + 1 Driver</span></h3>
                                                <h3>Regular Fare <span>$6 / Km (Day Travel)</span></h3>
                                                <h3>Maximum Speed <span>60Km / hr - City Limit</span></h3>
                                                <h3>Availability <span>Offering Anytime</span></h3>
                                                <h3>Contract Details <span><a href="#">Contact Now</a></span></h3>
                                            </div>
                                        </div>
                                        <div role="tabpanel" class="tab-pane" id="customer_feedback-1">
                                            <div class="tabe-content">
                                                <h3>Passenger Capacity <span>4 + 1 Driver</span></h3>
                                                <h3>Regular Fare <span>$6 / Km (Day Travel)</span></h3>
                                                <h3>Maximum Speed <span>60Km / hr - City Limit</span></h3>
                                                <h3>Availability <span>Offering Anytime</span></h3>
                                                <h3>Contract Details <span><a href="#">Contact Now</a></span></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane fade" id="regular_rider">
                                <div class="col-md-7 vehicle-slider no-padding">
                                    <div class="row">
                                        <div class="main-slider">
                                            <div id="slider-2" class="flexslider">
                                                <ul class="slides">
                                                    <li><img src="/images/vehicles-fleet/item-1.jpg" alt="item-1" /></li>
                                                    <li><img src="/images/vehicles-fleet/item-2.jpg" alt="item-2" /></li>
                                                    <li><img src="/images/vehicles-fleet/item-3.jpg" alt="item-3" /></li>
                                                    <li><img src="/images/vehicles-fleet/item-1.jpg" alt="item-1" /></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="thumbnail-slider">
                                            <div id="carousel-2" class="flexslider">
                                                <ul class="slides">
                                                    <li><img src="/images/vehicles-fleet/thumb-item-1.jpg" alt="item-1" /></li>
                                                    <li><img src="/images/vehicles-fleet/thumb-item-1.jpg" alt="item-1" /></li>
                                                    <li><img src="/images/vehicles-fleet/thumb-item-1.jpg" alt="item-1" /></li>
                                                    <li><img src="/images/vehicles-fleet/thumb-item-1.jpg" alt="item-1" /></li>
                                                    <li><img src="/images/vehicles-fleet/thumb-item-1.jpg" alt="item-1" /></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-5 vehicle-detail">
                                    <ul class="nav nav-tabs" role="tablist">
                                        <li role="presentation" class="active"><a href="#cab_details-2" role="tab" data-toggle="tab">Cab Details</a></li>
                                        <li role="presentation"><a href="#customer_feedback-2" role="tab" data-toggle="tab"> Customer Feedback</a></li>
                                    </ul>
                                    <div class="tab-content">
                                        <div role="tabpanel" class="tab-pane active" id="cab_details-2">
                                            <div class="tabe-content">
                                                <h3>Passenger Capacity <span>4 + 1 Driver</span></h3>
                                                <h3>Regular Fare <span>$6 / Km (Day Travel)</span></h3>
                                                <h3>Maximum Speed <span>60Km / hr - City Limit</span></h3>
                                                <h3>Availability <span>Offering Anytime</span></h3>
                                                <h3>Contract Details <span><a href="#">Contact Now</a></span></h3>
                                            </div>
                                        </div>
                                        <div role="tabpanel" class="tab-pane" id="customer_feedback-2">
                                            <div class="tabe-content">
                                                <h3>Passenger Capacity <span>4 + 1 Driver</span></h3>
                                                <h3>Regular Fare <span>$6 / Km (Day Travel)</span></h3>
                                                <h3>Maximum Speed <span>60Km / hr - City Limit</span></h3>
                                                <h3>Availability <span>Offering Anytime</span></h3>
                                                <h3>Contract Details <span><a href="#">Contact Now</a></span></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane fade" id="airport_shuttle">
                                <div class="col-md-7 vehicle-slider no-padding">
                                    <div class="row">
                                        <div class="main-slider">
                                            <div id="slider-3" class="flexslider">
                                                <ul class="slides">
                                                    <li><img src="/images/vehicles-fleet/item-1.jpg" alt="item-1" /></li>
                                                    <li><img src="/images/vehicles-fleet/item-2.jpg" alt="item-2" /></li>
                                                    <li><img src="/images/vehicles-fleet/item-3.jpg" alt="item-3" /></li>
                                                    <li><img src="/images/vehicles-fleet/item-1.jpg" alt="item-1" /></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="thumbnail-slider">
                                            <div id="carousel-3" class="flexslider">
                                                <ul class="slides">
                                                    <li><img src="/images/vehicles-fleet/thumb-item-1.jpg" alt="item-1" /></li>
                                                    <li><img src="/images/vehicles-fleet/thumb-item-1.jpg" alt="item-1" /></li>
                                                    <li><img src="/images/vehicles-fleet/thumb-item-1.jpg" alt="item-1" /></li>
                                                    <li><img src="/images/vehicles-fleet/thumb-item-1.jpg" alt="item-1" /></li>
                                                    <li><img src="/images/vehicles-fleet/thumb-item-1.jpg" alt="item-1" /></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-5 vehicle-detail">

                                    <ul class="nav nav-tabs" role="tablist">
                                        <li role="presentation" class="active"><a href="#cab_details-3" role="tab" data-toggle="tab">Cab Details</a></li>
                                        <li role="presentation"><a href="#customer_feedback-3" role="tab" data-toggle="tab"> Customer Feedback</a></li>
                                    </ul>

                                    <div class="tab-content">
                                        <div role="tabpanel" class="tab-pane active" id="cab_details-3">
                                            <div class="tabe-content">
                                                <h3>Passenger Capacity <span>4 + 1 Driver</span></h3>
                                                <h3>Regular Fare <span>$6 / Km (Day Travel)</span></h3>
                                                <h3>Maximum Speed <span>60Km / hr - City Limit</span></h3>
                                                <h3>Availability <span>Offering Anytime</span></h3>
                                                <h3>Contract Details <span><a href="#">Contact Now</a></span></h3>
                                            </div>
                                        </div>
                                        <div role="tabpanel" class="tab-pane" id="customer_feedback-3">
                                            <div class="tabe-content">
                                                <h3>Passenger Capacity <span>4 + 1 Driver</span></h3>
                                                <h3>Regular Fare <span>$6 / Km (Day Travel)</span></h3>
                                                <h3>Maximum Speed <span>60Km / hr - City Limit</span></h3>
                                                <h3>Availability <span>Offering Anytime</span></h3>
                                                <h3>Contract Details <span><a href="#">Contact Now</a></span></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section-padding"></div>
            </div>



            <div id="counter" class="container-fluid no-padding counter-style2">
                <div class="section-padding"></div>
                <div class="container">

                    <div class="counter">
                        <div class="col-md-3 col-sm-3 col-xs-12">
                            <div class="statistics-box">
                                <h3><span>Successful Drives</span></h3>
                                <i class="statistics-icon"><img src="images/icon/car.png" alt="statistics-icon" /></i>
                                <span id="statistics_count-1" data-statistics_percent="1200"></span>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-3 col-xs-12">
                            <div class="statistics-box">
                                <h3><span>Happy Customers</span></h3>
                                <i class="statistics-icon"><img src="images/icon/thumb-up.png" alt="statistics-icon" /></i>
                                <span id="statistics_count-2" data-statistics_percent="2000"></span>

                            </div>
                        </div>
                        <div class="col-md-3 col-sm-3 col-xs-12">
                            <div class="statistics-box">
                                <h3><span>Talented Drivers</span></h3>
                                <i class="statistics-icon"><img src="images/icon/driver.png" alt="statistics-icon" /></i>
                                <span id="statistics_count-3" data-statistics_percent="350"></span>

                            </div>
                        </div>
                        <div class="col-md-3 col-sm-3 col-xs-12">
                            <div class="statistics-box">
                                <h3><span>Cities Covered</span></h3>
                                <i class="statistics-icon"><img src="images/icon/milestone.png" alt="statistics-icon" /></i>
                                <span id="statistics_count-4" data-statistics_percent="148"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section-padding"></div>
            </div>

            <div class="container-fluid no-padding services">
                <div class="section-padding"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-sm-6">
                            <div class="service-box">
                                <h3>Enjoy The</h3>
                                <h2>Services We Offer</h2>
                                <p>The mate was a mighty sailin man the Skipper brave and sure. Five passengers set sail. Day for a three hour tour a three hour tour.</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div id="sevice-slider" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner" role="listbox">
                                    <div class="item active">
                                        <img src="/images/services/service-1.jpg" alt="service-1" />
                                    </div>
                                    <div class="item">
                                        <img src="/images/services/service-2.jpg" alt="service-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="service-box content">
                                <div class="section-box-title">
                                    <img src="/images/services/icon-1.png" alt="home-pickup" />
                                    <span>Travel Around Anywhere</span>
                                </div>
                                <p>They are all together oky the addams family Would not you like to get away Sometimes you wanted to go where everybody knows your</p>
                                <a href="#" title="Read More">Read More ...</a>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="service-box content">
                                <div class="section-box-title">
                                    <img src="images/icon/anytime.png" alt="anytime" />
                                    <span>Anytime Customer Support</span>
                                </div>
                                <p>I have always wanted to have a neighbor just like you Ive always wanted to live in a with you Boy the way Glen Miller played. Songs that</p>
                                <a href="#" title="Read More">Read More ...</a>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="service-box video">
                                <img src="images/services/service-2.jpg" alt="service-2" />
                                <a href="#" title="Play"><img src="images/icon/play.png" alt="Play" /><p>Play Video</p></a>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="service-box book-now">
                                <p>Got kind of tired packin' and unpacking town to town and up and down the dial. Wouldn't you like to get away? Sometimes you want to go where everybody</p>
                                <a href="#" title="Book Now">Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section-padding"></div>
            </div>

            <div id="partner" class="container-fluid no-padding partner">
                <div class="section-padding"></div>
                <div class="container">
                    <div class="section-header">
                        <h3>Our Clients And Partners</h3>
                    </div>
                    <div class="partner-carousel">
                        <div class="col-md-2">
                            <img src="/images/partner/partner-1.png" alt="partner-1" />
                        </div>
                        <div class="col-md-2">
                            <img src="/images/partner/partner-2.png" alt="partner-2" />
                        </div>
                        <div class="col-md-2">
                            <img src="/images/partner/partner-3.png" alt="partner-3" />
                        </div>
                        <div class="col-md-2">
                            <img src="/images/partner/partner-4.png" alt="partner-4" />
                        </div>
                        <div class="col-md-2">
                            <img src="/images/partner/partner-5.png" alt="partner-5" />
                        </div>
                        <div class="col-md-2">
                            <img src="/images/partner/partner-6.png" alt="partner-6" />
                        </div>
                    </div>
                </div>
                <div class="section-padding"></div>
            </div>
        </>
    )
}

export default page

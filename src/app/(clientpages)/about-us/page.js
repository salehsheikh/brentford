import MobileAppSection from '@/app/components/Home/MobileAppSection'
import TestimonialSection from '@/app/components/Home/Testimonialsection'
import React from 'react'

const page = () => {
    return (
        <>
            {/* Banner Section */}
            <div id="page-banner" class="page-banner faq-banner container-fluid no-padding">
                <div class="page-heading">
                    <h3>About Us</h3>
                    <ol class="breadcrumb">
                        <li><a href="/">Home</a></li>
                        <li class="active"><a href="/about-us">About Us</a></li>
                    </ol>
                </div>
            </div>
            {/* choose us */}
            <div class="container-fluid no-padding choose-us">
                <div class="section-padding"></div>
                <div class="container">
                    <div class="section-header">
                        <h3>Here is Who We Are</h3>
                    </div>
                    <div class="choose-carousel">
                        <div class="col-md-4">
                            <div class="choose-us-box">
                                <div class="choose-img-box"><img src="/images/choose-us/choose-us-4.jpg" alt="choose-us-4" />
                                </div>
                                <div class="choose-us-content-box">
                                    <h3>Trust And Safety</h3>
                                    <p>The first mate and his Skipper too will do their very best to make the others in
                                        their tropic island nest the year.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="choose-us-box">
                                <div class="choose-img-box"><img src="/images/choose-us/choose-us-1.jpg" alt="choose-us-1" />
                                </div>
                                <div class="choose-us-content-box">
                                    <h3>Feel The Comfort</h3>
                                    <p>The first mate and his Skipper too will do their very best to make the others in
                                        their tropic island nest the year.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="choose-us-box">
                                <div class="choose-img-box"><img src="/images/choose-us/choose-us-5.jpg" alt="choose-us-5" />
                                </div>
                                <div class="choose-us-content-box">
                                    <h3>Experienced Drivers</h3>
                                    <p>The first mate and his Skipper too will do their very best to make the others in
                                        their tropic island nest the year.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section-padding"></div>
            </div>
            {/* Member driver */}
            <div class="container-fluid no-padding members members-style2">
                <div class="section-padding"></div>
                <div class="section-header">
                    <h3>Drivers On Your Service</h3>
                </div>
                <div class="member-carousel">
                    <div id="member">
                        <div class="member-item col-md-3">
                            <img src="images/members/member-2.1.jpg" alt="member-1" />
                            <div class="driver-info">
                                <div class="driver">
                                    <h3>William Turner</h3>
                                    <ul>
                                        <li><a href="#" title="facebook"><img src="/images/members/facebook.png"
                                            alt="facebook" /></a></li>
                                        <li><a href="#" title="google-plus"><img src="/images/members/google-plus.png"
                                            alt="google-plus" /></a></li>
                                        <li><a href="#" title="twitter"><img src="/images/members/twitter.png"
                                            alt="twitter" /></a></li>
                                        <li><a href="#" title="tumbler"><img src="/images/members/tumbler.png"
                                            alt="tumbler" /></a></li>
                                    </ul>
                                </div>
                                <p>Limousine Driver<span>Skill Level: Senior</span></p>
                            </div>
                        </div>
                        <div class="member-item col-md-3">
                            <img src="/images/members/member-2.2.jpg" alt="member-2" />
                            <div class="driver-info">
                                <div class="driver">
                                    <h3>Johny Roges</h3>
                                    <ul>
                                        <li><a href="#" title="facebook"><img src="/images/members/facebook.png"
                                            alt="facebook" /></a></li>
                                        <li><a href="#" title="google-plus"><img src="/images/members/google-plus.png"
                                            alt="google-plus" /></a></li>
                                        <li><a href="#" title="twitter"><img src="/images/members/twitter.png"
                                            alt="twitter" /></a></li>
                                        <li><a href="#" title="tumbler"><img src="/images/members/tumbler.png"
                                            alt="tumbler" /></a></li>
                                    </ul>
                                </div>
                                <p>Sedan Driver<span>Skill Level: Senior</span></p>
                            </div>
                        </div>
                        <div class="member-item col-md-3">
                            <img src="images/members/member-2.3.jpg" alt="member-3" />
                            <div class="driver-info">
                                <div class="driver">
                                    <h3>Altrin Mosea</h3>
                                    <ul>
                                        <li><a href="#" title="facebook"><img src="/images/members/facebook.png"
                                            alt="facebook" /></a></li>
                                        <li><a href="#" title="google-plus"><img src="/images/members/google-plus.png"
                                            alt="google-plus" /></a></li>
                                        <li><a href="#" title="twitter"><img src="/images/members/twitter.png"
                                            alt="twitter" /></a></li>
                                        <li><a href="#" title="tumbler"><img src="/images/members/tumbler.png"
                                            alt="tumbler" /></a></li>
                                    </ul>
                                </div>
                                <p>SUV Driver<span>Skill Level: Expert</span></p>
                            </div>
                        </div>
                        <div class="member-item col-md-3">
                            <img src="/images/members/member-2.4.jpg" alt="member-4" />
                            <div class="driver-info">
                                <div class="driver">
                                    <h3>Luther King</h3>
                                    <ul>
                                        <li><a href="#" title="facebook"><img src="/images/members/facebook.png"
                                            alt="facebook" /></a></li>
                                        <li><a href="#" title="google-plus"><img src="/images/members/google-plus.png"
                                            alt="google-plus" /></a></li>
                                        <li><a href="#" title="twitter"><img src="/images/members/twitter.png"
                                            alt="twitter" /></a></li>
                                        <li><a href="#" title="tumbler"><img src="/images/members/tumbler.png"
                                            alt="tumbler" /></a></li>
                                    </ul>
                                </div>
                                <p>Sedan Driver<span>Skill Level: Starter</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="we-are-hire pull-right">
                    <a href="#"><img src="/images/members/member-2.5.jpg" alt="member-5" /></a>
                    <div class="driver-info">
                        <a href="#"><span>We Are Hiring</span></a>
                    </div>
                </div>
                <div class="section-padding"></div>
            </div>


            {/* what we do  */}
            <div class="container-fluid no-padding what-we-do what-we-do2">
                <div class="section-padding"></div>
                <div class="container">
                    <div class="col-md-12">
                        <div class="section-header">
                            <h3>What We Do For You</h3>
                        </div>
                        <div class="col-md-4">
                            <div class="what-we-do-box">
                                <span>genuine Approach</span>
                                <img src="/images/icon/genuine-approach.png" alt="Genuine Approach" />
                                <p>Come and dance on our floor. Take a step that is new. We've a loveable space that needs
                                    your face threes company too.</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="what-we-do-box">
                                <span>Home Pickup</span>
                                <img src="/images/icon/home-pickup.png" alt="home-pickup" />
                                <p>Come and dance on our floor. Take a step that is new. We've a loveable space that needs
                                    your face threes company too.</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="what-we-do-box">
                                <span>Airport Transportation</span>
                                <img src="/images/icon/airport.png" alt="airport" />
                                <p>Come and dance on our floor. Take a step that is new. We've a loveable space that needs
                                    your face threes company too.</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="what-we-do-box">
                                <span>One way Rental</span>
                                <img src="/images/icon/rental.png" alt="Rental" />
                                <p>Got a dream and we just know now we are gonna make us dream come and we know flipper
                                    lives in a world </p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="what-we-do-box">
                                <span>Company Contract</span>
                                <img src="/images/icon/company-contract.png" alt="company-contract" />
                                <p>Got a dream and we just know now we are gonna make us dream come and we know flipper
                                    lives in a world </p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="what-we-do-box">
                                <p>No one you see is smarter than he. The mate was a mighty sailin man Skip brave and sure
                                    Five</p>
                                <div class="more-service">
                                    <a href="#">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section-padding"></div>
            </div>
            <TestimonialSection />
            <MobileAppSection />
        </>
    )
}

export default page

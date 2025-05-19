import React from 'react'

const page = () => {
    return (
        <>
            <div id="page-banner" class="page-banner blog-banner container-fluid no-padding">
                <div class="page-heading">
                    <h3>Online Taxi Booking</h3>
                    <ol class="breadcrumb">
                        <li><a href="/">Home</a></li>
                        <li><a href="/onlinebooking">Pages</a></li>
                        <li class="active"><a href="/onine-booking">Booking</a></li>
                    </ol>
                </div>
            </div>

            <div class="container-fluid no-padding page-content book-taxi-online-form">
                <div class="section-padding"></div>
                <div class="container">
                    <div class="col-md-9 blog-area">
                        <div class="section-header">
                            <h3>Book Your Taxi Online</h3>
                        </div>
                        <form class="online-booking-form row">
                            <h4>Personal Details</h4>
                            <div class="form-group col-md-6 col-sm-12 col-xs-12">
                                <label>Name</label>
                                <input type="text" class="form-control" id="name" placeholder="Enter Your Name Here" />
                            </div>
                            <div class="form-group col-md-6 col-sm-12 col-xs-12">
                                <label>Phone Number</label>
                                <input type="text" class="form-control" id="phone" placeholder="+(01) xxx - xxx - xx" />
                            </div>
                            <div class="form-group col-md-6 col-sm-12 col-xs-12">
                                <label>E-Mail</label>
                                <input type="email" class="form-control" id="email" placeholder="Your E-Mail" />
                            </div>
                            <div class="form-group col-md-6 col-sm-12 col-xs-12">
                                <label>State</label>
                                <select class="form-control">
                                    <option>Select Your State</option>
                                    <option>USA</option>
                                    <option>Florida</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6 col-sm-12 col-xs-12">
                                <div class="input-group col-md-12 col-sm-12">
                                    <label>City</label>
                                    <select class="form-control">
                                        <option>Select Your City</option>
                                        <option>America</option>
                                        <option>New York</option>
                                    </select>
                                </div>
                                <div class="input-group col-md-12 col-sm-12 col-xs-12">
                                    <label>Zip Code</label>
                                    <input type="text" class="form-control" id="zip_code" placeholder="Your Postal Code" />
                                </div>
                            </div>
                            <div class="form-group col-md-6 col-sm-12 col-xs-12">
                                <label>Address</label>
                                <textarea name="message" class="form-control" rows="5" placeholder="Your Address"></textarea>
                            </div>
                            <h4>Booking Datails</h4>
                            <div class="form-group col-md-6 col-sm-12 col-xs-12">
                                <label>Form</label>
                                <input type="text" class="form-control" id="form" placeholder="place, City" />
                            </div>
                            <div class="form-group col-md-6 col-sm-12 col-xs-12">
                                <label>To</label>
                                <input type="text" class="form-control" id="to" placeholder="place, City" />
                            </div>
                            <div class="form-group col-md-6 col-sm-12 col-xs-12">
                                <label>Taxi Type</label>
                                <select class="form-control">
                                    <option>Select The Taxi Type</option>
                                    <option>SUV</option>
                                    <option>Sedan</option>
                                    <option>Limousine</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6 col-sm-12 col-xs-12">
                                <label>Number Of Passengers</label>
                                <select class="form-control">
                                    <option>Enter The Number of Passengers</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6 col-sm-12 col-xs-12">
                                <label>Pickup Date</label>
                                <div id="datepicker" class="date">
                                    <input class="form-control" data-format="yyyy-MM-dd" type="text" placeholder="DD/MM/YYYY" />
                                    <span class="add-on">
                                        <i data-time-icon="icon-time" data-date-icon="icon-calendar"><img src="images/icon/date-picker.png" alt="datepicker" /></i>
                                    </span>
                                </div>
                            </div>
                            <div class="form-group col-md-6 col-sm-12 col-xs-12">
                                <label>Pickup Time</label>
                                <div id="timepicker" class="input-group time-picker row">
                                    <div class="col-md-4 col-sm-4 col-xs-4"><input class="form-control" min="1" max="12" type="number" /></div>
                                    <div class="col-md-4 col-sm-4 col-xs-4"><input class="form-control" min="1" max="60" type="number" /></div>
                                    <div class="col-md-4 col-sm-4 col-xs-4"><select class="form-control"><option>AM</option><option>PM</option></select></div>
                                </div>
                            </div>
                            <div class="form-group col-md-6 col-sm-12 col-xs-12">
                                <label>Pickup Address</label>
                                <textarea name="message" class="form-control" rows="5" placeholder="Start Place Address"></textarea>
                            </div>
                            <div class="form-group col-md-6 col-sm-12 col-xs-12">
                                <label>Drop Address</label>
                                <textarea name="message" class="form-control" rows="5" placeholder="End Place Address"></textarea>
                            </div>
                            <div class="form-group col-md-6 col-sm-12 col-xs-12">
                                <label>Payment Method</label>
                                <select class="form-control">
                                    <option>Select Your payment Method</option>
                                    <option>Debit</option>
                                    <option>Credit</option>
                                    <option>Online</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6 col-sm-12 col-xs-12">
                                <button type="submit" class="btn">Book Your Trip</button>
                            </div>
                            <div class="form-group col-md-12 col-sm-12 col-xs-12">
                                <input type="checkbox" /><span>I understand and agree with the Terms of Service and Cancellation / Refund policy</span>
                            </div>
                        </form>
                    </div>

                    <div class="col-md-3 widget-area">
                        <aside class="widget search-widget">
                            <div class="form-group">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="SEARCH" />
                                    <span class="input-group-btn">
                                        <button class="btn btn-default" type="button"><i class="fa fa-search"></i></button>
                                    </span>
                                </div>
                            </div>
                        </aside>
                        <aside class="widget categories-widget">
                            <div class="widget-title">
                                <h3>Categories</h3>
                            </div>
                            <ul class="categories-type">
                                <li>Taxi<span>09</span></li>
                                <li>Party Contract<span>52</span></li>
                                <li>Interstate Tour<span>36</span></li>
                                <li>Reservation<span>78</span></li>
                                <li>Cab<span>66</span></li>
                                <li>Luxury Car<span>15</span></li>
                            </ul>
                        </aside>
                        <aside class="widget recent-post">
                            <div class="widget-title">
                                <h3>Recent Post</h3>
                            </div>
                            <div class="recent-post-box">
                                <div class="recent-title col-md-8 col-sm-10 col-xs-8 no-padding">
                                    <a href="#">poor mountaineer barely kept his family</a>
                                    <p>July 07, 2015</p>
                                </div>
                                <div class="recent-img col-md-4 col-sm-2 col-xs-4 no-padding">
                                    <a href="#"><img src="images/widget/recent/recent-1.jpg" alt="recent-1" /></a>
                                </div>
                            </div>
                            <div class="recent-post-box">
                                <div class="recent-title col-md-8 col-sm-10 col-xs-8 no-padding">
                                    <a href="#">card attached would say thank you for being</a>
                                    <p>July 07, 2015</p>
                                </div>
                                <div class="recent-img col-md-4 col-sm-2 col-xs-4 no-padding">
                                    <a href="#"><img src="images/widget/recent/recent-2.jpg" alt="recent-2" /></a>
                                </div>
                            </div>
                            <div class="recent-post-box">
                                <div class="recent-title col-md-8 col-sm-10 col-xs-8 no-padding">
                                    <a href="#">tell me how to get how to get to Sesame Street</a>
                                    <p>July 07, 2015</p>
                                </div>
                                <div class="recent-img col-md-4 col-sm-2 col-xs-4 no-padding">
                                    <a href="#"><img src="images/widget/recent/recent-3.jpg" alt="recent-3" /></a>
                                </div>
                            </div>
                        </aside>
                        <aside class="widget widget-tags">
                            <div class="widget-title">
                                <h3>popular tags</h3>
                            </div>
                            <div class="tags-content">
                                <a href="#" title="Amazing">Amazing</a>
                                <a href="#" title="Envato">Envato</a>
                                <a href="#" title="Themes">Themes</a>
                                <a href="#" title="Clean">Clean</a>
                                <a href="#" title="Responsiveness">Responsiveness</a>
                                <a href="#" title="SEO">SEO</a>
                                <a href="#" title="Mobile">Mobile</a>
                                <a href="#" title="IOS">IOS</a>
                                <a href="#" title="Flat">Flat</a>
                                <a href="#" title="Design">Design</a>
                            </div>
                        </aside>
                        <aside class="widget widget-flicker">
                            <div class="widget-title">
                                <h3>flickr stream</h3>
                            </div>
                            <div class="flickr-item">
                                <script type="text/javascript" src="http://www.flickr.com/badge_code_v2.gne?count=6&amp;display=random&amp;size=s&amp;layout=x&amp;source=user&amp;user=121438098@N03"></script>
                            </div>
                        </aside>
                        <aside class="widget widget-archives">
                            <div class="widget-title">
                                <h3>archives</h3>
                            </div>
                            <ul class="archives-contnet">
                                <li><a href="#"><span>11</span>March 2015</a></li>
                                <li><a href="#"><span>36</span>January 2015</a></li>
                                <li><a href="#"><span>18</span>December 2015</a></li>
                                <li><a href="#"><span>11</span>September 2015</a></li>
                                <li><a href="#"><span>20</span>August 2014</a></li>
                                <li><a href="#"><span>12</span>July 2014</a></li>
                            </ul>
                        </aside>
                    </div>
                </div>
                <div class="section-padding"></div>
            </div>
        </>
    )
}

export default page

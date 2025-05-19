import React from 'react'

const page = () => {
    return (
        <>
            <div id="page-banner" class="page-banner faq-banner container-fluid no-padding">
                <div class="page-heading">
                    <h3>Contact Us</h3>
                    <ol class="breadcrumb">
                        <li><a href="/">Home</a></li>
                        <li class="active"><a href="/contact">Contact</a></li>
                    </ol>
                </div>
            </div>


            <div class="map">
                <div class="map-canvas" id="map-canvas-contact" data-lat="28.083627" data-lng="-80.608109" data-string="<div class='content'><h3>Let Us Talk ToGether</h3><div><img src='/images/icon/map-lc.png' alt='map-lc' /> <p>A12 - Design Street,</p><p>Omaha, United States</p></div><div><img src='/images/icon/map-ph.png' alt='map-ph' /> <p>(01) 987 654 32 1</p><p>(01) 123 456 78 9</p></div><div><img src='/images/icon/map-mail.png' alt='map-mail' /> <a href='mailto:info@company.com'>info@company.com</a><a href='mailto:support@company.com'>Support@company.com</a></p></div></div>" data-zoom="12"></div>
            </div>
            <div class="contact-form container-fluid no-padding">
                <div class="section-padding"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="section-header">
                                <h3>business Enquiry</h3>
                            </div>
                            <p>That this group would somehow form a family that is the way we all became the brady bunch baby.</p>
                            <p>Got kind of tired packin' and unpackin' - town to town and up and down the dial. Movin' on up to the east side. We finally got a piece of the pie.</p>
                        </div>
                        <div class="col-md-8 col-sm-12">
                            <form class="row" id="contact-form" method="post">
                                <div class="col-md-6 col-sm-6 form-group">
                                    <input type="text" class="form-control" id="input_name" name="contact-name" placeholder="Your Name" required />
                                </div>
                                <div class="col-md-6 col-sm-6 form-group">
                                    <input type="email" class="form-control" id="input_email" name="contact-email" placeholder="E-mail Address" required />
                                </div>
                                <div class="col-md-6 col-sm-6 form-group">
                                    <input type="text" class="form-control" id="input_phone" name="contact-phone" placeholder="Phone" required />
                                </div>
                                <div class="col-md-6 col-sm-6 form-group">
                                    <input type="text" class="form-control" id="input_subject" name="contact-subject" placeholder="Subject" required />
                                </div>
                                <div class="col-md-12 col-sm-12 form-group">
                                    <textarea class="form-control" rows="8" cols="50" id="textarea_message" name="contact-message" placeholder="Message:" required></textarea>
                                </div>
                                <div class="col-md-12">
                                    <button type="submit" id="btn_submit" class="btn btn-default">Send Message</button>
                                </div>
                                <div id="alert-msg" class="alert-msg"></div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="section-padding"></div>
            </div>
        </>
    )
}

export default page

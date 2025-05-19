import React from 'react'

const Blog = () => {
    return (
        <div class="container-fluid no-padding blog">
            <div class="section-padding"></div>
            <div class="container">
                <div class="section-header">
                    <h3>Recent Updates From Our Blog</h3>
                </div>
                <div class="row">
                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <article class="blog-post-list">
                            <div class="entry-cover">
                                <a href="#"><img src="/images/blog/blog-1.jpg" alt="blog-1" /></a>
                                <div class="post-meta">
                                    <img src="/images/icon/photo.png" alt="photo" />
                                </div>
                                <div class="entry-meta">
                                    <div class="meta-inner">
                                        <div class="by-line pull-left">Posted By <a href="#">Admin</a></div>
                                        <div class="post-comment pull-right">
                                            <a href="#"><i class="fa fa-comment"></i>Comments<span>14</span></a>
                                        </div>
                                    </div>
                                    <div class="meta-inner">
                                        <div class="post-date pull-left"><span>On 22 Aug 2015</span></div>
                                        <div class="tags pull-right">
                                            <i class="fa fa-tag"></i>
                                            <a href="#">Cab</a>
                                            <a href="#">Taxi</a>
                                            <a href="#">Rent</a>
                                            <a href="#">Hire</a>
                                            <a href="#">Trip</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="blog-content">
                                <h3 class="entry-title">Well Trained Drivers On Duty</h3>
                                <div class="entry-content">
                                    <p>Fleeing from the Cylon tyranny the last Battlestar leads a rag tag fugitive fleet
                                        on a lonely quest a</p>
                                    <a href="#" title="Read More" class="pull-right">Read More</a>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <article class="blog-post-list">
                            <div class="entry-cover">
                                <a href="#"><img src="/images/blog/blog-2.jpg" alt="blog-1" /></a>
                                <div class="post-meta">
                                    <img src="/images/icon/video.png" alt="video" />
                                </div>
                                <div class="entry-meta">
                                    <div class="meta-inner">
                                        <div class="by-line pull-left">Posted By <a href="#">Admin</a></div>
                                        <div class="post-comment pull-right">
                                            <a href="#"><i class="fa fa-comment"></i>Comments<span>22</span></a>
                                        </div>
                                    </div>
                                    <div class="meta-inner">
                                        <div class="post-date pull-left"><span>On 14 Sep 2015</span></div>
                                        <div class="tags pull-right">
                                            <i class="fa fa-tag"></i>
                                            <a href="#">Pickup</a>
                                            <a href="#">Airport</a>
                                            <a href="#">paid</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="blog-content">
                                <h3 class="entry-title">Got The Airport Shuttle Contract</h3>
                                <div class="entry-content">
                                    <p>Fleeing from the Cylon tyranny the last Battlestar leads a rag tag fugitive fleet
                                        on a lonely quest a</p>
                                    <a href="#" class="pull-right">Read More</a>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <article class="blog-post-list">
                            <div class="entry-cover">
                                <a href="#"><img src="/images/blog/blog-3.jpg" alt="blog-1" /></a>
                                <div class="post-meta">
                                    <img src="/images/icon/photo.png" alt="photo" />
                                </div>
                                <div class="entry-meta">
                                    <div class="meta-inner">
                                        <div class="by-line pull-left">Posted By <a href="#">Admin</a></div>
                                        <div class="post-comment pull-right">
                                            <a href="#"><i class="fa fa-comment"></i>Comments<span>16</span></a>
                                        </div>
                                    </div>
                                    <div class="meta-inner">
                                        <div class="post-date pull-left"><span>On 30 Oct 2015</span></div>
                                        <div class="tags pull-right">
                                            <i class="fa fa-tag"></i>
                                            <a href="#">City</a>
                                            <a href="#">Service</a>
                                            <a href="#">Taxi</a>
                                            <a href="#">Cab</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="blog-content">
                                <h3 class="entry-title">Why Should Companies Offer Taxi</h3>
                                <div class="entry-content">
                                    <p>Fleeing from the Cylon tyranny the last Battlestar leads a rag tag fugitive fleet
                                        on a lonely quest a</p>
                                    <a href="#" class="pull-right">Read More</a>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
            <div class="section-padding"></div>
        </div>
    )
}

export default Blog

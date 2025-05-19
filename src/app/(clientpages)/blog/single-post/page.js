import React from 'react'

const page = () => {
    return (
        <>
            <div id="page-banner" class="page-banner blog-banner container-fluid no-padding">
                <div class="page-heading">
                    <h3>Post Single</h3>
                    <ol class="breadcrumb">
                        <li><a href="/">Home</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li class="active"><a href="/single-post">Post - Single</a></li>
                    </ol>
                </div>
            </div>

            <div class="container-fluid no-padding page-content">
                <div class="section-padding"></div>
                <div class="container">
                    <div class="col-md-9 blog-area">
                        <div class="section-header">
                            <h3>Recent Updates From Our Blog</h3>
                        </div>
                        <article class="blog-post-list single-post-list">
                            <div class="entry-cover">
                                <a href="#"><img src="/images/blog/blog-md-1.jpg" alt="blog-1" /></a>
                                <div class="post-meta">
                                    <img src="/images/icon/photo.png" alt="photo" />
                                </div>
                                <div class="entry-meta">
                                    <div class="meta-inner">
                                        <div class="by-line pull-left">Posted By <a href="#">Admin</a></div>
                                        <div class="post-comment pull-right">
                                            <a href="#"><i class="fa fa-heart-o"></i>Favorite<span>18</span></a>
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
                                        <div class="categories pull-right">
                                            <img src="/images/icon/category.png" alt="category" />Category: <a href="#"><span>Interstate Tour</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="blog-content">
                                <h3 class="entry-title">Well Trained Drivers On Duty</h3>
                                <div class="entry-content">
                                    <p>Come and listen to a story about a man named Jed a poor mountaineer barely kept his family fed so lets make the most of this beautiful day since we're together It is a beautiful day in this neighborhood a beautiful day for a neighbor would you be mine. Could you be mine Its a neighborly day in this beautywood a neighborly day for a beauty. Would you be mine. Its a neighborly day in this beautywood a neighborly day for a beauty.</p>
                                    <p>The Brady Bunch the Brady Bunch that's the way we all became the Brady Bunch. Now the world don't move to the beat of just one drum. What might be right for you may not be right for some. Movin' on up to the east side. We finally got a piece of the pie. If you have a problem if no one else can help and if you can find them maybe you can hire The A-Team.</p>
                                    <blockquote>
                                        <p>Beats all you've ever saw been in trouble with the law since the day they was born. Now were up in the big leagues getting' our turn at bat., We're gonna do it. On your mark get set and go now. Got a dream and we just know now we're gonna make our dream come true.</p>
                                    </blockquote>
                                    <p>Could you be mine Its a neighborly day in this beautywood a neighborly day for a beauty. Would you be mine. Its a neighborly day in this beautywood a neighborly day for a beauty the Brady Bunch the Brady Bunch.</p>
                                </div>
                            </div>
                        </article>
                        {/* <!-- Social Share --> */}
                        <div class="social-share">
                            <ul>
                                <li><i class="fa fa-share-alt"></i><span>Share</span></li>
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-google"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                            <a href="#" class="pull-right"><i class="fa fa-reply"></i>Reply</a>
                        </div>
                        <div class="about-author">
                            <div class="author-img">
                                <a href="#"><img src="/images/author/author.png" alt="author" /></a>
                            </div>
                            <div class="author-content">
                                <h3>About Author
                                    <span class="pull-right">
                                        <a href="#"><i class="fa fa-facebook"></i></a>
                                        <a href="#"><i class="fa fa-dribbble"></i></a>
                                        <a href="#"><i class="fa fa-twitter"></i></a>
                                        <a href="#"><i class="fa fa-google-plus"></i></a>
                                    </span>
                                </h3>
                                <p>In a freak mishap Ranger and its pilot Captain William Buck Rogers are blown out of their trajectory into an orbit which freezes his life support systems and returns Buck Rogers to Earth five-hundred years later. Goodbye gray sky hello blue there is nothing can hold.</p>
                                <a href="#">James Thomson</a>
                            </div>
                        </div>

                        <div class="comment-section">
                            <h3>Comments<span>(3)</span></h3>
                            <ul class="media-list">
                                <li class="media">
                                    <div class="media-left">
                                        <a href="#"><img class="media-object-1" src="/images/comment/comment-1.jpg" alt="comment" /></a>
                                    </div>
                                    <div class="media-body">
                                        <div class="media-heading">
                                            <h3><span>Elvis Martin</span> <a class="pull-right" href="#">Reply</a></h3>
                                        </div>
                                        <span>Sep 10, 2015</span>
                                        <p>You bet your life Speed Racer he will see it through. Its mission - to explore strange new worlds to seek out new life and new civilizations to boldly go where no man has gone before.</p>
                                    </div>
                                </li>
                                <li class="media">
                                    <div class="media-left">
                                        <a href="#"><img class="media-object-1" src="/images/comment/comment-2.jpg" alt="comment-2" /></a>
                                    </div>
                                    <div class="media-body">
                                        <div class="media-heading">
                                            <h3><span>Miriyam Scott</span> <a class="pull-right" href="#">Reply</a></h3>
                                        </div>
                                        <span>Sep 11, 2015</span>
                                        <p>Its mission - to explore strange new worlds to seek out new life and new civilizations to boldly go where no man has gone before wondered whatever became of me.</p>
                                    </div>
                                </li>
                                <li class="media">
                                    <div class="media-left">
                                        <a href="#"><img class="media-object-1" src="/images/comment/comment-3.jpg" alt="comment-3" /></a>
                                    </div>
                                    <div class="media-body">
                                        <div class="media-heading">
                                            <h3><span>William Turner</span> <a class="pull-right" href="#">Reply</a></h3>
                                        </div>
                                        <span>Sep 13, 2015</span>
                                        <p>You bet your life Speed Racer he will see it through. Its mission - to explore strange new worlds to seek out new life and new civilizations to boldly go where no man has gone before.</p>
                                    </div>
                                </li>
                            </ul>
                            <form class="leave-comment">
                                <h3>leave your comment</h3>
                                <div class="form-group col-md-6 col-sm-6 col-xs-12 no-left-padding">
                                    <label>Name</label>
                                    <input type="text" class="form-control" id="name" />
                                </div>
                                <div class="form-group col-md-6 col-sm-6 col-xs-12 no-left-padding">
                                    <label>Email Address</label>
                                    <input type="email" class="form-control" id="email" />
                                </div>
                                <div class="form-group col-md-12 col-sm-12 col-xs-12 no-left-padding">
                                    <label>Your Comment</label>
                                    <textarea name="message" class="form-control" rows="7"></textarea>
                                </div>
                                <input type="submit" value="Leave Comment" id="post" name="post" />
                            </form>
                        </div>
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
                                    <a href="#"><img src="/images/widget/recent/recent-1.jpg" alt="recent-1" /></a>
                                </div>
                            </div>
                            <div class="recent-post-box">
                                <div class="recent-title col-md-8 col-sm-10 col-xs-8 no-padding">
                                    <a href="#">card attached would say thank you for being</a>
                                    <p>July 07, 2015</p>
                                </div>
                                <div class="recent-img col-md-4 col-sm-2 col-xs-4 no-padding">
                                    <a href="#"><img src="/images/widget/recent/recent-2.jpg" alt="recent-2" /></a>
                                </div>
                            </div>
                            <div class="recent-post-box">
                                <div class="recent-title col-md-8 col-sm-10 col-xs-8 no-padding">
                                    <a href="#">tell me how to get how to get to Sesame Street</a>
                                    <p>July 07, 2015</p>
                                </div>
                                <div class="recent-img col-md-4 col-sm-2 col-xs-4 no-padding">
                                    <a href="#"><img src="/images/widget/recent/recent-3.jpg" alt="recent-3" /></a>
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

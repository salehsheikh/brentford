import React from 'react'

const Slider = () => {
    return (
        <div class="container-fluid photos-slider no-padding">
            <div id="photos-slider" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner" role="listbox">
                    <div class="item active">
                        <img src="/images/photos-slider/photo-slide-1.jpg" alt="side-1" />
                        <div class="carousel-caption">
                            <h2>A reliable way to travel</h2>
                            <p>Come and listen to a story about a man named Jed a poor mountaineer barely kept his
                                family fed so lets make the most of this beautiful day since we are together it is a
                                beautiful day in this neighborhood a beautiful day for a neighbor</p>
                            <a href="#" class="purchase">Purchase</a>
                            <a href="#" title="See More" class="see-more">See More</a>
                        </div>
                    </div>
                    <div class="item">
                        <img src="/images/photos-slider/photo-slide-1.jpg" alt="side-2" />
                        <div class="carousel-caption">
                            <h2>A reliable way to travel</h2>
                            <p>Come and listen to a story about a man named Jed a poor mountaineer barely kept his
                                family fed so lets make the most of this beautiful day since we are together it is a
                                beautiful day in this neighborhood a beautiful day for a neighbor</p>
                            <a href="#" class="purchase">Purchase</a>
                            <a href="#" class="see-more">See More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider

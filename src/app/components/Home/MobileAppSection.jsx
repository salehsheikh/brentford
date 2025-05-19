import React from 'react'

const MobileAppSection = () => {
  return (
    <div id="counter" class="container-fluid no-padding counter-app">
      <div class="section-padding"></div>
      <div class="container">
        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="counter">
            <div class="col-md-6 col-sm-6 col-xs-6">
              <div class="statistics-box">
                <i class="statistics-icon"><img src="/images/icon/car.png" alt="statistics-icon" /></i>
                <span id="statistics_count-1" data-statistics_percent="1200"></span>
                <h3><span>Successful Drives</span></h3>
              </div>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-6">
              <div class="statistics-box">
                <i class="statistics-icon"><img src="/images/icon/thumb-up.png"
                  alt="statistics-icon" /></i>
                <span id="statistics_count-2" data-statistics_percent="1000"></span>
                <h3><span>Happy Customers</span></h3>
              </div>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-6">
              <div class="statistics-box">
                <i class="statistics-icon"><img src="/images/icon/driver.png"
                  alt="statistics-icon" /></i>
                <span id="statistics_count-3" data-statistics_percent="350"></span>
                <h3><span>Talented Drivers</span></h3>
              </div>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-6">
              <div class="statistics-box">
                <i class="statistics-icon"><img src="/images/icon/milestone.png"
                  alt="statistics-icon" /></i>
                <span id="statistics_count-4" data-statistics_percent="148"></span>
                <h3><span>Cities Covered</span></h3>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="get-mobile">
            <h3>Get Our</h3>
            <h2>Moblie App</h2>
            <p>Brady Bunch the Brady Bunch that's the way we all became the Brady Bunch. Goodbye gray sky
            </p>
            <p class="get-mobile-content">There's nothing can hold Me when I hold you. Feels so right it
              cant be wrong. Rockin' and rollin' all week long.</p>
            <div class="get-mobile-playstore">
              <a href="#"><img src="/images/icon/google-play.png" alt="google-play" /></a>
              <a href="#"><img src="/images/icon/app-store.png" alt="app-store.png" /></a>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-12 col-xs-12">
          <img src="images/counter-app/app.png" alt="app" />
        </div>
      </div>
      <div class="section-padding"></div>
    </div>
  )
}

export default MobileAppSection;

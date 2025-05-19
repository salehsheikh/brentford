import React from 'react'

const BookingForm = () => {
  return (
    <div class="container-fluid no-padding book-details">
      <div class="section-padding"></div>
      <div class="container">
        <div class="section-header">
          <h3>Book For a Ride</h3>
        </div>
        <form class="booking-details-form">
          <div class="form-group col-md-3 col-sm-4 col-xs-12">
            <label>Name</label>
            <input type="text" class="form-control" id="name" placeholder="Enter Your Name Here" />
          </div>
          <div class="form-group col-md-3 col-sm-4 col-xs-12">
            <label>Phone Number</label>
            <input type="text" class="form-control" id="phone" placeholder="+(01) xxx - xxx - xx" />
          </div>
          <div class="form-group col-md-3 col-sm-4 col-xs-12">
            <label>From</label>
            <input type="text" class="form-control" id="from" placeholder="Starting Place" />
          </div>
          <div class="form-group col-md-3 col-sm-4 col-xs-12">
            <label>To</label>
            <input type="text" class="form-control" id="destination" placeholder="Destination" />
          </div>
          <div class="form-group col-md-4 col-sm-8 col-xs-12">
            <label>Date &amp; Time</label>
            <div class="row date-time">
              <div class="col-md-6 col-sm-6 col-xs-6"><input type="text" class="form-control"
                id="date_time" placeholder="DD/MM/YYYY" /></div>
              <div class="col-md-3 col-sm-3 col-xs-3"><input type="text" class="form-control" id="hours"
                placeholder="HH" /></div>
              <div class="col-md-3 col-sm-3 col-xs-3"><input type="text" class="form-control" id="month"
                placeholder="MM" /></div>
            </div>
          </div>
          <div class="form-group col-md-2 col-sm-4 col-xs-12">
            <label>Passenger</label>
            <input type="number" class="form-control" id="passenger" placeholder="4" />
          </div>
          <div class="form-group col-md-3 col-sm-4 col-xs-12">
            <label>Class</label>
            <select class="form-control" id="class">
              <option>Business</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
          <div class="form-group col-md-3 col-sm-4 col-xs-12">
            <button type="submit" class="btn">Book Your Trip</button>
          </div>
        </form>
      </div>
      <div class="section-padding"></div>
    </div>
  )
}

export default BookingForm

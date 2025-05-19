import React from 'react'
import ReasonsSection from './components/Home/reasons/ReasonsSection'
import MoreServiceSection from './components/Home/MoreServiceSection'
import DriversSection from './components/Home/job/DriverSection'
import TestimonialSection from './components/Home/Testimonialsection'
import Slider from './components/Home/Slider'
import MobileAppSection from './components/Home/MobileAppSection'
import Blog from './components/Home/Blog'
import BookingForm from './components/BookingForm/BookingForm'

const Home = () => {
  return (
    <div>
      <Slider />
      <ReasonsSection />
      <BookingForm />
      <MoreServiceSection />
      <DriversSection />
      <TestimonialSection />
      <MobileAppSection />
      <Blog />
    </div>
  )
}

export default Home

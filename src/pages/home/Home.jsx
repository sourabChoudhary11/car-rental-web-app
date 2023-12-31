import React from 'react'
import BookCar from '../../components/bookCar/BookCar.jsx'
import TripPlan from '../../components/tripPlan/TripPlan.jsx'
import VehicleModels from '../../components/vehicleModels/VehicleModels.jsx'
import IntroCarRental from '../../components/introCarRental/IntroCarRental.jsx'

const Home = () => {
  return (
    <>
        <IntroCarRental />
        <BookCar />
        <TripPlan />
        <VehicleModels />
    </>
  )
}

export default Home
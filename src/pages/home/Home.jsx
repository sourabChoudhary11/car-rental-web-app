import React from 'react'
import IntroCarRental from '../../components/introCarRental/introCarRental'
import BookCar from '../../components/bookCar.jsx/BookCar'
import TripPlan from '../../components/tripPlan/TripPlan'
import VehicleModels from '../../components/vehicleModels/VehicleModels'

const Home = () => {
  return (
    <div>
        <IntroCarRental />
        <BookCar />
        <TripPlan />
        <VehicleModels />
    </div>
  )
}

export default Home
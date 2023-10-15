import React from 'react'

const IntroCarRental = () => {
    return (
        <div className='mb-20 px-5 flex items-center flex-col-reverse md:p-10 md:flex-row'>
            <div className='flex flex-col justify-center space-y-3 lg:w-2/4 lg:space-y-5'>
                <h3 className='text-xl font-bold'>
                    Plan your trip
                </h3>
                <h1 className='text-4xl lg:text-6xl font-bold'>Save big with our <span className='text-orange-400'>car rental</span></h1>
                <p className='leading-7 font-sans'>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
                <div>
                    <button className='border border-black bg-black font-bold rounded-md px-4 py-2 text-white hover:bg-white hover:text-black hover:transition-all hover:duration-500'>Book Ride</button>
                    <button className='border border-black bg-black font-bold rounded-md px-4 py-2 mx-2 text-white hover:bg-white hover:text-black hover:transition-all hover:duration-500'>Learn More</button>
                </div>
            </div>
            <div className='lg:w-2/4'>
                <img className='bg-white' src="https://media.istockphoto.com/id/468686480/photo/modern-generic-car-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=g1yrjmmaNZQ6IL9SRSh3SDgfnRihTRKqIYQmzd-8_ws=" alt="car_image" />
            </div>
        </div>
    )
}

export default IntroCarRental
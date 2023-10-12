import React from 'react'

const BookCar = () => {
  return (
    <form className='sm:mx-20'>
      <h2 className='text-3xl font-bold my-5'>Book a car</h2>
      <div className='flex flex-col sm:flex-row sm:flex-wrap'>
        <div className='flex flex-col justify-center space-y-3 my-3 sm:w-2/4 sm:px-2 md:w-2/6'>
          <span className='font-bold text-xl'>Select Your Car Type*</span>
          <select className='border border-gray-400 rounded-md outline-none text-gray-500 px-2 py-2'>
            <option selected>Select your car type</option>
            <option>Audi A1 S-Line</option>
            <option>VW Golf 6</option>
            <option>Toyota Company</option>
            <option>BMW 320 Modern Line</option>
            <option>Mercedes-Benz GLK</option>
            <option>VW Passat CC</option>
          </select>
        </div>
        <div className='flex flex-col justify-center space-y-3 my-3 sm:w-2/4 sm:px-2 md:w-2/6'>
          <span className='font-bold text-xl'>Pick-up*</span>
          <select className='border border-gray-400 rounded-md outline-none text-gray-500 px-2 py-2'>
            <option>Select pick up location</option>
            <option>Belgrade</option>
            <option>Novi Sad</option>
            <option>Nis</option>
            <option>Kragujevac</option>
            <option>Subotica</option>
          </select>
        </div>
        <div className='flex flex-col justify-center space-y-3 my-3 sm:w-2/4 sm:px-2 md:w-2/6'>
          <span className='font-bold text-xl'>Drop-of*</span>
          <select className='border border-gray-400 rounded-md outline-none text-gray-500 px-2 py-2'>
            <option>Select drop off location</option>
            <option>Belgrade</option>
            <option>Novi Sad</option>
            <option>Nis</option>
            <option>Kragujevac</option>
            <option>Subotica</option>
          </select>
        </div>
        <div className='flex flex-col justify-center space-y-3 my-3 sm:w-2/4 sm:px-2 md:w-2/6'>
          <span className='font-bold text-xl'>Pick-up*</span>
          <input className='border border-gray-400 rounded-md outline-none text-gray-500 px-2 py-2' type="date" />
        </div>
        <div className='flex flex-col justify-center space-y-3 my-3 sm:w-2/4 sm:px-2 md:w-2/6'>
          <span className='font-bold text-xl'>Drop-of*</span>
          <input className='border border-gray-400 rounded-md outline-none text-gray-500 px-2 py-2' type="date" />
        </div>
        <div className='flex flex-col justify-center space-y-3 my-3 sm:w-2/4 sm:px-2 md:w-2/6 sm:self-end'>
          <button className='border border-orange-500 bg-orange-500 text-white font-bold px-3 py-2 hover:bg-white hover:text-orange-500 hover:transition-all hover:duration-500'>Reserve</button>
        </div>
      </div>
    </form>
  )
}

export default BookCar
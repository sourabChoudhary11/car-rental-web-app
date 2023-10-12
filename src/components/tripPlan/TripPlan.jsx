import React from 'react'
import { BiUserCheck } from "react-icons/bi"
import { BsCarFrontFill } from "react-icons/bs"
import { FaCarSide } from "react-icons/fa"

const TripPlan = () => {
    return (
        <div className='text-center py-16'>
            <h3 className='font-bold text-xl xl:text-2xl'>Plan your trip now</h3>
            <h1 className='font-bold text-3xl md:text-4xl'>Quick & easy car rental</h1>
            <div className='flex flex-col sm:flex-row sm:flex-wrap'>
                <div className='flex flex-col items-center sm:w-2/4 sm:p-8 lg:w-1/3'>
                    <div className='p-10 text-orange-500'>
                        <BsCarFrontFill className='text-5xl' />
                    </div>
                    <h2 className='font-bold text-2xl font-sans mb-2'>Select Car</h2>
                    <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
                </div>

                <div className='flex flex-col items-center sm:w-2/4 sm:p-8 lg:w-1/3'>
                    <div className='p-10 text-orange-500'>
                        <BiUserCheck className='text-5xl' />
                    </div>
                    <h2 className='font-bold text-2xl font-sans mb-2'>Contact Operator</h2>
                    <p>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
                </div>

                <div className='flex flex-col items-center sm:w-2/4 sm:p-8 lg:w-1/3'>
                    <div className='p-10 text-orange-500'>
                        <FaCarSide className='text-5xl' />
                    </div>
                    <h2 className='font-bold text-2xl font-sans mb-2'>Let's Drive</h2>
                    <p>Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
                </div>
            </div>
        </div>
    )
}

export default TripPlan
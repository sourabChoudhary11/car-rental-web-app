import React from 'react'
import { PiJeepBold } from "react-icons/pi"
import { GiAutoRepair } from "react-icons/gi"
import { FaBuilding } from "react-icons/fa"

const AboutCompany = () => {
    return (
        <div className='flex flex-col items-center px-5 lg:mx-10 lg:my-20 lg:flex-row'>
            <div className='w-full md:w-3/4 lg:w-2/4'>
                <img className='w-full' src="https://blog.authenticjourneys.info/wp-content/uploads/2016/10/gd-group-discussion-tips.jpg" alt="company_image" />
            </div>
            <div className=' w-full space-y-3 md:w-3/4 lg:w-2/4 lg:py-5 lg:px-10'>
                <h2 className='text-md font-bold my-3'>About Company</h2>
                <h1 className='text-3xl font-bold'>You start the engine and your adventure begins</h1>
                <p>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>
                <div className='flex justify-between py-5'>
                    <div>
                        <PiJeepBold className='text-orange-500 text-5xl' />
                        <div className='flex items-start'>
                            <span className='font-bold text-4xl'>20</span>
                            <span>Car Types</span>
                        </div>
                    </div>

                    <div>
                        <FaBuilding className='text-orange-500 text-5xl' />
                        <div className='flex items-start'>
                            <span className='font-bold text-4xl'>85</span>
                            <span>Rental Outlets</span>
                        </div>
                    </div>

                    <div>
                        <GiAutoRepair className="text-orange-500 text-5xl" />
                        <div className='flex items-start'>
                            <span className='font-bold text-4xl'>75</span>
                            <span>Repair Shop</span>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutCompany
import React from 'react'
import { PiJeepBold } from "react-icons/pi"
import { GiAutoRepair } from "react-icons/gi"
import { FaBuilding } from "react-icons/fa"

const AboutCompany = () => {
    return (
        <div className='flex flex-col items-start sm:mx-10 md:my-20 sm:flex-row'>
            <div className='w-full sm:w-2/4'>
                <img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxdSrram2jUhoLiAF0U00Wn_NkVY6TAEbVOw&usqp=CAU" alt="company_image" />
            </div>
            <div className=' w-full sm:w-2/4 sm:py-5 sm:px-10'>
                <h2 className='text-md font-bold'>About Company</h2>
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
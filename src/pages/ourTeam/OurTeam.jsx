import React from 'react'

const OurTeam = () => {
    return (
        <div className='flex flex-wrap mb-10 mx-5 sm:mx-10'>
            <div className='p-10 flex flex-col space-y-3 items-center w-full sm:w-2/4 lg:w-2/6'>
                <img src="https://car-rental-ten.vercel.app/static/media/3.1d499e4b69de7b9e10fb.png" alt="employee_image" />
                <span className='flex flex-col items-center'>
                    <span className="text-lg font-bold">Briana Ross</span>
                    <span>Photographer</span>
                </span>
            </div>

            <div className='p-10 flex flex-col space-y-3 items-center w-full sm:w-2/4 lg:w-2/6'>
                <img src="https://car-rental-ten.vercel.app/static/media/1.4ba4d772bcd6e82365e8.png" alt="employee_image" />
                <span className='flex flex-col items-center'>
                    <span className="text-lg font-bold">Luke Miller</span>
                    <span>Salesman</span>
                </span>
            </div>

            <div className='p-10 flex flex-col space-y-3 items-center w-full sm:w-2/4 lg:w-2/6'>
                <img src="https://car-rental-ten.vercel.app/static/media/4.0e752081a69322c59b26.png" alt="employee_image" />
                <span className='flex flex-col items-center'>
                    <span className="text-lg font-bold">Lauren Rivera</span>
                    <span>Car Detailist</span>
                </span>
            </div>

            <div className='p-10 flex flex-col space-y-3 items-center w-full sm:w-2/4 lg:w-2/6'>
                <img src="https://car-rental-ten.vercel.app/static/media/6.528b8c60ae315bc6a52a.png" alt="employee_image" />
                <span className='flex flex-col items-center'>
                    <span className="text-lg font-bold">Caitlyn Hunt</span>
                    <span>Menager</span>
                </span>
            </div>

            <div className='p-10 flex flex-col space-y-3 items-center w-full sm:w-2/4 lg:w-2/6'>
                <img src="https://car-rental-ten.vercel.app/static/media/2.f41d050c1c5b9e59fc22.png" alt="employee_image" />
                <span className='flex flex-col items-center'>
                    <span className="text-lg font-bold">Michael Diaz</span>
                    <span>Business Owner</span>
                </span>
            </div>

            <div className='p-10 flex flex-col space-y-3 items-center w-full sm:w-2/4 lg:w-2/6'>
                <img src="https://car-rental-ten.vercel.app/static/media/5.e46bcc8b44d7c4298aea.png" alt="employee_image" />
                <span className='flex flex-col items-center'>
                    <span className="text-lg font-bold">Martin Rizz</span>
                    <span>Mechanic</span>
                </span>
            </div>
        </div>
    )
}

export default OurTeam
import React from 'react'

const AvailableVehicleModels = () => {
    return (
        <div className='flex flex-wrap px-5'>
            {/* first card */}
            <div className='flex flex-col space-y-3 p-5 w-full md:w-3/6 lg:w-2/6'>
                <div>
                    <img className="w-full" src="https://carwow-uk-wp-2.imgix.net/Audi-A1-Tioman-Green.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=60&w=750" alt="" />
                </div>

                <div className="flex justify-between">
                    <span className='font-bold text-2xl'>Audi A1</span>
                    <span className="flex flex-col">
                        <span className='font-bold text-2xl'>$45</span>
                        <span>per day</span>
                    </span>
                </div>

                <div className='flex justify-between text-xl text-gray-400 font-bold'>
                    <span>Audi</span>
                    <span>4/5</span>
                </div>

                <div  className='flex justify-between text-xl text-gray-400 font-bold'>
                    <span>Manual</span>
                    <span>Diesel</span>
                </div>

                <button className='w-full font-[sans-serif] py-2 text-white font-bold bg-orange-500 border border-orange-500 hover:bg-white hover:text-orange-500 hover:transition-all hover:duration-500'>Book Ride</button>
            </div>

            {/* second card */}
            <div className='flex flex-col space-y-3 p-5 w-full md:w-3/6 lg:w-2/6'>
                <div>
                    <img className="w-full" src="https://www.motor.es/noticias/nuevo-volkswagen-golf-vi-fotos-e-informacion-146_5.jpg" alt="" />
                </div>

                <div className="flex justify-between">
                    <span className='font-bold text-2xl'>Golf 6</span>
                    <span className="flex flex-col">
                        <span className='font-bold text-2xl'>$37</span>
                        <span>per day</span>
                    </span>
                </div>

                <div className="flex justify-between text-xl text-gray-400 font-bold">
                    <span>VC</span>
                    <span>4/5</span>
                </div>

                <div className='flex justify-between text-xl text-gray-400 font-bold'>
                    <span>Manual</span>
                    <span>Diesel</span>
                </div>

                <button className='w-full font-[sans-serif] py-2 text-white font-bold bg-orange-500 border border-orange-500 hover:bg-white hover:text-orange-500 hover:transition-all hover:duration-500'>Book Ride</button>
            </div>

            {/* third card */}
            <div className='flex flex-col space-y-3 p-5 w-full md:w-3/6 lg:w-2/6'>
                <div>
                    <img className="w-full" src="https://images.91wheels.com/assets/b_images/main/models/profile/profile1660727109.png?width=360&q=60?w=750&q=60" alt="" />
                </div>

                <div className="flex justify-between">
                    <span className='font-bold text-2xl'>Toyota</span>
                    <span className="flex flex-col">
                        <span className='font-bold text-2xl'>$30</span>
                        <span>per day</span>
                    </span>
                </div>

                <div className="flex justify-between text-xl text-gray-400 font-bold">
                    <span>Camry</span>
                    <span>4/5</span>
                </div>

                <div className='flex justify-between text-xl text-gray-400 font-bold'>
                    <span>Manual</span>
                    <span>Diesel</span>
                </div>

                <button className='w-full font-[sans-serif] py-2 text-white font-bold bg-orange-500 border border-orange-500 hover:bg-white hover:text-orange-500 hover:transition-all hover:duration-500'>Book Ride</button>
            </div>

            {/* fourth card */}
            <div className='flex flex-col space-y-3 p-5 w-full md:w-3/6 lg:w-2/6'>
                <div>
                    <img className="w-full" src="https://www.bmw.in/content/dam/bmw/marketIN/bmw_in/all-models/3-series/gl/2023/navigation.png" alt="" />
                </div>

                <div className="flex justify-between">
                    <span className='font-bold text-2xl'>BMW 320</span>
                    <span className="flex flex-col">
                        <span className='font-bold text-2xl'>$35</span>
                        <span>per day</span>
                    </span>
                </div>

                <div className="flex justify-between text-xl text-gray-400 font-bold">
                    <span>ModernLinC</span>
                    <span>4/5</span>
                </div>

                <div className='flex justify-between text-xl text-gray-400 font-bold'>
                    <span>Manual</span>
                    <span>Diesel</span>
                </div>

                <button className='w-full font-[sans-serif] py-2 text-white font-bold bg-orange-500 border border-orange-500 hover:bg-white hover:text-orange-500 hover:transition-all hover:duration-500'>Book Ride</button>
            </div>

            {/* fifth card */}
            <div className='flex flex-col space-y-3 p-5 w-full md:w-3/6 lg:w-2/6'>
                <div>
                    <img className="w-full" src="https://imgd.aeplcdn.com/642x336/n/cw/ec/45477/mercedesbenz-glc-coupe-right-front-three-quarter1.jpeg?q=80&q=80" alt="" />
                </div>

                <div className="flex justify-between">
                    <span className='font-bold text-2xl'>Mercedes</span>
                    <span className="flex flex-col">
                        <span className='font-bold text-2xl'>$50</span>
                        <span>per day</span>
                    </span>
                </div>

                <div className="flex justify-between text-xl text-gray-400 font-bold">
                    <span>Benz GLC</span>
                    <span>4/5</span>
                </div>
                
                <div className='flex justify-between text-xl text-gray-400 font-bold'>
                    <span>Manual</span>
                    <span>Diesel</span>
                </div>

                <button className='w-full font-[sans-serif] py-2 text-white font-bold bg-orange-500 border border-orange-500 hover:bg-white hover:text-orange-500 hover:transition-all hover:duration-500'>Book Ride</button>
            </div>


            {/* sixth card */}
            <div className='flex flex-col space-y-3 p-5 w-full md:w-3/6 lg:w-2/6'>
                <div>
                    <img className="w-full" src="https://staticeu-h2.izmocars.com/toolkit/commonassets/2022/22volkswagen/22volkswagenpassatelegnsbizwg8fb/22volkswagenpassatelegnsbizwg8fb_pixGallery/_gallerypix/volkswagen_passatelegnsbizwg8fb_concept.jpg" alt="" />
                </div>

                <div className="flex justify-between">
                    <span className='font-bold text-2xl'>VW Passat</span>
                    <span className="flex flex-col">
                        <span className='font-bold text-2xl'>$25</span>
                        <span>per day</span>
                    </span>
                </div>

                <div className="flex justify-between text-xl text-gray-400 font-bold">
                    <span>CC</span>
                    <span>4/5</span>
                </div>

                <div className='flex justify-between text-xl text-gray-400 font-bold'>
                    <span>Manual</span>
                    <span>Diesel</span>
                </div>

                <button className='w-full font-[sans-serif] py-2 text-white font-bold bg-orange-500 border border-orange-500 hover:bg-white hover:text-orange-500 hover:transition-all hover:duration-500'>Book Ride</button>
            </div>
        </div>
    )
}

export default AvailableVehicleModels
import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-black text-white px-5 py-3 mt-10'>
            <main className='text-center flex flex-col space-y-20 sm:flex-row sm:flex-wrap'>
                <div className='flex flex-col space-y-5 my-20 text-lg sm:w-2/4 lg:w-1/4'>
                    <h1 className="text-3xl"><span className='font-bold text-orange-600'>CAR</span> Rental</h1>
                    <p className='text-xl'>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
                    <span className='font-bold'>(123) -456-789</span>
                    <span className='font-bold'>carrental7521@gmail.com</span>
                </div>
                <div className='flex flex-col space-y-3 sm:w-2/4 lg:w-1/4'>
                    <h2 className='font-bold text-2xl text-orange-600'>COMPANY</h2>
                    <ul className='flex flex-col space-y-3 text-lg'>
                        <li>New York</li>
                        <li>Careers</li>
                        <li>Mobile</li>
                        <li>Blog</li>
                        <li>How we work</li>
                    </ul>
                </div>
                <div className='flex flex-col space-y-3 sm:w-2/4 lg:w-1/4'>
                    <h2 className='font-bold text-2xl text-orange-600'>WORKING HOURS</h2>
                    <ul className='flex flex-col space-y-3 text-lg'>
                        <li>Mon - Fri: 9:00AM - 9:00PM</li>
                        <li>Sat: 9:00AM - 19:00PM</li>
                        <li>Sun: Closed</li>
                    </ul>
                </div>
                <div className='flex flex-col space-y-3 sm:w-2/4 lg:w-1/4'>
                    <h2 className='text-2xl font-bold text-orange-600'>SUBSCRIPTION</h2>
                    <p className='text-lg'>Subscribe your Email address for latest news & updates.</p>
                    <input type="email" placeholder='Enter Your Email' className='p-3 outline-none' />
                    <button className='bg-orange-500 text-white px-5 py-2 font-bold hover:text-orange-500 hover:bg-white'>Submit</button>
                </div>
            </main>
        </footer>
    )
}

export default Footer
import React from 'react'

const Contact = () => {
    return (
        <div className='flex flex-col mb-10 px-5 sm:my-32 md:flex-row'>
            <div className='p-10 flex flex-col space-y-4 w-full md:w-2/4'>
                <h1 className='text-4xl font-bold sm:w-2/4'>Need additional information?</h1>
                <p className='text-gray-600'>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
                <div className='flex flex-col space-y-3 text-xl'>
                    <span>(123) 456-7869</span>
                    <span>carrental@carmail.com</span>
                    <span>Punjab, India</span>

                </div>
            </div>
            <form className="p-10 w-full md:w-2/4">
                <div className='flex flex-col'>
                    <span className='text-lg'>Full Name *</span>
                    <input className='p-3 border-none outline-none' type="text" placeholder='Enter your full name' />
                </div>
                <div className='flex flex-col'>
                    <span className='text-lg'>Email *</span>
                    <input className='p-3 border-none outline-none' type="text" placeholder='Enter your email' />
                </div>
                <div className='flex flex-col'>
                    <span className='text-lg'>Tell us about it *</span>
                    <textarea className='p-3 border-none outline-none mb-3' rows="5" placeholder='Your query'></textarea>
                </div>
                <button className='w-full bg-orange-500 p-3 text-white font-bold text-lg hover:opacity-90'>Send Message</button>
            </form>
        </div>
    )
}

export default Contact
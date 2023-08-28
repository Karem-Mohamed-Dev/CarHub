import React from 'react'
import { BsTelephoneFill } from 'react-icons/bs'

const Banner = () => {
    return (
        <div className='p-10 bg-gray-700 flex flex-col md:flex-row justify-center items-center text-center gap-x-10 gap-y-5'>
            <p className='text-2xl font-bold text-white'>Book a car by getting in touch with us</p>
            <p className='text-2xl font-bold text-blue-500 flex items-center gap-2'><BsTelephoneFill /> (123) 456-7869</p>
        </div>
    )
}

export default Banner
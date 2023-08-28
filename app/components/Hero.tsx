'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Hero = () => {
  const [flatRate, setFlatRate] = useState(0)
  const [isMobile, setMobile] = useState(Boolean)
  useEffect(() => setMobile(window.innerWidth <= 767), [])
  return (
    <div className='h-screen md:h-[80vh] w-screen flex justify-center'>
      <Image className='hidden md:block object-contain absolute -z-10 bottom-0 right-0' src={'/car.png'} alt='' width={1400} height={1400} />


      <div className='flex flex-col md:flex-row justify-around items-center p-5 max-w-[1440px]'>

        <div className='mb-10 md:mb-0 text-center md:text-left'>
          <h1 className='text-6xl xl:text-8xl font-semibold w-full md:w-[100%] xl:w-[70%]'>Save <span className='text-blue-500'>Big</span> with our car rental</h1>
          <p className=' text-gray-400 md:w-[60%] mt-8'>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
        </div>



        {/* Form */}
        <div className='bg-white border shadow-md min-w-[350px] md:w-[500px] rounded-md top-[20%] overflow-hidden'>

          <div className='flex justify-between items-center h-[64px] border-b'>

            <p onClick={() => setFlatRate(0)} style={{ backgroundColor: flatRate === 0 ? '#3b83f6' : 'transparent', color: flatRate === 0 ? 'white' : 'black' }} className='font-semibold duration-300 w-[50%] h-[64px] flex justify-center items-center cursor-pointer'>Distance</p>

            <p onClick={() => setFlatRate(1)} style={{ backgroundColor: flatRate === 1 ? '#3b83f6' : 'transparent', color: flatRate === 1 ? 'white' : 'black' }} className='font-semibold duration-300 w-[50%] h-[64px] flex justify-center items-center cursor-pointer'>Hourly</p>

            <p className='border-l w-[50%] h-[64px] flex justify-center items-center text-gray-500'>Flat Rate</p>

          </div>

          <div>

            <div className='p-5 flex flex-col gap-5'>
              <label className='flex flex-col gap-[5px]'>
                <p>Pick Up Address <span className='text-red-600'>*</span></p>
                <input className='bg-gray-100 p-2 w-full' type="text" placeholder='Egypt, Alex' />
              </label>
              <label className='flex flex-col gap-[5px]'>
                <p>Pick Up Date <span className='text-red-600'>*</span></p>
                <input className='bg-gray-100 p-2 w-full' type="date" placeholder='Egypt, Alex' />
              </label>
            </div>
            <div className='border-b' />
            <div className='p-5 flex flex-col gap-5'>
              <label className='flex flex-col gap-[5px]'>
                <p>Drop Off Address <span className='text-red-600'>*</span></p>
                <input className='bg-gray-100 p-2 w-full' type="text" placeholder='Egypt, Alex' />
              </label>
              <label className='flex flex-col gap-[5px]'>
                <p>Drop Off Date <span className='text-red-600'>*</span></p>
                <input className='bg-gray-100 p-2 w-full' type="date" placeholder='Egypt, Alex' />
              </label>
            </div>

          </div>

          <button className='px-8 py-2.5 font-semibold bg-gray-700 rounded-sm text-white mb-5 ml-5'>Search</button>

        </div>
      </div>
    </div>
  )
}

export default Hero
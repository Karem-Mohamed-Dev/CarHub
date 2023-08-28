import Image from 'next/image'
import React from 'react'

import Link from 'next/link'
import { BsTelephoneFill } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'

const Footer = () => {
  return (
    <footer className='border-t-[1px]'>
      <div className='text-center md:text-left flex flex-col flex-wrap gap-y-20 md:5 md:flex-row items-center justify-centers md:justify-between max-w-[1440px] mx-auto py-12 px-5'>
        <div className='flex flex-col gap-5 items-center w-[300px] h-[220px]'>
          <Image src='/logo.svg' alt='logo' width={118} height={18} />
          <p className='text-gray-500'>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
          <div className='flex flex-col gap-2'>
            <p className='flex items-center gap-2'><BsTelephoneFill /> (123) -456-789</p>
            <p className='flex items-center gap-2'><HiMail /> support@carhub.com</p>
          </div>
        </div>
        <div className='flex flex-col gap-5 items-center w-[300px] h-[220px]'>
          <h3 className='text-2xl font-extrabold'>Company</h3>
          <ul className='flex flex-col gap-3 text-gray-500'>
            <li className='cursor-pointer duration-300 hover:text-blue-500 hover:underline'>New Your</li>
            <li className='cursor-pointer duration-300 hover:text-blue-500 hover:underline'>Careers</li>
            <li className='cursor-pointer duration-300 hover:text-blue-500 hover:underline'>Mobile</li>
            <li className='cursor-pointer duration-300 hover:text-blue-500 hover:underline'>Blog</li>
            <li className='cursor-pointer duration-300 hover:text-blue-500 hover:underline'>How We Work</li>
          </ul>
        </div>
        <div className='flex flex-col gap-5 items-center w-[300px] h-[220px]'>
          <h3 className='text-2xl font-extrabold'>WORKING HOURS</h3>
          <div className='flex flex-col gap-2'>
            <p>Mon - Fri: 9:00AM - 9:00PM</p>
            <p>Sat: 9:00AM - 19:00PM</p>
            <p>Sun: Closed</p>
          </div>
        </div>
        <div className='flex flex-col gap-5 items-center w-[300px] h-[220px]'>
          <h3 className='text-2xl font-extrabold'>SUBSCRIPTION</h3>
          <div className='flex flex-col gap-2'>
            <p>Subscribe your Email address for latest news & updates.</p>
            <div className='flex flex-col gap-2'>
              <input type="text" placeholder='Enter Email Address' className='bg-gray-100 p-3' />
              <button className='p-3 bg-blue-500 text-white font-semibold'>Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div className='p-5 border-t-[1px] max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between'>
        <p>@2023 CarHub. All rights reserved</p>
        <div className='flex justify-around max-md:mt-5 md:gap-10'>
          <Link href={'/'} className='text-gray-500'>Privacy & Policy</Link>
          <Link href={'/'} className='text-gray-500'>Terms & Condition</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
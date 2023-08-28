import React from 'react'

import { BsTelephoneFill } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'
import { FaLocationDot } from 'react-icons/fa6'
import { MdMarkEmailRead } from 'react-icons/md'
import Banner from '../components/Banner'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact with us'
}

const page = () => {
  return (
    <div>

      <div className='flex flex-col md:flex-row justify-around gap-5 max-w-[1440px] mx-auto py-10 px-5 bg-map-bg min-h-screen items-center'>

        <div className='flex flex-col gap-5'>

          <div className="flex flex-col gap-5">
            <h2 className='text-3xl font-bold text-center md:text-left'>Need additional information?</h2>
            <p className='text-gray-500 max-w-[400px]'>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
          </div>

          <div className='flex flex-col items-center md:items-start'>
            <p className='flex items-center gap-2'><BsTelephoneFill /> (123) 456-7869</p>
            <p className='flex items-center gap-2 my-2'><HiMail /> support@carhub.com</p>
            <p className='flex items-center gap-2'><FaLocationDot /> Egypt, Alexandria</p>
          </div>

        </div>

        <div className='flex flex-col gap-5 w-full md:w-[600px]'>
          <label>
            <p className='font-semibold'>Full Name <span className='text-red-500'>*</span></p>
            <input className='bg-gray-200 p-4 w-full outline-none' type="text" placeholder='E.g "Karim Mohamed"' />
          </label>
          <label>
            <p className='font-semibold'>Email <span className='text-red-500'>*</span></p>
            <input className='bg-gray-200 p-4 w-full outline-none' type="text" placeholder='Youremail@example.com' />
          </label>
          <label>
            <p className='font-semibold'>Tell us about it <span className='text-red-500'>*</span></p>
            <textarea className='bg-gray-200 p-4 w-full outline-none min-h-[200px]' placeholder='Write Here..' />
          </label>
          <button className='bg-blue-500 flex justify-center items-center gap-2 p-4 font-bold text-white'><MdMarkEmailRead /> Send Message</button>
        </div>

      </div>
      <Banner />
    </div>
  )
}

export default page
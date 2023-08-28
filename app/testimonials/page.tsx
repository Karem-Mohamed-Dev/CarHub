import Image from 'next/image'
import React from 'react'

import { FaQuoteRight } from 'react-icons/fa'
import { testimonials } from '../db'
import Banner from '../components/Banner'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Testimonials',
  description: "Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you."
}

const page = () => {
  return (
    <div className='bg-slate-50 flex flex-col gap-y-10 '>

      <div className='max-w-[1280px] mx-auto flex flex-col justify-center py-10 px-5 min-h-screen'>
        <div className='text-center flex flex-col gap-2'>
          <h2 className='font-semibold'>Reviewed by People</h2>
          <span className='text-3xl font-bold'>Client's Testimonials</span>
          <p className='text-gray-500 max-w-[700px]'>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
        </div>

        <div className='flex flex-col flex-wrap gap-5 items-center justify-center md:flex-row mt-10'>
          {testimonials.map(ele => (
            <div className='bg-white shadow-md p-5 rounded flex flex-col gap-5 max-w-[400px]'>
              <p className='font-medium'>{`"${ele.comment}"`}</p>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                  <Image className='rounded-full' src={ele.img} alt='' width={80} height={80} />
                  <div className=''>
                    <p>{ele.name}</p>
                    <p>{ele.location}</p>
                  </div>
                </div>
                <FaQuoteRight className='text-2xl text-blue-600' />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Banner />
    </div>
  )
}

export default page
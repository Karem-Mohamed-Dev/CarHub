import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Banner from '../components/Banner'
import { Metadata } from 'next'
import { carsDB } from '../db'

export const metadata: Metadata = {
  title: 'Cars',
  description: 'Browse our Cars',
}

const page = async () => {
  const data = carsDB
  return (
    <div>
      <div className='max-w-[1440px] mx-auto py-10 px-5'>
        <h2 className='text-xl font-semibold text-center my-10'><Link className='hover:text-blue-600 duration-300 hover:underline' href='/'>Home</Link> / Cars</h2>
        <div className='flex flex-wrap justify-center items-start gap-5'>

          {data.map(ele => (
            <div key={ele.id} className="bg-white border w-[350px] h-[400px] flex flex-col justify-between p-5 ">
              <p className='text-4xl font-semibold'>{ele.name}</p>
              <div className='flex flex-col items-center gap-10'>
                <Image src={ele.img} alt={ele.name} width={250} height={300} />
                <div className='w-full flex justify-between items-center'>
                  <span className='font-medium'>{`$${ele.price}/day`}</span>
                  <Link className='border px-5 py-2 rounded-full hover:bg-blue-500 hover:text-white duration-300' href={`/cars/${ele.id}`}>Book Now</Link>
                </div>
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
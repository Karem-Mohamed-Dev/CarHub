import Image from 'next/image'
import React from 'react'

const WhyUs = () => {
  return (
    <div className='py-20 px-5'>
      <div className='text-center mb-10 md:mb-20'>
        <h2 className='text-5xl md:text-5xl font-bold mb-5'>Why Choose Us</h2>
        <p className='font-medium text-gray-600'>Best valued deals you will ever find
        </p>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center flex-wrap gap-10'>
        <div className="flex flex-col items-center text-center gap-3 w-[350px]">
          <Image className='h-[200px] w-[200px]' src='/Carpool-bro.svg' alt='Cross Country Drive' width={200} height={200} />
          <div>
            <h3 className='font-semibold text-xl'>Cross Country Drive</h3>
            <p className='text-gray-500 text-sm'>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center gap-3 w-[350px]">
          <Image className='h-[200px] w-[200px]' src='/Saving money-bro.svg' alt='Cross Country Drive' width={200} height={200} />
          <div>
            <h3 className='font-semibold text-xl'>All Inclusive Pricing</h3>
            <p className='text-gray-500 text-sm'>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center gap-3 w-[350px]">
          <Image className='h-[200px] w-[200px]' src='/Wallet-bro.svg' alt='Cross Country Drive' width={200} height={200} />
          <div>
            <h3 className='font-semibold text-xl'>No Hidden Charges</h3>
            <p className='text-gray-500 text-sm'>Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUs
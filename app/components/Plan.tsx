import Image from 'next/image'
import React from 'react'

const Plan = () => {
    return (
        <div className='py-32 px-5'>
            <div className='text-center mb-10 md:mb-20'>
                <h2 className='font-medium text-gray-600'>Plan your trip now</h2>
                <p className='text-3xl md:text-5xl font-semibold'>Quick & easy car rental</p>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center flex-wrap gap-10'>
                <div className="flex flex-col items-center text-center gap-3 w-[350px]">
                    <Image src='/Select.svg' alt='' width={150} height={150} />
                    <h3 className='font-semibold text-xl'>Select Car</h3>
                    <p className='text-gray-500'>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
                </div>
                <div className="flex flex-col items-center text-center gap-3 w-[350px]">
                    <Image src='/Car-rental.svg' alt='' width={150} height={150} className='h-[150px]' />
                    <h3 className='font-semibold text-xl'>Contact Operator</h3>
                    <p className='text-gray-500'>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
                </div>
                <div className="flex flex-col items-center text-center gap-3 w-[350px]">
                    <Image src='/driving.svg' alt='' width={150} height={150} className='-translate-y-6'/>
                    <h3 className='font-semibold text-xl -translate-y-4'>Let's Drive</h3>
                    <p className='text-gray-500'>Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
                </div>
            </div>
        </div>
    )
}




export default Plan
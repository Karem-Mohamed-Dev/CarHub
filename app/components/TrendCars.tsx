import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import trend from '../libs/trend'

const TrendCars = async () => {
    const data = await trend()
    return (
        <div className='py-10 px-5 bg-slate-100'>
            <div className='text-center mb-10 md:mb-20'>
                <h2 className='text-5xl md:text-5xl font-bold mb-5'>Trend Cars</h2>
                <p className='font-medium text-gray-600'>Choose from a variety of our amazing vehicles to rent for your next adventure or business trips</p>
            </div>
            <div className='flex flex-col md:flex-row flex-wrap items-center gap-5 justify-center'>
                {data?.map(ele => (
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
    )
}

export default TrendCars

// Choose from a variety of our amazing vehicles to rent for your next adventure or business trip


import getCarData from '@/app/libs/getCarData'
import Image from 'next/image'
import React from 'react'
import { TiCancel } from 'react-icons/ti'
import { AiFillLike } from 'react-icons/ai'
import { HiMiniUserGroup } from 'react-icons/hi2'
import { MdSevereCold } from 'react-icons/md'
import { BsSpeedometer2, BsFillFuelPumpFill } from 'react-icons/bs'
import { GiCarDoor, GiGearStickPattern } from 'react-icons/gi'
import Link from 'next/link'


type Props = {
  params: {
    carId: string
  }
}


export async function generateMetadata({ params: { carId } }: Props) {
  const data = await getCarData(carId)
  return {
    title: data?.name,
    description: data?.name
  }
}

const page = async ({ params: { carId } }: Props) => {
  const data = await getCarData(carId)
  console.log(data)
  return (
    <div className='bg-slate-50'>

      <div className='max-w-[1440px] mx-auto py-10 px-5 flex flex-col xl:flex-row xl:justify-center gap-5 items-center xl:items-start'>

        <div className='flex flex-col gap-5'>
          <p className='text-xl font-semibold'>
            <Link className='hover:text-blue-600 duration-300 hover:underline' href='/'>Home</Link> / <Link className='hover:text-blue-600 duration-300 hover:underline' href='/cars'>Cars</Link> / {data?.name}
          </p>
          <Card className='flex flex-col md:flex-row md:items-center md:gap-x-4 items-center'>
            <Image className='object-contain w-[200px] mb-5 object-center' src={data?.img as string} alt={data?.name as string} width={1200} height={1200} />
            <div className='w-full'>
              <div>
                <h3 className='text-2xl font-bold'>{data?.type}</h3>
                <p className='text-sm text-gray-500'>{data?.name}</p>
              </div>
              <div className='flex justify-between mt-5'>
                <ul className='flex flex-col gap-2 text-gray-600'>
                  <li className='flex items-center gap-2'><HiMiniUserGroup /> {data?.passengers} Passengers</li>
                  {data?.ac ? <li className='flex items-center gap-2'><MdSevereCold /> Air Conditioning</li> : null}
                  <li className='flex items-center gap-2'><BsSpeedometer2 />{data?.mileage === 0 ? 'Unlimited mileage' : `Limited to ${data?.mileage}`}</li>
                </ul>
                <ul className='flex flex-col gap-2 text-gray-600'>
                  <li className='flex items-center gap-2'><GiCarDoor />{data?.doors} Doors</li>
                  <li className='flex items-center gap-2'><GiGearStickPattern />{data?.gear}</li>
                  <li className='flex items-center gap-2'><BsFillFuelPumpFill />Fuel: full to full</li>
                </ul>
              </div>
            </div>
          </Card>
          <Card className='flex items-center gap-4'>
            <TiCancel className='text-8xl' />
            <div>
              <h4 className='text-xl font-bold'>Free cancellation</h4>
              <p className='text-sm text-gray-500'>Lock in this price today, cancel free of charge anytime. Reserve now and pay at pick-up.</p>
            </div>
          </Card>
          <Card className='flex items-center gap-4'>
            <AiFillLike className='text-8xl' />
            <div>
              <h4 className='text-xl font-bold'>Great deal</h4>
              <p className='text-sm text-gray-500'>This car is $54 cheaper than the average car in Economy category.</p>
            </div>
          </Card>
          <Card>
            <h4 className='text-xl font-bold'>Car rental location</h4>
            <p className='mb-5'>Pick-up & Drop-off</p>
            <span className='text-gray-500'>- {data?.location}</span>
          </Card>
          <Card>
            <h4 className='text-xl font-bold mb-5'>Rental policies</h4>
            <p className='text-sm text-gray-500 mb-2'>- You will not be charged anything for the rental since the booking was risk-free.</p>
            <p className='text-sm text-gray-500'>- Drivers under 25 or over 70 years of age may need to pay an extra fee.</p>
          </Card>
        </div>

        <div className='flex flex-col gap-5'>
          <Card>
            <p className='text-xl font-semibold'>${data?.price} / day</p>
            <p className='text-blue-600 font-medium'>Free cancellation</p>
            <p className='text-sm text-gray-500'>Pay at pick-up</p>
          </Card>
          <Card>
            <h4 className='text-xl font-bold'>Price details</h4>
            <p className='text-sm text-gray-500 mb-5'>Pay at pick-up</p>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center justify-between'>
                <p>Car rental fee x 1 day ${data?.price}</p>
                <p className='text-gray-500'>${data?.price}</p>
              </div>
              <div className='flex items-center justify-between'>
                <p>Taxes and fees</p>
                <p className='text-gray-500'>${((data?.price as number / 100) * 30).toFixed(2)}</p>
              </div>
            </div>


            <div className='border-b-[1px] my-10'></div>


            <div className='flex flex-col gap-2'>
              <div className='flex items-center justify-between'>
                <p>Total</p>
                <p className='text-gray-500'>${((data?.price as number) + ((data!.price as number / 100) * 30)).toFixed(2)}</p>
              </div>
              <div className='flex items-center justify-between'>
                <p>Pay at pick-up</p>
                <p className='text-gray-500'>${((data?.price as number) + ((data!.price as number / 100) * 30)).toFixed(2)}</p>
              </div>
              <div className='flex items-center justify-between'>
                <p>Pay now</p>
                <p className='text-gray-500'>$0.00</p>
              </div>
            </div>
            <button className='mt-5 w-full bg-blue-600 font-semibold text-white p-4'>Reserve</button>
          </Card>
        </div>

      </div>
    </div>
  )
}

export default page


function Card({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`bg-white rounded-md shadow-md p-5 w-full min-w-[350px] max-w-[700px] ${className}`}>
      {children}
    </div>
  )
}
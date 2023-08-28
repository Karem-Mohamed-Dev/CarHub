import Image from 'next/image'
import React from 'react'

import { FaCarSide } from 'react-icons/fa'
import { GiHomeGarage } from 'react-icons/gi'
import { MdCarRepair } from 'react-icons/md'
import { Plan } from '../components'
import Banner from '../components/Banner'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'You start the engine and your adventure begins certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.',
}

const About = () => {
  return (
    <main className='min-h-[100vh]'>
      <div className='flex flex-col justify-center items-center p-5 gap-5 max-w-[800px] mx-auto'>
        <Image src='/AUTOS-AGENCIA.jpg' alt='Car Hub' width={1200} height={1200} />
        <div className='flex flex-col gap-2'>
          <h2 className='text-2xl font-bold'>About Company</h2>
          <p className='text-gray-500'>You start the engine and your adventure begins certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>
          <div className='flex justify-around mt-10 gap-5'>
            <div className='flex flex-col items-center gap-2'>
              <FaCarSide className='text-4xl text-blue-600' />
              <div className='flex items-center gap-2'>
                <p className='text-4xl font-bold'>20</p>
                <p className='text-sm'>Car <br />Types</p>
              </div>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <GiHomeGarage className='text-4xl text-blue-600' />
              <div className='flex items-center gap-2'>
                <p className='text-4xl font-bold'>85</p>
                <p className='text-sm'>Rental <br />Outlets</p>
              </div>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <MdCarRepair className='text-4xl text-blue-600' />
              <div className='flex items-center gap-2'>
                <p className='text-4xl font-bold'>75</p>
                <p className='text-sm'>Repair <br />Shop</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Plan />
      <Banner />
    </main>
  )
}

export default About
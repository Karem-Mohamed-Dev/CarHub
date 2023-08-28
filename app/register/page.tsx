import Image from 'next/image'
import React from 'react'

import { HiMail } from 'react-icons/hi'
import { AiFillLock } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Register',
  description: 'Register to CarHub'
}

const page = () => {
  return (
    <div>

      <div className='py-10 px-5 max-w-[1440px] mx-auto flex justify-center items-center min-h-screen'>

        <div className='flex flex-col gap-8'>
          <div className='flex flex-col items-center gap-2'>
            <h2 className='text-3xl font-semibold'>Create New Account</h2>
          </div>

          

          <div className='flex gap-4 text-center justify-around'>
            <button className='px-6 py-3 border rounded-md flex items-center gap-2 font-medium flex-1'>
              <Image src='/google.svg' alt='' width={30} height={30} />
              <p>Google</p>
            </button>
            <button className='px-6 py-3 border rounded-md flex items-center gap-2 font-medium flex-1'>
              <Image src='/facebook.svg' alt='' width={30} height={30} />
              <p>Google</p>
            </button>
          </div>

          <div className='relative w-full h-[1px] border'>
            <p className='absolute top-[-13px] left-[50%] translate-x-[-50%] w-[150px] text-center bg-white'>Or Register With</p>
          </div>

          <div className='flex flex-col gap-2'>

            <div className='relative'>
              <input type="text" placeholder='Full Name' className='p-3 border rounded-md bg-gray-100 pl-12 w-full outline-none' />
              <FaUser className='absolute top-1/2 -translate-y-1/2 left-4 text-gray-600 text-2xl' />
            </div>

            <div className='relative'>
              <input type="email" placeholder='Email' className='p-3 border rounded-md bg-gray-100 pl-12 w-full outline-none' />
              <HiMail className='absolute top-1/2 -translate-y-1/2 left-4 text-gray-600 text-2xl' />
            </div>

            <div className='relative'>
              <input type="password" placeholder='Password' className='p-3 border rounded-md bg-gray-100 pl-12 w-full outline-none' />
              <AiFillLock className='absolute top-1/2 -translate-y-1/2 left-4 text-gray-600 text-2xl' />
            </div>

            <div className='relative'>
              <input type="password" placeholder='Re-Password' className='p-3 border rounded-md bg-gray-100 pl-12 w-full outline-none' />
              <AiFillLock className='absolute top-1/2 -translate-y-1/2 left-4 text-gray-600 text-2xl' />
            </div>

          </div>

          <button className='bg-blue-600 font-semibold rounded-md text-white p-3'>Register</button>

          <p className='text-center'>have account already? <Link className='text-blue-600 ml-1 hover:underline' href='/login'>Log In</Link></p>

        </div>

      </div>

    </div>
  )
}

export default page
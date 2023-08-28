import Image from 'next/image'
import React from 'react'

import { HiMail } from 'react-icons/hi'
import { AiFillLock } from 'react-icons/ai'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to CarHub'
}

const page = () => {
  return (
    <div>

      <div className='py-10 px-5 max-w-[1440px] mx-auto flex justify-center items-center min-h-screen'>

        <div className='flex flex-col gap-8'>
          <div className='flex flex-col items-center gap-2'>
            <h2 className='text-3xl font-semibold'>Log in your Account</h2>
            <p className='text-gray-500'>Welcome back! Select method to log in:</p>
          </div>

          <div className='flex gap-4 text-center justify-around'>
            <button className='px-6 py-3 border rounded-md flex items-center gap-2 font-medium flex-1'>
              <Image src='/google.svg' alt='' width={30} height={30} />
              <p>Google</p>
            </button>
            <button className='px-6 py-3 border rounded-md flex items-center gap-2 font-medium flex-1'>
              <Image src='/facebook.svg' alt='' width={30} height={30} />
              <p>Facebook</p>
            </button>
          </div>

          <div className='relative w-full h-[1px] border'>
            <p className='absolute top-[-13px] left-[50%] translate-x-[-50%] w-[180px] text-center bg-white'>or continue with email</p>
          </div>

          <div className='flex flex-col gap-2'>
            <div className='relative'>
              <input type="text" placeholder='Email' className='p-3 border rounded-md bg-gray-100 pl-12 w-full outline-none' />
              <HiMail className='absolute top-1/2 -translate-y-1/2 left-4 text-gray-600 text-2xl' />
            </div>
            <div className='relative'>
              <input type="password" placeholder='Password' className='p-3 border rounded-md bg-gray-100 pl-12 w-full outline-none' />
              <AiFillLock className='absolute top-1/2 -translate-y-1/2 left-4 text-gray-600 text-2xl' />
            </div>
          </div>

          <div className='flex justify-between'>
            <label className='flex items-center gap-2'>
              <input type="checkbox" className='w-[20px] h-[20px] checked:bg-blue-600' />
              <p className='text-gray-500'>Remember me</p>
            </label>
            <p className='text-blue-600 hover:underline cursor-pointer'>Forget Password?</p>
          </div>

          <button className='bg-blue-600 font-semibold rounded-md text-white p-3'>Log in</button>

          <p>Don't have an account? <Link className='text-blue-600 ml-2 hover:underline' href='/register'>Create an account</Link></p>

        </div>

      </div>

    </div>
  )
}

export default page
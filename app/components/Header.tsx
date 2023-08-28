'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaXmark } from 'react-icons/fa6'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <header className='w-full z-10 border-b bg-white'>
            <div className='hidden  max-w-[1440px] m-auto py-2 px-6 md:flex justify-between items-center'>

                <Link href='/'>
                    <Image
                        src='/logo.svg'
                        alt='Car Hub Logo'
                        width={118}
                        height={18}
                    />
                </Link>
                <nav className='flex gap-8'>
                    <Link className='font-medium duration-300 hover:text-blue-400' href='/'>Home</Link>
                    <Link className='font-medium duration-300 hover:text-blue-500' href='/about'>About</Link>
                    <Link className='font-medium duration-300 hover:text-blue-500' href='/cars'>Cars</Link>
                    <Link className='font-medium duration-300 hover:text-blue-500' href='/testimonials'>Testimonials</Link>
                    <Link className='font-medium duration-300 hover:text-blue-500' href='/contact'>Contact</Link>
                </nav>
                <div className='flex items-center gap-5'>
                    <Link href='/login' className='font-semibold hover:text-blue-500 duration-300' >LogIn</Link>
                    <Link href='/register' className='font-semibold px-7 py-2.5 bg-blue-500 text-white rounded-md'>Register</Link>
                </div>

            </div>


            {/* Mobile Navbar */}
            <div className='md:hidden py-4 px-6 flex justify-between items-center relative z-10'>
                <Link href='/'>
                    <Image
                        src='/logo.svg'
                        alt='Car Hub Logo'
                        width={118}
                        height={18}
                    />
                </Link>
                <div onClick={() => setShowMenu(true)} className='text-2xl'>
                    <GiHamburgerMenu />
                </div>


                {/* Mobile Menu */}
                <div style={{ right: showMenu ? '-0%' : '-100%' }} className='fixed bg-slate-50 w-screen h-full top-0 duration-300 py-5'>


                    <div className='flex items-center justify-between px-5'>
                        <Link onClick={() => setShowMenu(false)} href='/'>
                            <Image
                                src='/logo.svg'
                                alt='Car Hub Logo'
                                width={118}
                                height={18}
                            />
                        </Link>
                        <div onClick={() => setShowMenu(false)} className='p-[10px] bg-slate-200 text-gray-600 rounded'>
                            <FaXmark />
                        </div>
                    </div>
                    <div className='mt-10 flex flex-col gap-5 items-center'>
                        <nav className='flex flex-col w-full'>
                            <Link onClick={() => setShowMenu(false)} className='font-medium duration-300 hover:text-blue-500 border-b p-5' href='/'>Home</Link>
                            <Link onClick={() => setShowMenu(false)} className='font-medium duration-300 hover:text-blue-500 border-b p-5' href='/about'>About</Link>
                            <Link onClick={() => setShowMenu(false)} className='font-medium duration-300 hover:text-blue-500 border-b p-5' href='/testimonials'>Testimonials</Link>
                            <Link onClick={() => setShowMenu(false)} className='font-medium duration-300 hover:text-blue-500 p-5' href='/contact'>Contact</Link>
                        </nav>
                        <div className='flex items-center gap-5 p-5'>
                            <Link href='/login' onClick={() => setShowMenu(false)} className='font-semibold bg-slate-300 px-7 py-2.5 rounded hover:text-blue-500 duration-300' >Sign In</Link>
                            <Link href='/register' onClick={() => setShowMenu(false)} className='font-semibold px-7 py-2.5 bg-blue-500 text-white rounded-md'>Register</Link>
                        </div>
                    </div>


                </div>


            </div>
        </header>
    )
}

export default Header
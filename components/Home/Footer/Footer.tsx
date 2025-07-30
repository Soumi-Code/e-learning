import Image from 'next/image'
import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='pt-20 pb-12 bg-black'>
      {/* Define grid */}
      <div className='w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white border-opacity-20'>
        {/* 1st footer part */}
        <div>
            <Image src="/images/logo.png" alt="logo" width={100} height={100}/>
            <p className='text-white text-opacity-50'>
                Empowering learners with quality content, expert guidance, and tools to grow anytime, anywhere.
            </p>
            {/* Social icons */}
            <div className='flex items-center space-x-4 mt-6'>
            <FaFacebookF className='w-6 h-6 text-blue-600'/>
            <FaTwitter className='w-6 h-6 text-sky-500'/>
            <FaYoutube className='w-6 h-6 text-red-700'/>
            <FaInstagram className='w-6 h-6 text-pink-600'/>
            </div>
        </div>
        {/* 2nd footer part */}
        <div>
            <h1 className='footer_heading'>Popular</h1>
            <p className='footer_link'>Web Development</p>
            <p className='footer_link'>Hacking</p>
            <p className='footer_link'>UI/UX Design</p>
            <p className='footer_link'>App Development</p>
            <p className='footer_link'>Desktop Development</p>
            <p className='footer_link'>Digital Marketing</p>
        </div>
        {/* 3rd footer part */}
        <div>
            <h1 className='footer_heading'>Quick Link</h1>
            <p className='footer_link'>Home</p>
            <p className='footer_link'>About</p>
            <p className='footer_link'>Courses</p>
            <p className='footer_link'>Instructor</p>
            <p className='footer_link'>Profile</p>
            <p className='footer_link'>Privacy policies</p>
        </div>
        {/* 4th footer part */}
        <div>
            <h1 className='footer_heading'>Subscribe to our newsletter</h1>
            <input 
            type="email"
            placeholder='Enter your email'
            className='px-6 py-2 rounded-lg outline-none bg-gray-700 w-full text-white'/>
            <button className='px-6 py-2 rounded-lg outline-none bg-rose-700 text-white mt-4'>Subscribe</button>
        </div>
      </div>
      <p className='text-center text-base text-white text-opacity-70 mt-4'>&copy; Copyright 2025. All rights reserved</p>
    </div>
  )
}

export default Footer

"use client";

import Image from 'next/image';
import React from 'react'
import { FaBriefcase } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt'

const Feature = () => {
  return (
    <section id="features" className="scroll-mt-[12vh]">
    <div className='pt-16 pb-16'>
      <div className='mt-8 grid grid-cols-1 xl:grid-cols-2 items-center gap-12 w-[80%] mx-auto'>
        {/* Image */}
        <Tilt>
            <div data-aos = "zoom-in" data-aos-anchor-placement="top-center">
                <Image src='/images/f.png' alt='image' width={1000} height={1000} />
            </div>
        </Tilt>
        <div>
            <div className='flex items-center space-x-4'>
                        <div className='w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center flex-col'>
                            <FaBriefcase className='h-6 w-6 text-white'/>
                        </div>
                        <h1 className='text-xl text-black font-semibold'>Premium learning experience</h1>
                    </div>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-8 font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[3.9rem] text-gray-800'>Providing amazing online courses.</h1>
                    <div className='mt-8 mb-6'>
                        <h1 className='text-lg md:text-2xl text-black text-opacity-70 font-semibold'>Master the skills that matter to you</h1>
                        <p className='text-sm md:text-base text-black text-opacity-70 mt-4'>Whether you're aiming for a promotion, career change, or personal development, our curated courses are tailored to help you succeed in today&apos;s fast-changing world.</p>
                    </div>
                    <div className='mt-8 mb-6'>
                        <h1 className='text-lg md:text-2xl text-black text-opacity-70 font-semibold'>Increase your learning skills</h1>
                        <p className='text-sm md:text-base text-black text-opacity-70 mt-4'>Boost your confidence with interactive lessons, practical projects, and expert support—available anytime, from anywhere.</p>
                    </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Feature

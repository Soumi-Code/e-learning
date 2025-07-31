import Link from 'next/link'
import React from 'react'
import { FaArrowRight, FaAward } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className="scroll-mt-[12vh]">
    <div className='pt-16 pb-16'>
      {/* define grid */}
      <div className='w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16'>
      {/* 1st part */}
      <div data-aos = "fade-right" data-aos-anchor-placement="top-center">
        <div className='flex items-center space-x-4'>
            <div className='w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center flex-col'>
                <FaAward className='h-6 w-6 text-white'/>
            </div>
            <h1 className='text-xl text-black font-semibold'>Guaranteed and certified</h1>
        </div>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-8 font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[3.9rem] text-gray-800'>Online learning wherever and whenever.</h1>
        <p className='mt-4 text-gray-600'>Gain access to top-quality courses taught by industry experts—available 24/7 from any device. Whether you're learning for career growth or personal development, we've got you covered.{" "}</p>
        <Link href="#features">
        <button className='flex items-center space-x-2 px-8 py-3 mt-8 hover:bg-gray-700 transition-all duration-200 rounded-3xl bg-black text-white'>
            <span>Learn More</span>
            <FaArrowRight />
        </button>
        </Link>
      </div>
      {/* 2nd part */}
      <div data-aos = "fade-left" data-aos-anchor-placement="top-center" data-aos-delay="150">
        <div>
            <h1 className='text-7xl lg:text-9xl font-bold text-black opacity-5'>
                01
            </h1>
            <div className='-mt-10'>
                <h1 className='text-xl md:text-2xl text-opacity-70 mb-3 text-black font-bold'>
                    Flexible Schedule
                </h1>
                <p className='w-[90%] lg:w-[70%] text-base text-black opacity-60'>Learn at your own pace with courses designed to fit around your busy life. Start, pause, and resume whenever it suits you best—no rigid deadlines or pressure.</p>
            </div>
        </div>
        <div className='mt-8 w-full'>
            <h1 className='text-7xl lg:text-9xl font-bold text-black opacity-5'>
                02
            </h1>
            <div className='-mt-10'>
                <h1 className='text-xl md:text-2xl text-opacity-70 mb-3 text-black font-bold'>
                    Pocket Friendly
                </h1>
                <p className='w-[90%] lg:w-[70%] text-base text-black opacity-60'>Get high-value education without breaking the bank. Our affordable pricing and free resources make learning accessible for everyone.</p>
            </div>
        </div>
       </div>
      </div>
    </div>
    </section>
  )
}

export default About

import React from 'react'
import Spline from '@splinetool/react-spline/next';

const page = () => {
  return (
    <div>
        <div className='h-screen flex justify-center items-center'>
        <div className="max-w-2xl text-center mx-auto">
      <h1 className="block text-3xl font-bold text-neutral-300 sm:text-4xl md:text-5xl dark:text-white">Wanna see how many homeless are counting on you right now? <span className=' text-[#ffff00] pt-2'>Scroll Down ❤️</span></h1>
      <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">Build your business here. Take it anywhere.</p>
    </div>
        </div>
        <div className='h-screen'>
        <Spline 
        scene="https://prod.spline.design/SJhrRzC6i2eLNZWD/scene.splinecode" 
        className=" inset-0 w-full h-full"
      />
        </div>
    </div>
  )
}

export default page
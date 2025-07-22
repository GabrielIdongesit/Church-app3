import React from 'react'
import {BsFillCircleFill } from 'react-icons/bs'
import Image from '../assets/eventimage.png';

const Booking = () => {
    return (
<button className="flex flex-col justify-center items-center space-x-5 space-y2 lg:flex-row lg:space-y-0 pr-[4rem] lg:justify-start w-full">
    <div className='flex -space-x-1'>
    <div className='w-12 h-12 rounded-full bg-white border items-center'>
        <img className='h-12 rounded-full w-12' src={Image} alt='' />
      </div>
      <div className='w-12 h-12 rounded-full bg-white border items-center'>
        <img className='h-12 rounded-full w-12' src={Image} alt='' />
      </div>
      <div className='w-12 h-12 rounded-full bg-white border items-center'>
        <img className='h-12 rounded-full w-12' src={Image} alt='' />
      </div>
      <div className='w-12 h-12 rounded-full bg-white border items-center'>
        <img className='h-12 rounded-full w-12' src={Image} alt='' />
      </div>
    </div>
    <div className='flex items-center space-x-2 font-secondary font-medium'>
      <BsFillCircleFill className='text-xs text-red-500 animate-pulse' />
    <div>1,500k members online </div>
    </div>
    </button>
    )
}

export default Booking


























































































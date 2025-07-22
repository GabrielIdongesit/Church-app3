import React from 'react';
import { AiFillPhone, AiOutlineClockCircle } from 'react-icons/ai';
// import { BsChatSquareDots } from 'react-icons/bs';
import LOGO from '../assets/logo1.png';

const TopBar = () => {
    return (
        <div className='flex top-0 sticky justify-between items-center px-1 py-1'>
            <div className="flex items-center">
                {/* <BsChatSquareDots size={30} className="text-[var(--primary-dark)] mr-2"/> */}
                <img className='lg:w-[50] sm:w-[40] rounded-xl object-cover p-1 max-h-[50px] lg:h-[50px]' src={LOGO} alt="" />
                <h1 className="lg:text-3xl sm:text-xl md:text-2xl font-bold text-[#057ffa]">The Pentecostal Church</h1>
            </div>
            <div className="flex">
                <div className="hidden md:flex items-center px-6">
                    <AiOutlineClockCircle size={20} className="mr-2 text-[var(--primary-dark)]" />
                    <p className='text-sm text-gray-700'>8:30AM - 1PM</p>
                </div>
                <div className="hidden md:flex items-center px-6">
                    <AiFillPhone size={20} className="mr-2 text-[var(--primary-dark)]" />
                    <p className='text-sm text-gray-700'>+234-70-6960-4620</p>
                </div>
                <button className='sm:text-[3px] lg:text-lg'>GET IN TOUCH</button>
            </div>
        </div>
    )
}

export default TopBar
import React, { useState } from 'react';
import { FaFacebookF, FaBars, FaTwitter, FaGooglePlusG, FaInstagram } from 'react-icons/fa';
const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <button className='w-full top-0 sticky min-h-[50px] flex justify-between items-center abolute z-20 text-white bg-[#5390ec]'>
            <ul className="hidden sm:flex">
                <li>
                    <a href="#home">HOME</a>
                </li>
                <li>
                    <a href="#event">EVENT</a>
                </li>
                <li>
                    <a href="#donate">DONATE</a>
                </li>
                <li>
                    <a href="#location">OUR LOCATION</a>
                </li>
            </ul>
            <div className="flex justify-between">
                <FaFacebookF className='mx-4 cursor-pointer' />
                <FaTwitter className='mx-4 cursor-pointer' />
                <FaGooglePlusG className='mx-4 cursor-pointer' />
                <FaInstagram className='mx-4 cursor-pointer' />
            </div>
            {/* Hamburger Icons? */}
            <div onClick={handleNav} className="sm:hidden z-10">
                <FaBars size={30} className='mr-4 cursor-pointer' />
            </div>
            {/* Mobile Menu */}
            <div onClick={handleNav} className={nav ? 'truncate overflow-y-hidden md:hidden ease-in-out duration-500 absolute text-gray-300 left-0 top-0 h-screen w-full bg-black/90 px-4 py-7 flex flex-col' : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'}>
                <ul className="h-full w-full text-center pt-12">
                    <li className="text-2xl py-8">
                    <a href="#home">HOME</a>
                    </li>
                    <li className="text-2xl py-8">
                    <a href="#event">EVENT</a>
                    </li>
                    <li className="text-2xl py-8">
                    <a href="#donate">DONATE</a>
                    </li>
                    <li className="text-2xl py-8">
                    <a href="#location">OUR LOCATION</a>
                    </li>
                </ul>
            </div>
        </button>
    )
}

export default Navbar
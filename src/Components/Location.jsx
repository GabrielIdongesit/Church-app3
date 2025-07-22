import React from 'react';
import fendzone3 from '../assets/hero.png';

const Location = () => {
    return (
        <div id='location' className="max-w-[1140px] m-auto w-full p-4 py-16">
            {/* <h2 className="text-center text-gray-700">Send us a message</h2> */}
            {/* <button className="text-center uppercase m-auto font-bold text-3xl text-gray-700 py-2">Our Location</button> */}
            <div className="grid md:grid-cols-2 gap-5">
            <div className="flex flex-col justify-center">
                <button className="bg-[#000000] hover:scale-105 duration-200 hover:bg-gray-400 hover:text-[#057ffa] rounded-tr-[1rem] rounded-bl-[1rem] w-[250px] rounded-md font-medium my-4 mx-auto md:mx-0 py-3 uppercase text-white">Our Location</button>
                <p className="font-bold text-[#057ffa] ">Where to find Us</p>
                <p>
                The Pentecostal Church is nestled in the heart of our community, easily accessible and welcoming to all who seek a place of peace, Fellowship, and Spiritual growth. Whether you're joining Us for a service, event, or simply seeking a quiet space for reflection, We are here for you.
                </p>
                <div className='mt-6'>
                    <h1 className='text-xl font-bold text-[#057ffa]'>Location</h1>
                <p>
                Our primary location is[Address]. Here you will find a welcoming atmosphere, ample parking, and facilities that cater to all ages and needs. Whether it's your first visit or one of many, you'll alwas be greeted  with a smile and the spirit of community.
                </p>
                </div>
                <div className='mt-6'>
                    <h1 className='text-xl font-bold text-[#057ffa]'>Service Time</h1>
                <p>
                Join us for our service at [service time]. Our service offers a unique experience of worship and community connection, uplifting your spirit and strengthing your faith.
                </p>
                </div>
                <button className="bg-[#000000] hover:scale-105 duration-200 hover:bg-gray-400 hover:text-[#0d67c2] rounded-tr-[1rem] rounded-bl-[1rem] w-[200px] rounded-md text-xl font-medium my-6 mx-auto md:mx-0 py-3 text-white">Join Us</button>
            </div>
                <div>

                {/* <input className='border m-2 p-2 col-span-2'type="text" placeholder="Enter your starting Address" /> */}
                <img className='w-full rounded-xl md:h-full object-cover p-2 max-h-[500px] h-[200px] ' src={fendzone3} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Location
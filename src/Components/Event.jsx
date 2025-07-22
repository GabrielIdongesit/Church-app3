import React from 'react';
import Image5 from'../assets/eventimage.png';
import  Image from'../assets/image.jpg';
import  Image2 from'../assets/image2.jpg';
import  Image3 from'../assets/image3.jpg';
import  Image4 from'../assets/image4.jpg';
import Online from '../Components/Online';

const Event = () => {
  return (
    <div id="event" className='max-w-[1140px] m-auto w-full px-4 py-16 '>
        <Online />
        <h2 className="text-center font-bold text-2xl uppercase text-[#057ffa] p-4">Event</h2>
        <div className="grid sm:grid-cols-5 gap-4">
            <div className="sm:col-span-3 col-span-2 row-span-2 ">
                <img className="w-full h-full object-cover" src={Image5} alt="" />
            </div>
            <div>
                <img className="w-full h-full object-cover" src={Image} alt="" />
            </div>
            <div>
                <img className="w-full h-full object-cover" src={Image2} alt="" />
            </div>
            <div>
                <img className="w-full h-full object-cover" src={Image3} alt="" />
            </div>
            <div>
                <img className="w-full h-full object-cover" src={Image4} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Event
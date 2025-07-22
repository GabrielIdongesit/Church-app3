import React from 'react';
import fendzone3 from'../assets/hero.png';

const Home = () => {
  return (
    <div id='home' className='max-w-[1640px mx-auto'>
      <div className='max-h-[500px] relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/50 flex flex-col justify-center text-center '>
          <h1 className='px-4 text-xl font-bold sm:text-5xl md:text-6xl lg:text-7xl'>WELCOME TO CHURCH</h1>
          <h1 className='px-4 text-sm pt-3 font-bold lg:text-xl'>Where Faith Comes Alive And Community Thrives.</h1>
          <div>
          <button className='hover:scale-105 duration-300  hover:bg-[white] hover:text-[blue] mt-10 border p-2 rounded-md shadow uppercase font-bold text-white font-style: italic mb-7'>Embrace Faith Now</button>
          </div>
        </div>
        <img className='w-full max-h-[500px] object-cover' src={fendzone3} alt="" />
      </div>
    </div>
  )
}

export default Home
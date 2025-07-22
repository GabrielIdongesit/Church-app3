import React, { useState } from 'react';

import ModalVideo from 'react-modal-video';
import '../modalVideo.scss';

import { BsPlayCircleFill } from 'react-icons/bs';

const Video = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="bg-[#534686]/30 py-6" data-aos='fade-up' data-aos-delay='400'>
      <div className="container mx-auto">
        <div className='flex flex-col justify-center items-center text-center lg:flex-row lg:justify-between'>
          <h3 className='font-semibold text-2xl mb-4 lg:mb-6'>Awesome Experiences with Spovest world</h3>
          <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId='NOk_M1Ib5F0' onClose={() => setIsOpen(false)} />
          <div className="bg-videoBg bg-no-repeat bg-cover w-[270px] h-[160px] flex items-center justify-center ">
            <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer'>
              <BsPlayCircleFill className='text-4xl text-white/80 hover:text-white  hover:scale-110 transition animate-spin' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Video;

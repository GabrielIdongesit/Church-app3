import React from 'react';
import fendzone3 from '../assets/hero.png';
import Robot from '../assets/robot.jpg';

const Contact = () => {
    return (
        <div id='donate' className="max-w-[1140px] m-auto w-full p-4 py-16">
            <div className='mb-4'>
            <h2 className="text-center text-xl text-[#057ffa]">Support Our Mission</h2>
            <p className="text-center text-lg text-[#057ffa] py-2">Empowering Change, Onee Donation at a Time</p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
                <div className='lg:col-span-2 lg:col-span-1 lg:row-span-3'>
                <img className='w-full sm:h-ful object-cover p-2 max-h-[500px] h-[250px]' src={fendzone3} alt="" />
                <div className=''>
                <div className='my-1 mb-2'>
                        <h1 className='font-bold text-[#057ffa]'>✔ Community Impact:</h1>
                        <p>Your contribution directly support our initiatives to imporove local communities, bringing tangible changes to the lives of those in need.</p>
                    </div>
                    <div className='my-1 mb-2'>
                        <h1  className='font-bold text-[#057ffa]'>✔ Sustainable Development:</h1>
                        <p>We focus on on sustainable solution that create lasting benefits, ensuring your generosity fosters long-term positive change.</p>
                    </div>
                    <div className='my-1 mb-2'>
                        <h1  className='font-bold text-[#057ffa]'>✔ Transparency and Accountbility:</h1>
                        <p>. Every donation is a trust placed in US, and we honor that with complete transparency and accountability in how funds are utilized.</p>
                    </div>
                </div>
                </div>
                <form>
                    <div className="m-2 mt-[-0.50rem]">
                    <div className="font-medium">
                                <h4 className="ml-2 mt-3 mb-1">Name*</h4>
                                <input className='p-2  border mx-auto md:mx-0 flex w-full rounded-md text-black' type="firstname" required />
                            </div>
                            <div className="font-medium">
                                <h4 className="ml-2 mt-3 mb-1">Last*</h4>
                                <input className='p-2 border mx-auto md:mx-0 flex w-full rounded-md text-black' type="firstname" required />
                            </div>
                            <div className="font-medium">
                                <h4 className="ml-2 mt-3 mb-1">Email*</h4>
                                <input className='p-2 border mx-auto md:mx-0 flex w-full rounded-md text-black' type="firstname" required />
                            </div>
                            <div>
                        <div className="font-medium">
                            <h1 className="ml-2 mt-3 mb-1">Amount</h1>
                        <select className='p-3 w-full bg-gray-10 border text-gray rounded-md'>
                        <option value="">1k</option>
                        <option value="">2k</option>
                        <option value="">3k</option>
                        <option value="">4k</option>
                        <option value="">5k</option>
                        <option value="">6k</option>
                        <option value="">7k</option>
                        <option value="">8k</option>
                        <option value="">9k</option>
                        <option value="">10k</option>
                        </select>
                        </div>
                    
                        <div className="flex mt-4 bg-white  border px-4  mr-" style={{ width: '100%' }}>
                                <input className="ml-8" type="radio" />
                                <div className="justify-evenl py-4 text-x mt-2 font-bold w-full ml-4">
                                    <h1 className="mb-2">I'm not a robot</h1>
                                </div>
                                <img className="h-10 mt-4 ml-[-4rem]" src={Robot} alt="/" />
                            </div>
                            </div>

                        <button className='my-2 w-full'>Make A Donation</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
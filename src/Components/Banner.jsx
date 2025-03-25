import React from 'react'
import { Link } from 'react-router-dom';
import Rectangle from "../assets/Rectangle.png";
{/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}

const Banner = () => {
    return (
        <>
           <section className='bg-[#FAFAFA] py-10 px-6 sm:px-6 lg:px-10 h-auto'>
    <div className='flex flex-col lg:flex-row'>
        <div className='mx-4 lg:ml-24.5 w-full lg:w-102 spacing-2'>
            <h3 className="text-2xl sm:text-3xl md:text-4xl text-[#7C6A46] mb-4 font-[Forte] font-bold">
                Paradise View
            </h3>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Hotel for every moment rich in emotion
            </h1>
            <p className="text-gray-1500 w-full sm:w-50">
                Every moment feels like the first time in paradise view
            </p>
            {/* Button Start */}
            <div className="flex items-center gap-4 mt-8">
                <button className="bg-[#7C6A46] text-white px-5 py-2 rounded-md hover:bg-blue-600 transition-colors">
                    Book Now
                </button>
                <button className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full hover:bg-orange-600 transition-colors ml-5">
                    <span className="w-0 h-0 border-t-4 border-b-4 border-l-6 border-t-transparent border-b-transparent border-l-white"></span>
                </button>
                <span className="text-black">Take a tour</span>
            </div>
            {/* Button End */}
        </div>
        {/* .............image................ */}
        <div className="mt-6 lg:mt-0">
            <img src={Rectangle} className="w-full sm:w-140 rounded h-auto sm:h-130 object-cover mx-auto lg:ml-32" alt="" />
        </div>
        {/* ............image..................*/}
    </div>

    
    {/* .............nav2.............. */}
    <div className='w-full lg:w-[1149px] h-auto bg-white sticky shadow-md py-6 px-4 lg:px-6 mx-auto mt-6 lg:-mt-32'>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 items-center'>
    
    {/* Location */}
    <div className="flex flex-col md:flex-row items-center">
      <i className="fa-solid fa-location-dot"></i>
      <span className='ml-2'>Location</span>
      <select className='ml-2 md:ml-1 w-full md:w-16'>
        <option>Abuja</option>
        <option>Rishikesh</option>
        <option>Dehradun</option>
        <option>Shyampur</option>
      </select>
    </div>

    {/* Room Type */}
    <div className='flex flex-col md:flex-row items-center'>
      <i className="fa-solid fa-hotel"></i>
      <span className='ml-2'>Room Type</span>
      <select className='ml-2 md:ml-2 w-full md:w-17'>
        <option>Standard</option>
        <option>Low</option>
        <option>High</option>
      </select>
    </div>

    {/* Person */}
    <div className='flex flex-col md:flex-row items-center md:ml-8'>
      <i className="fa-solid fa-house"></i>
      <span className='ml-2'>Person</span>
      <select className='ml-2 md:ml-2 w-full md:w-10'>
        <option>01</option>
        <option>02</option>
        <option>03</option>
        <option>04</option>
      </select>
    </div>

    {/* Check In */}
    <div className='flex flex-col md:flex-row items-center md:ml-2'>
      <i className="fa-solid fa-calendar"></i>
      <span className='ml-2'>Check In</span>
      <select className='ml-2 md:ml-2 w-full md:w-17'>
        <option>01/Mar/2025</option>
        <option>02/Mar/2025</option>
      </select>
    </div>

    {/* Check Out */}
    <div className='flex flex-col md:flex-row items-center md:ml-2'>
      <i className="fa-solid fa-calendar"></i>
      <span className='ml-2'>Check Out</span>
      <select className='ml-2 md:ml-2 w-full md:w-17'>
        <option>02/Mar/2025</option>
        <option>03/Mar/2025</option>
      </select>
    </div>

    {/* Book Now Button */}
    <button className="bg-[#7C6A46] text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors w-full md:w-35 md:ml-12 h-auto md:h-12">
      Book Now
    </button>

  </div>
</div>

    {/* ..............nav2.............. */}
</section>
        </>
    )
}

export default Banner
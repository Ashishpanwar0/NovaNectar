import React from 'react'
import { Link } from 'react-router-dom';
import Rectangle from "../assets/Rectangle.png";
{/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */ }

const Banner = () => {
  return (
    <>
      <section className='bg-[#FAFAFA] py-10 px-6 sm:px-6 lg:px-10 h-auto lg:h-160 flex justify-center'>
  <div className='max-w-7xl w-full'>
    <div className='flex flex-col lg:flex-row'>
      <div className='mx-4 lg:ml-24.5 w-full lg:w-102 spacing-2' data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine">
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
          <button className=" hover:scale-105 bg-[#7C6A46] text-white px-5 py-2 rounded-md hover:bg-blue-600 transition-colors">
            Book Now
          </button>
          <button className=" hover:scale-105 flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full hover:bg-orange-600 transition-colors ml-5">
            <span className="w-0 h-0 border-t-4 border-b-4 border-l-6 border-t-transparent border-b-transparent border-l-white"></span>
          </button>
          <span className="text-black">Take a tour</span>
        </div>
        {/* Button End */}
      </div>
      {/* .............image start................ */}
      <div className="mt-6 lg:mt-0">
        <img data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="10" data-aos-duration="500" src={Rectangle} className="w-full sm:w-140 rounded h-auto sm:h-140 object-cover mx-auto lg:ml-28" alt="" />
      </div>
      {/* ............image End..................*/}
    </div>

    {/* .............nav2 Start.............. */}
    <div className='w-full max-w-[1116px] text-[15px] h-auto bg-white sticky shadow-md py-6 px-4 lg:px-6 mx-auto mt-2 lg:-mt-30 rounded-sm'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center'>

        {/* Location */}
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <i className="fa-solid fa-location-dot text-lg"></i>
          <span className='ml-2 text-[14px]'>Location</span>
          <select className='ml-2 w-full sm:w-24 lg:w-20 h-10 rounded-md border border-gray-300'>
            <option>Abuja</option>
            <option>Rishikesh</option>
            <option>Dehradun</option>
            <option>Shyampur</option>
          </select>
        </div>

        {/* Room Type */}
        <div className='flex flex-col sm:flex-row items-center justify-center lg:ml-5'>
          <i className="fa-solid fa-hotel text-lg"></i>
          <span className='ml-2 text-[14px]'>Room Type</span>
          <select className='ml-3 w-full sm:w-24 lg:w-20 h-10 rounded-md border border-gray-300'>
            <option>Standard</option>
            <option>Low</option>
            <option>High</option>
          </select>
        </div>

        {/* Person */}
        <div className='flex flex-col sm:flex-row items-center justify-center lg:ml-5'>
          <i className="fa-solid fa-house text-lg"></i>
          <span className='ml-2 text-[14px]'>Person</span>
          <select className='ml-3 w-full sm:w-16 lg:w-14 h-10 rounded-md border border-gray-300'>
            <option>01</option>
            <option>02</option>
            <option>03</option>
            <option>04</option>
          </select>
        </div>

        {/* Check In */}
        <div className='flex flex-col sm:flex-row items-center justify-center lg:ml-5'>
          <i className="fa-solid fa-calendar text-lg"></i>
          <span className='ml-2 text-[14px]'>Check In</span>
          <select className='ml-3 w-full sm:w-28 lg:w-24 h-10 rounded-md border border-gray-300'>
            <option>01/Mar/2025</option>
            <option>02/Mar/2025</option>
          </select>
        </div>

        {/* Check Out */}
        <div className='flex flex-col sm:flex-row items-center justify-center lg:ml-10'>
          <i className="fa-solid fa-calendar text-lg"></i>
          <span className='ml-2 text-[14px]'>Check Out</span>
          <select className='ml-3 w-full sm:w-28 lg:w-24 h-10 rounded-md border border-gray-300'>
            <option>02/Mar/2025</option>
            <option>03/Mar/2025</option>
          </select>
        </div>

        {/* Book Now Button */}
        <div className="flex justify-center lg:ml-8">
          <button className=" hover:scale-105 bg-[#7C6A46] text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors w-full sm:w-32 lg:w-28 h-10">
            Book Now
          </button>
        </div>
      </div>
    </div>
    {/* ..............nav2 End.............. */}
  </div>
</section>
    </>
  )
}

export default Banner
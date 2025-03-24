import React from 'react'
import { Link } from 'react-router-dom';
import facility6 from '../assets/facility6.png'
import facility7 from '../assets/facility7.png';
import facility8 from '../assets/facility8.png';
import facility9 from '../assets/facility9.png';
import facility10 from '../assets/facility10.png';
import facility11 from '../assets/facility11.png';
import facility12 from '../assets/facility12.png';
import facility13 from '../assets/facility13.png';

const Facilities = () => {
  return (
    <>
    {/* ...............facilities start..............*/}
    <div className='mt-10 text-center py-7'>
        <h1 className='text-4xl text-gray-900 mb-5 font-bold'>Our Facilities</h1>
        <p className='font-bold'>We offer modern (5 star) hotel facilities for your comfort.</p>
      </div>

      <section className='flex flex-wrap justify-center md:justify-center lg:justify-between max-w-[1145px] mx-auto mt-10 gap-4'>
        <div className='w-full sm:w-[300px] md:w-[250px] h-40 text-center bg-[#FAFAFA] flex flex-col items-center justify-center rounded-lg shadow-md'>
          <i className="fa-solid fa-person-swimming text-4xl mb-3"></i>
          <p>Swimming Pool</p>
        </div>

        <div className='w-full sm:w-[300px] md:w-[250px] h-40 text-center bg-[#FAFAFA] flex flex-col items-center justify-center rounded-lg shadow-md'>
          <i className="fa-solid fa-wifi text-3xl mb-3"></i>
          <p>Wifi</p>
        </div>

        <div className='w-full sm:w-[300px] md:w-[250px] h-40 text-center bg-[#FAFAFA] flex flex-col items-center justify-center rounded-lg shadow-md'>
          <i className="fa-solid fa-mug-saucer text-3xl mb-3"></i>
          <p>Breakfast</p>
        </div>

        <div className='w-full sm:w-[300px] md:w-[250px] h-40 text-center bg-[#FAFAFA] flex flex-col items-center justify-center rounded-lg shadow-md'>
          <i className="fa-solid fa-dumbbell text-3xl mb-3"></i>
          <p>Gym</p>
        </div>
      </section>

      <section className='flex flex-wrap justify-center md:justify-center lg:justify-between max-w-[1145px] mx-auto mt-10 gap-4'>
        <div className='w-full sm:w-[300px] md:w-[250px] h-40 text-center bg-[#FAFAFA] flex flex-col items-center justify-center rounded-lg shadow-md'>
          <i className="fa-solid fa-person-swimming text-4xl mb-3"></i>
          <p>Swimming Pool</p>
        </div>

        <div className='w-full sm:w-[300px] md:w-[250px] h-40 text-center bg-[#FAFAFA] flex flex-col items-center justify-center rounded-lg shadow-md'>
          <i className="fa-solid fa-wifi text-3xl mb-3"></i>
          <p>Wifi</p>
        </div>

        <div className='w-full sm:w-[300px] md:w-[250px] h-40 text-center bg-[#FAFAFA] flex flex-col items-center justify-center rounded-lg shadow-md'>
          <i className="fa-solid fa-mug-saucer text-3xl mb-3"></i>
          <p>Breakfast</p>
        </div>

        <div className='w-full sm:w-[300px] md:w-[250px] h-40 text-center bg-[#FAFAFA] flex flex-col items-center justify-center rounded-lg shadow-md'>
          <i className="fa-solid fa-dumbbell text-3xl mb-3"></i>
          <p>Gym</p>
        </div>
      </section>
   {/* .................facilities end............. */}
    </>
  )
}

export default Facilities
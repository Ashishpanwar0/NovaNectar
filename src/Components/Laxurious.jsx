import React from 'react'
import { Link } from 'react-router-dom';
import Rectangle1 from "../assets/Rectangle1.png";
import Rectangle2 from "../assets/Rectangle2.png";
import Rectangle3 from "../assets/Rectangle3.png";
import HotalBack from "../assets/HotalBack.png";
import HotalBg from "../assets/HotalBg.png";

const Laxurious = () => {
  return (
    <>

      <section

        style={{ backgroundImage: `url(${HotalBack})` }}
        className="bg-cover h-auto relative overflow-hidden mt-10 p-4 sm:p-6 md:p-8 lg:p-10">
        <div
          style={{ backgroundImage: `url(${HotalBg})`, opacity: 1 }}
          className="absolute inset-0 bg-cover bg-center">
        </div>

        <h1 className='text-center text-3xl sm:text-3xl md:text-4xl text-white relative z-10 mt-5 font-bold'>
          Luxurious Rooms
        </h1>
        <span className="w-16 sm:w-20 md:w-20 h-1 bg-white mx-auto mt-3 flex items-center text-lg md:text-2xl relative z-10"></span>
        <p className='text-center text-sm sm:text-base md:text-xl mt-3 relative z-10 text-white font-bold'>
          All rooms are designed for your comfort
        </p>

        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="500" className="flex flex-col sm:flex-col md:flex-row flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-15 mt-8 sm:mt-10 md:mt-12 relative z-10">
          <div className=" cute bg-white border-1 w-full sm:w-80 md:w-90 md:h-95 h-auto border-white rounded-lg shadow-lg py-1 sm:py-2 md:py-1 px-4 object-cover mb-6 sm:mb-6 md:mb-0 relative">
            <div className="relative">
              <img src={Rectangle1} alt="" className=" hover:scale-105 w-full sm:w-[355px] md:w-[355px] h-[200px] sm:h-[250px] md:h-[250px] lg:h-[300px] rounded-lg object-cover mt-3 mx-auto" />
              <button
                className="absolute top-4 right-4 w-45 bg-[#7C6A46] text-white rounded-md hover:bg-blue-600 transition-colors py-1 px-3"
              >
                12 Rooms available
              </button>
            </div>
            <p className="my-3 text-center md:text-justify w-full sm:w-72 md:w-72">Television set, Extra sheets and Breakfast</p>
          </div>

          <div data-aos="fade-up"
     data-aos-duration="500" className="bg-white border-1 w-full sm:w-80 md:w-90 md:h-95 h-auto border-white rounded-lg shadow-lg py-1 sm:py-2 md:py-1 px-4 object-cover mb-6 sm:mb-6 md:mb-0 relative">
            <div className="relative">
              <img src={Rectangle2} alt="" className="hover:scale-105 w-full sm:w-[355px] md:w-[355px] h-[200px] sm:h-[250px] md:h-[250px] lg:h-[300px] object-cover rounded-lg mt-3 mx-auto" />
              <button
                className="absolute top-4 right-4 w-45 bg-[#7C6A46] text-white rounded-md hover:bg-blue-600 transition-colors py-1 px-3"
              >
                12 Rooms available
              </button>
            </div>
            <p className="my-3 text-center md:text-justify w-full sm:w-70 md:w-70">
              Television set, Extra sheets, Breakfast, and fireplace
            </p>
          </div>

          <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="500" className="bg-white border-1 w-full sm:w-80 md:w-90 md:h-95 h-auto border-white rounded-lg shadow-lg py-1 sm:py-2 md:py-1 px-4 object-cover relative">
            <div className="relative">
              <img src={Rectangle3} alt="" className=" hover:scale-105 w-full sm:w-[355px] md:w-[355px] h-[200px] sm:h-[250px] md:h-[250px] lg:h-[300px] rounded-lg object-cover mt-3 mx-auto" />
              <button
                className="absolute top-4 right-4 w-45 bg-[#7C6A46] text-white rounded-md hover:bg-blue-600 transition-colors py-1 px-3"
              >
                12 Rooms available
              </button>
            </div>
            <p className="my-3 text-center md:text-justify w-full sm:w-70 md:w-70">
              Television set, Extra sheets, Breakfast, and fireplace, Console and bed rest
            </p>
          </div>
        </div>
      </section>
      {/* ...............Luxurious Room End */}
    </>
  )
}

export default Laxurious
import React, { useState } from "react";
import videoplayback from '../assets/videoplayback.mp4';
import video from '../assets/video.png';
import Rectangle4 from '../assets/Rectangle4.png';
import Rectangle5 from '../assets/Rectangle5.png';
import Rectangle6 from '../assets/Rectangle6.png';

function BannerVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (

    <>
      <section className="bg-[#FAFAFA] relative pt-1">
        <div className="py-1 relative">
          {!isPlaying && (
            <div className="absolute inset-0 flex justify-center items-center">
              <img
                src={video}
                alt="Video Thumbnail"
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
              />
            </div>
          )}

          <video
            controls
            onPlay={() => setIsPlaying(true)}
            className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-sm shadow-lg object-cover"
          >
            <source src={videoplayback} type="video/mp4" />
          </video>
        </div>
      </section>


      <section className="mt-8 sm:mt-10 md:mt-16 lg:mt-21">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold">
          Take a Tour
        </h1>

        {/* .......Luxurious rooms Start...... */}
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-15 w-full sm:w-[90%] md:w-[80%] lg:w-280 mx-4 sm:mx-6 md:mx-auto lg:ml-28">
          <img src={Rectangle4} alt="" className="w-full object-cover" />
        </div>

        <div className="relative md:absolute w-[90%] sm:w-[80%] md:w-[70%] lg:w-[700px] h-auto lg:h-50 mx-auto sm:mx-6 md:ml-[10%] lg:ml-78 bg-[#FAFAFA] rounded-3xl mt-[-50px] sm:mt-[-75px] md:mt-[-100px] lg:mt-[-150px]">
          <span className="w-full lg:w-[700px] h-[20px] bg-[#7C6A46] rounded-t-4xl snap-center flex items-center mb-3 sm:mb-4 lg:mb-5"></span>
          <h1 className="text-center mb-3 sm:mb-4 lg:mb-5 text-lg sm:text-xl md:text-2xl text-[#7C6A46]">
            Luxurious rooms
          </h1>
          <p className="text-center w-[90%] sm:w-[85%] md:w-[80%] lg:w-155 mx-auto lg:ml-10 text-xs sm:text-sm md:text-base pb-4 sm:pb-3 lg:pb-0">
            The elegant luxury bedrooms in this gallery showcase custom interior designs & decorating ideas. View pictures and find your perfect luxury bedroom design. Luxurious bedrooms that will make you never want to leave your room again. See more ideas about luxurious bedrooms, bedroom design
          </p>
        </div>
        {/* ........Luxurious rooms End....... */}

        {/* ........Gym center start........... */}
        <div className="mt-16 sm:mt-18 md:mt-20 lg:mt-28 w-full sm:w-[90%] md:w-[80%] lg:w-280 mx-4 sm:mx-6 md:mx-auto lg:ml-28">
          <img src={Rectangle5} alt="" className="w-full object-cover" />
        </div>

        <div className="relative md:absolute w-[90%] sm:w-[80%] md:w-[70%] lg:w-[700px] h-auto lg:h-50 mx-auto sm:mx-6 md:ml-[10%] lg:ml-78 bg-[#FAFAFA] rounded-3xl mt-[-50px] sm:mt-[-75px] md:mt-[-100px] lg:mt-[-150px]">
          <span className="w-full lg:w-[700px] h-[20px] bg-[#7C6A46] rounded-t-4xl snap-center flex items-center mb-3 sm:mb-4 lg:mb-5"></span>
          <h1 className="text-center mb-3 sm:mb-4 lg:mb-5 text-lg sm:text-xl md:text-2xl text-[#7C6A46]">
            Gym center
          </h1>
          <p className="text-center w-[90%] sm:w-[85%] md:w-[80%] lg:w-155 mx-auto lg:ml-10 text-xs sm:text-sm md:text-base pb-4 sm:pb-3 lg:pb-0">
            The elegant luxury bedrooms in this gallery showcase custom interior designs & decorating ideas. View pictures and find your perfect luxury bedroom design. Luxurious bedrooms that will make you never want to leave your room again. See more ideas about luxurious bedrooms, bedroom design
          </p>
        </div>
        {/* ........Gym center end............. */}

        {/* .......Restaurant start....... */}
        <div className="mt-16 sm:mt-18 md:mt-20 lg:mt-28 w-full sm:w-[90%] md:w-[80%] lg:w-280 mx-4 sm:mx-6 md:mx-auto lg:ml-28">
          <img src={Rectangle6} alt="" className="w-full object-cover" />
        </div>

        <div className="relative md:absolute w-[90%] sm:w-[80%] md:w-[70%] lg:w-[700px] h-auto lg:h-50 mx-auto sm:mx-6 md:ml-[10%] lg:ml-78 bg-[#FAFAFA] rounded-3xl mt-[-50px] sm:mt-[-75px] md:mt-[-100px] lg:mt-[-150px]">
          <span className="w-full lg:w-[700px] h-[20px] bg-[#7C6A46] rounded-t-4xl snap-center flex items-center mb-3 sm:mb-4 lg:mb-5"></span>
          <h1 className="text-center mb-3 sm:mb-4 lg:mb-5 text-lg sm:text-xl md:text-2xl text-[#7C6A46]">
            Restaurant
          </h1>
          <p className="text-center w-[90%] sm:w-[85%] md:w-[80%] lg:w-155 mx-auto lg:ml-10 text-xs sm:text-sm md:text-base pb-4 sm:pb-3 lg:pb-0">
            The elegant luxury bedrooms in this gallery showcase custom interior designs & decorating ideas. View pictures and find your perfect luxury bedroom design. Luxurious bedrooms that will make you never want to leave your room again. See more ideas about luxurious bedrooms, bedroom design
          </p>
        </div>
        {/* ........Restaurant End...... */}
      </section>
    </>
  )
}

export default BannerVideo
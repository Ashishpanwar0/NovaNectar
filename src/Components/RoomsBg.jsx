import React from 'react';
import Rectangle4 from "../assets/Rectangle4.png";
import HotalBg from "../assets/HotalBg.png";
import Rectangle3 from '../assets/Rectangle3.png';
import Rectangle2 from '../assets/Rectangle2.png';
import Rectangle1 from '../assets/Rectangle1.png';

function RoomsBg() {
    return (
        <>
            {/* /////////About First Section start////////// */}
            <section
                style={{ backgroundImage: `url(${Rectangle4})` }}
                className="bg-cover bg-center h-80 md:h-100 lg:h-130 relative overflow-hidden"
            >
                <div
                    style={{ backgroundImage: `url(${HotalBg})`, opacity: 0.6 }}
                    className="absolute inset-0 bg-cover bg-center"
                >
                </div>

                <div className='w-full flex flex-col items-center mt-28 px-4'>
                    <h1 className='mb-5 text-center text-3xl md:text-4xl text-white font-bold relative z-10'>
                    Rooms and Suites
                    </h1>
                    <p className="mb-6 md:mb-10 text-center w-full md:w-auto lg:w-120 text-white text-base md:text-lg lg:text-1xl font-bold relative z-10">
                            The elegant luxury bedrooms in this gallery showcase custom interior designs & decorating ideas. View pictures and find your perfect luxury bedroom design.
                        </p>
                        <div className="flex justify-center w-full relative z-10">
                            <i className="fa-solid fa-arrow-down border-2 border-white rounded-3xl z-10 relative py-5 md:py-6 lg:py-7 px-2 md:px-3" style={{ fontSize: 20, color: "#f3eded" }}></i>
                            </div>
                </div>
            </section>
            {/* ////////About Fisrt Section End////////// */}


            {/* ..........About first row card start................ */}

            <section className='flex flex-col md:flex-row flex-wrap justify-center gap-8 md:gap-4 lg:gap-10 mt-10 md:mt-16 lg:mt-25 px-4 md:px-8 lg:px-0' data-aos="fade-up"
                data-aos-duration="3000">
                {/* First card */}
                <div className=' hover:scale-105  w-full md:w-[45%] lg:w-90 lg:h-110 bg-white mx-auto lg:mx-0 mb-16 md:mb-8 lg:mb-0 relative'>
                    <img src={Rectangle1} alt="" className='w-full' />

                    {/* Card text */}
                    <div className='relative lg:absolute bottom-0 bg-[#FAFAFA] h-auto lg:h-48 w-full z-10 p-4 lg:p-6'>
                        <div className='flex flex-col sm:flex-row sm:justify-between lg:space-x-13'>
                            <h1 className='text-xl lg:text-2xl mt-1'>
                                The Royal Room
                            </h1>
                            <span className='mt-1 lg:mt-3 text-sm'>
                                Available: Yes
                            </span>
                        </div>
                        <h1 className='mt-2 mb-2'>
                            ₦190,000
                        </h1>
                        <span className="w-full h-[1px] bg-[#7C6A46] snap-center flex mb-5"></span>
                        <div className='flex justify-between items-center'>
                            <div className='flex space-x-6 lg:space-x-12'>
                                <i className="fa-solid fa-tv"></i>
                                <i className="fa-solid fa-shower"></i>
                                <i className="fa-solid fa-wifi"></i>
                            </div>
                            <button className=" bg-[#7C6A46] text-white hover:bg-[#65563A] font-medium py-2 px-4 rounded transition-colors">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Second card */}
                <div className='w-full md:w-[45%] lg:w-90 lg:h-110 bg-white mx-auto lg:mx-0 mb-16 md:mb-8 lg:mb-0 relative hover:scale-105'>
                    <img src={Rectangle3} alt="" className='w-full' />

                    {/* Card text */}
                    <div className='relative lg:absolute bottom-0 bg-[#FAFAFA] h-auto lg:h-48 w-full z-10 p-4 lg:p-6'>
                        <div className='flex flex-col sm:flex-row sm:justify-between lg:space-x-13'>
                            <h1 className='text-xl lg:text-2xl mt-1'>
                                The Royal Room
                            </h1>
                            <span className='mt-1 lg:mt-3 text-sm'>
                                Available: Yes
                            </span>
                        </div>
                        <h1 className='mt-2 mb-2'>
                            ₦190,000
                        </h1>
                        <span className="w-full h-[1px] bg-[#7C6A46] snap-center flex mb-5"></span>
                        <div className='flex justify-between items-center'>
                            <div className='flex space-x-6 lg:space-x-12'>
                                <i className="fa-solid fa-tv"></i>
                                <i className="fa-solid fa-shower"></i>
                                <i className="fa-solid fa-wifi"></i>
                            </div>
                            <button className="bg-[#7C6A46] text-white hover:bg-[#65563A] font-medium py-2 px-4 rounded transition-colors">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Third card */}
                <div className='w-full md:w-[45%] lg:w-90 lg:h-110 bg-white mx-auto lg:mx-0 mb-16 md:mb-8 lg:mb-0 relative hover:scale-105'>
                    <img src={Rectangle2} alt="" className='w-full' />

                    {/* Card text */}
                    <div className='relative lg:absolute bottom-0 bg-[#FAFAFA] h-auto lg:h-48 w-full z-10 p-4 lg:p-6'>
                        <div className='flex flex-col sm:flex-row sm:justify-between lg:space-x-13'>
                            <h1 className='text-xl lg:text-2xl mt-1'>
                                The Royal Room
                            </h1>
                            <span className='mt-1 lg:mt-3 text-sm'>
                                Available: Yes
                            </span>
                        </div>
                        <h1 className='mt-2 mb-2'>
                            ₦190,000
                        </h1>
                        <span className="w-full h-[1px] bg-[#7C6A46] snap-center flex mb-5"></span>
                        <div className='flex justify-between items-center'>
                            <div className='flex space-x-6 lg:space-x-12'>
                                <i className="fa-solid fa-tv"></i>
                                <i className="fa-solid fa-shower"></i>
                                <i className="fa-solid fa-wifi"></i>
                            </div>
                            <button className="bg-[#7C6A46] text-white hover:bg-[#65563A] font-medium py-2 px-4 rounded transition-colors">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* ...........About first row card end............/ */}


            {/* ///////////////About second row card start//////// */}
            <section className='flex flex-col md:flex-row flex-wrap justify-center gap-8 md:gap-4 lg:gap-10 mt-10 md:mt-16 lg:mt-25 px-4 md:px-8 lg:px-0' data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                {/* First card */}
                <div className='w-full md:w-[45%] lg:w-90 lg:h-110 bg-white mx-auto lg:mx-0 mb-16 md:mb-8 lg:mb-0 relative hover:scale-105'>
                    <img src={Rectangle3} alt="" className='w-full' />

                    {/* Card text */}
                    <div className='relative lg:absolute bottom-0 bg-[#FAFAFA] h-auto lg:h-48 w-full z-10 p-4 lg:p-6'>
                        <div className='flex flex-col sm:flex-row sm:justify-between lg:space-x-13'>
                            <h1 className='text-xl lg:text-2xl mt-1'>
                                The Royal Room
                            </h1>
                            <span className='mt-1 lg:mt-3 text-sm'>
                                Available: Yes
                            </span>
                        </div>
                        <h1 className='mt-2 mb-2'>
                            ₦190,000
                        </h1>
                        <span className="w-full h-[1px] bg-[#7C6A46] snap-center flex mb-5"></span>
                        <div className='flex justify-between items-center'>
                            <div className='flex space-x-6 lg:space-x-12'>
                                <i className="fa-solid fa-tv"></i>
                                <i className="fa-solid fa-shower"></i>
                                <i className="fa-solid fa-wifi"></i>
                            </div>
                            <button className="bg-[#7C6A46] text-white hover:bg-[#65563A] font-medium py-2 px-4 rounded transition-colors">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Second card */}
                <div className='w-full md:w-[45%] lg:w-90 lg:h-110 bg-white mx-auto lg:mx-0 mb-16 md:mb-8 lg:mb-0 relative hover:scale-105'>
                    <img src={Rectangle1} alt="" className='w-full' />

                    {/* Card text */}
                    <div className='relative lg:absolute bottom-0 bg-[#FAFAFA] h-auto lg:h-48 w-full z-10 p-4 lg:p-6'>
                        <div className='flex flex-col sm:flex-row sm:justify-between lg:space-x-13'>
                            <h1 className='text-xl lg:text-2xl mt-1'>
                                The Royal Room
                            </h1>
                            <span className='mt-1 lg:mt-3 text-sm'>
                                Available: Yes
                            </span>
                        </div>
                        <h1 className='mt-2 mb-2'>
                            ₦190,000
                        </h1>
                        <span className="w-full h-[1px] bg-[#7C6A46] snap-center flex mb-5"></span>
                        <div className='flex justify-between items-center'>
                            <div className='flex space-x-6 lg:space-x-12'>
                                <i className="fa-solid fa-tv"></i>
                                <i className="fa-solid fa-shower"></i>
                                <i className="fa-solid fa-wifi"></i>
                            </div>
                            <button className="bg-[#7C6A46] text-white hover:bg-[#65563A] font-medium py-2 px-4 rounded transition-colors">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Third card */}
                <div className='w-full md:w-[45%] lg:w-90 lg:h-110 bg-white mx-auto lg:mx-0 mb-16 md:mb-8 lg:mb-0 relative hover:scale-105'>
                    <img src={Rectangle3} alt="" className='w-full' />

                    {/* Card text */}
                    <div className='relative lg:absolute bottom-0 bg-[#FAFAFA] h-auto lg:h-48 w-full z-10 p-4 lg:p-6'>
                        <div className='flex flex-col sm:flex-row sm:justify-between lg:space-x-13'>
                            <h1 className='text-xl lg:text-2xl mt-1'>
                                The Royal Room
                            </h1>
                            <span className='mt-1 lg:mt-3 text-sm'>
                                Available: Yes
                            </span>
                        </div>
                        <h1 className='mt-2 mb-2'>
                            ₦190,000
                        </h1>
                        <span className="w-full h-[1px] bg-[#7C6A46] snap-center flex mb-5"></span>
                        <div className='flex justify-between items-center'>
                            <div className='flex space-x-6 lg:space-x-12'>
                                <i className="fa-solid fa-tv"></i>
                                <i className="fa-solid fa-shower"></i>
                                <i className="fa-solid fa-wifi"></i>
                            </div>
                            <button className="bg-[#7C6A46] text-white hover:bg-[#65563A] font-medium py-2 px-4 rounded transition-colors">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ///////////////About  second row  End////////// */}
        </>
    )
}

export default RoomsBg
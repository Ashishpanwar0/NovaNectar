import React from 'react';
import { Link } from 'react-router-dom';
import rating from '../assets/rating.png';
import Ellipse1 from '../assets/Ellipse1.png';
import Ellipse2 from '../assets/Ellipse2.png';
import Ellipse3 from '../assets/Ellipse3.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function Testimonies() {
  return (
    <>
      {/* ......Testimonis...... */}
      <h1 className='text-center mt-10 text-4xl font-bold'>
        Testimonies
      </h1>
      {/* ......Testimonis...... */}

      <section className='w-full px-4 md:px-8'>
  <Swiper
    spaceBetween={20}
    slidesPerView={1}
    breakpoints={{
      640: { slidesPerView: 1 },
      1024: { slidesPerView: 2 },
      1280: { slidesPerView: 3 },
    }}
    pagination={{ clickable: true }}
    modules={[Pagination]}
    className="py-6"
  >
    <SwiperSlide>
      <div className='w-full mx-auto md:ml-3 mt-6 md:mt-10 border-1-white bg-[#FAFAFA] p-4 md:p-6 rounded-lg shadow-md flex flex-col h-auto md:h-125'>
        <div className='flex justify-between items-center mb-3 md:mb-5'>
          <p className="text-sm md:text-base">2 Mar, 2023</p>
          <img src={rating} alt="" className='w-24 md:w-30' />
        </div>
        <p className='text-justify text-gray-700 text-xs md:text-sm leading-relaxed'>
          <span className='text-3xl md:text-4xl text-amber-800 font-serif leading-none'>''</span>
          he service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved - you have set the bar very high
          <span className='text-3xl md:text-4xl text-amber-800 font-serif leading-none'>''</span>
        </p>
        <div className='flex mt-4 md:mt-7'>
          <img src={Ellipse1} alt="" className="w-8 md:w-auto" />
          <p className='ml-2 md:ml-4 mt-1 md:mt-2 text-gray-700 text-sm md:text-base'>Anthony Bruff</p>
        </div>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className='w-full mx-auto md:ml-3 mt-6 md:mt-10 border-1-white bg-[#FAFAFA] p-4 md:p-6 rounded-lg shadow-md flex flex-col h-auto md:h-125'>
        <div className='flex justify-between items-center mb-3 md:mb-5'>
          <p className="text-sm md:text-base">25 Mar, 2023</p>
          <img src={rating} alt="" className='w-24 md:w-30' />
        </div>
        <p className='text-justify text-gray-700 text-xs md:text-sm leading-relaxed'>
          <span className='text-3xl md:text-4xl text-amber-800 font-serif leading-none'>''</span>
          he service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved - you have set the bar very high
          <span className='text-3xl md:text-4xl text-amber-800 font-serif leading-none'>''</span>
        </p>
        <div className='flex mt-4 md:mt-7'>
          <img src={Ellipse2} alt="" className="w-8 md:w-auto" />
          <p className='ml-2 md:ml-4 mt-1 md:mt-2 text-gray-700 text-sm md:text-base'>Jamiyu Aliyu</p>
        </div>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className='w-full mx-auto md:ml-3 mt-6 md:mt-10 border-1-white bg-[#FAFAFA] p-4 md:p-6 rounded-lg shadow-md flex flex-col h-auto md:h-125'>
        <div className='flex justify-between items-center mb-3 md:mb-5'>
          <p className="text-sm md:text-base">5 Mar, 2023</p>
          <img src={rating} alt="" className='w-24 md:w-30' />
        </div>
        <p className='text-justify text-gray-700 text-xs md:text-sm leading-relaxed'>
          <span className='text-3xl md:text-4xl text-amber-800 font-serif leading-none'>''</span>
          he service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved - you have set the bar very high
          <span className='text-3xl md:text-4xl text-amber-800 font-serif leading-none'>''</span>
        </p>
        <div className='flex mt-4 md:mt-7'>
          <img src={Ellipse3} alt="" className="w-8 md:w-auto" />
          <p className='ml-2 md:ml-4 mt-1 md:mt-2 text-gray-700 text-sm md:text-base'>Regina Gella</p>
        </div>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className='w-full mx-auto md:ml-3 mt-6 md:mt-10 border-1-white bg-[#FAFAFA] p-4 md:p-6 rounded-lg shadow-md flex flex-col h-auto md:h-125'>
        <div className='flex justify-between items-center mb-3 md:mb-5'>
          <p className="text-sm md:text-base">5 Mar, 2023</p>
          <img src={rating} alt="" className='w-24 md:w-30' />
        </div>
        <p className='text-justify text-gray-700 text-xs md:text-sm leading-relaxed'>
          <span className='text-3xl md:text-4xl text-amber-800 font-serif leading-none'>''</span>
          he service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved - you have set the bar very high
          <span className='text-3xl md:text-4xl text-amber-800 font-serif leading-none'>''</span>
        </p>
        <div className='flex mt-4 md:mt-7'>
          <img src={Ellipse3} alt="" className="w-8 md:w-auto" />
          <p className='ml-2 md:ml-4 mt-1 md:mt-2 text-gray-700 text-sm md:text-base'>Regina Gella</p>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</section>
    </>
  )
}

export default Testimonies
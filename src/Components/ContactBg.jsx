import React from 'react';
import Rectangle4 from "../assets/Rectangle4.png";
import HotalBg from "../assets/HotalBg.png";


function ContactBg() {
  return (
   <>
   {/* About page first section start */}
   <section style={{ backgroundImage: `url(${Rectangle4})` }} className="bg-cover bg-center h-130 relative overflow-hidden">
                   <div style={{ backgroundImage: `url(${HotalBg})`, opacity: 0.6 }} className="absolute inset-0 bg-cover bg-center">
                   </div>
   
                   <div className='w-full flex flex-col items-center mt-28 px-4'>
                       <h1 className='mb-5 text-center text-3xl md:text-4xl text-white font-bold relative z-10'>
                       Contact Us
                       </h1>
                       <p className='mb-10 text-center text-white text-base md:text-lg font-bold relative z-10 lg:w-130 md:w-120 w-80'>
                           The elegant luxury bedrooms in this gallery showcase custom interior designs & decorating ideas. View pictures and find your perfect luxury bedroom design.
                       </p>
                   </div>
               </section>
       {/* About page first section end */}
   </>
  )
}

export default ContactBg
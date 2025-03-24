import React from 'react';
import Rectangle4 from "../assets/Rectangle4.png";
import HotalBg from "../assets/HotalBg.png";


function ContactBg() {
  return (
   <>
   {/* About page first section start */}
   <section
  style={{ backgroundImage: `url(${Rectangle4})` }}
  className="bg-cover bg-center h-[400px] sm:h-[450px] md:h-[500px] lg:h-[500px] relative overflow-hidden flex items-center justify-center text-center px-4"
>
  {/* Background Overlay */}
  <div
    style={{ backgroundImage: `url(${HotalBg})`, opacity: 0.6 }}
    className="absolute inset-0 bg-cover bg-center"
  ></div>

  {/* Content */}
  <div className="relative z-10 max-w-2xl px-6">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-white font-bold mb-4 mt-[-90px] sm:mt-[-160px] md:mt-[-160px]">
      Contact Us
    </h1>
    <p className="text-sm sm:text-base md:text-lg text-white font-medium w-120">
      The elegant luxury bedrooms in this gallery showcase custom interior
      designs & decorating ideas. View pictures and find your perfect luxury
      bedroom design.
    </p>
  </div>
</section>
       {/* About page first section end */}
   </>
  )
}

export default ContactBg
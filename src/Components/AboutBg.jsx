import React from 'react';
import Rectangle4 from "../assets/Rectangle4.png";
import HotalBg from "../assets/HotalBg.png";
import MrsPhoto from '../assets/MrsPhoto.png';
import AboutLogo from '../assets/AboutLogo.png';



function AboutBg() {
    return (
        <>
            {/* About page first section start */}
            <section style={{ backgroundImage: `url(${Rectangle4})` }} className="bg-cover bg-center h-130 relative overflow-hidden">
                <div style={{ backgroundImage: `url(${HotalBg})`, opacity: 0.6 }} className="absolute inset-0 bg-cover bg-center">
                </div>

                <div className='w-full flex flex-col items-center mt-28 px-4'>
                    <h1 className='mb-5 text-center text-3xl md:text-4xl text-white font-bold relative z-10'>
                        About Us
                    </h1>
                    <p className='mb-10 text-center text-white text-base md:text-lg font-bold relative z-10 lg:w-130 md:w-120 w-80'>
                        The elegant luxury bedrooms in this gallery showcase custom interior designs & decorating ideas. View pictures and find your perfect luxury bedroom design.
                    </p>
                </div>
            </section>
            {/* About page first section end */}


            {/* ////////////////About Second Section Start////////////////// */}
            <section className="flex flex-col lg:flex-row w-full mt-25 lg:mt-28 px-4 lg:px-20" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                {/* First div start */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start lg:ml-20 lg:mt-2">
                    <div className="w-[300px] sm:w-[350px] lg:w-[400px] h-[380px] sm:h-[420px] lg:h-[480px] bg-[#7C6A46] relative">
                        <img
                            src={MrsPhoto}
                            alt="Chidinma James"
                            className="w-[300px] sm:w-[350px] lg:w-[400px] h-[380px] sm:h-[420px] lg:h-[480px] absolute top-[-30px]  shadow-lg ml-6 mt-2"
                        />
                    </div>
                    <h1 className="mt-6 text-xl sm:text-2xl font-bold text-center lg:ml-13">
                        Chidinma James (Manager)
                    </h1>
                </div>
                {/* First div end */}

                {/* Second div start */}
                <div className="w-full lg:w-1/2 mt-6 lg:mt-0 text-justify text-[10px] sm:text-[14px] leading-6 lg:leading-7 px-2 sm:px-6">
                    <p>
                        The United Nations is an international organization founded in 1945. Currently made up of 193 Member States, the UN and its work are guided by the purposes and principles contained in its founding Charter.
                        <br />
                        The UN has evolved over the years to keep pace with a rapidly changing world. But one thing has stayed the same: it remains the one place on Earth where all the world’s nations can gather together, discuss common problems, and find shared solutions that benefit all of humanity. The Secretary-General is Chief Administrative Officer of the UN – and is also a symbol of the Organization's ideals and an advocate for all the world's peoples, especially the poor and vulnerable.
                        <br /><br />
                        The Secretary-General is appointed by the General Assembly on the recommendation of the Security Council for a 5-year, renewable term. The current Secretary-General, and the 9th occupant of the post, is António Guterres of Portugal, who took office on 1 January 2017. On the 18th of June, 2021, Guterres was re-appointed to a second term, pledging as his priority to continue helping the world chart a course out of the COVID-19 pandemic.
                        <br />
                    </p>
                </div>
                {/* Second div end */}
            </section>
            {/* ///////////////About Second Section End////////////////// */}

            {/* ///////////////////start///////////////// */}
            <div className="text-center mt-15 sm:mt-12 lg:mt-16 px-4">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">
                    Clients
                </h1>
                <div className="flex justify-center">
                    <img
                        src={AboutLogo}
                        alt="Clients Logo"
                        className="w-[600px] sm:w-[600px] md:w-[600px] lg:w-[900px] h-auto"
                    />
                </div>
            </div>
            {/* ///////////////////End///////////////// */}
        </>
    )
}

export default AboutBg
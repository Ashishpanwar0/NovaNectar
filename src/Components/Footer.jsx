import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <section className='w-full bg-[#7C6A46] py-8 md:py-12 mt-30'>
                <div className='container mx-auto px-4'>
                    <div className='flex flex-col md:flex-row flex-wrap'>
                        <div className='w-full  mb-8 md:mb-4 md:w-55 md:ml-13'>
                            <h3 className="text-xl md:text-4xl text-white mb-4 font-[Forte]">
                                Paradise View
                            </h3>
                            <p className='text-justify text-[14px] md:w-80 text-white'>
                                The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us)
                            </p>
                        </div>
                        {/* ........other...... */}
                        <div className='flex md:ml-13 md-w-full md:mt-2 '>

                            <div className='w-full mb-8 md:w-25 lg:ml-28'>
                                <h3 className='text-lg md:text-xl mb-4 text-white'>
                                    Quick links
                                </h3>
                                <div className='text-white text-sm flex flex-col gap-4 text-bold'>
                                    <Link className="text-white hover:text-gray-200 transition-colors">Room booking</Link>

                                    <Link className="text-white hover:text-gray-200 transition-colors">Rooms</Link>

                                    <Link className="text-white hover:text-gray-200 transition-colors">Contact</Link>

                                    <Link className="text-white hover:text-gray-200 transition-colors">Explore</Link>
                                </div>
                            </div>

                            <div className='w-full mb-8 md:ml-18 md:w-28 lg:ml-15'>
                                <h3 className='text-lg md:text-xl mb-4 text-white'>
                                    Company
                                </h3>
                                <div className='text-white text-sm flex flex-col gap-4 text-bold'>
                                    <Link className="text-white hover:text-gray-200 transition-colors">Privacy policy</Link>

                                    <Link className="text-white hover:text-gray-200 transition-colors">Refund policy</Link>

                                    <Link className="text-white hover:text-gray-200 transition-colors">F.A.Q</Link>

                                    <Link className="text-white hover:text-gray-200 transition-colors">About</Link>
                                </div>
                            </div>

                            <div className='w-full mb-8 md:ml-15 md:w-28 lg:ml-15'>
                                <h3 className='text-lg md:text-xl mb-4 text-white'>
                                    Social media
                                </h3>
                                <div className='text-white text-sm flex flex-col gap-4 text-bold'>
                                    <Link className="text-white hover:text-gray-200 transition-colors">Facebook</Link>

                                    <Link className="text-white hover:text-gray-200 transition-colors">Instagram</Link>

                                    <Link className="text-white hover:text-gray-200 transition-colors">LinkedIn</Link>

                                    <Link className="text-white hover:text-gray-200 transition-colors">Twitter</Link>
                                </div>
                            </div>
                        </div>
                        {/* .........other...... */}

                        {/* news letter......... */}
                        <div className='w-full lg:w-1/5 mb-8 md:ml-14 md:mt-2'>
                            <h3 className='text-lg md:text-xl mb-4 text-white'>
                                Newsletter
                            </h3>
                            <p className='text-white text-sm text-justify mb-4'>
                                Kindly subscribe to our newsletter to get latest deals on our rooms and vacation discount.
                            </p>

                            <div className="relative w-full max-w-md">
                                <input type="email" placeholder="Enter your email" className="w-full bg-white px-4 py-3 border border-gray-300 rounded-md focus:outline-none pr-24" />
                                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-[#7C6A46] text-white rounded hover:bg-blue-600 transition">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                        {/* news Letter.......... */}
                    </div>
                    <div className="w-full h-px bg-white mt-8 md:mt-12 md:w-full"></div>
                    <div className="text-center mt-4 md:mt-6 text-white">Paradise view 2023</div>
                </div>
            </section>
        </>
    )
};

export default Footer;
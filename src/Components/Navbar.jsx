import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full h-[85px] bg-[#FAFAFA] py-4 px-4 md:px-8 relative z-20" style={{ zIndex: "999" }}>
            <div className="container mx-auto flex items-center justify-between mt-3">
                <div className="font-bold text-xl text-gray-800 ml-0 md:ml-22">
                    <img src={logo} className="h-8 md:h-10 w-auto ml-5" alt="Hotel Logo" />
                </div>

                <button
                    className="md:hidden text-gray-800 focus:outline-none text-3xl"
                    onClick={() => setIsOpen(!isOpen)} >
                    ☰
                </button>
                <div className="md:flex space-x-8 lg:space-x-18 items-center font-bold hidden animate-slide-down">
                    <Link to="/" className="text-black-500 hover:text-[#7C6A46] transition-colors duration-300 hover:scale-105 pr-4 hover:underline decoration-blue-500">Home</Link>
                    <Link to="/explore" className="text-black-500 hover:text-[#7C6A46] transition-colors hover:underline decoration-blue-500 hover:scale-105">Explore</Link>
                    <Link to="/rooms" className="text-black-500 hover:text-[#7C6A46] transition-colors hover:underline decoration-blue-500 hover:scale-105">Rooms</Link>
                    <Link to="/about" className="text-black-500 hover:text-[#7C6A46] transition-colors hover:underline decoration-blue-500 hover:scale-105">About</Link>
                    <Link to="/contact" className="text-black-500 hover:text-[#7C6A46] transition-colors hover:underline decoration-blue-500 hover:scale-105">Contact</Link>
                </div>
                <div className="hidden md:block">
                    <button className="bg-[#7C6A46] mr-4 lg:mr-20 text-white hover:bg-blue-700 font-medium py-2 px-4 rounded transition-colors font-bold hover:scale-105">
                        Book Now
                    </button>
                </div>
            </div>

            {isOpen && (
                <div data-aos="fade-left" className="md:hidden flex flex-col items-center bg-[#FAFAFA] py-4 space-y-3 shadow-lg absolute left-0 right-0 top-[85px] z-30 animate-slide-down">
                    <Link to="/" className="text-black-500 hover:text-[#7C6A46] transition-colors duration-300 hover:scale-105 pr-4">Home</Link>
                    <Link to="/explore" className="text-black-500 hover:text-[#7C6A46] transition-colors duration-300 hover:scale-105 pr-4">Explore</Link>
                    <Link to="/rooms" className="text-black-500 hover:text-[#7C6A46] transition-colors duration-300 hover:scale-105 pr-4">Rooms</Link>
                    <Link to="/about" className="text-black-500 hover:text-[#7C6A46] transition-colors duration-300 hover:scale-105 pr-4">About</Link>
                    <Link to="/contact" className="text-black-500 hover:text-[#7C6A46] transition-colors duration-300 hover:scale-105 pr-4">Contact</Link>
                    <button className="bg-[#7C6A46] hover:scale-105 text-white hover:bg-blue-700 font-medium py-2 px-4 rounded transition-colors duration-300 hover:scale-105 mr-4">
                        Book Now
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

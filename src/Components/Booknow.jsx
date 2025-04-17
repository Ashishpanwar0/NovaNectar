import React, { useState } from 'react';
import HotalBack from "../assets/HotalBack.png";
import HotalBg from "../assets/HotalBg.png";
import Rectangle from "../assets/Rectangle.png";

const Booknow = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        checkIn: '',
        checkOut: '',
        guests: 1,
        roomType: 'Single',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', form);
        alert("Booking submitted! We'll contact you soon.");
    };

    return (
        <>
            <section className='flex bg-[#FAFAFA]'>
            <div className="min-h-screen flex items-center justify-center p-6 z-10 w-170">
                <form
                    onSubmit={handleSubmit}
                    className="bg-[#FAFAFA] w-100% max-w-xl space-y-4"
                >
                    <h2 className="text-2xl font-bold text-center  mb-4">Book Your Room</h2>

                    <input
                        name="name" type="text" placeholder="Full Name" value={form.name} onChange={handleChange} required className="border border-gray-300 w-full py-3 pl-3 mt-2 rounded-lg"
                    />

                    <input name="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} required className="border border-gray-300 w-full py-3 pl-3 mt-2 rounded-lg"
                    />

                    <input name="phone" type="text" placeholder="Phone Number" value={form.phone} onChange={handleChange} required className="border border-gray-300 w-full py-3 pl-3 mt-2 rounded-lg"
                    />

                    <div className="flex gap-4">
                        <input name="checkIn" type="date" value={form.checkIn} onChange={handleChange} required className="border border-gray-300 w-full py-3 pl-3 mt-2 rounded-lg"
                        />
                        <input name="checkOut" type="date" value={form.checkOut} onChange={handleChange} required className="border border-gray-300 w-full py-3 pl-3 mt-2 rounded-lg"
                        />
                    </div>

                    <div className="flex gap-4">
                        <input name="guests" type="number" min="1" value={form.guests} onChange={handleChange} className="border border-gray-300 w-full py-3 pl-3 mt-2 rounded-lg"
                        />
                        <select name="roomType" value={form.roomType} onChange={handleChange} className="w-full p-3 border rounded-xl"
                        >
                            <option>Single</option>
                            <option>Double</option>
                            <option>Suite</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#7C6A46] text-white font-semibold p-3 rounded-xl hover:bg-blue-700"
                    >
                        Book Now
                    </button>
                </form>
            </div>

            <div className='mt-18'>
                <img src={Rectangle} alt="" className='h-135 w-135 rounded-xl' />
            </div>
            </section>
        
        </>
    );
};

export default Booknow;
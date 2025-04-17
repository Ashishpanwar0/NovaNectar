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
            <section className="flex flex-col lg:flex-row bg-[#FAFAFA] p-4 lg:p-8">
                <div className="flex-1 flex items-center justify-center min-h-screen p-4 lg:p-6 z-10">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-[#FAFAFA] w-full max-w-xl space-y-4"
                    >
                        <h2 className="text-2xl font-bold text-center mb-4">Book Your Room</h2>

                        <input
                            name="name"
                            type="text"
                            placeholder="Full Name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="border border-gray-300 w-full py-3 pl-3 rounded-lg"
                        />

                        <input
                            name="email"
                            type="email"
                            placeholder="Email Address"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="border border-gray-300 w-full py-3 pl-3 rounded-lg"
                        />

                        <input
                            name="phone"
                            type="text"
                            placeholder="Phone Number"
                            value={form.phone}
                            onChange={handleChange}
                            required
                            className="border border-gray-300 w-full py-3 pl-3 rounded-lg"
                        />

                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                name="checkIn"
                                type="date"
                                value={form.checkIn}
                                onChange={handleChange}
                                required
                                className="border border-gray-300 w-full py-3 pl-3 rounded-lg"
                            />
                            <input
                                name="checkOut"
                                type="date"
                                value={form.checkOut}
                                onChange={handleChange}
                                required
                                className="border border-gray-300 w-full py-3 pl-3 rounded-lg"
                            />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                name="guests"
                                type="number"
                                min="1"
                                value={form.guests}
                                onChange={handleChange}
                                className="border border-gray-300 w-full py-3 pl-3 rounded-lg"
                            />
                            <select
                                name="roomType"
                                value={form.roomType}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-xl"
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

                <div className="flex-1 mt-10 lg:mt-0 flex justify-center items-center">
                    <img
                        src={Rectangle}
                        alt=""
                        className="w-full max-w-md h-auto rounded-sm"
                    />
                </div>
            </section>


        </>
    );
};

export default Booknow;
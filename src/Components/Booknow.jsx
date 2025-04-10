import React, { useState } from 'react';
import HotalBack from "../assets/HotalBack.png";
import HotalBg from "../assets/HotalBg.png";

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
        <section sclassName="h-[600px] w-full bg-no-repeat bg-cover bg-center inset-0"
        style={{
          backgroundImage: `url(${HotalBack}), url(${HotalBg})`,
          backgroundPosition: 'left center, right center',
        }}>
            <div className="min-h-screen flex items-center justify-center p-6 z-10">
                <form
                    onSubmit={handleSubmit}
                    className="bg-[white] p-8 rounded-xl w-full max-w-xl space-y-4"
                >
                    <h2 className="text-2xl font-bold text-center  mb-4">Book Your Room</h2>

                    <input
                        name="name" type="text" placeholder="Full Name" value={form.name} onChange={handleChange} required className="w-full p-3 border rounded-1xl"
                    />

                    <input name="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} required className="w-full p-3 border rounded-1xl"
                    />

                    <input name="phone" type="text" placeholder="Phone Number" value={form.phone} onChange={handleChange} required className="w-full p-3 border rounded-1xl"
                    />

                    <div className="flex gap-4">
                        <input name="checkIn" type="date" value={form.checkIn} onChange={handleChange} required className="w-full p-3 border rounded-1xl"
                        />
                        <input name="checkOut" type="date" value={form.checkOut} onChange={handleChange} required className="w-full p-3 border rounded-1xl"
                        />
                    </div>

                    <div className="flex gap-4">
                        <input name="guests" type="number" min="1" value={form.guests} onChange={handleChange} className="w-full p-3 border rounded-1xl"
                        />
                        <select name="roomType" value={form.roomType} onChange={handleChange} className="w-full p-3 border rounded-1xl"
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
        </section>
    );
};

export default Booknow;
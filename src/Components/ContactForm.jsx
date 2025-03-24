import React from 'react';



function ContactForm() {
  return (
    <>
   <section className="w-full bg-[#FAFAFA] pt-12 pb-12 px-4">
  <form action="" className="max-w-5xl mx-auto">
    {/* Name & Email Fields */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label htmlFor="name" className="text-lg md:text-2xl text-gray-700">
          Full Name
        </label>
        <br />
        <input
          type="text"
          name="name"
          placeholder="Ashish Panwar"
          required
          className="border border-gray-300 w-full py-3 pl-3 mt-2 rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-lg md:text-2xl text-gray-700">
          Email
        </label>
        <br />
        <input
          type="email"
          name="email"
          placeholder="ashiipanwar2020@gmail.com"
          required
          className="border border-gray-300 w-full py-3 pl-3 mt-2 rounded-lg"
        />
      </div>
    </div>

    {/* Message Field */}
    <div className="mt-6">
      <label htmlFor="message" className="text-lg md:text-2xl text-gray-700">
        Message
      </label>
      <br />
      <textarea
        name="message"
        placeholder="Enter your message..."
        required
        className="border border-gray-300 w-full h-[200px] md:h-[300px] pl-3 py-2 mt-2 rounded-lg"
      ></textarea>
    </div>

    {/* Submit Button */}
    <div className="flex justify-center mt-8">
      <button className="bg-[#7C6A46] text-white hover:bg-[#5a4d33] font-semibold py-3 px-6 w-40 rounded-lg transition duration-300">
        Submit
      </button>
    </div>
  </form>
</section>
    </>
  )
}

export default ContactForm
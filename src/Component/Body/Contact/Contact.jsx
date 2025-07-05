import React from 'react';

export default function Contact() {
  return (
    <div className="w-full min-h-screen bg-white py-10 px-4 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold text-[#2467aa] mb-6 text-center drop-shadow">
        Contact Winmer
      </h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">
        Have questions or want to get in touch with us? Fill out the form below or use our contact details. We look forward to hearing from you!
      </p>
      <div className="w-full max-w-xl bg-gray-50 rounded-lg shadow p-6 mb-8">
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 w-full"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 w-full"
            required
          />
          <input
            type="tel"
            placeholder="Your Phone Number"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 w-full"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 w-full resize-none"
            required
          />
          <button
            type="submit"
            className="bg-[#2467aa] text-white font-semibold py-2 rounded hover:bg-[#1d4f7a] transition w-full"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="text-center text-gray-700 w-full max-w-xl">
        <div className="flex flex-col md:flex-row md:justify-between gap-2 md:gap-0 mb-2">
          <p className="font-semibold">
            Email: <a href="mailto:info@winmer.com" className="text-blue-600 hover:underline break-all">info@winmer.com</a>
          </p>
          <p className="font-semibold">
            Phone: <a href="tel:+911234567890" className="text-blue-600 hover:underline">+91 12345 67890</a>
          </p>
          <p className="font-semibold">
            Mobile: <a href="tel:+919876543210" className="text-blue-600 hover:underline">+91 98765 43210</a>
          </p>
        </div>
        <p className="font-semibold">
          Address: 123, Industrial Area, City, State, India
        </p>
      </div>
    </div>
  );
}
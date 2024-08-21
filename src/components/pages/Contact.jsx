// import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-teal-700 via-teal-800 to-teal-900 text-white p-8 shadow-lg">
     <h2 className="text-3xl font-extrabold mb-6 border-b-2 border-green-500 inline-block text-center w-full">
        Contact Us
      </h2>
      <div className="flex flex-col md:flex-row md:justify-between space-y-6 md:space-y-0">
        
        {/* Phone Section */}
        <div className="flex items-center space-x-5 md:w-1/2">
          <div className="bg-green-600 p-4 rounded-full shadow-lg">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 7.89c.39.39.86.7 1.37.92a4.992 4.992 0 002.5 0c.51-.22.98-.53 1.37-.92L21 8m-9 13l1-1m-4 0l1-1m-4 0l1-1m4 5V3m4 0v5m0 0l1 1m-2-1l-1 1" />
            </svg>
          </div>
          <div className="space-y-1">
            <p className="text-lg font-semibold">+88 01715614615</p>
            <p className="text-lg font-semibold">+88 01735016350</p>
          </div>
        </div>
        
        {/* Email Section */}
        <div className="flex items-center space-x-5 md:w-1/2 md:justify-end">
          <div className="bg-green-600 p-4 rounded-full shadow-lg">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12v1m-4-1v1m-4-1v1m5-10H8c-1.5 0-2.9.5-4 1.4L9.9 9.6c.5.5 1.3.6 2 .1l1-.6L9 3c-.4-.4-.9-.6-1.4-.7L6 2.1c-.7 0-1.3.3-1.8.9l-1.4 1.4c-.6.6-1 1.5-1 2.5l.1 3.9c0 1.6.6 3.1 1.6 4.2l2.7 2.7c1.1 1.1 2.7 1.6 4.2 1.6l3.9-.1c1 0 1.9-.4 2.5-1l1.4-1.4c.6-.6.9-1.4.9-2.1V7.1c0-.6-.1-1.3-.7-1.8l-1.4-1.4c-.6-.6-1.4-.9-2.1-.9L16 4h-2V3m1 0H9m4 0v1m0 2v4m0 0l1-1m-2-1l1 1" />
            </svg>
          </div>
          <div className="space-y-1 text-right">
            <p className="text-lg font-semibold">thakarparahighschool.ac.bd@gmail.com</p>
            <p className="text-lg font-semibold">info@thakarparahighschool.ac.bd</p>
            <p className="text-lg font-semibold">admission@thakarparahighschool.ac.bd</p>
          </div>
        </div>
      </div>

      {/* Address Section */}
      <div className="flex items-center justify-center space-x-5 mt-6">
        <div className="bg-green-600 p-4 rounded-full shadow-lg">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 7a7 7 0 00-10 0l-2 2a7 7 0 000 10l2 2a7 7 0 0010 0l2-2a7 7 0 000-10l-2-2zM8.3 13.7a1 1 0 011.4-1.4l.3.3.3-.3a1 1 0 111.4 1.4l-.3.3.3.3a1 1 0 01-1.4 1.4l-.3-.3-.3.3a1 1 0 01-1.4-1.4l.3-.3-.3-.3z" />
          </svg>
        </div>
        <p className="text-lg font-semibold">Thakarpara Bazar Road, Hafijabad, Panchagarh Sadar, Panchagarh, Bangladesh</p>
      </div>

      {/* Google Map Section */}
      <div className="mt-8">
        <iframe
          src="https://www.google.com/maps?q=26.386585,88.614521&hl=es;z=14&output=embed"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-md border-0 shadow-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;

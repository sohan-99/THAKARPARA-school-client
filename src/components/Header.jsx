import React from 'react';

const Header = () => {
  return (
    <header className="bg-yellow-100 p-4 flex flex-col md:flex-row justify-center md:justify-between items-center">
      <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
        <img src="https://i.ibb.co/kcyFQqh/download.png" alt="School Logo" className="h-14 md:h-18 w-14 md:w-18 rounded-lg" />
        <div className="text-center md:text-left md:ml-4 lg:ml-16">
          <a href="/" className="block">
            <h1 className="text-lg md:text-2xl font-bold text-green-800">
              THAKARPARA HIGH SCHOOL
            </h1>
          <p className="text-sm md:text-base">School Code: 126088, EIIN: 126088</p>
          </a>

        </div>
      </div>
      <div>
        <button className="bg-red-500 text-white px-3 py-2 md:px-4 md:py-2 rounded">Online Admission 2025</button>
      </div>
    </header>
  );
};

export default Header;

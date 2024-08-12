import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-600 text-white p-4">
      <div className="flex items-center justify-between">
        <button 
          className="md:hidden px-3 py-2 border rounded border-white"
          onClick={toggleMenu}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <ul 
        className={`md:flex md:items-center md:justify-center mt-2 md:mt-0 ${isOpen ? 'block' : 'hidden'}`}
      >
        <li><a href="#" className="block px-4 py-2">Home</a></li>
        <li><a href="#" className="block px-4 py-2">About</a></li>
        <li><a href="#" className="block px-4 py-2">Admission</a></li>
        <li><a href="#" className="block px-4 py-2">Result</a></li>
        <li><a href="#" className="block px-4 py-2">Contact</a></li>
        <li><a href="#" className="block px-4 py-2 text-red-500">Login</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

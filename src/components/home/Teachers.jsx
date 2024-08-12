import React from 'react';

const Teachers = () => {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold text-center">Meet Our Teachers</h2>
      <div className="mt-6 flex flex-wrap justify-around">
        <div className="w-1/4 p-4 text-center">
          <img src="https://via.placeholder.com/150" alt="Teacher 1" className="rounded-full mx-auto" />
          <h3 className="text-lg font-semibold mt-2">John Doe</h3>
          <p>Mathematics</p>
        </div>
        <div className="w-1/4 p-4 text-center">
          <img src="https://via.placeholder.com/150" alt="Teacher 2" className="rounded-full mx-auto" />
          <h3 className="text-lg font-semibold mt-2">Jane Smith</h3>
          <p>Science</p>
        </div>
        {/* Add more teachers as needed */}
        
      </div>
    </section>
  );
};

export default Teachers;

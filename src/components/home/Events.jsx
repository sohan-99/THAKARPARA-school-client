import React from 'react';

const Events = () => {
  return (
    <section className="py-10 bg-gray-100">
      <h2 className="text-2xl font-bold text-center">Upcoming Events</h2>
      <div className="mt-6 flex flex-wrap justify-around">
        <div className="w-1/3 p-4">
          <h3 className="text-lg font-semibold">Annual Science Fair</h3>
          <p>Date: September 15, 2024</p>
        </div>
        <div className="w-1/3 p-4">
          <h3 className="text-lg font-semibold">Sports Day</h3>
          <p>Date: October 10, 2024</p>
        </div>
        {/* Add more events as needed */}
      </div>
    </section>
  );
};

export default Events;

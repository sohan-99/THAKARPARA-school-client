import React from 'react';

const Test = () => {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold text-center">Testimonials</h2>
      <div className="mt-6 flex flex-wrap justify-around">
        <div className="w-1/3 p-4">
          <p>"This school has been a fantastic place for our child's growth."</p>
          <p>- Parent</p>
        </div>
        <div className="w-1/3 p-4">
          <p>"The teachers are very supportive and knowledgeable."</p>
          <p>- Student</p>
        </div>
        {/* Add more testimonials as needed */}
      </div>
    </section>
  );
};

export default Test;

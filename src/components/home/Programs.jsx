import React from 'react';

const Programs = () => {
  return (
    <section className="py-10 bg-gray-100">
      <h2 className="text-2xl font-bold text-center">Our Programs</h2>
      <div className="mt-6 flex flex-wrap justify-around">
        <div className="w-1/3 p-4">
          <h3 className="text-xl font-semibold">Primary Education</h3>
          <p>Building the foundation for lifelong learning.</p>
        </div>
        <div className="w-1/3 p-4">
          <h3 className="text-xl font-semibold">Secondary Education</h3>
          <p>Preparing students for higher education and beyond.</p>
        </div>
        <div className="w-1/3 p-4">
          <h3 className="text-xl font-semibold">Extracurricular Activities</h3>
          <p>Encouraging creativity and personal growth.</p>
        </div>
      </div>
    </section>
  );
};

export default Programs;

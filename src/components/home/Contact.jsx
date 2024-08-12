import React from 'react';

const Contact = () => {
  return (
    <section className="py-10 bg-gray-100">
      <h2 className="text-2xl font-bold text-center">Contact Us</h2>
      <div className="mt-6 max-w-lg mx-auto">
        <form>
          <div className="mb-4">
            <label className="block mb-1">Name</label>
            <input type="text" className="w-full px-4 py-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input type="email" className="w-full px-4 py-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Message</label>
            <textarea className="w-full px-4 py-2 border rounded" rows="4"></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

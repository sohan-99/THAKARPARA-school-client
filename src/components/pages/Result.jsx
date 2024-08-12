import React from 'react';

const Result = () => {
  return (
    <div>
      <div className="bg-green-600 text-white text-center my-4 p-4 text-xl font-bold">
        Result Page
      </div>
      <div className="m-5 font-sans">
        <div className="flex space-x-4">
          <a
            href="http://www.educationboardresults.gov.bd/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <div className="bg-blue-600 text-white text-center my-4 p-6 text-xl font-bold">
              Board Result
            </div>
          </a>
          <a
            href="https://eboardresults.com/en/ebr.app/home/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <div className="bg-blue-600 text-white text-center my-4 p-6 text-xl font-bold">
              Institution Result
            </div>
          </a>
        </div>
      </div>
      <div className="bg-blue-600 text-white text-center my-4 p-4 text-xl font-bold">
        Class Result
      </div>
      
    </div>
  );
};

export default Result;

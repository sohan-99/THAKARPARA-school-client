import React, { useState, useEffect } from 'react';

const NewsTicker = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString();
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString();
  };

  return (
    <div className="bg-gray-100 p-2 md:p-4 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center w-full md:w-auto mb-2 md:mb-0">
        <span className="bg-red-500 text-white px-2 py-1 rounded">News</span>
        <marquee className="ml-2 text-red-500 w-full text-xl md:w-auto">
          Thakarpara High School - It is a NON-GOVERNMENT School. This institute's EIIN number is 126088. This institute is located in THAKARPARA, PANCHAGARH, RANGPUR division. It's geographical area is PLAIN LAND. It offers classes up to Secondary level.
        </marquee>
      </div>
      <div className="bg-red-500 text-white px-2 py-1 rounded text-sm md:text-base">
        <span>Calendar</span> {formatDate(currentTime)} {formatTime(currentTime)}
      </div>
    </div>
  );
};

export default NewsTicker;

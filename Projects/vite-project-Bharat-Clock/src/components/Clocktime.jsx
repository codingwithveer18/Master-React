import React, { useState, useEffect } from "react";

const Clocktime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center">
      <p className="text-center text-white text-xl mx-2">
        This is the Current Date & Time :{" "}
      </p>
      <span className="bg-neutral-800 p-2 rounded-lg shadow-lg font-medium text-white text-lg">
        {currentTime.toLocaleDateString()} - {currentTime.toLocaleTimeString()}
      </span>
    </div>
  );
};

export default Clocktime;

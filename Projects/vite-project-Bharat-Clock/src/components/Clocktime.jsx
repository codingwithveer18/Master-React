import React, { useState, useEffect } from "react";

const Clocktime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-row items-center max-sm:flex-col">
      <p className="text-center text-lg mx-2 font-medium">
        Current Date & Time :{" "}
      </p>
      <span className="bg-neutral-800 p-2 rounded-lg outline-black font-medium text-white text-base">
        {currentTime.toLocaleDateString()} - {currentTime.toLocaleTimeString()}
      </span>
    </div>
  );
};

export default Clocktime;

import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-1/2 h-1/2 border flex flex-col items-center justify-center py-4">
      <div className="flex flex-col items-center justify-around h-full w-full">
        {children}
      </div>
    </div>
  );
};

export default Container;

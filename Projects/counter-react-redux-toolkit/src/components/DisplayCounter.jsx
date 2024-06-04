import React from "react";
import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const { counterVal } = useSelector((store) => store.counter);
  return <div className="text-xl">Counter Current Value : {counterVal}</div>;
};

export default DisplayCounter;

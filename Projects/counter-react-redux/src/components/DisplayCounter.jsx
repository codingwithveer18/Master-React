import React from "react";
import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counter = useSelector((store) => store.counter);
  return <div className="text-xl">Counter Current Value : {counter}</div>;
};

export default DisplayCounter;

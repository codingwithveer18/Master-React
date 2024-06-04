import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

const Controls = () => {
  const dispatch = useDispatch();
  const inputele = useRef();
  const handleincrement = () => {
    dispatch(counterActions.increment());
  };
  const handledecrement = () => {
    dispatch(counterActions.decrement());
  };
  const handleprivacy = () => {
    dispatch(privacyActions.privacytoggle());
  };
  const handleaddition = () => {
    dispatch(counterActions.addition({ num: inputele.current.value }));
    inputele.current.value = "";
  };
  const handlesubtract = () => {
    dispatch(counterActions.subtract({ num: inputele.current.value }));

    inputele.current.value = "";
  };
  return (
    <>
      <div>
        <button
          className="mx-2 bg-indigo-600 text-white p-2 rounded-md "
          onClick={handleincrement}
        >
          Increment
        </button>
        <button
          className="mx-2 bg-red-600 text-white p-2 rounded-md"
          onClick={handledecrement}
        >
          Decrement
        </button>
        <button
          className="mx-2 bg-yellow-600 text-white p-2 rounded-md"
          onClick={handleprivacy}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="flex flex-col my-4 px-4">
        <input
          type="number"
          name="add"
          id="add"
          className="p-2 border-black border-2 my-2"
          placeholder="Enter Number"
          ref={inputele}
        />
        <div className="flex w-full">
          <button
            className="mx-4 bg-indigo-600 text-white p-2 rounded-md"
            onClick={handleaddition}
          >
            Add
          </button>
          <button
            className="mx-4 bg-red-600 text-white p-2 rounded-md"
            onClick={handlesubtract}
          >
            Subtract
          </button>
        </div>
      </div>
    </>
  );
};

export default Controls;

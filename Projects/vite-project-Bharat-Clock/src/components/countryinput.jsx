import React from "react";

const Countryinput = ({ handleonclick, onenter }) => {
  // const handleonchange = (e) => {
  //   console.log(e.target.value);
  // };
  return (
    <>
      <div className="flex mx-4">
        <input
          className="rounded-lg p-2 w-4/5"
          placeholder="Press ENTER after writing Country's Name"
          type="text"
          onKeyDown={onenter}
          // onChange={handleonchange}
        />
        <button
          className="text-black bg-white w-1/5 p-1 rounded-md font-medium mx-2"
          onClick={handleonclick}
        >
          Clear
        </button>
      </div>

      {/* <button
        className={`${styles.button} btn btn-info`}
        onClick={handleonclick}
      >
        Add
      </button> */}
    </>
  );
};
export default Countryinput;

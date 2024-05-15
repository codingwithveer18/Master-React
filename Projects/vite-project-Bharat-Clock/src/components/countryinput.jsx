import React from "react";

const Countryinput = ({ handleonclick, onenter }) => {
  // const handleonchange = (e) => {
  //   console.log(e.target.value);
  // };
  return (
    <>
      <input
        className="rounded-lg p-2 my-2"
        placeholder="Press ENTER after writing Country's Name"
        type="text"
        onKeyDown={onenter}
        // onChange={handleonchange}
      />
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

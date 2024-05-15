import React from "react";

const Item = ({
  country,
  handleonclick,
  bought,
  timezone,
  currentTime,
  formatTime,
}) => {
  // let { country } = props;
  // & ({country}) are same
  // const buttonclicked = (event) => {
  //   console.log(event);
  //   console.log(`See you in ${country}`);
  // };
  return (
    <>
      <li
        className={`bg-white p-2 grid grid-cols-2 justify-between items-center rounded-md my-2 ${
          bought && "bg-neutral-400"
        }`}
      >
        <span className="font-medium text-xl text-black">{country}</span>

        <button
          className="bg-green-200 font-semibold p-2 rounded-md "
          onClick={handleonclick}
          // onClick={() => buttonclicked(country)}
          // or we can do this
          //-- Anonymous function -- onClick={() => (country)}
          // or we can do this
          //-- onClick={buttonclicked} -- just passing the reference
        >
          See
        </button>
      </li>
      <p className="p-2 font-medium text-white text-center text-xl">
        {formatTime(currentTime, timezone)}
      </p>
    </>
  );
};
export default Item;

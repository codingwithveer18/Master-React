import React from "react";

const Item = ({
  country,

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
      <table className="table-fixed">
        <thead>
          <tr className="text-white text-lg">
            <th className="p-2 font-light">Country</th>
            <th className="p-2 font-light">Timezone</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border text-white px-2">
            <td className="p-2 font-base text-center text-lg max-sm:text-sm border">
              <span>{country}</span>
            </td>
            <td className="p-2 font-base text-center text-lg max-sm:text-sm">
              <p className="">{formatTime(currentTime, timezone)}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default Item;

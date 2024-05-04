import Errormessage from "./errormessage";
import Zoneitem from "./zones";
import Container from "./Container";
import Countryinput from "./countryinput";
import { useState } from "react";

let Timezones = () => {
  // let countries = ["India - 1", "US - 6", "UK - 10 ", "Australia - 3"];

  // let textstatearr = useState("Country enterted by user");
  // let textToShow = textstatearr[0];
  // let setTextState = textstatearr[1];
  // Destructuring array
  //let [textToShow, setTextToShow] = useState();
  let [countries, setCountries] = useState([]);

  // console.log(`current value of textState:${textToShow}`);

  //let countries = [];

  // If-else statement
  // if (countries.length === 0) {
  //   return <h3>No time zone</h3>;
  // }

  // Conditional rendering
  // By Ternary operators
  // let empty = countries.length === 0 ? <h3>No time zone</h3> : null;

  // By Logical Operator
  // let condition = countries.length === 0 && <h3>No time zone</h3>;
  // const handleonchange = (event) => {
  //   //console.log(event.target.value);
  //   setTextToShow(event.target.value);
  // };
  const onenter = (event) => {
    if (event.key === "Enter" && event.target.value != "") {
      let newContry = event.target.value;
      event.target.value = "";
      let newcountryarr = [...countries, newContry];
      console.log("New country is : " + newContry);
      setCountries(newcountryarr);
    }
  };
  // const handleonclick = () => {
  //console.log("New country is : " + newContry);
  // };
  return (
    <Container>
      <h3 className="cn-heading">Number of Time Zones</h3>
      {/* {empty} */}
      {/* {condition} */}
      <Countryinput
        // handleonchange={handleonchange}
        onenter={onenter}
        // handleonclick={handleonclick}
      ></Countryinput>
      <Errormessage items={countries} />

      {/* <p>{textToShow}</p> */}
      <Zoneitem items={countries} />
    </Container>
  );
};

export default Timezones;

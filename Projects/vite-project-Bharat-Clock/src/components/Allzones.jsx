import Errormessage from "./errormessage";
import Zoneitem from "./zones";
import Container from "./Container.jsx";
import Countryinput from "./Countryinput.jsx";
import { useState } from "react";

let Timezones = () => {
  // let countries = ["India - 1", "US - 6", "UK - 10 ", "Australia - 3"];

  // let textstatearr = useState("Country enterted by user");
  // let textToShow = textstatearr[0];
  // let setTextState = textstatearr[1];
  // Destructuring array
  //let [textToShow, setTextToShow] = useState();
  let [countries, setCountries] = useState([]);
  let [error, setError] = useState("");
  const supportedCountries = ["INDIA", "US", "UK", "AUSTRALIA"];

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
  // const handleInputChange = (event) => {
  //   console.log(event.target.value);
  //   //setTextToShow(event.target.value);
  // };
  const onenter = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      let newCountry = event.target.value.trim();
      if (supportedCountries.includes(newCountry)) {
        setError("");
        if (!countries.includes(newCountry)) {
          let newCountryArr = [...countries, newCountry];
          console.log("New country is : " + newCountry);
          setCountries(newCountryArr);
        } else {
          setError("Country already added.");
        }
      } else {
        setError("Unsupported country entered or Write in UpperCase");
      }
      event.target.value = "";
    }
  };

  // const handleonclick = () => {
  //console.log("New country is : " + newContry);
  // };
  return (
    <div className="w-full flex justify-center mt-8 ">
      <Container>
        <h3 className="text-center font-medium text-xl text-white uppercase my-2">
          Different Countries Time
        </h3>
        {/* {empty} */}
        {/* {condition} */}
        <Countryinput
          // handleInputChange={handleInputChange}
          onenter={onenter}
          // handleonclick={handleonclick}
        ></Countryinput>
        {error && <Errormessage message={error} items={countries} />}

        {/* <p>{textToShow}</p> */}
        <Zoneitem items={countries} />
      </Container>
    </div>
  );
};

export default Timezones;

import Display from "./components/Display";
import Buttons from "./components/Buttons";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState(""); // Initialize as an empty string

  const val = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      try {
        const result = eval(calVal);
        setCalVal(result.toString());
      } catch (error) {
        setCalVal("Error");
      }
    } else {
      setCalVal((prevVal) => prevVal + buttonText);
    }
  };

  return (
    <>
      <div
        className="w-screen h-screen flex bg-cover"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/back-school-decoration-with-pencils-calculator-space_23-2147662344.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1715731200&semt=ais_user')",
        }}
      >
        <div className="z-0 flex flex-col justify-center items-center w-full">
          <h1 className="text-3xl text-white font-bold mb-4">Calculator</h1>
          <div className="w-[20rem] bg-slate-300 rounded-md p-4">
            <Display value={calVal} />
            <Buttons onbtnclick={val} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import styles from "./App.module.css";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import { useState } from "react";
function App() {
  const [calVal, setcalVal] = useState([]);

  const val = (buttonText) => {
    if (buttonText === "C") {
      setcalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setcalVal(result);
    } else {
      const newdisplay = calVal + buttonText;
      setcalVal(newdisplay);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display value={calVal} />
      <Buttons onbtnclick={val} />
    </div>
  );
}
export default App;

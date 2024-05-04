import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Clockname from "./components/Clockname";
import Clockslogan from "./components/Clockslogan";
import Clocktime from "./components/Clocktime";
import Timezones from "./components/Allzones";

function App() {
  return (
    <>
      <center className="clock-container">
        <Clockname />
        <Clockslogan />
        <Clocktime />
        <Timezones />
      </center>
    </>
  );
}

export default App;

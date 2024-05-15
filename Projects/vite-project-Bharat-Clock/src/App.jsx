import Clockname from "./components/Clockname";
import Clockslogan from "./components/Clockslogan";
import Clocktime from "./components/Clocktime";
import Timezones from "./components/Allzones";

function App() {
  return (
    <>
      <div
        className="w-screen h-screen bg-cover"
        style={{
          backgroundImage:
            "url('https://trumpwallpapers.com/wp-content/uploads/Clock-Wallpaper-39-1600x1000-1.jpg')",
        }}
      >
        <div className=" bg-gradient-to-t from-neutral-200/50 to-neutral-900/80 flex justify-center items-center h-full">
          <div className="w-1/3 flex flex-col items-center">
            <Clockname />
            <Clockslogan />
            <Clocktime />
          </div>
          <div className="w-2/3">
            <Timezones />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

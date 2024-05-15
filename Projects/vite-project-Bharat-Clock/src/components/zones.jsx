import { useState, useEffect } from "react";
import Item from "./zoneslist";
const Zoneitem = ({ items }) => {
  let [ActiveItems, SetActiveItems] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  let onSeeButton = (item, event) => {
    console.log(`See you in ${item}`);
    let newItems = [...ActiveItems, item];
    SetActiveItems(newItems);
  };
  const formatTime = (date, timezone) => {
    return new Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      dateStyle: "full",
      timeStyle: "long",
    }).format(date);
  };
  const getTimezone = (country) => {
    // Simple mock function, replace with actual mapping
    const timezones = {
      INDIA: "Asia/Kolkata",
      US: "America/New_York",
      UK: "Europe/London",
      AUSTRALIA: "Australia/Sydney",
    };
    return timezones[country.split(" ")[0]] || "UTC"; // Fallback to UTC
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <ul className="p-2 grid grid-cols-2">
        {items.map((item) => (
          <Item
            key={item}
            country={item}
            bought={ActiveItems.includes(item)}
            handleonclick={(event) => onSeeButton(item, event)}
            timezone={getTimezone(item)}
            currentTime={currentTime}
            formatTime={formatTime}
          />
        ))}
      </ul>
    </>
  );
};

export default Zoneitem;

import { useState } from "react";
import Item from "./zoneslist";
const Zoneitem = ({ items }) => {
  let [ActiveItems, SetActiveItems] = useState([]);

  let onSeeButton = (item, event) => {
    console.log(`See you in ${item}`);
    let newItems = [...ActiveItems, item];
    SetActiveItems(newItems); 
  };
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Item
            key={item}
            country={item}
            bought={ActiveItems.includes(item)}
            handleonclick={(event) => onSeeButton(item, event)}
          />
        ))}
      </ul>
    </>
  );
};

export default Zoneitem;

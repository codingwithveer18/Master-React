import Todoitem from "./Todoitem";
import { useContext } from "react";
import { ContextItems } from "../store/ContextItems";

const Todoitems = () => {
  const { todoItems } = useContext(ContextItems);
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <Todoitem key={item.name} item={item.name} date={item.duedate} />
      ))}
    </div>
  );
};
export default Todoitems;

import Todoitem from "./Todoitem";
import { useContext } from "react";
import { ContextItems } from "../store/ContextItems";

const Todoitems = () => {
  const { todoItems } = useContext(ContextItems);
  return (
    <div className="grid grid-cols-3 gap-2 m-4 max-lg:grid-cols-1">
      {todoItems.map((item) => (
        <Todoitem key={item.name} item={item.name} date={item.duedate} />
      ))}
    </div>
  );
};
export default Todoitems;

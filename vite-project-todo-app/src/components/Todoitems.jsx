import Todoitem from "./Todoitem";
import { useContext } from "react";
import { ContextItems } from "../store/ContextItems";

const Todoitems = () => {
  const contextObj = useContext(ContextItems);
  const todoitems = contextObj.todoItems;
  const onhandleDelete = contextObj.onhandleDelete;
  return (
    <div className="items-container">
      {todoitems.map((item) => (
        <Todoitem
          key={item.name}
          item={item.name}
          date={item.duedate}
          onhandleDelete={onhandleDelete}
        />
      ))}
    </div>
  );
};
export default Todoitems;

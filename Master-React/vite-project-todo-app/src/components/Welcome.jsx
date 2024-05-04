import { useContext } from "react";
import { ContextItems } from "../store/ContextItems";
const Welcome = () => {
  const contextObj = useContext(ContextItems);
  const todoitems = contextObj.todoItems;
  return todoitems.length === 0 && <p className="fs-1">ENJOY YOUR DAY</p>;
};
export default Welcome;

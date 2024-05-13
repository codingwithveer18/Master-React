import { useContext } from "react";
import { ContextItems } from "../store/ContextItems";
const Welcome = () => {
  const { todoItems } = useContext(ContextItems);
  return todoItems.length === 0 && <p className="fs-1">ENJOY YOUR DAY</p>;
};
export default Welcome;

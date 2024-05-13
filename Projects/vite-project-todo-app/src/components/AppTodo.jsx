import { useRef } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { useContext } from "react";
import { ContextItems } from "../store/ContextItems";

function AppTodo() {
  const todoNameElement = useRef();
  const dueDateElement = useRef();
  const { handleNewitem } = useContext(ContextItems);
  const handleAddbtn = (e) => {
    e.preventDefault();
    const todo = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    handleNewitem(todo, dueDate);
  };
  return (
    <div className="container">
      <form onSubmit={handleAddbtn} className="row my-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            required
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input type="date" required ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success my-button">
            <IoMdAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AppTodo;

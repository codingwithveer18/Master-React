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
    <div className="w-full shadow-md py-4 mt-2 ">
      <form onSubmit={handleAddbtn}>
        <div className="flex flex-row justify-evenly px-4 max-md:flex-col ">
          <input
            type="text"
            placeholder="Enter Todo Here"
            required
            ref={todoNameElement}
            className="text-md border-slate-500 border-2 rounded-md p-2 my-2 w-80 max-md:w-full "
          />
          <input
            type="date"
            required
            ref={dueDateElement}
            className="text-md border-slate-500 border-2 rounded-md p-2 my-2 w-80 max-md:w-full"
          />
          <button
            type="submit"
            className=" bg-green-600 p-4 rounded-lg text-md flex justify-center my-2 w-20 max-md:w-full"
          >
            <IoMdAddCircle className="text-white text-xl" />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AppTodo;

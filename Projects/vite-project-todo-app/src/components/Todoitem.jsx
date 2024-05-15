import { useContext } from "react";
import { ContextItems } from "../store/ContextItems";
import { BsArrowRightCircle } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

function Todoitem({ item, date }) {
  const { handleDelete } = useContext(ContextItems);
  return (
    <div className="grid grid-cols-3 bg-slate-200 shadow-md p-4 items-center max-sm:grid-cols-1 max-sm:justify-items-center rounded-lg">
      <div className="flex justify-stretch items-center max-sm:py-1">
        <BsArrowRightCircle className="mx-2" />
        {item}
      </div>
      <div className="flex justify-center">{date}</div>
      <div className="flex justify-center max-sm:py-1">
        <button
          type="button"
          className="bg-red-500 p-3 rounded-lg"
          onClick={() => handleDelete(item)}
        >
          <MdDelete className="text-white " />
        </button>
      </div>
    </div>
  );
}

export default Todoitem;

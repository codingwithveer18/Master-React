import { useContext } from "react";
import { ContextItems } from "../store/ContextItems";
import { BsArrowRightCircle } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

function Todoitem({ item, date }) {
  const { handleDelete } = useContext(ContextItems);
  return (
    <div className="container">
      <div className="row my-row">
        <div className="col-6 items-container">
          {" "}
          <BsArrowRightCircle />
          {"\t"}
          {item}
        </div>
        <div className="col-4 items-container">{date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger my-button"
            onClick={() => handleDelete(item)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem;

import { useContext } from "react";
import { ContextItems } from "../store/ContextItems";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdDelete } from "react-icons/md";

function Todoitem({ item, date }) {
  const { handleDelete } = useContext(ContextItems);
  return (
    <div className="bg-neutral-200/80 text-black shadow-md shadow-gray-400 p-4 items-center rounded-lg m-2 ">
      <div className="hidden sm:block">
        <table className="w-full">
          <thead>
            <tr className="border-b border-black">
              <th className="text-center pl-4 border-r border-black w-1/3">
                Item
              </th>
              <th className="text-center pl-4 border-r border-black w-1/3">
                Time
              </th>
              <th className="text-center pl-4 w-1/3">Done?</th>
            </tr>
          </thead>
          <tbody>
            <tr className="w-full">
              <td className="border-r border-black">
                <div className="text-lg flex justify-start items-center py-1 text-center truncate">
                  <IoIosArrowRoundForward className="mx-2" />
                  {item}
                </div>
              </td>
              <td className="border-r border-black">
                <div className="text-lg flex justify-center items-center py-1 text-center">
                  {date}
                </div>
              </td>
              <td>
                <div className="flex justify-center py-1 m-2">
                  <button
                    type="button"
                    className="bg-red-500 p-2 rounded-lg"
                    onClick={() => handleDelete(item)}
                  >
                    <MdDelete className="text-white" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="sm:hidden">
        <div className="grid grid-cols-1 gap-4 ">
          <div className="border-b border-black">
            <div className="text-lg flex justify-between items-center py-1 ">
              <p className="font-bold">Item:</p>
              <div className="flex items-center">
                <IoIosArrowRoundForward className="mx-2" /> {item}
              </div>
            </div>
          </div>
          <div className="border-b border-black">
            <div className="text-lg flex justify-between items-center py-1">
              <p className="font-bold">Time:</p>
              <div className="flex "> {date}</div>
            </div>
          </div>
          <div className="border-black">
            <div className="text-lg flex justify-between items-center py-1">
              <p className="font-bold">Done ?</p>
              <button
                type="button"
                className="bg-red-500 p-2 rounded-lg"
                onClick={() => handleDelete(item)}
              >
                <MdDelete className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todoitem;

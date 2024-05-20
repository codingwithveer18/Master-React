import { createContext, useReducer } from "react";

export const ContextItems = createContext({
  todoItems: [],
  handleNewitem: () => {},
  handleDelete: () => {},
});

// reducer -- pure function
const todoreducer = (currtodoItems, action) => {
  let newitemadded = currtodoItems;
  if (action.type === "NEW_ITEM") {
    newitemadded = [
      ...currtodoItems,
      { name: action.payload.itemName, duedate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newitemadded = currtodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newitemadded;
};
const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoreducer, []);
  const handleNewitem = (itemName, itemDueDate) => {
    console.log(`item added - Name: ${itemName} Date : ${itemDueDate}`);

    const newItemAdded = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAdded);
    // setTodoItems((currval) => {
    //   // used currval -> to have always updated value ( it might be possible that todoitems have older value)
    //   // Functional Updates
    //   const newitemadded = [
    //     ...currval,
    //     { name: itemName, duedate: itemDueDate },
    //   ];
    //   return newitemadded;
    // });
    // Or
    // setTodoItems((currval) => [
    //   ...currval,
    //   { name: itemName, duedate: itemDueDate },
    // ]);
  };
  const handleDelete = (deleted) => {
    const ItemDelted = {
      type: "DELETE_ITEM",
      payload: {
        itemName: deleted,
      },
    };
    dispatchTodoItems(ItemDelted);
    console.log(`item deleted: ${deleted}`);
    // const deletedItem = todoItems.filter((item) => item.name !== deleted);
    // console.log(`item deleted: ${deleted}`);
    // setTodoItems(deletedItem);
  };
  return (
    <ContextItems.Provider
      value={{
        todoItems,
        handleNewitem,
        handleDelete,
        dispatchTodoItems,
      }}
    >
      {children}
    </ContextItems.Provider>
  );
};
export default TodoItemsContextProvider;

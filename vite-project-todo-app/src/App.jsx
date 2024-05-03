import Appname from "./components/Appname";
import AppTodo from "./components/AppTodo";
import Todoitems from "./components/Todoitems";
import Welcome from "./components/Welcome";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import { ContextItems } from "./store/ContextItems";

function App() {
  const initialtodoItems = [
    {
      name: "Buy Milk",
      duedate: "04-11-2023",
    },
    {
      name: "Buy Coffee",
      duedate: "05-11-2023",
    },
    {
      name: "Buy Tea",
      duedate: "06-11-2023",
    },
  ];
  const [todoItems, setTodoItems] = useState(initialtodoItems);
  const handleNewitem = (itemName, itemDueDate) => {
    console.log(`item added - Name: ${itemName} Date : ${itemDueDate}`);

    setTodoItems((currval) => {
      // used currval -> to have always updated value ( it might be possible that todoitems have older value)
      // Functional Updates
      const newitemadded = [
        ...currval,
        { name: itemName, duedate: itemDueDate },
      ];
      return newitemadded;
    });
    // Or
    // setTodoItems((currval) => [
    //   ...currval,
    //   { name: itemName, duedate: itemDueDate },
    // ]);
  };
  const handleDelete = (deleted) => {
    const deletedItem = todoItems.filter((item) => item.name !== deleted);
    console.log(`item deleted: ${deleted}`);
    setTodoItems(deletedItem);
  };

  return (
    <>
      <ContextItems.Provider
        value={{
          todoItems: todoItems,
          handleNewitem: handleNewitem,
          handleDelete: handleDelete,
        }}
      >
        <center className="todo-container">
          <Appname />
          <AppTodo />
          <Welcome />
          <Todoitems />
        </center>
      </ContextItems.Provider>
    </>
  );
}

export default App;

import { createContext } from "react";

export const ContextItems = createContext({
  todoItems: [],
  handleNewitem: () => {},
  handleDelete: () => {},
});

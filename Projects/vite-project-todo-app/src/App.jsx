import Appname from "./components/Appname";
import AppTodo from "./components/AppTodo";
import Todoitems from "./components/Todoitems";
import Welcome from "./components/Welcome";
import TodoItemsContextProvider from "./store/ContextItems";

function App() {
  return (
    <>
      <TodoItemsContextProvider>
        <div className="w-screen h-screen bg-slate-100">
          <Appname />
          <AppTodo />
          <Welcome />
          <Todoitems />
        </div>
      </TodoItemsContextProvider>
    </>
  );
}

export default App;

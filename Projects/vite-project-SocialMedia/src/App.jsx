import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import CreatePost from "./components/CreatePost";
import Postlist from "./components/Postlist";
import PostListProvider from "./store/PostListStore";
function App() {
  const [active, setactive] = useState("Home");
  return (
    <>
      <PostListProvider>
        <div className="w-screen h-screen flex flex-col justify-between">
          <Header />
          <div className="flex">
            <Sidebar active={active} setactive={setactive} />
            <div className="w-full h-full">
              {active === "Home" ? <Postlist /> : <CreatePost />}
            </div>
          </div>
          <Footer />
        </div>
      </PostListProvider>
    </>
  );
}

export default App;

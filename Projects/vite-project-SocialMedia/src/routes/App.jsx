import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import PostListProvider from "../store/PostListStore";
import { Outlet } from "react-router-dom";
function App() {
  const [active, setactive] = useState("Home");
  return (
    <>
      <PostListProvider>
        <main className="w-full h-screen">
          <div className="flex w-full">
            <Sidebar active={active} setactive={setactive} />
            <div className="w-full min-h-screen flex flex-col justify-between">
              <Header />
              <Outlet />
              {/* <Footer /> */}
            </div>
          </div>
        </main>
      </PostListProvider>
    </>
  );
}

export default App;

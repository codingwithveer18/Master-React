import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div>
        <Header />
        <Sidebar />
        <Footer />
      </div>
    </>
  );
}

export default App;

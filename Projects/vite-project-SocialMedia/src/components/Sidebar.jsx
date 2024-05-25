import React, { useState } from "react";
import Logo from "./logo.png";

const Sidebar = ({ active, setactive }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const handleclick = (tabname) => {
    setactive(tabname);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`bg-neutral-700 text-black h-screen max-sm:absolute max-sm:z-10 max-sm:w-screen sm:w-2/5 lg:w-1/5  ${
          isOpen ? "block" : "hidden"
        } `}
      >
        <div className="flex flex-col p-3 h-screen py-auto">
          <div className="border-b-2 border-gray-100 text-white flex justify-around items-center py-4 max-sm:flex-col mt-6">
            <img src={Logo} alt="logo" className="w-14" />
            {/* <p className="text-md max-sm:text-sm ">SOCIAL MEDIA</p> */}
          </div>
          <ul className="flex flex-col mb-auto space-y-1 mt-8">
            <li
              onClick={() => {
                handleclick("Home");
              }}
            >
              <a
                href="#"
                className={`flex items-center p-2 rounded  ${
                  active === "Home" ? "bg-slate-100 text-black" : "text-white"
                }`}
              >
                Home
              </a>
            </li>
            <li
              onClick={() => {
                handleclick("Create Post");
              }}
            >
              <a
                href="#"
                className={`flex items-center p-2 rounded  ${
                  active === "Create Post"
                    ? "bg-slate-100 text-black"
                    : "text-white"
                }`}
              >
                Create Post
              </a>
            </li>
            <div className="sm:hidden">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 hover:bg-gray-200 rounded text-white hover:text-black"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 hover:bg-gray-200 rounded text-white hover:text-black"
                >
                  About
                </a>
              </li>
              <div className="border-t my-2 py-4">
                <div className="flex w-full justify-around">
                  <button
                    type="button"
                    className="border border-white text-white py-1 px-2 rounded mr-2 hover:bg-blue-500 hover:text-white hover:border-blue-500"
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    className="border border-white text-white py-1 px-2 rounded mr-2 hover:bg-blue-500 hover:text-white hover:border-blue-500 "
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <button
        className={`absolute text-white top-4 left-4 z-20 ${
          isOpen ? "text-white" : "max-sm:text-neutral-800"
        }`}
        onClick={toggleSidebar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </>
  );
};

export default Sidebar;

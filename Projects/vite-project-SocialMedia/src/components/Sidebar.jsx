import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`bg-gray-200 text-black w-64 flex-shrink-0 transition-all ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="p-4">
          <ul className="mt-4">
            <li className="py-2">Link 1</li>
            <li className="py-2">Link 2</li>
            <li className="py-2">Link 3</li>
            {/* Add more links as needed */}
          </ul>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 ">
        {/* Hamburger menu */}
        <div className="bg-gray-200 p-4  ">
          <button
            onClick={toggleSidebar}
            className="text-black focus:outline-none absolute left-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4">
          {/* Add your main content here */}
          <h1>Main Content</h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

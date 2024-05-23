function Header() {
  return (
    <header className="bg-neutral-800 flex max-md:flex-wrap justify-around py-2 border-b h-fit items-center max-sm:flex-col max-sm:hidden">
      <ul className=" flex flex-wrap justify-center max-md:text-sm">
        <li>
          <a href="#" className="px-4 text-white hover:text-gray-200">
            Features
          </a>
        </li>
        <li>
          <a href="#" className="px-4 text-white hover:text-gray-200">
            About
          </a>
        </li>
      </ul>

      <div className="">
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
    </header>
  );
}

export default Header;

let Container = ({ children }) => {
  return (
    <div className="w-full mx-8 flex flex-col p-2 rounded-lg bg-neutral-800 max-sm:mb-2 shadow-lg shadow-gray-400">
      {children}
    </div>
  );
};

export default Container;

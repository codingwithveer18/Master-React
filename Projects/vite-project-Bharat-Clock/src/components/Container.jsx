let Container = ({ children }) => {
  return (
    <div className="border-2 border-white w-1/2 flex flex-col p-2 rounded-lg bg-neutral-800">
      {children}
    </div>
  );
};

export default Container;

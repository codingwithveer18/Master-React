const Buttons = ({ onbtnclick }) => {
  const buttons = [
    "1",
    "2",
    "3",
    "*",
    "4",
    "5",
    "6",
    "+",
    "7",
    "8",
    "9",
    "-",
    "0",
    ".",
    "=",
    "/",
    "C",
  ];
  return (
    <div className="w-full flex flex-wrap justify-evenly gap-5 bg-neutral-700 max-sm:gap-3">
      {buttons.map((btn) => (
        <button
          className="text-2xl shadow-inner shadow-neutral-300 m-2 text-white p-4 hover:bg-slate-50 hover:text-black rounded-lg text-center max-sm:text-xl max-sm:p-3"
          onClick={() => onbtnclick(btn)}
          key={btn}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};
export default Buttons;
